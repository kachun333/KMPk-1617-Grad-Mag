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
 verticalBanner: {
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
}));

function VerticalBanner(props) {
 // const [t, i18n] = useTranslation();
 const classes = useStyles(props);
 return (
   <>
       <Box id="vertical-banner" className={classes.verticalBanner}>
       </Box>
   </>
 );
}

export default VerticalBanner;