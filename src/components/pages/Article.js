import React, { Component, Fragment } from "react";
import { Box, withStyles, Typography, Container, Divider } from "@material-ui/core";
import axios from 'axios';
import { withTranslation } from "react-i18next";
import ch from '../../assets/i18n/translations/ch.json';
import en from '../../assets/i18n/translations/en.json';
import i18next from 'i18next';
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
  container: {
    position: "relative",
  },
  fitPercentages: {
    width: "100%",
    maxHeight: "100vh",
    maxWidth: "100vw",
    marginBottom: "20px",
  },
  title: {
    textAlign: "center",
  },
  dateBox: {
    padding: "20px",
    display: "flex",
    justifyContent: "space-evenly",
    // overwrite for mobile
    [theme.breakpoints.down('sm')]: {
      display: "block",
      justifyContent: "baseline",
    },
  },
  textBox: {
    padding: "20px",
  },
  mainGrid: {
    marginTop: "12px",
  },
  sidebarAboutBox: {
    padding: "20px",
    marginBottom: "20px",
    background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%);",
  },
  link: {
    display: 'block',
    textDecoration: 'none',
    margin: '4px',
    color: 'inherit',
  }
});
export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      articles: [],
    };
  }
  componentDidMount() {
    axios.get(
      `${process.env.REACT_APP_base_url}/media/media/${this.props.match.params.mediaId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.ipm.v1+json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9lM2FwaWRldi5jb25uZXNpcy5jb21cL2FwaVwvYXV0aFwvdG9rZW4iLCJpYXQiOjE1NzIzNjMwMjMsImV4cCI6MTU3MjM2NjYyMywibmJmIjoxNTcyMzYzMDIzLCJqdGkiOiJqbGI1RkFGSFl1aTVVeGh3Iiwic3ViIjoxfQ.e0uPf1LWS_xkBKNaiTmyQHYDFTfvkXlEyZKoCVEt6og'
        }
      }
    )
      .then(res => {
        //i18n
        ch["articlepage.title"] = res.data.data.title_cn;
        ch["articlepage.content"] = res.data.data.content_cn;
        en["articlepage.title"] = res.data.data.title;
        en["articlepage.content"] = res.data.data.content;
        i18next.reloadResources();
        this.setState({ article: res.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const [ t, classes ] = this.props;
    return (
      <Fragment>
        <Container className={classes.section}>
          <Box className={classes.center} mb={3} pt={"15vh"}>
            {/* TODO include cn version title */}
            <Typography variant="h5" align="center">
              {t("articlepage.title")}
            </Typography>
            <img
              src={require("../../resources/Images/titleBorder.svg")}
              alt=""
            />
          </Box>
          <img
            src={this.state.article.featured_image_path}
            alt={t("articlepage.title")}
            className={classes.fitPercentages}
          />
          <Typography className={classes.title} variant="h5" >
            {t("articlepage.title")}
          </Typography>
          <Typography className={classes.textBox} variant="overline" color="textSecondary">
            {this.state.article.type}
          </Typography>
          <Divider />
          <Typography className={classes.textBox} variant="body1" >
            <div dangerouslySetInnerHTML={{ __html: t("articlepage.content")}} />
          </Typography>
        </Container>
      </Fragment>
    );
  }
}

export default withStyles(styles)(withTranslation()(Article));