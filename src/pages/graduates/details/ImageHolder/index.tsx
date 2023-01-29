import ArrowBack from "@mui/icons-material/ArrowBack";
import { IconButton, Toolbar } from "@mui/material";
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
      <Toolbar>
        <IconButton edge="start" aria-label="close" size="large">
          <Link to="/graduates">
            <ArrowBack />
          </Link>
        </IconButton>
      </Toolbar>
      <S.ImageHolder graduateName={graduate.name} />
    </>
  );
};

export default ImageHolder;
