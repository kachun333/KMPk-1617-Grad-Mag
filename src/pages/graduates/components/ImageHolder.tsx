import Skeleton from "@mui/material/Skeleton";
import GraduatesPortrait from "pages/graduates/portraits/graduates-portrait.constants";
import React, { useEffect, useState, useTransition } from "react";

interface ImageHolderProps {
  className?: string;
  graduateName: string;
}

const ImageHolder: React.FC<ImageHolderProps> = ({
  className,
  graduateName,
}) => {
  const [isPending, startTransition] = useTransition();
  const [image, setImage] = useState<string>();

  useEffect(() => {
    async function getGraduateImage() {
      const foundImage = await GraduatesPortrait[graduateName];
      startTransition(() => setImage(foundImage.default));
    }

    getGraduateImage();
  }, [graduateName]);

  if (isPending || !image) {
    return <Skeleton className={className} variant="rectangular" />;
  }
  return (
    <img
      className={className}
      src={image}
      alt={`Freestyle Graduate Portrait of ${graduateName}`}
    />
  );
};

export default ImageHolder;
