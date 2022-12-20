import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useAuth from "providers/auth/useAuth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VerticalBanner from "../../common/VerticalBanner";

const PREFIX = "Create";

const classes = {
  container: `${PREFIX}-container`,
  sidebox: `${PREFIX}-sidebox`,
  form: `${PREFIX}-form`,
  title: `${PREFIX}-title`,
  help: `${PREFIX}-help`,
  textfield: `${PREFIX}-textfield`,
  button: `${PREFIX}-button`,
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
}));

interface CreateUserCredentials {
  email: string;
  password: string;
  signIn?: boolean; // default true
  displayName: string;
}

function Create() {
  const navigate = useNavigate();
  const { isLoggedin } = useAuth();
  if (isLoggedin) {
    navigate("/", { replace: true });
  }

  const [credentials, setCredentials] = useState<CreateUserCredentials>({
    email: "",
    password: "",
    displayName: "",
  });

  const handleCreate = ({ displayName }: CreateUserCredentials) => {
    // TODO: fix this
    alert(`${displayName}, This feature is not available yet`);
  };

  return (
    <Root className={classes.container}>
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
    </Root>
  );
}

export default Create;
