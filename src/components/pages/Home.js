import React, { Component, Fragment } from "react";
import {
  Box,
  withStyles,
  Typography,
  Button,
  Container,
  Hidden
} from "@material-ui/core";
import axios from 'axios';
import { withTranslation } from "react-i18next";
import "../../i18n";

// component level styling
const styles = {
  fitViewPort: {
    height: "100vh",
    width: "100vw",
    maxWidth: "100vw"
  },
  section: {
    display: "block",
    marginBottom: "50px",
    maxWidth: "100vw"
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20
  },
  fitPercentages: {
    width: "100%",
    height: "100%",
    maxWidth: "100vw"
  },
  button: {
    background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%);",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(107, 255, 228, 0.3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  },
  float: {
    position: "relative",
    zIndex: 1,
    height: "100vh",
    width: "100vw",
    maxWidth: "100vw"
  },
  img: {
    width: "100vw"
  },
  hero: {
    marginBottom: "50px",
    maxWidth: "100vw"
  }
};
export class Home extends Component {
  handleClick() {
    axios.get(
      `${process.env.REACT_APP_base_url}/wallet/android-wallets/download`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.ipm.v1+json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9lM2FwaWRldi5jb25uZXNpcy5jb21cL2FwaVwvYXV0aFwvdG9rZW4iLCJpYXQiOjE1NzIzNjMwMjMsImV4cCI6MTU3MjM2NjYyMywibmJmIjoxNTcyMzYzMDIzLCJqdGkiOiJqbGI1RkFGSFl1aTVVeGh3Iiwic3ViIjoxfQ.e0uPf1LWS_xkBKNaiTmyQHYDFTfvkXlEyZKoCVEt6og'
        }
      }
    )
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'E3T.apk'); 
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const [ t, classes ] = this.props;
    return (
      <Fragment>
        {/* TODO add scroll down indicator */}
        <Hidden smDown>
          <Box id="desktopHeroSection" className={classes.hero}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-around"
              style={{
                position: "absolute",
                zIndex: 2,
                top: "25%",
                left: "10%"
              }}
            >
              <Box mb={4}>
                {/* TODO replace with translation */}
                <Typography variant="h1" style={{ fontWeight: "bold" }}>
                  E3T WALLET
                </Typography>
                <Typography variant="h1" style={{ fontWeight: "bold" }}>
                  IS NOW LIVE
                </Typography>
              </Box>
              <a target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: "inherit" }} href="http://e3apidev.connesis.com/api/wallet/android-wallets/download">
                <Button
                  className={classes.button}
                  variant="contained"
                  style={{ width: "20vw", height: "80px" }}
                  onClick={this.handleClick}
                >
                  DOWNLOAD
                </Button>
              </a>
            </Box>
            <img
              alt=""
              src="#"
              style={{ position: "relative", zIndex: 1 }}
              className={classes.img}
            />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <Box id="mobileHeroSection" className={classes.hero}>
            <Container
              style={{
                position: "absolute",
                zIndex: 2,
                top: "15%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                E3T WALLET
              </Typography>
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                IS NOW LIVE
              </Typography>
            </Container>
            <img alt="" src="#" />
          </Box>
        </Hidden>
        <Container className={classes.section}>
          <Box className={classes.center} mb={3}>
            <Typography variant="h4" align="center">
              {t("homepage.section1.title.1")}
            </Typography>
            <Typography variant="h4" align="center">
              {t("homepage.section1.title.2")}
            </Typography>
            <img
              src="#"
              alt=""
            />
          </Box>
          <Box className={classes.center}>
            <Container>
              <Hidden smDown>
                <img
                  src="#"
                  alt=""
                  className={classes.fitPercentages}
                />
              </Hidden>
              <Hidden mdUp>
                <img
                  src="#"
                  alt=""
                  className={classes.fitPercentages}
                />
              </Hidden>
            </Container>
          </Box>
        </Container>
        <Container id="who uses e3t" className={classes.section}>
          <Box className={classes.center} mb={3}>
            <Typography variant="h4" align="center">
              {t("homepage.section2.title")}
            </Typography>
            <img
              src="#"
              alt=""
            />
          </Box>
          <Box className={classes.center}>
            <Typography variant="h6" style={{ marginBottom: "50px" }}>
              {t("homepage.section2.subtitle")}
            </Typography>
            <img
              src="#"
              alt=""
              className={classes.fitPercentages}
              style={{
                marginBottom: "50px"
              }}
            />
          </Box>
        </Container>
        <Container id="what can it be used for" className={classes.section}>
          <Box className={classes.center} mb={3}>
            <Typography variant="h4" align="center">
              {t("homepage.section3.title")}
            </Typography>
            <img
              src="#"
              alt=""
            />
          </Box>
          <Box className={classes.center}>
            <Typography variant="h6" style={{ marginBottom: "50px" }}>
              {t("homepage.section3.subtitle")}
            </Typography>
            <img
              src="#"
              alt=""
              className={classes.fitPercentages}
              style={{ marginBottom: "100px" }}
            />
            
          </Box>
        </Container>
      </Fragment>
    );
  }
}

export default withStyles(styles)(withTranslation()(Home));
