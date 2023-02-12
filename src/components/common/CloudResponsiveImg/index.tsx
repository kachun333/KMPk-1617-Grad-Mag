import React from "react";

interface CloudResponsiveImgProps {
  folderPath: string;
  fileName: string;
  className?: string;
  imgProps?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}

const STORAGE_HOST = "https://storage.googleapis.com/ourpromise.appspot.com";

const CloudResponsiveImg: React.FC<CloudResponsiveImgProps> = ({
  folderPath,
  fileName,
  className,
  imgProps,
}) => {
  const uriEncodedFileName = encodeURI(fileName);
  const path = `${STORAGE_HOST}/${folderPath}`;
  return (
    <img
      className={className}
      src={`${path}/300x200/${uriEncodedFileName}.webp`}
      srcSet={`
        ${path}/300x200/${uriEncodedFileName}.webp 300w,
        ${path}/600x400/${uriEncodedFileName}.webp 600w,
        ${path}/900x600/${uriEncodedFileName}.webp 900w,
        ${path}/1200x800/${uriEncodedFileName}.webp 1200w,
        ${path}/2400x1600/${uriEncodedFileName}.webp 2400w
      `}
      alt={fileName}
      {...imgProps}
    />
  );
};

export default CloudResponsiveImg;
