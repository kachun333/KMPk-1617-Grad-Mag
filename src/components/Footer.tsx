import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import makeStyles from "@material-ui/styles/makeStyles";
import GitHub from "@material-ui/icons/GitHub";
import Email from "@material-ui/icons/Email";
import Bottle from "../assets/images/bottle.png";
import FooterImg from "../assets/images/footer.png";

const useStyles = makeStyles((theme) => ({
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
    position: "absolute",
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
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer id="footer" className={classes.footer}>
      <img className={classes.bottle} src={Bottle} alt="bottle-icon" />
      <div className={classes.overlay} />
      <Box id="footer-content" className={classes.box}>
        <Typography variant="h6" gutterBottom>
          三年之约 Our Promise
        </Typography>
        <Link
          href="mailto: gmagazinekmpk@gmail.com"
          className={classes.boxItem}
          color="inherit"
        >
          <Email className={classes.icon} />
          <Typography variant="overline">gmagazinekmpk@gmail.com</Typography>
        </Link>
        <Link
          href="https://github.com/1998chun/OurPromise"
          className={classes.boxItem}
          color="inherit"
        >
          <GitHub className={classes.icon} />
          <Typography variant="overline">Github</Typography>
        </Link>
        <Link
          href="https://www.privacypolicygenerator.info/live.php?token=12TSXce3RJFkpRpBfiN3kOLlK0Jz1kWt"
          className={classes.boxItem}
          color="inherit"
        >
          <Typography variant="overline">Privacy Policy</Typography>
        </Link>
        <Link
          href="https://www.termsandconditionsgenerator.com/live.php?token=CRsPFRs0oVlHD9hs1EYvWE0KEnQdLph9"
          className={classes.boxItem}
          color="inherit"
        >
          <Typography variant="overline">Terms of Service</Typography>
        </Link>
      </Box>
    </footer>
  );
}

export default Footer;
