import Skeleton from "@mui/material/Skeleton";
import { ref as storageRef } from "firebase/storage";
import useFirebase from "providers/firebase/useFirebase";
import React from "react";
import { useDownloadURL } from "react-firebase-hooks/storage";

interface ImageHolderProps {
  className?: string;
  graduateName: string;
}

const ImageHolder: React.FC<ImageHolderProps> = ({
  className,
  graduateName,
}) => {
  const { storage } = useFirebase();
  const storageReference = storageRef(
    storage,
    `webp/graduates/${graduateName}.webp`
  );
  const [srcUrl, loading, error] = useDownloadURL(storageReference);
  if (error) {
    // TODO: better error UI
    return <>Error!</>;
  }
  if (loading || !srcUrl) {
    return <Skeleton className={className} variant="rectangular" />;
  }
  return (
    <img
      className={className}
      src={srcUrl}
      alt={`Freestyle Graduate Portrait of ${graduateName}`}
    />
  );
};

export default ImageHolder;
