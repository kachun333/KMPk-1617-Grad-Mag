import React, { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  Container,
  Switch,
  Box,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { useFirestore } from 'react-redux-firebase'
import DateFnsUtils from '@date-io/date-fns';
import Background from '../../assets/images/committee-register.jpg';
import CustomDialog from "../common/CustomDialog";


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
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: theme.spacing(2),
  },
}));

function Generator() {
  const classes = useStyles();

  const [dialog, setDialog] = useState(null);
  const firestore = useFirestore();
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: gForm.name,
      name_ch: gForm.name_ch,
      birthday: gForm.birthday,
      phone: gForm.phone,
      email: gForm.email,
      one_liner: gForm.one_liner,
      gender: gForm.gender ? "male" : "female",
      lecture: gForm.lecture,
      tutorial: gForm.tutorial,
      describe_me: [gForm.describe1, gForm.describe2, gForm.describe3],
      message: gForm.message,
    }
    firestore
      .collection("graduates")
      .add(data)
      .then(() => {
        alert("data with has successfully submitted");
        setGForm(defaultData);
      })
      .catch(err => {
        setDialog({ title: "Fail to submit data", description: err });
        console.error("fail to submit data ", err);
      });
  }

  const defaultData = {
    id: 0,
    name: "",
    name_ch: "",
    birthday: new Date('1998-01-01T00:00:00'),
    phone: "",
    email: "",
    one_liner: "",
    gender: false, //female
    lecture: "",
    tutorial: "",
    describe1: "",
    describe2: "",
    describe3: "",
    message: "",
  };
  const [gForm, setGForm] = React.useState(defaultData);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Box id="generator" className={classes.container}>
        <Container maxWidth="sm" >
          <form onSubmit={handleSubmit} className={`${classes.sidebox} ${classes.form}`}>
            <Typography variant="h5" color="inherit">
              Hey there, thank you for helping me
          </Typography>
            <TextField
              id="name"
              className={classes.textfield}
              label="Name"
              variant="outlined"
              required
              value={gForm.name}
              onChange={e => setGForm({ ...gForm, name: e.target.value })}
            />
            <TextField
              id="name_ch"
              className={classes.textfield}
              label="name_ch"
              variant="outlined"
              required
              value={gForm.name_ch}
              onChange={e => setGForm({ ...gForm, name_ch: e.target.value })}
            />
            <KeyboardDatePicker
              margin="normal"
              id="birthday"
              label="Birthday"
              format="dd/MM/yyyy"
              value={gForm.birthday}
              onChange={date => setGForm({ ...gForm, birthday: date })}
            />
            <TextField
              id="phone"
              className={classes.textfield}
              label="phone"
              variant="outlined"
              required
              value={gForm.phone}
              onChange={e => setGForm({ ...gForm, phone: e.target.value })}
            />
            <TextField
              id="email"
              type="email"
              className={classes.textfield}
              label="email"
              variant="outlined"
              required
              value={gForm.email}
              onChange={e => setGForm({ ...gForm, email: e.target.value })}
            />
            <TextField
              id="one_liner"
              className={classes.textfield}
              label="one_liner"
              variant="outlined"
              required
              value={gForm.one_liner}
              onChange={e => setGForm({ ...gForm, one_liner: e.target.value })}
            />
            <div>
              <span>Female</span>
              <Switch
                id="gender"
                checked={gForm.gender}
                onChange={e => setGForm({ ...gForm, gender: !gForm.gender })}
                value="gender"
              />
              <span>Male</span>
            </div>
            <TextField
              id="lecture"
              className={classes.textfield}
              label="Lecture"
              variant="outlined"
              required
              value={gForm.lecture}
              onChange={e => setGForm({ ...gForm, lecture: e.target.value })}
            />
            <TextField
              id="tutorial"
              className={classes.textfield}
              label="tutorial"
              variant="outlined"
              required
              value={gForm.tutorial}
              onChange={e => setGForm({ ...gForm, tutorial: e.target.value })}
            />
            <br />
            <TextField
              id="describe1"
              className={classes.textfield}
              label="Describe Me 1"
              variant="outlined"
              required
              value={gForm.describe1}
              onChange={e => setGForm({ ...gForm, describe1: e.target.value })}
            />
            <TextField
              id="describe2"
              className={classes.textfield}
              label="Describe Me 2"
              variant="outlined"
              required
              value={gForm.describe2}
              onChange={e => setGForm({ ...gForm, describe2: e.target.value })}
            />
            <TextField
              id="describe3"
              className={classes.textfield}
              label="Describe Me 3"
              variant="outlined"
              required
              value={gForm.describe3}
              onChange={e => setGForm({ ...gForm, describe3: e.target.value })}
            />
            <br />
            <TextField
              id="message"
              className={classes.textfield}
              label="message"
              variant="outlined"
              required
              value={gForm.message}
              onChange={e => setGForm({ ...gForm, message: e.target.value })}
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
        </Container>
      </Box>
      {
        dialog ?
          <CustomDialog
            open={Boolean(dialog)}
            onClose={() => { setDialog(null) }}
            title={dialog.title}
            description={dialog.description}
          />
          : null
      }
    </MuiPickersUtilsProvider>
  );
}

export default Generator;
