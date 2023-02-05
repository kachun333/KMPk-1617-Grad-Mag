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
  return (
    <img
      className={className}
      src={`https://storage.googleapis.com/ourpromise.appspot.com/webp/graduates/300x200/${uriEncodedGraduateName}.webp`}
      srcSet={`
        https://storage.googleapis.com/ourpromise.appspot.com/webp/graduates/300x200/${uriEncodedGraduateName}.webp 300w,
        https://storage.googleapis.com/ourpromise.appspot.com/webp/graduates/600x400/${uriEncodedGraduateName}.webp 600w,
        https://storage.googleapis.com/ourpromise.appspot.com/webp/graduates/900x600/${uriEncodedGraduateName}.webp 900w,
        https://storage.googleapis.com/ourpromise.appspot.com/webp/graduates/1200x800/${uriEncodedGraduateName}.webp 1200w,
        https://storage.googleapis.com/ourpromise.appspot.com/webp/graduates/2400x1600/${uriEncodedGraduateName}.webp 2400w
      `}
      alt={graduateName}
      {...imgProps}
    />
  );
};

export default GraduateImage;