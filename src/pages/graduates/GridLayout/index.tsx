import GraduateCard from "pages/graduates/GraduateCard";
import { Graduate } from "pages/graduates/graduates.interface";
import React from "react";
import * as S from "./index.styled";

interface GridLayoutProps {
  graduates: Graduate[];
}

const GridLayout: React.FC<GridLayoutProps> = ({ graduates }) => {
  return (
    <S.GridContainer>
      {graduates.map((graduate) => (
        <GraduateCard key={graduate.id} graduate={graduate} />
      ))}
    </S.GridContainer>
  );
};

export default GridLayout;
