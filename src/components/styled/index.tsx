import { CardContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Link as ReactRouterLink } from "react-router-dom";

export const Link = styled(ReactRouterLink)({
  textDecoration: "none",
  color: "inherit",
});

export const ContainedIconButton = styled(IconButton)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  "&:last-child": {
    paddingBottom: theme.spacing(1),
  },
}));
