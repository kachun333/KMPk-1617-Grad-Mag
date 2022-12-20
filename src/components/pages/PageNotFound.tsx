import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";

const PREFIX = "Login";

const classes = {
  container: `${PREFIX}-container`,
};

const StyledContainer = styled(Container)(() => ({
  [`&.${classes.container}`]: {
    display: "flex",
    flexDirection: "column",
    // full screen - appbar height - marginTop - footer MarginTop - footer height
    minHeight: "calc(100vh - 64px - 20px - 256px - 64px)",
    marginTop: "20px",
  },
}));

function Login() {
  return (
    <StyledContainer className={classes.container}>
      <Typography variant="h4">Error 404</Typography>
      <Typography variant="subtitle1">
        The page you are looking for is not found
      </Typography>
    </StyledContainer>
  );
}

export default Login;
