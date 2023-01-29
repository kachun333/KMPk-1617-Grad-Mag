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

interface ImageRendererProps {
  className?: string;
  /**
   * height of <img />, helps improve render performance
   */
  imgHeight?: string | number;
  /**
   * width of <img />, helps improve render performance
   */
  imgWidth?: string | number;
  /**
   * will not fetch image yet if true
   */
  graduateName: string;
}

const ImageRenderer: React.FC<ImageRendererProps> = ({
  className,
  imgHeight,
  imgWidth,
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
      <div>
        <ErrorText>Failed to load image!</ErrorText>
        <ErrorText>Please contact administrator for more information</ErrorText>
      </div>
    );
  }
  return (
    <img
      className={className}
      width={imgWidth}
      height={imgHeight}
      loading="lazy"
      src={srcUrl}
      alt={`Freestyle Graduate Portrait of ${graduateName}`}
    />
  );
};

export default ImageRenderer;
