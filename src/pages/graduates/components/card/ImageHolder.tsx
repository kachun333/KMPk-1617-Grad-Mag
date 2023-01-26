import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import { ref as storageRef } from "firebase/storage";
import useFirebase from "providers/firebase/useFirebase";
import React from "react";
import { useDownloadURL } from "react-firebase-hooks/storage";

const ErrorText = styled("div")(() => ({
  textAlign: "center",
  marginTop: 20,
}));

interface ImageHolderProps {
  hide?: boolean;
  className?: string;
  graduateName: string;
}

const ImageHolder: React.FC<ImageHolderProps> = ({
  hide,
  className,
  graduateName,
}) => {
  const { storage } = useFirebase();
  const storageReference = storageRef(
    storage,
    `webp/graduates/${graduateName}.webp`
  );
  const [srcUrl, loading, error] = useDownloadURL(storageReference);
  if (loading) {
    return <Skeleton height="100%" variant="rectangular" />;
  }
  if (error || !srcUrl) {
    return (
      <div className={className}>
        <ErrorText>Failed to load image!</ErrorText>
        <ErrorText>Please contact administrator for more information</ErrorText>
      </div>
    );
  }
  return (
    !hide && (
      <img
        height="100%"
        width="100%"
        loading="lazy"
        src={srcUrl}
        alt={`Freestyle Graduate Portrait of ${graduateName}`}
      />
    )
  );
};

export default ImageHolder;
