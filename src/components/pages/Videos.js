import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/styles/makeStyles";
import YouTube from 'react-youtube';

const useStyles = makeStyles(theme => ({
  gridItem: {
    textAlign: 'center'
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  row: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  typography: {
    margin: theme.spacing(2),
  },
}));

const videosData = [{
  title: "Trails Of Culture",
  iframes: [{
    id: "s2T9ilEFrWo",
    xs: "12",
    md: "4",
  }, {
    id: "8N1C7eIF6Hc",
    xs: "12",
    md: "4",
  }, {
    id: "SQ3eFSClVzg",
    xs: "12",
    md: "4",
  }]
}, {
  title: "春晓",
  iframes: [{
    id: "85sP940mbYQ",
    xs: "12",
    md: "4",
  }, {
    id: "tysr8x5aFGI",
    xs: "12",
    md: "4",
  }]
}, {
  title: "JPP",
  iframes: [{
    id: "SamrBf6bS4Y",
    xs: "12",
    md: "4",
  }]
}, {
  title: "毕业刊",
  iframes: [{
    id: "hKVBjBExhrU",
    xs: "12",
    md: "4",
  }, {
    id: "6xp3VrT80Aw",
    xs: "12",
    md: "4",
  }]
}]

function Videos() {
  const classes = useStyles();
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts = {
    height: '195',
    width: '320',
  };

  return (
    <Container className={classes.container}>
      {
        videosData.map((video) =>
          <div className={classes.row}>
            <Typography variant="h4" className={classes.typography}>
              {video.title}
            </Typography>
            <Grid container className={classes.root} spacing={2}>
              {
                video.iframes.map((iframe) =>
                  <Grid className={classes.gridItem} item xs={iframe.xs} md={iframe.md}>
                    <YouTube
                      videoId={iframe.id}
                      opts={opts}
                      onReady={_onReady}
                    />
                  </Grid>
                )
              }
            </Grid>
          </div>
        )
      }
    </Container>
    // <div className={classes.container}>
    // </div>
  );
}

export default Videos;