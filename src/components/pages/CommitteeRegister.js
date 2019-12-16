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
      <Box id="verify" className={classes.container}>

        <Box id="desktopBanner" className={classes.banner}></Box>
        {/* <VerticalBanner backg round={Background} /> */}
        <Box className={classes.sidebox}>
          <Box id="title" className={classes.title}>
            <Hidden smDown>
              <Typography variant="h2" color="inherit">
                I'm Ready To Serve!
          </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant="h5" color="inherit">
                I'm Ready To Serve!
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
              helperText="Kindly enter your English name"
            />
            <FormControl required variant="outlined" className={classes.textfield}>
              <InputLabel id="university">University</InputLabel>
              <Select
                labelId="university"
                value={age}
                onChange={handleChange}
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
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={"Treasury"}>Treasury</MenuItem>
                <MenuItem value={"Marketing"}>Marketing</MenuItem>
                <MenuItem value={"Program"}>Program</MenuItem>
                <MenuItem value={"Operation"}>Operation</MenuItem>
              </Select>
            </FormControl>

            <Typography id="commitment" gutterBottom>
              Rate Your commitment
      </Typography>
            <Slider
              className={classes.textfield}
              defaultValue={5}
              valueLabelDisplay="auto"
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
              helperText="Learn more about the theme here.."
            />
            <TextField
              id="concerns"
              className={classes.textfield}
              label="Anything from you?"
              multiline
              variant="outlined"
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
      </Box>
    </Fragment>
  );
}

export default CommitteeRegister;
