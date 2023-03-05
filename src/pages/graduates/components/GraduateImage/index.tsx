import CloudResponsiveImg from "components/common/CloudResponsiveImg";
import React from "react";

interface GraduateImageProps {
  graduateName: string;
  className?: string;
  imgProps?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  pictureProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
}

const GraduateImage: React.FC<GraduateImageProps> = ({
  graduateName,
  className,
  imgProps,
  pictureProps,
}) => {
  return (
    <CloudResponsiveImg
      folderPath="graduates"
      fileName={graduateName}
      className={className}
      imgProps={imgProps}
      pictureProps={pictureProps}
    />
  );
};

export default GraduateImage;
