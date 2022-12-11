import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";
import useTheme from "@material-ui/styles/useTheme";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import VerticalBanner from "../../common/VerticalBanner";
import CustomDialog from "../../common/CustomDialog";

interface DialogState {
  isOpen: boolean;
  title?: string;
  description?: string[];
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
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const navigate = useNavigate();
  const uid = useSelector((state) => state.firebase.auth.uid);
  const verified = useSelector((state) => state.firebase.profile.verified);
  if (verified) {
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
  const handleSubmit = (e) => {
    if (!uid) {
      navigate("/");
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
          title={dialog.title}
          description={dialog.description}
        />
      ) : null}
    </>
  );
}

export default Verify;
