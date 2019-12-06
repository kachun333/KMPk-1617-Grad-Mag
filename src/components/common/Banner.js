import React, { Fragment } from "react";
import {
  Box,
  withStyles,
  Typography,
  Button,
  Container,
  Hidden
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from 'react-i18next';
import Background from '../../assets/images/home.jpg';


const useStyles = makeStyles(props => ({
 banner: {
   maxWidth: "100vw",
   backgroundImage: props => `url(${props.background})`,
   backgroundPositionX: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   minHeight: "40vh",
   // [theme.breakpoints.up('md')]: {
   //   minHeight: "calc(100vh - 75px)",
   // }
 },
}));

function Banner(props) {
 // const [t, i18n] = useTranslation();
 const classes = useStyles(props);
 return (
   <>
     <Hidden smDown>
       <Box id="desktopBanner" className={classes.banner}>
         <Typography variant="h1" color="inherit" style={{ fontWeight: "bold" }}>
           {props.name}
         </Typography>
         <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
           青涩的约定
         </Typography>
       </Box>
     </Hidden>
     <Hidden mdUp>
       <Box id="mobileBanner" className={classes.banner}>
         <Typography variant="h3" style={{ fontWeight: "bold" }}>
           E3T WALLET
             </Typography>
         <Typography variant="h3" style={{ fontWeight: "bold" }}>
           IS NOW LIVE
             </Typography>
         <img alt="" src="#" />
       </Box>
     </Hidden>
   </>
 );
}

export default Banner;