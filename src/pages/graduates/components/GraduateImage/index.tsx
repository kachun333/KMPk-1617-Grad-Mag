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
  const uriEncodedGraduateName = encodeURI(graduateName);
  const hostName =
    "https://storage.googleapis.com/ourpromise.appspot.com/webp/graduates";
  return (
    <img
      className={className}
      src={`${hostName}/300x200/${uriEncodedGraduateName}.webp`}
      srcSet={`
        ${hostName}/300x200/${uriEncodedGraduateName}.webp 300w,
        ${hostName}/600x400/${uriEncodedGraduateName}.webp 600w,
        ${hostName}/900x600/${uriEncodedGraduateName}.webp 900w,
        ${hostName}/1200x800/${uriEncodedGraduateName}.webp 1200w,
        ${hostName}/2400x1600/${uriEncodedGraduateName}.webp 2400w
      `}
      alt={graduateName}
      {...imgProps}
    />
  );
};

export default GraduateImage;
