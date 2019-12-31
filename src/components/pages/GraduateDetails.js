import React, { useState, useEffect } from "react";
import {
  Toolbar,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  Typography,
  Button,
  IconButton,
  Container,
  Dialog,
  Collapse,
  Box,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Close, Share, ArrowBackIos, ArrowForwardIos, Cake, Email, Phone, Domain, Sms, LocalFlorist, PanTool } from '@material-ui/icons';
import image from '../../assets/images/Tan Zhi Han.jpg';
import { useSelector, useDispatch } from 'react-redux';

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
      height: "100vh",
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

function GraduateDetails(props) {
  // const { open, handleClose, info } = props;
  let graduate = {
      "id": "",
      "name": "",
      "name_ch": "",
      "birthday": "",
      "phone": "",
      "email": "",
      "one_liner": "",
      "gender": "",
      "lecture": "",
      "tutorial": "",
      "describe_me": [],
      "message": ""
  }
  const graduates = useSelector(state => state.graduates.ordered);
  useEffect(() => {
    graduate = graduates[1];
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
        <img className={classes.image} src={image} alt={graduate.name} />
      </Box>
      <Box className={classes.list}>
        <Box id="graduate-name" className={classes.listHeader}>
          <Typography variant="h4">
            {graduate.name_ch}
          </Typography>
          <Typography variant="subtitle1">
            {graduate.name}
          </Typography>
        </Box>
        <List>
          <ListItem id="graduate-phone">
            <ListItemIcon><Phone /></ListItemIcon>
            <ListItemText primary="Phone" secondary={graduate.phone} />
          </ListItem>
          <ListItem id="graduate-email">
            <ListItemIcon><Email /></ListItemIcon>
            <ListItemText primary="Email" secondary={graduate.email} />
          </ListItem>
          <ListItem id="graduate-birthday">
            <ListItemIcon><Cake /></ListItemIcon>
            <ListItemText primary="Birthday" secondary={graduate.birthday} />
          </ListItem>
          <ListItem id="graduate-tutorial">
            <ListItemIcon><Domain /></ListItemIcon>
            <ListItemText primary="Tutorial Class" secondary={graduate.tutorial} />
          </ListItem>
          <ListItem id="graduate-one_liner">
            <ListItemIcon><PanTool /></ListItemIcon>
            <ListItemText primary="One Liner" secondary={graduate.one_liner} />
          </ListItem>
          <ListItem id="graduate-message-title">
            <ListItemIcon><Sms /></ListItemIcon>
            <ListItemText primary="Message" />
          </ListItem>
          <ListItem id="graduate-message-content">
            <ListItemText secondary={graduate.message} />
          </ListItem>
          <ListItem id="graduate-describe_me">
            <ListItemIcon><LocalFlorist /></ListItemIcon>
            <ListItemText primary="Describe me" />
          </ListItem>
          <List component="div" disablePadding>
            {
              graduate.describe_me.map((description, i) => {
                return (
                  <ListItem key={`graduate-describe_me-${i}`}>
                    <ListItemText secondary={description} />
                  </ListItem>
                );
              })
            }
          </List>
        </List>
      </Box>
    </Box>
  );
}

export default GraduateDetails;