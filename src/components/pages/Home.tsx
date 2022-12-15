import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Banner from "../common/Banner";

const PREFIX = "Home";

const classes = {
  container: `${PREFIX}-container`,
  section: `${PREFIX}-section`,
  button: `${PREFIX}-button`,
  paragraph: `${PREFIX}-paragraph`,
  card: `${PREFIX}-card`,
  cardMedia: `${PREFIX}-cardMedia`,
  cardContent: `${PREFIX}-cardContent`,
  overlay: `${PREFIX}-overlay`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(({ theme }) => ({
  [`& .${classes.container}`]: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },

  [`& .${classes.section}`]: {
    margin: `${theme.spacing(2)} 0px`,
  },

  [`& .${classes.button}`]: {
    width: "fit-content",
    margin: "auto",
  },

  [`& .${classes.paragraph}`]: {
    margin: theme.spacing(2),
  },

  [`& .${classes.card}`]: {
    position: "relative",
  },

  [`& .${classes.cardMedia}`]: {
    height: "280px",
  },

  [`& .${classes.cardContent}`]: {
    position: "absolute",
    bottom: 0,
    margin: "0 32px",
    marginBottom: "8px",
  },

  [`& .${classes.overlay}`]: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    paddingBottom: "100px",
    backgroundImage: `linear-gradient(to bottom, transparent, ${theme.palette.background.paper})`,
    opacity: 0.5,
  },
}));

const cards = [
  {
    title: "Graduates",
    link: "graduates",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ourpromise.appspot.com/o/banners%2Fgraduates.jpg?alt=media&token=602999e3-4041-4479-b74e-227752611dcf",
  },
  {
    title: "Lecturers",
    link: "lecturers",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ourpromise.appspot.com/o/banners%2Flecturers.jpg?alt=media&token=f9d5dcf6-97b8-4500-8b5d-b155ecc813cf",
  },
  {
    title: "KMPk TV",
    link: "videos",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ourpromise.appspot.com/o/banners%2Fvideos.jpg?alt=media&token=76c9abd3-2abf-45cd-80f1-d2e38032ef1a",
  },
  {
    title: "Magazine",
    link: "magazine",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ourpromise.appspot.com/o/banners%2Fmagazine.jpg?alt=media&token=77442387-c041-4c7b-ab1c-ab0a071cb72d",
  },
];
const features = [
  "Lecturers: view and search lecturers",
  "KMPk TV: watch videos about us",
  "Magazine: migrating physical magazine",
];
function Home() {
  const displayName = useSelector(
    (state) => state.firebase.profile.displayName
  );

  return (
    <Root>
      <Banner banner="home" />
      <Container className={classes.container}>
        {displayName ? (
          <Box id="greet" className={classes.section}>
            <Typography variant="h3" className={classes.paragraph}>
              {displayName || "Hey guys"}, 别来无恙？
            </Typography>
          </Box>
        ) : null}
        <Box id="about" className={classes.section}>
          <Typography variant="h3" className={classes.paragraph}>
            About
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            This website serves as a platform to unite KMPk 16/17 graduates. The
            admin is currently migrating the physical graduation magazine to
            this website.
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            Stay tune for more interesting content and interactive features!
          </Typography>
        </Box>
        <Box id="new" className={classes.section}>
          <Typography variant="h3" className={classes.paragraph}>
            What's new!
          </Typography>
          <Typography variant="subtitle1" className={classes.paragraph}>
            Version 2.0
          </Typography>
          <ul>
            {features.map((feature, i) => (
              <li key={i}>
                <Typography variant="subtitle1">{feature}</Typography>
              </li>
            ))}
          </ul>
        </Box>
        <Box id="content-cards" className={classes.section}>
          <Grid container spacing={4}>
            {cards.map((card, i) => (
              <Grid item key={i} xs={12} md={6}>
                <Typography variant="subtitle1">{card.title}</Typography>
                <Card>
                  <CardActionArea className={classes.card}>
                    <Link to={card.link}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.image}
                        title={card.title}
                      />
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Root>
  );
}

export default Home;
