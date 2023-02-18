import CardActionArea from "@mui/material/CardActionArea";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as SS from "components/styled";
import { Graduate } from "pages/graduates/graduates.interface";
import React, { memo } from "react";
import * as S from "./index.styled";

interface GraduateCardProps {
  graduate: Graduate;
}

const GraduateCard: React.FC<GraduateCardProps> = ({ graduate }) => {
  const theme = useTheme();
  const showNameChPlaceholder = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <S.StyledCard>
      <CardActionArea>
        <SS.Link to={`/graduates/${graduate.id}`} preventScrollReset>
          <S.StyledImageContainer>
            <S.StyledGraduateImage
              graduateName={graduate.name}
              imgProps={{
                loading: "lazy",
                sizes: "(max-width: 600px) 100vw, 300px",
              }}
            />
          </S.StyledImageContainer>
        </SS.Link>
      </CardActionArea>
      <SS.StyledCardContent>
        {!graduate.name_ch && showNameChPlaceholder ? (
          <S.PlaceholderTypography variant="h5">--</S.PlaceholderTypography>
        ) : (
          <Typography variant="h5">{graduate.name_ch}</Typography>
        )}
        <Typography variant="subtitle1" component="div">
          {graduate.name}
        </Typography>
      </SS.StyledCardContent>
    </S.StyledCard>
  );
};

/**
 * memo for performance cause
 * when all graduates are shown, goNextGraduate/goPrevGraduate is slow
 */
export default memo(GraduateCard);
