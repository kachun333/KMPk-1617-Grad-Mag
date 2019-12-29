import React, { useState, Fragment } from "react";
import {
  Divider,
  useTheme,
  useMediaQuery,
  Box,
  TextField,
  Typography,
  Button,
  Link
} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import GoogleButton from 'react-google-button';
import VerticalBanner from "../../common/VerticalBanner";
import CustomDialog from "../../common/CustomDialog";
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

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
}));
function Create() {
  const history = useHistory();
  const isLoggedin = useSelector(state => state.firebase.auth.uid);
  if (isLoggedin) {
    history.push("/");
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <VerticalBanner banner="login" />
      <Box className={classes.sidebox}>
        <Box id="title" className={classes.title}>
          <Typography variant="h4" color="inherit" align="center" >
            This feature is not yet ready, so please don't lost your password
          </Typography>
          <Box id="create-help" className={classes.help}>
            <Typography component="div" variant="body1" color="inherit">
              <Link href="#" onClick={(e) => { e.preventDefault(); history.push("/auth/create"); }}>
                Create new account
              </Link>
            </Typography>
            <Typography component="div" variant="body1" color="inherit">
              <Link href="#" onClick={(e) => { e.preventDefault(); history.push("/auth/login"); }}>
                Already have an account? Sign in instead
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Create;