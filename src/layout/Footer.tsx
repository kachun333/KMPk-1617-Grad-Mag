import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Bottle from "assets/images/bottle.webp";
import FooterImg from "assets/images/footer.webp";
import React from "react";

const PREFIX = "Footer";

const classes = {
  footer: `${PREFIX}-footer`,
  overlay: `${PREFIX}-overlay`,
  bottle: `${PREFIX}-bottle`,
  box: `${PREFIX}-box`,
  boxItem: `${PREFIX}-boxItem`,
  icon: `${PREFIX}-icon`,
};

const Root = styled("footer")(({ theme }) => ({
  [`&.${classes.footer}`]: {
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

  [`& .${classes.overlay}`]: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: theme.palette.background.paper,
    opacity: 0.3,
  },

  [`& .${classes.bottle}`]: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "120px",
    width: "260px",
  },

  [`& .${classes.box}`]: {
    position: "absolute",
    top: "60px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },

  [`& .${classes.boxItem}`]: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },

  [`& .${classes.icon}`]: {
    margin: theme.spacing(0.5),
  },
}));

function Footer() {
  return (
    <Root id="footer" className={classes.footer}>
      <img className={classes.bottle} src={Bottle} alt="bottle-icon" />
      <div className={classes.overlay} />
      <Box id="footer-content" className={classes.box}>
        <Typography variant="h6" gutterBottom>
          醇憶 Grad Mag
        </Typography>
        <Link
          target="_blank"
          href="mailto: gmagazinekmpk@gmail.com"
          className={classes.boxItem}
          color="inherit"
        >
          <Email className={classes.icon} />
          <Typography variant="overline">gmagazinekmpk@gmail.com</Typography>
        </Link>
        <Link
          target="_blank"
          href="https://github.com/kachun333/KMPk-1617-Grad-Mag"
          className={classes.boxItem}
          color="inherit"
        >
          <GitHub className={classes.icon} />
          <Typography variant="overline">Github</Typography>
        </Link>
        <Link
          target="_blank"
          href="https://www.privacypolicygenerator.info/live.php?token=rAkMG1L25IRAE3OiH9OKyjpxUyKtaPMb"
          className={classes.boxItem}
          color="inherit"
        >
          <Typography variant="overline">Privacy Policy</Typography>
        </Link>
        <Link
          target="_blank"
          href="https://www.termsandconditionsgenerator.com/live.php?token=EpWXudbdmqfkg27d75wMJ4HzcZslq9Ig"
          className={classes.boxItem}
          color="inherit"
        >
          <Typography variant="overline">Terms of Service</Typography>
        </Link>
      </Box>
    </Root>
  );
}

export default Footer;
