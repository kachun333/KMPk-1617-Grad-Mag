import React, { useState } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import VerticalBanner from "../../common/VerticalBanner";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import CustomDialog from "../../common/CustomDialog";

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
  title: {
    width: "80%",
    margin: "16px",
    [theme.breakpoints.up('md')]: {
      width: "70%",
    }
  },
  textfield: {
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: theme.spacing(2),
  },
  help: {
    width: "100%",
  },
}));
function Verify() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const history = useHistory();
  const uid = useSelector(state => state.firebase.auth.uid);
  const verified = useSelector(state => state.firebase.profile.verified);
  if (verified) {
    history.push("/")
  }

  const [dialog, setDialog] = useState(null);
  const [credentials, setCredentials] = useState({ uid: "", event1: "", event2: "" });
  const handleSubmit = (e) => {
    credentials.uid = uid;
    axios.post(
      "https://us-central1-ourpromise.cloudfunctions.net/api/verify",
      credentials,
      { headers: { 'Content-Type': 'application/json', 'Accept': 'application/vnd.ipm.v1+json' } }
    )
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setDialog({ title: "Verification Fail..", description: "Incorrect credentials or check your internet connection" });
      })
    e.preventDefault();
  }
  return (
    <>
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
              required
              value={credentials.event1}
              onChange={(e) => setCredentials({ ...credentials, event1: e.currentTarget.value })}
            />
            <TextField
              id="cnyEvent"
              className={classes.textfield}
              label="CNY Event Name"
              variant="outlined"
              helperText="e.g. Springtown"
              required
              value={credentials.event2}
              onChange={(e) => setCredentials({ ...credentials, event2: e.currentTarget.value })}
            />
            <Box id="login-help" className={classes.help}>
              <Typography component="div" variant="body1" color="inherit">
                <Link href="#" onClick={() => { setDialog({title:"Need Hint?", description:"Cultural Event Name: TrailsO*C****** & CNY Event Event Name: B**ss** "}) }}>
                  Need hint?
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
              Verify
            </Button>
          </form>
        </Box>
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
    </>
  );
}

export default Verify;