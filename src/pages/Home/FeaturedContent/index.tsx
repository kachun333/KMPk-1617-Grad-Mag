import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FEAT_CARDS } from "./index.constants";
import * as S from "./index.styled";

const FeaturedContent = () => {
  return (
    <Grid container spacing={4}>
      {FEAT_CARDS.map((card) => (
        <Grid item key={card.title} xs={12} sm={6}>
          <Card>
            <CardActionArea>
              <Link to={card.link}>
                <S.StyledCardImage
                  fileName={card.imgFileName}
                  imgProps={{
                    sizes:
                      " (min-width: 1536px) 768px, (min-width: 1200px) 600px, (min-width: 900px) 450px, (min-width: 600px) 300px, 100vw",
                  }}
                />
              </Link>
            </CardActionArea>
            <CardContent>
              <Typography variant="h6">{card.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedContent;
