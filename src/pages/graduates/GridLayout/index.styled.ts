import { styled } from "@mui/material/styles";

export const GridContainer = styled("div")(({ theme }) => ({
  margin: theme.spacing(2),
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
