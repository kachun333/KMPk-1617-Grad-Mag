import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import useAuth from "providers/auth/useAuth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomDialog from "../../common/CustomDialog";
import VerticalBanner from "../../common/VerticalBanner";

const PREFIX = "Verify";

const classes = {
  container: `${PREFIX}-container`,
  sidebox: `${PREFIX}-sidebox`,
  form: `${PREFIX}-form`,
  title: `${PREFIX}-title`,
  textfield: `${PREFIX}-textfield`,
  button: `${PREFIX}-button`,
  help: `${PREFIX}-help`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(({ theme }) => ({
  [`& .${classes.container}`]: {
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

  [`& .${classes.textfield}`]: {
    margin: theme.spacing(1),
    width: "100%",
  },

  [`& .${classes.button}`]: {
    margin: theme.spacing(2),
  },

  [`& .${classes.help}`]: {
    width: "100%",
  },
}));

interface DialogState {
  isOpen: boolean;
  title?: string;
  description?: string[];
}

function Verify() {
  const navigate = useNavigate();
  const { isVerified, userCredential } = useAuth();
  const { uid } = userCredential?.user ?? {};

  if (isVerified) {
    navigate("/", { replace: true });
  }

  const [dialog, setDialog] = useState<DialogState>({
    isOpen: false,
  });
  const [credentials, setCredentials] = useState({
    uid: "",
    event1: "",
    event2: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    if (!uid) {
      navigate("/");
      return;
    }
    credentials.uid = uid;
    axios
      .post(
        "https://us-central1-ourpromise.cloudfunctions.net/api/verify",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.ipm.v1+json",
          },
        }
      )
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setDialog({
          isOpen: true,
          title: "Verification Fail..",
          description: ["Fail to verify, please try again later"],
        });
      });
    e.preventDefault();
  };
  return (
    <Root>
      <Box id="verify" className={classes.container}>
        <VerticalBanner banner="verify" alt="" />
        <Box className={classes.sidebox}>
          <Box id="title" className={classes.title}>
            <Typography variant="h3" color="inherit">
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
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  event1: e.currentTarget.value,
                })
              }
            />
            <TextField
              id="cnyEvent"
              className={classes.textfield}
              label="CNY Event Name"
              variant="outlined"
              helperText="e.g. Springtown"
              required
              value={credentials.event2}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  event2: e.currentTarget.value,
                })
              }
            />
            <Box id="login-help" className={classes.help}>
              <Typography component="div" variant="body2" color="inherit">
                <Button
                  onClick={() => {
                    setDialog({
                      isOpen: true,
                      title: "Need Hint?",
                      description: [
                        "Cultural Event Name:",
                        "TrailsO*C******",
                        "CNY Event Name:",
                        "B**ss**",
                      ],
                    });
                  }}
                >
                  Need hint?
                </Button>
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
      {dialog ? (
        <CustomDialog
          open={Boolean(dialog)}
          onClose={() => {
            setDialog({ isOpen: false });
          }}
          title={dialog.title ?? ""}
          description={dialog.description ?? []}
        />
      ) : null}
    </Root>
  );
}

export default Verify;
