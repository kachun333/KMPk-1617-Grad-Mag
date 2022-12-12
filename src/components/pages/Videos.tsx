import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import YouTube, { YouTubeEvent } from "react-youtube";

const PREFIX = "Videos";

const classes = {
  gridItem: `${PREFIX}-gridItem`,
  container: `${PREFIX}-container`,
  row: `${PREFIX}-row`,
  typography: `${PREFIX}-typography`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.gridItem}`]: {
    textAlign: "center",
  },

  [`& .${classes.container}`]: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },

  [`&.${classes.row}`]: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

  [`& .${classes.typography}`]: {
    margin: theme.spacing(2),
  },
}));

const videosData = [
  {
    title: "Trails Of Culture",
    iframes: [
      {
        id: "s2T9ilEFrWo",
      },
      {
        id: "8N1C7eIF6Hc",
      },
      {
        id: "SQ3eFSClVzg",
      },
    ],
  },
  {
    title: "春晓",
    iframes: [
      {
        id: "85sP940mbYQ",
      },
      {
        id: "tysr8x5aFGI",
      },
    ],
  },
  {
    title: "春晓 活动日",
    iframes: [
      {
        id: "Aa3MRyYy5b8",
      },
      {
        id: "y0KLTwdnNTY",
      },
    ],
  },
  {
    title: "JPP",
    iframes: [
      {
        id: "SamrBf6bS4Y",
      },
    ],
  },
  {
    title: "毕业刊",
    iframes: [
      {
        id: "hKVBjBExhrU",
      },
      {
        id: "6xp3VrT80Aw",
      },
    ],
  },
];

function Videos() {
  const onReady = (event: YouTubeEvent<any>) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "195",
    width: "320",
  };

  return (
    <Container className={classes.container}>
      {videosData.map((video) => (
        <Root key={video.title} className={classes.row}>
          <Typography variant="h4" className={classes.typography}>
            {video.title}
          </Typography>
          <Grid container spacing={2}>
            {video.iframes.map((iframe) => (
              <Grid
                key={iframe.id}
                className={classes.gridItem}
                item
                xs={iframe.xs || 12}
                md={iframe.md || 4}
              >
                <YouTube videoId={iframe.id} opts={opts} onReady={onReady} />
              </Grid>
            ))}
          </Grid>
        </Root>
      ))}
    </Container>
  );
}

export default Videos;
