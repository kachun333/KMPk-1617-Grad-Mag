import React, { Fragment } from "react";
import {
  Box,
  withStyles,
  Typography,
  Button,
  Container,
  Hidden
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { useTranslation } from 'react-i18next';
import Background from '../../assets/images/home.jpg';


const useStyles = makeStyles((theme) => createStyles({
 banner: {
   maxWidth: "100vw",
   backgroundImage: props => `url(${props.background})`,
   backgroundPositionX: "center",
   backgroundPositionY: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   height: "40vh",
   [theme.breakpoints.up('md')]: {
     width: "60vw",
     height: "100%",
   },
 },
 caption: {
   width: "100%",
   height: "100%",
 }
}));

function VerticalBanner(props) {
 // const [t, i18n] = useTranslation();
 const classes = useStyles(props);
 return (
   <>
     <Hidden smDown>
       <Box id="desktopBanner" className={classes.banner}>
       </Box>
     </Hidden>
     <Hidden mdUp>
       <Box id="mobileBanner" className={classes.banner}>
       </Box>
     </Hidden>
   </>
 );
}

export default VerticalBanner;