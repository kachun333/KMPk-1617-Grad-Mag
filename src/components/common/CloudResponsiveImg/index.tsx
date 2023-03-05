import React from "react";

interface CloudResponsiveImgProps {
  folderPath: string;
  fileName: string;
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

const STORAGE_HOST = "https://storage.googleapis.com/ourpromise.appspot.com";

const CloudResponsiveImg: React.FC<CloudResponsiveImgProps> = ({
  folderPath,
  fileName,
  className,
  imgProps,
  pictureProps,
}) => {
  const uriEncodedFileName = encodeURI(fileName);
  const jpgPath = `${STORAGE_HOST}/jpg/${folderPath}`;
  const webpPath = `${STORAGE_HOST}/webp/${folderPath}`;
  return (
    <picture {...pictureProps}>
      <source
        type="image/webp"
        sizes={imgProps?.sizes}
        srcSet={`
        ${webpPath}/300x200/${uriEncodedFileName}.webp 300w,
        ${webpPath}/600x400/${uriEncodedFileName}.webp 600w,
        ${webpPath}/900x600/${uriEncodedFileName}.webp 900w,
        ${webpPath}/1200x800/${uriEncodedFileName}.webp 1200w,
        ${webpPath}/2400x1600/${uriEncodedFileName}.webp 2400w
      `}
      />
      <source
        type="image/jpeg"
        sizes={imgProps?.sizes}
        srcSet={`
        ${jpgPath}/600x400/${uriEncodedFileName}.webp 600w,
        ${jpgPath}/1200x800/${uriEncodedFileName}.webp 1200w,
        ${jpgPath}/2400x1600/${uriEncodedFileName}.webp 2400w
      `}
      />
      <img
        className={className}
        src={`${jpgPath}/600x400/${uriEncodedFileName}.jpg`}
        alt={fileName}
        {...imgProps}
      />
    </picture>
  );
};

export default CloudResponsiveImg;
