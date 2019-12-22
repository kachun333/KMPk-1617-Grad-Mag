import React from "react";
import {
 Container,
 Typography,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';


// component level styling
const useStyles = makeStyles(theme => ({
 container: {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  marginTop: "20px",
 },
}));
function Login() {
 const classes = useStyles();
 return (
  <Container className={classes.container} >
   <Typography variant="h4">Error 404</Typography>
   <Typography variant="subtitle1">The page you are looking for is not found</Typography>
  </Container>
 );
}

export default Login;