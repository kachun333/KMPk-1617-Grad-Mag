import React, { useState, Fragment } from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import makeStyles from "@material-ui/styles/makeStyles";
import useTheme from "@material-ui/styles/useTheme";
import { useParams, useLocation } from "react-router-dom";
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux';
import CustomDialog from "../common/CustomDialog";
import Background from '../../assets/images/committee-register.jpg';
import Unauthorized from '../common/Unauthorized';


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
    padding: 16
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
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: theme.spacing(2),
  },
}));
function CommitteeRegister() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const defaultData = {
    name: "",
    university: "",
    department: "",
    commitment: 5,
    opinion: "",
    concerns: "",
  };

  const location = useLocation();
  const search = location.search; // could be '?foo=bar'
  const params = new URLSearchParams(search);
  const dept = params.get('dept');

  // const { dept } = useParams();
  if (dept) {
    defaultData.department = dept;
  }
  const [form, setForm] = useState(defaultData);
  const [dialog, setDialog] = useState(null);

  const verified = useSelector(state => state.firebase.profile.verified);
  const uid = useSelector(state => state.firebase.auth.uid);
  const displayName = useSelector(state => state.firebase.profile.displayName);
  const firestore = useFirestore();
  const handleSubmit = (submitObject) => {
    submitObject = {
      ...submitObject,
      uid: uid,
      displayName: displayName
    }
    firestore
      .collection("committee_registration")
      .add(submitObject)
      .then(() => {
        setDialog({ title: "Successfully Submitted!", description: "Your registration form has been submitted. Thank you." });
      })
      .catch(() => {
        setDialog({ title: "Fail to Submit..", description: "Please try again later" });
      })
  }
  return (
    <Fragment>
      <Box id="verify" className={classes.container}>
        <Box id="desktopBanner" className={classes.banner}></Box>
        <Box className={classes.sidebox}>
          {
            verified ?
              (
                <>
                  <Box id="title" className={classes.title}>
                    <Typography variant={matches ? "h4" : "h5"} color="inherit">
                      Can't wait to join the team!
                  </Typography>
                  </Box>
                  <form onSubmit={(e) => { e.preventDefault(); handleSubmit(form) }} className={`${classes.sidebox} ${classes.form}`}>
                    <TextField
                      id="name"
                      className={classes.textfield}
                      label="Name"
                      variant="outlined"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.currentTarget.value })}
                      helperText="Kindly enter your English name"
                    />
                    <FormControl required variant="outlined" className={classes.textfield}>
                      <InputLabel id="university">University</InputLabel>
                      <Select
                        labelId="university"
                        value={form.university}
                        onChange={(e) => setForm({ ...form, university: e.target.value })}
                      >
                        <MenuItem value={"UM"}>Universiti Malaya (UM)</MenuItem>
                        <MenuItem value={"USM"}>Universiti Sains Malaysia (USM)</MenuItem>
                        <MenuItem value={"UKM"}>Universiti Kebangsaan Malaysia (UKM)	</MenuItem>
                        <MenuItem value={"UPM"}>Universiti Putra Malaysia (UPM)</MenuItem>
                        <MenuItem value={"UTM"}>Universiti Teknologi Malaysia (UTM)</MenuItem>
                        <MenuItem value={"UUM"}>Universiti Utara Malaysia (UUM)</MenuItem>
                        <MenuItem value={"UniMAP"}>Universiti Malaysia Perlis (UniMAP)</MenuItem>
                        <MenuItem value={"UNIMAS"}>Universiti Malaysia Sarawak (UNIMAS)</MenuItem>
                        <MenuItem value={"UMS"}>Universiti Malaysia Sabah (UMS)</MenuItem>
                        <MenuItem value={"UPSI"}>Universiti Pendidikan Sultan Idris (UPSI)</MenuItem>
                        <MenuItem value={"UMP"}>Universiti Malaysia Pahang (UMP)</MenuItem>
                        <MenuItem value={"Others"}>Others</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl required variant="outlined" className={classes.textfield}>
                      <InputLabel id="department">Department</InputLabel>
                      <Select
                        labelId="department"
                        value={form.department}
                        onChange={(e) => setForm({ ...form, department: e.target.value })}
                      >
                        <MenuItem value={"treasury"}>Treasury</MenuItem>
                        <MenuItem value={"marketing"}>Marketing</MenuItem>
                        <MenuItem value={"program"}>Program</MenuItem>
                        <MenuItem value={"operation"}>Operation</MenuItem>
                      </Select>
                    </FormControl>
                    <Typography variant="body1" id="commitment" gutterBottom>
                      Rate Your commitment
                    </Typography>
                    <Slider
                      className={classes.textfield}
                      valueLabelDisplay="auto"
                      value={form.commitment}
                      onChange={(e, value) => setForm({ ...form, commitment: value })}
                      step={1}
                      marks
                      min={0}
                      max={10}
                    />
                    <TextField
                      id="opinion"
                      className={classes.textfield}
                      label="Your opinion on the theme"
                      multiline
                      required
                      variant="outlined"
                      value={form.opinion}
                      onChange={(e) => setForm({ ...form, opinion: e.currentTarget.value })}
                    />
                    <TextField
                      id="concerns"
                      className={classes.textfield}
                      label="Anything from you?"
                      multiline
                      variant="outlined"
                      value={form.concerns}
                      onChange={(e) => setForm({ ...form, concerns: e.currentTarget.value })}
                    />
                    <Button
                      className={classes.button}
                      variant="contained"
                      size="large"
                      color="primary"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </form>
                </>
              )
              : <Unauthorized type={uid ? "verify" : "login"} />
          }
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
    </Fragment>
  );
}

export default CommitteeRegister;
