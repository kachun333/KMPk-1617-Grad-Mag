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
} from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Cake from "@mui/icons-material/Cake";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import Domain from "@mui/icons-material/Domain";
import Sms from "@mui/icons-material/Sms";
import LocalFlorist from "@mui/icons-material/People";
import PanTool from "@mui/icons-material/PanTool";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import Unauthorized from "../common/Unauthorized";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
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
    [theme.breakpoints.up("md")]: {
      height: "100vh",
      display: "flex",
      minHeight: "calc(100vh - 64px)",
      overflow: "hidden",
    },
  },
  toolbar: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "space-between",
    background: "transparent",
    boxShadow: "none",
  },
  icon: {
    color: "#FFF",
  },
  image: {
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "fit-content",
      maxHeight: "calc(100vh - 64px)",
    },
  },
  list: {
    height: "100%",
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      flex: 1,
      minWidth: "400px",
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
  const { id } = useParams();
  const verified = useSelector((state) => state.firebase.profile.verified);
  const uid = useSelector((state) => state.firebase.auth.uid);
  const [graduate, setGraduate] = useState({});
  useEffect(() => {
    let url = `https://us-central1-ourpromise.cloudfunctions.net/api/graduates/${id}`;
    if (verified) {
      url += `?uid=${uid}`;
    }
    axios
      .get(url)
      .then((res) => {
        setGraduate(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, verified, uid]);

  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box id="graduate-image" className={classes.imageBox}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" aria-label="close">
            <Link to="/graduates">
              <ArrowBack className={classes.icon} />
            </Link>
          </IconButton>
        </Toolbar>
        <img
          className={classes.image}
          src={graduate.image || null}
          alt={graduate.name || ""}
        />
      </Box>
      <Box className={classes.list}>
        <Box id="graduate-name" className={classes.listHeader}>
          <Typography variant="h4">{graduate.name_ch || ""}</Typography>
          <Typography variant="subtitle1">{graduate.name || ""}</Typography>
        </Box>
        <List>
          {verified ? (
            <>
              <ListItem id="graduate-phone">
                <ListItemIcon>
                  <Phone />
                </ListItemIcon>
                <ListItemText
                  primary="Phone"
                  secondary={graduate.phone || ""}
                />
              </ListItem>
              <ListItem id="graduate-email">
                <ListItemIcon>
                  <Email />
                </ListItemIcon>
                <ListItemText
                  primary="Email"
                  secondary={graduate.email || ""}
                />
              </ListItem>
              <ListItem id="graduate-birthday">
                <ListItemIcon>
                  <Cake />
                </ListItemIcon>
                <ListItemText
                  primary="Birthday"
                  secondary={new Date(graduate.birthday).toDateString() || ""}
                />
              </ListItem>
              <ListItem id="graduate-tutorial">
                <ListItemIcon>
                  <Domain />
                </ListItemIcon>
                <ListItemText
                  primary="Tutorial Class"
                  secondary={graduate.tutorial || ""}
                />
              </ListItem>
            </>
          ) : null}
          <ListItem id="graduate-one_liner">
            <ListItemIcon>
              <PanTool />
            </ListItemIcon>
            <ListItemText
              primary="One Liner"
              secondary={graduate.one_liner || ""}
            />
          </ListItem>
          <ListItem id="graduate-message-title">
            <ListItemIcon>
              <Sms />
            </ListItemIcon>
            <ListItemText primary="Message" />
          </ListItem>
          <ListItem id="graduate-message-content">
            <ListItemText secondary={graduate.message || ""} />
          </ListItem>
          <ListItem id="graduate-describe_me">
            <ListItemIcon>
              <LocalFlorist />
            </ListItemIcon>
            <ListItemText primary="Describe me" />
          </ListItem>
          <List component="div" disablePadding>
            {graduate.describe_me
              ? graduate.describe_me.map((description, i) => (
                  <ListItem key={`graduate-describe_me-${i}`}>
                    <ListItemText secondary={description} />
                  </ListItem>
                ))
              : null}
          </List>
        </List>
        {verified ? null : <Unauthorized type={uid ? "verify" : "login"} />}
      </Box>
    </Box>
  );
}

export default GraduateDetails;
