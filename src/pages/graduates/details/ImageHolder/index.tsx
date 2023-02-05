import ArrowBack from "@mui/icons-material/ArrowBack";
import { ContainedIconButton, Link } from "components/styled";
import { Graduate } from "pages/graduates/graduates.interface";
import React from "react";
import * as S from "./index.styled";

interface ImageHolderProps {
  graduate: Graduate;
}

const ImageHolder: React.FC<ImageHolderProps> = ({ graduate }) => {
  return (
    <>
      <S.ImageToolbar>
        <Link to="/graduates" preventScrollReset>
          <ContainedIconButton edge="start" aria-label="close" size="small">
            <ArrowBack />
          </ContainedIconButton>
        </Link>
      </S.ImageToolbar>
      <S.StyledGraduateImage
        graduateName={graduate.name}
        imgProps={{
          sizes: "(min-width 600px) calc(100vw - 360px), 100vw",
        }}
      />
    </>
  );
};

export default ImageHolder;
