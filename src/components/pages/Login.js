import React, { useState, Fragment } from "react";
import VerticalBanner from "../common/VerticalBanner";
import {
  Hidden,
  Divider,
  useTheme,
  useMediaQuery,
  Box,
  TextField,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Slide,
  useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import Background from '../../assets/images/committee.jpg';
import GoogleButton from 'react-google-button';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";


// component level styling
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    [theme.breakpoints.up('md')]: {
      flexDirection: "row",
    }
  },
  banner: {
    maxWidth: "100vw",
    backgroundImage: props => `url(${Background})`,
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "40vh",
    [theme.breakpoints.up('md')]: {
      width: "60vw",
      height: "auto",
      minHeight: "calc(100vh - 64px)",
    },
  },
  sidebox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  socialLogin: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "16px",
  },
  title: {
    width: "80%",
    margin: "16px",
    [theme.breakpoints.up('md')]: {
      width: "70%",
    }
  },
  help: {
    width: "100%",
  },
  textfield: {
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: theme.spacing(2),
  },
  caption: {
    width: "100%",
    height: "100%",
  },
  facebookLogin: {
    width: "240px !important",
    fontSize: "16px !important",
    fontFamily: "Roboto, arial, sans-serif !important",
    marginTop: "12px !important",
  }
}));
function Login() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("heandleing");
    console.log(e);
  }
  return (
    <div className={classes.container}>
      <Box id="login-banner" className={classes.banner}></Box>
      <Box className={classes.sidebox}>

        <Box id="social-login" className={classes.socialLogin}>
          <GoogleButton
            type="light"
            onClick={() => { console.log('Google button clicked') }}
          />
          <FacebookLoginButton className={classes.facebookLogin} onClick={() => alert("Hello")}>
            <span style={{ paddingLeft: '12px' }}>Sign in with Facebook</span>
          </FacebookLoginButton>
        </Box>
        <Divider />
        <Box id="title" className={classes.title}>
          <Typography variant="h5" color="inherit" align="center" >
            Traditional Login
            </Typography>
          <Typography component="div" variant="caption" color="inherit" align="center" >
            Why do I need to login?
            </Typography>
        </Box>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            id="email"
            className={classes.textfield}
            label="Email"
            type="email"
            variant="outlined"
          />
          <TextField
            id="password"
            className={classes.textfield}
            label="Password"
            type="password"
            variant="outlined"
          />
          <Box id="login-help" className={classes.help}>
            <Typography component="div" variant="subtitle3" color="inherit">
              Forget password
            </Typography>
            <Typography component="div" variant="subtitle3" color="inherit">
              Create new account
            </Typography>
          </Box>
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            Login
            </Button>
        </form>
      </Box>
    </div>
  );
}

export default Login;