import React, { useState } from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import makeStyles from "@material-ui/styles/makeStyles";

import GoogleButton from 'react-google-button';
import { FacebookLoginButton } from "react-social-login-buttons";
import VerticalBanner from "../../common/VerticalBanner";
import CustomDialog from "../../common/CustomDialog";
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

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
  sidebox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: theme.spacing(2),
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
  const history = useHistory();
  const isLoggedin = useSelector(state => state.firebase.auth.uid);
  if (isLoggedin) {
    history.push("/")
  }
  const classes = useStyles();

  const [dialog, setDialog] = useState(null);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const firebase = useFirebase();
  const handleLogin = (loginObject) => {
    firebase.login(loginObject)
      .then(() => {
        setDialog({ title: "Login Success!", description: "You will be redirect to home page soon" });
        history.push("/")
      })
      .catch(() => {
        setDialog({ title: "Login Fail..", description: "Incorrect credentials or account doesn't exist" });
      })
  }

  return (
    <div className={classes.container}>
      <VerticalBanner banner="login" />
      <Box className={classes.sidebox}>
        <Box id="social-login" className={classes.socialLogin}>
          <GoogleButton
            type="light"
            onClick={() => { handleLogin({ provider: 'google', type: 'redirect' }) }}
          />
          <FacebookLoginButton className={classes.facebookLogin} onClick={() => { handleLogin({ provider: 'facebook', type: 'redirect' }) }}>
            <span style={{ paddingLeft: '12px' }}>Sign in with Facebook</span>
          </FacebookLoginButton>
        </Box>
        <Box id="title" className={classes.title}>
          <Typography variant="h5" color="inherit" align="center" >
            Traditional Login
            </Typography>
          <Typography component="div" variant="caption" color="inherit" align="center" >
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setDialog({
                  title: "Why do I need to login?",
                  description: "This is to avoid sensitive informations to be expose publicy by allowing authenticated user to view it only. Certain actions, such as submitting a form, also required authentication."
                });
              }}
            >
              Why do I need to login?
              </Link>
          </Typography>
        </Box>
        <form className={classes.form} onSubmit={(e) => { e.preventDefault(); handleLogin(credentials); }}>
          <TextField
            className={classes.textfield}
            label="Email"
            type="email"
            variant="outlined"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.currentTarget.value })}
            required
          />
          <TextField
            className={classes.textfield}
            label="Password"
            type="password"
            variant="outlined"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.currentTarget.value })}
            required
          />
          <Box id="login-help" className={classes.help}>
            <Typography component="div" variant="body1" color="inherit">
            <Link href="#" onClick={(e) => { e.preventDefault(); history.push("/auth/reset"); }}>
                Forget password
              </Link>
            </Typography>
            <Typography component="div" variant="body1" color="inherit">
            <Link href="#" onClick={(e) => { e.preventDefault(); history.push("/auth/create"); }}>
                Create new account
              </Link>
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
      {
        dialog ?
          <CustomDialog
            open={dialog}
            onClose={() => { setDialog(null) }}
            title={dialog.title}
            description={dialog.description}
          />
          : null
      }
    </div>
  );
}

export default Login;