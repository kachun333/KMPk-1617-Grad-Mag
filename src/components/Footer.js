import React, { Component } from "react";
import {
  Typography,
  withStyles,
  Container,
  Hidden
} from "@material-ui/core";
import { withTranslation } from "react-i18next";
import desktopFooter from "../resources/Images/desktopFooter.svg";
import mobileFooter from "../resources/Images/mobileFooter.svg";
const styles = {
  fitViewPort: {
    width: "100vw",
    height: "100vh"
  },
  fitWidth: {
    width: "100vw",
    mindWidth: "100vw",
    maxWidth: "100vw"
  }
};
export class Footer extends Component {
  render() {
    const [ t, classes ] = this.props;
    return (
      <footer
        className={classes.fitWidth}
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            zIndex: 2,
            bottom: "10%"
          }}
        >
          <Typography variant="overline">{t("footer")}</Typography>
        </Container>
        <Hidden smDown>
          <img
            src={desktopFooter}
            style={{
              position: "relative",
              zIndex: 1
            }}
            alt=""
            className={classes.fitWidth}
          />
        </Hidden>
        <Hidden mdUp>
          <img
            src={mobileFooter}
            style={{
              position: "relative",
              zIndex: 1
            }}
            alt=""
            className={classes.fitWidth}
          />
        </Hidden>
      </footer>
    );
  }
}

export default withStyles(styles)(withTranslation()(Footer));
