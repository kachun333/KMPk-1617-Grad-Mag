import React from "react";
import {
  Box,
  withStyles,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { GitHub, Email } from "@material-ui/icons";
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
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: theme.palette.background.paper,
    opacity: 0.3,
  },
  bottle: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "120px",
    width: "260px",
  },
  box: {
    position: "absolute",
    top: "60px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  boxItem: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  icon: {
    margin: theme.spacing(0.5),
  }
}));

function Footer() {
  const classes = useStyles();
  const handleClick = (e) => {
    e.preventDefault();
  }
  return (
    <footer id="footer" className={classes.footer}>

      <img className={classes.bottle} src={Bottle}></img>
      <div className={classes.overlay}></div>
      <Box id="footer-content" className={classes.box}>
        <Typography variant="h6" gutterBottom>lectus sed eros</Typography>
        <Link href="mailto: gmagazinekmpk@gmail.com" className={classes.boxItem} color="inherit">
          <Email className={classes.icon} />
          <Typography variant="overline">Email</Typography>
        </Link>
        <Link href="https://github.com/1998chun/OurPromise" className={classes.boxItem} color="inherit">
          <GitHub className={classes.icon} />
          <Typography variant="overline">Github</Typography>
        </Link>
        <Link onClick={handleClick} className={classes.boxItem} color="inherit">
          <Typography variant="overline">Privacy Policy</Typography>
        </Link>
        <Link onClick={handleClick} className={classes.boxItem} color="inherit">
          <Typography variant="overline">Terms of Service</Typography>
        </Link>
      </Box>
    </footer>
  );
}

export default Footer;