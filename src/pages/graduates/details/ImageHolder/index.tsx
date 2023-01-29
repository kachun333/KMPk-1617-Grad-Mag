import ArrowBack from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { Graduate } from "pages/graduates/graduates.interface";
import React from "react";
import { Link } from "react-router-dom";
import * as S from "./index.styled";

interface ImageHolderProps {
  graduate: Graduate;
}

const ImageHolder: React.FC<ImageHolderProps> = ({ graduate }) => {
  return (
    <>
      <S.ImageToolbar>
        <IconButton edge="start" aria-label="close" size="large">
          <Link to="/graduates">
            <ArrowBack />
          </Link>
        </IconButton>
      </S.ImageToolbar>
      <S.ImageHolder graduateName={graduate.name} />
    </>
  );
};

export default ImageHolder;
