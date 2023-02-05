import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";

const StyledContainer = styled(Container)({
  marginTop: "20px",
});

function PageNotFound() {
  return (
    <StyledContainer>
      <Typography variant="h4">Error 404</Typography>
      <Typography variant="subtitle1">
        The page you are looking for is not found
      </Typography>
    </StyledContainer>
  );
}

export default PageNotFound;
