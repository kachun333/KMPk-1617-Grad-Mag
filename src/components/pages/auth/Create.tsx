import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import { useFirebase } from "react-redux-firebase";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomDialog from "../../common/CustomDialog";
import VerticalBanner from "../../common/VerticalBanner";

interface DialogState {
  isOpen: boolean;
  title?: string;
  description?: string[];
}

interface CreateUserCredentials {
  email: string;
  password: string;
  signIn?: boolean; // default true
  displayName: string;
}

// component level styling
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
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
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
}));
function Create() {
  const navigate = useNavigate();
  const isLoggedin = useSelector((state) => state.firebase.auth.uid);
  if (isLoggedin) {
    navigate("/", { replace: true });
  }

  const classes = useStyles();
  const [dialog, setDialog] = useState<DialogState>({ isOpen: false });
  const [credentials, setCredentials] = useState<CreateUserCredentials>({
    email: "",
    password: "",
    displayName: "",
  });

  const firebase = useFirebase();
  const handleCreate = ({
    email,
    password,
    displayName,
  }: CreateUserCredentials) => {
    firebase
      .createUser({ email, password }, { displayName, email })
      .then(() => {
        setDialog({
          isOpen: true,
          title: "Account Created!",
          description: ["You will be redirect to login page soon"],
        });
        navigate("/auth/login");
      })
      .catch(() => {
        setDialog({
          isOpen: true,
          title: "Account Fail to create",
          description: ["Please try again.."],
        });
      });
  };

  return (
    <div className={classes.container}>
      <VerticalBanner banner="login" />
      <Box className={classes.sidebox}>
        <Box id="title" className={classes.title}>
          <Typography variant="h5" color="inherit" align="center">
            Create Account
          </Typography>
        </Box>
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleCreate(credentials);
          }}
        >
          <TextField
            className={classes.textfield}
            label="Display Name"
            variant="outlined"
            value={credentials.displayName}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                displayName: e.currentTarget.value,
              })
            }
            required
          />
          <TextField
            className={classes.textfield}
            label="Email"
            type="email"
            variant="outlined"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.currentTarget.value })
            }
            required
          />
          <TextField
            className={classes.textfield}
            label="Password"
            type="password"
            variant="outlined"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                password: e.currentTarget.value,
              })
            }
            required
          />
          <Box id="create-help" className={classes.help}>
            <Typography component="div" variant="body2" color="inherit">
              <Link to="/auth/reset">Forget password</Link>
            </Typography>
            <Typography component="div" variant="body2" color="inherit">
              <Link to="/auth/login">
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
      {dialog ? (
        <CustomDialog
          open={Boolean(dialog)}
          onClose={() => {
            setDialog({ isOpen: false });
          }}
          title={dialog.title}
          description={dialog.description}
        />
      ) : null}
    </div>
  );
}

export default Create;
