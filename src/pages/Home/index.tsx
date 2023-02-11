import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import FeaturedContent from "./FeaturedContent";
import * as S from "./index.styled";

const PREFIX = "Home";

const classes = {
  container: `${PREFIX}-container`,
  section: `${PREFIX}-section`,
  button: `${PREFIX}-button`,
  paragraph: `${PREFIX}-paragraph`,
  card: `${PREFIX}-card`,
  cardMedia: `${PREFIX}-cardMedia`,
  cardContent: `${PREFIX}-cardContent`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(({ theme }) => ({
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
}));

function Home() {
  return (
    <Root>
      <S.HeroContainer>
        <S.HeroImg
          fileName="home"
          imgProps={{
            alt: "A group photo of KMPk 16/17 students",
          }}
        />
      </S.HeroContainer>
      <Container>
        <Box className={classes.section}>
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
        <FeaturedContent />
      </Container>
    </Root>
  );
}

export default Home;
