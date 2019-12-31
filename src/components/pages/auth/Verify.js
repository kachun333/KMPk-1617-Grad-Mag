import React, { Fragment } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import VerticalBanner from "../../common/VerticalBanner";

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
    flex: 1,
    padding: theme.spacing(4),
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
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: theme.spacing(2),
  },
}));
function Verify() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Fragment>
      <Box id="verify" className={classes.container}>
        <VerticalBanner banner="verify" />
        <Box className={classes.sidebox}>
          <Box id="title" className={classes.title}>
            <Typography variant={matches ? "h3" : "h5"} color="inherit">
              Verify That You Are A KMPKian
            </Typography>
          </Box>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              id="culturalEvent"
              className={classes.textfield}
              label="Cultural Event Name"
              variant="outlined"
              helperText="e.g. BeautyAndTheBeast"
            />
            <TextField
              id="cnyEvent"
              className={classes.textfield}
              label="CNY Event Name"
              variant="outlined"
              helperText="e.g. Springtown"
            />
            <Button
              className={classes.button}
              variant="contained"
              size="large"
              color="primary"
              type="submit"
            >
              Verify
            </Button>
          </form>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Verify;