import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import { videosData } from "./videos.constants";
import WrappedVideo from "./WrappedVideo";

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

function Videos() {
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
                <WrappedVideo videoId={iframe.id} />
              </Grid>
            ))}
          </Grid>
        </Root>
      ))}
    </Container>
  );
}

export default Videos;
