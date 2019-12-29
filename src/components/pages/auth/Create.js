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
  // banner: {
  //   maxWidth: "100vw",
  //   backgroundImage: props => `url(${Background})`,
  //   backgroundPositionX: "center",
  //   backgroundPositionY: "center",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   height: "40vh",
  //   [theme.breakpoints.up('md')]: {
  //     width: "60vw",
  //     height: "auto",
  //     minHeight: "calc(100vh - 64px)",
  //   },
  // },
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
}));
function Create() {
  const history = useHistory();
  const isLoggedin = useSelector(state => state.firebase.auth.uid);
  if (isLoggedin) {
    history.push("/");
  }

  const classes = useStyles();

  const [credentials, setCredentials] = useState({ email: "", password: "", displayName: "" });

  const firebase = useFirebase();
  const handleCreate = ({ email, password, displayName }) => {
    firebase.createUser(
      { email, password },
      { displayName, email }
    )
      .then(() => {
        setDialog({ title: "Account Created!", description: "You will be redirect to login page soon" });
        history.push("/auth/login")
      })
      .catch(() => {
        setDialog({ title: "Account Fail to create", description: "Please try again.." });
      })
  }


  const [dialog, setDialog] = useState(null);

  return (
    <div className={classes.container}>
      <VerticalBanner banner="login" />
      <Box className={classes.sidebox}>
        <Box id="title" className={classes.title}>
          <Typography variant="h5" color="inherit" align="center" >Create Account</Typography>
        </Box>
        <form className={classes.form} onSubmit={(e) => { e.preventDefault(); handleCreate(credentials); }}>
          <TextField
            className={classes.textfield}
            label="Display Name"
            variant="outlined"
            value={credentials.displayName}
            onChange={(e) => setCredentials({ ...credentials, displayName: e.currentTarget.value })}
            required
          />
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
          <Box id="create-help" className={classes.help}>
            <Typography component="div" variant="body1" color="inherit">
              <Link href="#" onClick={(e) => { e.preventDefault(); history.push("/auth/reset"); }}>
                Forget password
              </Link>
            </Typography>
            <Typography component="div" variant="body1" color="inherit">
              <Link href="#" onClick={(e) => { e.preventDefault(); history.push("/auth/login"); }}>
                Already have an account? Sign in instead
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
            Create
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

export default Create;