import CloudResponsiveImg from "components/common/CloudResponsiveImg";
import React from "react";

interface BannerImageProps {
  fileName: string;
  className?: string;
  imgProps?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}

const BannerImage: React.FC<BannerImageProps> = ({
  fileName,
  className,
  imgProps,
}) => {
  return (
    <CloudResponsiveImg
      folderPath="webp/banners"
      fileName={fileName}
      className={className}
      imgProps={imgProps}
    />
  );
};

export default BannerImage;
