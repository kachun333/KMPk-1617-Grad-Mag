import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useAuth from "providers/auth/useAuth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import VerticalBanner from "../../common/VerticalBanner";

const PREFIX = "Reset";

const classes = {
  container: `${PREFIX}-container`,
  sidebox: `${PREFIX}-sidebox`,
  title: `${PREFIX}-title`,
  help: `${PREFIX}-help`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.container}`]: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },

  [`& .${classes.sidebox}`]: {
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

  [`& .${classes.title}`]: {
    width: "80%",
    margin: "16px",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },

  [`& .${classes.help}`]: {
    width: "100%",
  },
}));

function Reset() {
  const navigate = useNavigate();
  const { isLoggedin } = useAuth();
  if (isLoggedin) {
    navigate("/", { replace: true });
  }

  return (
    <Root className={classes.container}>
      <VerticalBanner banner="login" alt="" />
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
    </Root>
  );
}

export default Reset;
