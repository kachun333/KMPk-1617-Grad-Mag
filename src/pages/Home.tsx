import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Banner from "components/common/Banner";
import React from "react";
import { Link } from "react-router-dom";

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
    title: "KMPk TV",
    link: "videos",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ourpromise.appspot.com/o/banners%2Fvideos.jpg?alt=media&token=76c9abd3-2abf-45cd-80f1-d2e38032ef1a",
  },
];

function Home() {
  return (
    <Root>
      <Banner banner="home" />
      <Container className={classes.container}>
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
        <Box id="content-cards" className={classes.section}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.title} xs={12} md={6}>
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
