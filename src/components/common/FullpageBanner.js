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
      height: "calc(100vh - 64px)",
    }
  },
}));

function FullpageBanner(props) {
 // const [t, i18n] = useTranslation();
 const classes = useStyles(props);
 return (
   <>
     <Hidden smDown>
       <Box id="desktopBanner" className={classes.banner}>
         <Typography variant="h1" color="inherit" style={{ fontWeight: "bold" }}>
           {props.caption}
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

export default FullpageBanner;