import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import VerticalBanner from "../../common/VerticalBanner";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  sidebox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    height: "100%",
    [theme.breakpoints.up("md")]: {
      flex: 1,
      minWidth: "400px",
      height: "calc(100vh - 64px)",
      overflow: "auto",
    },
  },
  title: {
    width: "80%",
    margin: "16px",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
  help: {
    width: "100%",
  },
}));
function Reset() {
  const navigate = useNavigate();
  const isLoggedin = useSelector((state) => state.firebase.auth.uid);
  if (isLoggedin) {
    navigate("/", { replace: true });
  }
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <VerticalBanner banner="login" />
      {/* <img className={classes.image} src={graduate.image || null} alt={graduate ? graduate.name : ""} /> */}
      <Box className={classes.sidebox}>
        <Box id="title" className={classes.title}>
          <Typography variant="h4" color="inherit" align="center">
            This feature is not yet ready, so please don&apos;t lost your
            password
          </Typography>
          <Box id="create-help" className={classes.help}>
            <Typography component="div" variant="body2" color="inherit">
              <Link to="/auth/create">Create new account</Link>
            </Typography>
            <Typography component="div" variant="body2" color="inherit">
              <Link to="/auth/login">
                Already have an account? Sign in instead
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Reset;
