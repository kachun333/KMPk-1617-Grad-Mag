import React, { Fragment } from "react";
import {
  Box,
  withStyles,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Container,
  Hidden
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from 'react-i18next';
import Background from '../../assets/images/home.jpg';
import FullpageBanner from '../common/FullpageBanner';
// import axios from 'axios';
// import { withTranslation } from "react-i18next";
// import "../../i18n";

// component level styling
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  fitViewPort: {
    height: "100vh",
    width: "100vw",
    maxWidth: "100vw"
  },
  section: {
    marginTop: "32px",
    marginBottom: "32px",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20
  },
  fitPercentages: {
    width: "100%",
    height: "100%",
    maxWidth: "100vw"
  },
  button: {
    background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%);",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(107, 255, 228, 0.3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  },
  float: {
    position: "relative",
    zIndex: 1,
    height: "100vh",
    width: "100vw",
    maxWidth: "100vw"
  },
  img: {
    width: "100vw"
  },
  card: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));
const cards = [1,2,3,4];

function Home() {
  // const [t, i18n] = useTranslation();
  const classes = useStyles();
  return (
    <Fragment className={classes.container}>
      <FullpageBanner caption="hello world" background={Background} />
      
      <Container className={classes.section}>
      <Grid container spacing={4}>
        {cards.map((card, i) => (
          <Grid item key={i} xs={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="#"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Lizard
                    </Typography>
                  <Typography variant="body2">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                    </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Fragment>
  );
}

export default Home;
