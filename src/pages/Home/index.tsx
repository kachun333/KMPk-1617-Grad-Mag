import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import FeaturedContent from "./FeaturedContent";
import * as S from "./index.styled";

function Home() {
  return (
    <>
      <S.HeroContainer>
        <S.HeroImg
          fileName="home"
          imgProps={{
            alt: "A group photo of KMPk 16/17 students",
          }}
        />
      </S.HeroContainer>
      <Container>
        <S.AboutBox>
          <Typography variant="h3" gutterBottom>
            About
          </Typography>
          <Typography variant="body1" gutterBottom>
            This web app serves as a platform to unite KMPk 16/17 graduates. The
            admin is currently migrating the physical graduation magazine to
            this web app.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Stay tuned for more interesting content and features!
          </Typography>
        </S.AboutBox>
        <FeaturedContent />
      </Container>
    </>
  );
}

export default Home;
