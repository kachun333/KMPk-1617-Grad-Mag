import Container from "@mui/material/Container";
import graduatesData from "assets/json/graduates_public.json";
import React from "react";
import GridLayout from "./GridLayout";

function Graduates() {
  return (
    <Container disableGutters>
      <main>
        <GridLayout graduates={graduatesData} />
      </main>
    </Container>
  );
}

export default Graduates;
