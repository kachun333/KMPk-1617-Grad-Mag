import React, { useState, useEffect } from "react";
import {
  Toolbar,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Box,
} from "@material-ui/core";
import Close from '@material-ui/icons/Close';
import Cake from '@material-ui/icons/Cake';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Domain from '@material-ui/icons/Domain';
import Sms from '@material-ui/icons/Sms';
import LocalFlorist from '@material-ui/icons/People';
import PanTool from '@material-ui/icons/PanTool';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setGraduate } from "../../store/actions/graduatesAction";
import { useFirestoreConnect, useFirebase } from 'react-redux-firebase';
import { useParams } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up('md')]: {
      flexDirection: "row",
      height: "100vh",
    },
  },
  imageBox: {
    position: "relative",
    margin: "auto 0",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up('md')]: {
      flex: 1,
      height: "100vh",
      display: "flex",
      minHeight: "calc(100vh - 64px)",
      width: "60vw",
      overflow: "hidden",
    },
  },
  toolbar: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "space-between",
    background: 'transparent',
    boxShadow: 'none'
  },
  icon: {
    color: "#FFF",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  list: {
    height: "100%",
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      width: '100%',
      maxWidth: "400px",
      height: "calc(100vh - 64px)",
      overflow: "auto",
    },
  },
  listHeader: {
    margin: `${theme.spacing(2)}px ${theme.spacing(5)}px`,
  },
  nestedListItem: {
    padding: `0 ${theme.spacing(4)}px`,
  },
}));

function GraduateDetails() {
  // const dispatch = useDispatch();
  // const firebase = useFirebase();

  // useFirestoreConnect('graduates');
  // const datasource = useSelector(state => state.firestore.ordered.graduates);
  // const getGraduate = useCallback(
  //   datasource => dispatch(setGraduate({ firebase }, datasource)),
  //   [firebase, dispatch]
  // )

  // useEffect(() => {
  //     getGraduate(datasource);
  // }, [getGraduate, datasource])
  // const graduate = useSelector(state => state.graduates.graduate);

  const { id } = useParams();
  const [graduate, setGraduate] = useState({});
  useEffect(() => {
    axios.get(`https://us-central1-ourpromise.cloudfunctions.net/api/graduates/${id}`)
      .then(res => {
        setGraduate(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])


  console.log("selected graduate is ", graduate);
  const handleClose = () => {
    console.log("handle close");
  }
  const classes = useStyles();
  // console.log("info object is ", info.phone);
  return (
    <Box className={classes.container}>
      <Box id="graduate-image" className={classes.imageBox}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" onClick={handleClose} aria-label="close">
            <Close className={classes.icon} />
          </IconButton>
        </Toolbar>
        <img className={classes.image} src={null} alt={graduate ? graduate.name : ""} />
      </Box>
      <Box className={classes.list}>
        <Box id="graduate-name" className={classes.listHeader}>
          <Typography variant="h4">
            {graduate ? graduate.name_ch : ""}
          </Typography>
          <Typography variant="subtitle1">
            {graduate ? graduate.name : ""}
          </Typography>
        </Box>
        {/* {
          typeof graduate ?
            <List>
              <ListItem id="graduate-phone">
                <ListItemIcon><Phone /></ListItemIcon>
                <ListItemText primary="Phone" secondary={graduate ? graduate.phone : ""} />
              </ListItem>
              <ListItem id="graduate-email">
                <ListItemIcon><Email /></ListItemIcon>
                <ListItemText primary="Email" secondary={graduate ? graduate.email : ""} />
              </ListItem>
              <ListItem id="graduate-birthday">
                <ListItemIcon><Cake /></ListItemIcon>
                <ListItemText primary="Birthday" secondary={graduate ? graduate.birthday : ""} />
              </ListItem>
              <ListItem id="graduate-tutorial">
                <ListItemIcon><Domain /></ListItemIcon>
                <ListItemText primary="Tutorial Class" secondary={graduate ? graduate.tutorial : ""} />
              </ListItem>
              <ListItem id="graduate-one_liner">
                <ListItemIcon><PanTool /></ListItemIcon>
                <ListItemText primary="One Liner" secondary={graduate ? graduate.one_liner : ""} />
              </ListItem>
              <ListItem id="graduate-message-title">
                <ListItemIcon><Sms /></ListItemIcon>
                <ListItemText primary="Message" />
              </ListItem>
              <ListItem id="graduate-message-content">
                <ListItemText secondary={graduate ? graduate.message : ""} />
              </ListItem>
              <ListItem id="graduate-describe_me">
                <ListItemIcon><LocalFlorist /></ListItemIcon>
                <ListItemText primary="Describe me" />
              </ListItem>
            </List>
            : null
        } */}
        <List>
          <ListItem id="graduate-phone">
            <ListItemIcon><Phone /></ListItemIcon>
            <ListItemText primary="Phone" secondary={graduate? graduate.phone : ""} />
          </ListItem>
          <ListItem id="graduate-email">
            <ListItemIcon><Email /></ListItemIcon>
            <ListItemText primary="Email" secondary={graduate? graduate.email : ""} />
          </ListItem>
          <ListItem id="graduate-birthday">
            <ListItemIcon><Cake /></ListItemIcon>
            <ListItemText primary="Birthday" secondary={graduate? graduate.birthday : ""} />
          </ListItem>
          <ListItem id="graduate-tutorial">
            <ListItemIcon><Domain /></ListItemIcon>
            <ListItemText primary="Tutorial Class" secondary={graduate? graduate.tutorial : ""} />
          </ListItem>
          <ListItem id="graduate-one_liner">
            <ListItemIcon><PanTool /></ListItemIcon>
            <ListItemText primary="One Liner" secondary={graduate? graduate.one_liner : ""} />
          </ListItem>
          <ListItem id="graduate-message-title">
            <ListItemIcon><Sms /></ListItemIcon>
            <ListItemText primary="Message" />
          </ListItem>
          <ListItem id="graduate-message-content">
            <ListItemText secondary={graduate? graduate.message : ""} />
          </ListItem>
          <ListItem id="graduate-describe_me">
            <ListItemIcon><LocalFlorist /></ListItemIcon>
            <ListItemText primary="Describe me" />
          </ListItem>
          <List component="div" disablePadding>
        {
              graduate.describe_me ?
              graduate.describe_me.map((description, i) => {
                  return (
                    <ListItem key={`graduate-describe_me-${i}`}>
                      <ListItemText secondary={description} />
                    </ListItem>
                  );
                })
                : null
              }
            }
        </List>
        </List>
      </Box>
    </Box>
  );
}

export default GraduateDetails;