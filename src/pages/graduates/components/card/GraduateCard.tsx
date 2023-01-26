import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as S from "components/styled";
import { GraduateData } from "pages/graduates/Graduates";
import React from "react";
import { useInView } from "react-intersection-observer";
import ImageHolder from "./ImageHolder";

interface GraduateCardProps {
  graduate: GraduateData;
}

const GraduateCard: React.FC<GraduateCardProps> = ({ graduate }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "50% 0px",
  });

  return (
    <Card
      ref={ref}
      sx={(theme) => ({
        margin: "4px",
        width: "43.2vw",
        [theme.breakpoints.up("md")]: {
          width: "282px",
        },
      })}
    >
      <CardActionArea>
        <S.Link to={`/graduates/${graduate.id}`}>
          <Box
            sx={(theme) => ({
              height: "28.8vw",
              [theme.breakpoints.up("md")]: {
                height: "188px",
              },
            })}
          >
            {inView && (
              <ImageHolder
                imgWidth="282"
                imgHeight="188"
                graduateName={graduate.name}
              />
            )}
          </Box>
        </S.Link>
      </CardActionArea>
      <CardContent
        sx={(theme) => ({
          padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
          paddingBottom: `${theme.spacing(1)} !important`,
        })}
      >
        <Typography variant="subtitle1">{graduate.name_ch}</Typography>
        <Typography variant="subtitle1" component="div">
          {graduate.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GraduateCard;
