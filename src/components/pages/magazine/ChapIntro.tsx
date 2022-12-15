import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import VerticalBanner from "../../common/VerticalBanner";
import MagazineNav from "../../common/MagazineNav";

const PREFIX = "Chap1Intro";

const classes = {
  container: `${PREFIX}-container`,
  main: `${PREFIX}-main`,
  sidebox: `${PREFIX}-sidebox`,
  title: `${PREFIX}-title`,
  poem: `${PREFIX}-poem`,
  paragraph: `${PREFIX}-paragraph`,
  circularProgress: `${PREFIX}-circularProgress`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.container}`]: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },

  [`& .${classes.main}`]: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      // minHeight: "calc(100vh - 64px)",
    },
  },

  [`& .${classes.sidebox}`]: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    flex: 1,
    padding: theme.spacing(2),
  },

  [`& .${classes.title}`]: {
    margin: "16px",
    // textAlign: "center"
  },

  [`& .${classes.poem}`]: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      // flexDirection: "row",
      flexWrap: "wrap",
      // alignItems: "center",
      textAlign: "left",
    },
  },

  [`& .${classes.paragraph}`]: {
    margin: theme.spacing(2),
  },

  [`& .${classes.circularProgress}`]: {
    margin: "auto",
  },
}));

function Chap1Intro() {
  const { chapId } = useParams();
  const [chapData, setChapData] = useState(null);

  useEffect(() => {
    const url = `https://us-central1-ourpromise.cloudfunctions.net/api/magazine/chapIntro/${chapId}`;
    axios
      .get(url)
      .then((res) => {
        setChapData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [chapId]);

  return (
    <Root className={classes.container}>
      <MagazineNav />
      {chapData ? (
        <Box className={classes.main}>
          <Box>
            <VerticalBanner banner={chapData.image || ""} />
          </Box>
          <Container>
            <Typography
              className={classes.title}
              variant="h2"
              color="inherit"
              align="center"
            >
              {chapData.title || ""}
            </Typography>
            <Box className={classes.poem}>
              {chapData.poem
                ? chapData.poem.map((paragraph, i) => (
                    <Box key={`paragraph-${i}`} className={classes.paragraph}>
                      {paragraph.map((sentence, j) => (
                        <Typography
                          key={`paragraph-${i}.${j}`}
                          variant="body1"
                          color="inherit"
                        >
                          {sentence || ""}
                        </Typography>
                      ))}
                    </Box>
                  ))
                : null}
            </Box>
          </Container>
        </Box>
      ) : (
        <CircularProgress className={classes.circularProgress} />
      )}
    </Root>
  );
}

export default Chap1Intro;
