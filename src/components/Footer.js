import React from "react";
import {
  Box,
  withStyles,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import Bottle from '../assets/images/bottle.png';
import FooterImg from '../assets/images/footer.png';


// component level styling
const useStyles = makeStyles((theme) => createStyles({
  footer: {
    position: "relative",
    marginTop: "64px",
    height: "256px",
    maxWidth: "100vw",
    backgroundImage: `url(${FooterImg})`,
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  footerContent: {
    position: "absolute",
    top: "60px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  bottle: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "120px",
    width: "260px",
  },
}));

function Footer() {
  const classes = useStyles();
  const handleClick = (e) => {
    e.preventDefault();
  }
  return (
    <footer id="footer" className={classes.footer}>

      <img className={classes.bottle} src={Bottle}></img>
      <Box id="footer-content" className={classes.footerContent}>
      <Typography variant="h6" gutterBottom>三年之约</Typography>
        <Link href="#" onClick={handleClick} color="inherit">
          <Typography variant="overline">Email</Typography>
        </Link>
        <Link href="#" onClick={handleClick} color="inherit">
          <Typography variant="overline">Github</Typography>
        </Link>
        <Link href="#" onClick={handleClick} color="inherit">
          <Typography variant="overline">Privacy Policy</Typography>
        </Link>
        <Link href="#" onClick={handleClick} color="inherit">
          <Typography variant="overline">Terms of Service</Typography>
        </Link>
      </Box>
    </footer>
  );
}

export default Footer;