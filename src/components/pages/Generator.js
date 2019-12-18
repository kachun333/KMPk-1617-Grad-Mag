import React, { useState, Fragment } from "react";
import VerticalBanner from "../common/VerticalBanner";
import {
  Hidden,
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
  Slider,
  Box,
  TextField,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Slide,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import Background from '../../assets/images/committee-register.jpg';


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
    backgroundImage: `url(${Background})`,
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
    flex: 1,
  },
  form: {
    marginBottom: "48px"
  },
  title: {
    width: "80%",
    margin: "16px",
    [theme.breakpoints.up('md')]: {
      width: "70%",
      margin: "48px",
    }
  },
  textfield: {
    margin: theme.spacing(2),
    width: "100%",
  },
}));
function CommitteeRegister() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };
  const handleSubmit = (e) => {
    console.log(e);
  }
  return (
    <Fragment>
      <Box id="generator" className={classes.container}>
          <Box id="title" className={classes.title}>
            <Hidden smDown>
              <Typography variant="h2" color="inherit">
                Hey there, thank you for helping me
          </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant="h5" color="inherit">
                Hey there, thank you for helping me
          </Typography>
            </Hidden>
          </Box>
          <form onSubmit={handleSubmit} className={`${classes.sidebox} ${classes.form}`}>
            <TextField
              id="name"
              className={classes.textfield}
              label="Name"
              variant="outlined"
              required
            />
            <TextField
              id="name_ch"
              className={classes.textfield}
              label="name_ch"
              variant="outlined"
              required
            />
            <TextField
              id="phone"
              className={classes.textfield}
              label="phone"
              variant="outlined"
              required
            />
            <TextField
              id="email"
              type="email"
              className={classes.textfield}
              label="email"
              variant="outlined"
              required
            />
            <TextField
              id="one_liner"
              className={classes.textfield}
              label="one_liner"
              variant="outlined"
              required
            />
            <TextField
              id="tutorial"
              className={classes.textfield}
              label="tutorial"
              variant="outlined"
              required
            />
            <TextField
              id="message"
              className={classes.textfield}
              label="message"
              variant="outlined"
              required
            />
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
            >
              Submit
          </Button>
          </form>
        </Box>
    </Fragment>
  );
}

export default CommitteeRegister;
