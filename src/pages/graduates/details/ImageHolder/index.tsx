import ArrowBack from "@mui/icons-material/ArrowBack";
import { Link } from "components/styled";
import ShareButton from "pages/graduates/details/ImageHolder/Share";
import { Graduate } from "pages/graduates/graduates.interface";
import React from "react";
import useScrollDown from "./hooks/useScrollDown";
import * as S from "./index.styled";
import { toGraduateTitle, toSharableGraduateUrl } from "./Share/index.utils";

interface ImageHolderProps {
  graduate: Graduate;
}

const ImageHolder: React.FC<ImageHolderProps> = ({ graduate }) => {
  const ref = useScrollDown<HTMLImageElement>();

  return (
    <>
      <S.ImageToolbar>
        <Link to="/graduates" preventScrollReset>
          <S.ImageToolbarIconButton
            edge="start"
            aria-label="close"
            size="large"
          >
            <ArrowBack />
          </S.ImageToolbarIconButton>
        </Link>
        <S.ImageToolbarTitle />
        <ShareButton
          graduateUrl={toSharableGraduateUrl(graduate.id)}
          graduateText={toGraduateTitle(graduate)}
        />
      </S.ImageToolbar>
      <S.StyledGraduateImage
        graduateName={graduate.name}
        imgProps={{
          ref,
          sizes: "(min-width: 600px) calc(100vw - 360px), 100vw",
        }}
      />
    </>
  );
};

export default ImageHolder;
