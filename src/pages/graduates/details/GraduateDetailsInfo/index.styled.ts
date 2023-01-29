import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const Header = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  rowGap: theme.spacing(1),
  columnGap: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    /* header will be sticky only when md up */
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
}));
