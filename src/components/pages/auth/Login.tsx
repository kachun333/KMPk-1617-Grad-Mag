import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import GoogleButton from "react-google-button";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useFirebase } from "react-redux-firebase";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomDialog from "../../common/CustomDialog";
import VerticalBanner from "../../common/VerticalBanner";

const PREFIX = "Login";

const classes = {
  container: `${PREFIX}-container`,
  sidebox: `${PREFIX}-sidebox`,
  form: `${PREFIX}-form`,
  socialLogin: `${PREFIX}-socialLogin`,
  title: `${PREFIX}-title`,
  help: `${PREFIX}-help`,
  textfield: `${PREFIX}-textfield`,
  button: `${PREFIX}-button`,
  caption: `${PREFIX}-caption`,
  facebookLogin: `${PREFIX}-facebookLogin`,
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
    flex: 1,
    padding: theme.spacing(2),
  },

  [`& .${classes.form}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  [`& .${classes.socialLogin}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "16px",
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

  [`& .${classes.textfield}`]: {
    margin: theme.spacing(1),
    width: "100%",
  },

  [`& .${classes.button}`]: {
    margin: theme.spacing(2),
  },

  [`& .${classes.caption}`]: {
    width: "100%",
    height: "100%",
  },

  [`& .${classes.facebookLogin}`]: {
    width: "240px !important",
    fontSize: "16px !important",
    fontFamily: "Roboto, arial, sans-serif !important",
    marginTop: "12px !important",
  },
}));

interface DialogState {
  isOpen: boolean;
  title?: string;
  description?: string[];
}

interface ReactReduxFirebaseCreateUserCredentials {
  email: string;
  password: string;
  signIn?: boolean; // default true
}

type ReactReduxFirebaseCredentials =
  | {
      provider:
        | "facebook"
        | "google"
        | "twitter"
        | "github"
        | "microsoft.com"
        | "apple.com"
        | "yahoo.com";
      type: "popup" | "redirect";
      scopes?: string[];
    }
  | ReactReduxFirebaseCreateUserCredentials;

function Login() {
  const navigate = useNavigate();
  const isLoggedin = useSelector((state) => state.firebase.auth.uid);
  const verified = useSelector((state) => state.firebase.profile.verified);
  if (isLoggedin) {
    navigate("/", { replace: true });
  }

  const [dialog, setDialog] = useState<DialogState>({ isOpen: false });
  const [credentials, setCredentials] =
    useState<ReactReduxFirebaseCreateUserCredentials>({
      email: "",
      password: "",
    });

  const firebase = useFirebase();
  const handleLogin = (loginObject: ReactReduxFirebaseCredentials) => {
    firebase
      .login(loginObject)
      .then(() => {
        if (verified) {
          navigate("/");
        } else {
          navigate("/auth/verify");
        }
      })
      .catch(() => {
        setDialog({
          isOpen: true,
          title: "Login Fail..",
          description: ["Fail to login, please try again later"],
        });
      });
  };

  return (
    <Root className={classes.container}>
      <Box>
        <VerticalBanner banner="login" />
      </Box>
      <Box className={classes.sidebox}>
        <Box id="social-login" className={classes.socialLogin}>
          <GoogleButton
            type="light"
            onClick={() => {
              handleLogin({ provider: "google", type: "popup" });
            }}
          />
          <FacebookLoginButton
            className={classes.facebookLogin}
            onClick={() => {
              handleLogin({ provider: "facebook", type: "popup" });
            }}
          >
            <span style={{ paddingLeft: "12px" }}>Sign in with Facebook</span>
          </FacebookLoginButton>
        </Box>
        <Box id="title" className={classes.title}>
          <Typography variant="h5" color="inherit" align="center">
            Traditional Login
          </Typography>
          <Typography
            component="div"
            variant="caption"
            color="inherit"
            align="center"
          >
            <Button
              onClick={() => {
                setDialog({
                  isOpen: true,
                  title: "Why do I need to login?",
                  description: [
                    "This is to avoid sensitive informations to be expose publicy by allowing authenticated user to view it only. Certain actions, such as submitting a form, also required authentication.",
                  ],
                });
              }}
            >
              Why do I need to login?
            </Button>
          </Typography>
        </Box>
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(credentials);
          }}
        >
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
          <Box id="login-help" className={classes.help}>
            <Typography component="div" variant="body2" color="inherit">
              <Link to="/auth/reset">Forget password</Link>
            </Typography>
            <Typography component="div" variant="body2" color="inherit">
              <Link to="/auth/create">Create new account</Link>
            </Typography>
          </Box>
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            Login
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
    </Root>
  );
}

export default Login;
