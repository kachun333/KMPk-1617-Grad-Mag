import React, { Fragment } from "react";
import {
  Box,
  withStyles,
  Typography,
  Button,
  Container,
  Hidden
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from 'react-i18next';
import Background from '../../assets/images/committee.png';
import FullpageBanner from '../common/FullpageBanner';
// import axios from 'axios';
// import { withTranslation } from "react-i18next";
// import "../../i18n";

// component level styling
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
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
}));

function Committee() {
  // const [t, i18n] = useTranslation();
  const classes = useStyles();
  return (
    <Fragment className={classes.container}>
      <FullpageBanner caption="hello world" background={Background} />
    </Fragment>
  );
}

export default Committee;
