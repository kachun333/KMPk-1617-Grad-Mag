import CloudResponsiveImg from "components/common/CloudResponsiveImg";
import React from "react";

interface GraduateImageProps {
  graduateName: string;
  className?: string;
  imgProps?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}

const GraduateImage: React.FC<GraduateImageProps> = ({
  graduateName,
  className,
  imgProps,
}) => {
  return (
    <CloudResponsiveImg
      folderPath="webp/graduates"
      fileName={graduateName}
      className={className}
      imgProps={imgProps}
    />
  );
};

export default GraduateImage;
