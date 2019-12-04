import React, { Component, Fragment } from "react";
import { Box, withStyles, Typography, Container, TextField, Button, Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { withTranslation } from "react-i18next";
import axios from 'axios';
const styles = {
  section: {
    display: "block",
    marginBottom: "50px",
    maxWidth: "100vw"
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    Height: "100vh"
  },
  fitPercentages: {
    width: "100%",
    maxHeight: "100vh",
    maxWidth: "100vw",
    marginBottom: "20px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "50px"
  },
  textBox: {
    padding: "20px",
  },
  button: {
    height: 40,
    width: '20vh',
    background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%);",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(107, 255, 228, 0.3)",
    color: "white",
    padding: "0 30px",
    marginTop: "0.5em"
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: "4px",
  },
};
export class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message:'',
      success: false,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }
  handleSubmit(event) {
    axios.post(
      `${process.env.REACT_APP_base_url}/contact-us`, 
      {first_name: this.state.firstName, last_name: this.state.lastName, email: this.state.email, message: this.state.message}, 
      {headers: {'Content-Type': 'application/json', 'Accept': 'application/vnd.ipm.v1+json'}}
      )
    .then((response) => {
      this.setState({success: true});
    })
    .catch((error) => {
      this.setState({error: true});
    });
    event.preventDefault();
  }
  handleClose(event) {
    this.setState({success: false});
  }
  render() {
    const [ t, classes ] = this.props;
    return (
      <Fragment>
        <Box className={classes.center} mb={3} pt={"15vh"}>
          <Typography variant="h4" align="center">
            {t("contactuspage.title")}
          </Typography>
          <img src={require("../../resources/Images/titleBorder.svg")} alt="" />
        </Box>
        <Container className={classes.container} maxWidth="sm">
          <Box className={classes.textBox}>
            <Typography variant="body1" align="center">
              {t("contactuspage.description")}
            </Typography>
            <Typography variant="h6" align="center">
              {t("contactuspage.email")}
            </Typography>
          </Box>
          <form className={classes.container, classes.center} onSubmit={this.handleSubmit} autoComplete="off">
            <TextField
              id="firstName"
              label={t("contactuspage.form.firstname")}
              required
              fullWidth
              margin="dense"
              variant="outlined"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <TextField
              id="lastName"
              label={t("contactuspage.form.lastname")}
              required
              fullWidth
              margin="dense"
              variant="outlined"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <TextField
              id="email"
              label={t("contactuspage.form.email")}
              type="email"
              required
              fullWidth
              margin="dense"
              variant="outlined"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextField
              id="message"
              label={t("contactuspage.form.message")}
              required
              multiline
              rows="3"
              fullWidth
              margin="dense"
              variant="outlined"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <Button
              className={classes.button}
              variant="contained"
              type="submit"
              value="Submit"
            >{t("contactuspage.form.submit")}</Button>
          </form>
        </Container>
        {/* success message */}
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.success}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={
            <span className={classes.message}>
              <CheckCircleIcon className={classes.iconVariant}/>
                {t("contactuspage.feedback.success")}
            </span>
            }
          action={
            <IconButton
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
            }
        />
        {/* error message */}
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.error}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={
            <span className={classes.message}>
              <ErrorIcon className={classes.iconVariant}/>
                {t("contactuspage.feedback.error")}
            </span>
            }
          action={
            <IconButton
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon/>
            </IconButton>
            }
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(withTranslation()(ContactUs));
