import React, { useState } from "react";
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
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  },
  list: {
    height: "100%",
    overflow: "auto",
    [theme.breakpoints.up('md')]: {
      width: "400px",
      height: "100vh",
    },
  },
  listHeader: {
    margin: `${theme.spacing(2)}px ${theme.spacing(5)}px`,
  },
  nestedListItem: {
    marginLeft: theme.spacing(4),
  },
}));

function GraduateDetails(props) {
  const { open, handleClose, info } = props;
  const classes = useStyles();
  // const [nestedListOpen, setNestedListOpen] = React.useState(true);

  // const handleClick = () => {
  //   setNestedListOpen(!nestedListOpen);
  // };
  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <Box className={classes.container}>
        <Box id="graduate-image" className={classes.imageBox}>
          <Toolbar className={classes.toolbar}>
            <IconButton edge="start" onClick={handleClose} aria-label="close">
              <Close className={classes.icon} />
            </IconButton>
            <IconButton edge="end" onClick={handleClose} aria-label="close">
              <Share className={classes.icon} />
            </IconButton>
          </Toolbar>
          <img className={classes.image} src={image} alt={info.name} />
        </Box>
        <List className={classes.list}>
          <Box id="graduate-name" className={classes.listHeader}>
            <Typography variant="h4">
              {info.name_ch}
            </Typography>
            <Typography variant="subtitle1">
              {info.name}
            </Typography>
          </Box>
          {/* <ListItem>
            <ListItemText primary={`${info.name_ch} ${info.name}`} />
          </ListItem> */}
          <ListItem id="graduate-phone">
            <ListItemIcon><Phone /></ListItemIcon>
            <ListItemText primary="Phone" secondary={info.phone} />
          </ListItem>
          <ListItem id="graduate-email">
            <ListItemIcon><Email /></ListItemIcon>
            <ListItemText primary="Email" secondary={info.email} />
          </ListItem>
          <ListItem id="graduate-birthday">
            <ListItemIcon><Cake /></ListItemIcon>
            <ListItemText primary="Birthday" secondary={info.birthday} />
          </ListItem>
          <ListItem id="graduate-tutorial">
            <ListItemIcon><Domain /></ListItemIcon>
            <ListItemText primary="Tutorial Class" secondary={info.tutorial} />
          </ListItem>
          <ListItem id="graduate-one_liner">
            <ListItemIcon><PanTool /></ListItemIcon>
            <ListItemText primary="One Liner" secondary={info.one_liner} />
          </ListItem>
          <ListItem id="graduate-message">
            <ListItemIcon><Sms /></ListItemIcon>
            <ListItemText primary="Message" />
          </ListItem>
          <ListItem className={classes.nestedListItem}>
            <ListItemText secondary={info.message} />
          </ListItem>
          {/* <ListItem button onClick={handleClick}> */}
          <ListItem id="graduate-describe_me">
            <ListItemIcon><LocalFlorist /></ListItemIcon>
            <ListItemText primary="Describe me" />
            {/* {nestedListOpen ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>
          {/* <Collapse in={nestedListOpen} timeout="auto" unmountOnExit> */}
          <List component="div" disablePadding>
            {
              info.describe_me.map((description) => {
                return (
                  <ListItem className={classes.nestedListItem}>
                    <ListItemText secondary={description} />
                  </ListItem>
                );
              })
            }
          </List>
          {/* </Collapse> */}
        </List>
      </Box>
    </Dialog >
  );
}

export default GraduateDetails;