import { styled } from "@mui/material/styles";

export const OutletContainer = styled("div")({
  // full screen - appbar height - marginTop - footer MarginTop - footer height
  minHeight: "calc(100vh - 64px - 256px - 64px)",
});
