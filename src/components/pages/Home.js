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
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from 'react-i18next';
import Banner from '../../assets/images/home.jpg';
import About from '../../assets/images/about.jpg';
import Background from '../../assets/images/about.jpg';
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
    position: "relative",
  },
  cardMedia: {
    height: "240px"
  },
  cardContent: {
    position: "absolute",
    bottom: 0,
    margin: "0 32px",
    marginBottom: "8px",
    color: "white",
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingBottom: "100px",
    backgroundImage: 'linear-gradient(to bottom, transparent, #AFAFAFAF)',
  },
}));
const cards = [{
  image: "#",
  title: "Graduates",
  link: "/graduates",
  caption: "Are you guys still in contact?",
},{
  image: "../../assets/images/committee.jpg",
  title: "Be A Committee",
  link: "/committee",
  caption: "Learn more about 'Our Promise' & register now to get involve in the event preparation",
},{
  image: "#",
  title: "About",
  link: "/about",
  caption: "Learn more about the story & motivation behind 'Our Promise'",
},
  ];

function Home() {
  // const [t, i18n] = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <FullpageBanner caption="" background={Banner} />

      <Container className={classes.section}>
        <Grid container spacing={4}>
          {cards.map((card, i) => (
            <Grid item key={i} xs={12} md={6}>
              <Card>
                <CardActionArea className={classes.card}>
                <Link to={card.link}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={About}
                    title={card.title}
                  />
                  <div className={classes.overlay}></div>
                  <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {card.title}
                    </Typography>
                  </div>
                </Link>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
