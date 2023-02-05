import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import * as SS from "components/styled";
import { Graduate } from "pages/graduates/graduates.interface";
import React from "react";
import * as S from "./index.styled";

interface GraduateCardProps {
  graduate: Graduate;
}

const GraduateCard: React.FC<GraduateCardProps> = ({ graduate }) => {
  return (
    <S.StyledCard>
      <CardActionArea>
        <SS.Link to={`/graduates/${graduate.id}`} preventScrollReset>
          <S.StyledImageContainer>
            <S.StyledGraduateImage
              graduateName={graduate.name}
              imgProps={{
                loading: "lazy",
                sizes: "(max-width 600px) 100vw, 300px",
              }}
            />
          </S.StyledImageContainer>
        </SS.Link>
      </CardActionArea>
      <S.StyledCardContent>
        <Typography variant="subtitle1">{graduate.name_ch}</Typography>
        <Typography variant="subtitle1" component="div">
          {graduate.name}
        </Typography>
      </S.StyledCardContent>
    </S.StyledCard>
  );
};

export default GraduateCard;
