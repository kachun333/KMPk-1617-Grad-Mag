import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const GraduateDetailsInfoPaper = styled(Paper)(({ theme }) => ({
  maxWidth: 360,
  paddingBottom: theme.spacing(1),
  /* allow overflow */
  height: "100%",
  overflowY: "auto",
  /* allow swipe left & right to navigate */
  touchAction: "pan-y",
  [theme.breakpoints.down("md")]: {
    minWidth: "100%",
  },
}));

export const Header = styled("div")(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  rowGap: theme.spacing(1),
  columnGap: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    /* header will be sticky only when md up */
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
}));

export const StyledListItemWithIcon = styled(ListItem)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
}));

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));
