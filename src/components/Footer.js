import React from "react";
import {
 Box,
  withStyles,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import FooterImg from '../assets/images/footer.png';


// component level styling
const useStyles = makeStyles((theme) => createStyles({
 footer: {
   maxWidth: "100vw",
   backgroundImage: `url(${FooterImg})`,
   backgroundPositionX: "center",
   backgroundPositionY: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   height: "40vh",
 },
}));

function Footer() {
 const classes = useStyles();
 return (
  <footer>
   <Box id="footer" className={classes.footer}></Box>
  </footer>
 );
}

export default Footer;