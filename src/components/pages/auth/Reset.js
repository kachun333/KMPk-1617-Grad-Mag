import React from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import makeStyles from "@material-ui/styles/makeStyles";
import VerticalBanner from "../../common/VerticalBanner";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

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
            <Typography component="div" variant="body2" color="inherit">
              <Link href="#" onClick={(e) => { e.preventDefault(); history.push("/auth/create"); }}>
                Create new account
              </Link>
            </Typography>
            <Typography component="div" variant="body2" color="inherit">
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