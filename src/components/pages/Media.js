import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { withStyles, Container, Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Box, Chip } from '@material-ui/core';
import ch from '../../assets/i18n/translations/ch.json';
import en from '../../assets/i18n/translations/en.json';
import i18next from 'i18next';
import { withTranslation } from "react-i18next";
import axios from 'axios';
const styles = (theme) => ({
  section: {
    display: "block",
    marginBottom: "50px",
    maxWidth: "100vw"
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    Height: "100vh"
  },
  chips: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: 20,
  },
  chip: {
    margin: 4,
  },
  fitPercentages: {
    width: "100%",
    maxHeight: "100vh",
    maxWidth: "100vw",
    marginBottom: "20px"
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  cardImageBox: {
    position: 'relative',
  },
  cardMedia: {
    height: '100%',
    minHeight: '200px',
    minWidth: '200px',
  },
  cardContent: {
    flex: 1,
    height: '280px',
    // overwrite for mobile
    [theme.breakpoints.down('sm')]: {
      maxHeight: '360px'
    },
  },
  cardOverflow: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
  },
  blurBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: '30px 0',
    backgroundImage: 'linear-gradient(to bottom, transparent, #424242)',
  },
});
export class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaList: [],
      chips: "showAll",

    };
    this.handleClick = this.handleClick.bind(this);
  }
  fetchMedia(type) {
    axios.get(
      `${process.env.REACT_APP_base_url}/media/media?type=${type}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.ipm.v1+json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9lM2FwaWRldi5jb25uZXNpcy5jb21cL2FwaVwvYXV0aFwvdG9rZW4iLCJpYXQiOjE1NzIzNjMwMjMsImV4cCI6MTU3MjM2NjYyMywibmJmIjoxNTcyMzYzMDIzLCJqdGkiOiJqbGI1RkFGSFl1aTVVeGh3Iiwic3ViIjoxfQ.e0uPf1LWS_xkBKNaiTmyQHYDFTfvkXlEyZKoCVEt6og'
        }
      }
    )
      .then(res => {
        const publishedMediaList = res.data.data.filter(media => media.status === 'published');
        //i18n
        publishedMediaList.forEach((media) => {
          ch[`mediapage.media[${media.id}].title`] = media.title_cn;
          ch[`mediapage.media[${media.id}].content`] = media.content_cn;
          en[`mediapage.media[${media.id}].title`] = media.title;
          en[`mediapage.media[${media.id}].content`] = media.content;
        });
        i18next.reloadResources();
        this.setState({ mediaList: publishedMediaList });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleClick = value => event => {
    this.fetchMedia(value === 'showAll' ? '' : value);
    this.setState({ chips: value })
  };
  componentDidMount() {
    this.fetchMedia('');
  }
  render() {
    const [ t, classes ] = this.props;
    return (
      <Fragment>
        <Container className={classes.section}>
          <Box className={classes.center} mb={3} pt={"15vh"}>
            <Typography variant="h4" align="center">
              {t("mediapage.title")}
            </Typography>
            <img
              src={require("../../resources/Images/titleBorder.svg")}
              alt=""
            />
          </Box>
          <Box className={classes.chips}>
            <Chip
              label="Show All"
              className={classes.chip}
              color={(this.state.chips === 'showAll') ? "primary" : "default"}
              onClick={this.handleClick('showAll')}
            />
            <Chip
              label="Article"
              className={classes.chip}
              color={(this.state.chips === 'article') ? "primary" : "default"}
              onClick={this.handleClick('article')}
            />
            <Chip
              label="Annoucement"
              className={classes.chip}
              color={(this.state.chips === 'announcement') ? "primary" : "default"}
              onClick={this.handleClick('announcement')}
            />
            <Chip
              label="New"
              className={classes.chip}
              color={(this.state.chips === 'new') ? "primary" : "default"}
              onClick={this.handleClick('new')}
            />
          </Box>
          {(!this.state.mediaList.length) ?
              <Box className={classes.center} mb={3} pt={"15vh"}>
              <Typography component="h5" variant="h5">
                {t(`mediapage.noContentAvailable`)}
              </Typography>
              </Box>
              : ''
            }
          <Grid container spacing={4}>
            {this.state.mediaList.map(media => (
              <Grid item key={media.title} xs={12} md={6}>
                <CardActionArea component="div">
                  <Link to={`/media/${media.id}`} style={{ textDecoration: 'none' }}>
                    <Card className={classes.card}>
                      <Box className={classes.cardImageBox}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={media.featured_image_path}
                          title="media image"
                        />
                      </Box>
                      <CardContent className={classes.cardContent}>
                        <div className={classes.cardOverflow}>
                          <Typography component="h5" variant="h5">
                            {t(`mediapage.media[${media.id}].title`)}
                          </Typography>
                          <Typography variant="overline" color="textSecondary">
                            {media.type}
                          </Typography>
                          <Typography variant="body1">
                            <div dangerouslySetInnerHTML={{ __html: t(`mediapage.media[${media.id}].content`) }} />

                          </Typography>
                          <div className={classes.blurBottom}></div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default withStyles(styles)(withTranslation()(Media));
