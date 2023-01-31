import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import ImageRenderer from "pages/graduates/components/ImageRenderer";

export const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const StyledImageContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: 282,
    height: 188,
  },
  [theme.breakpoints.down("sm")]: {
    width: `calc(100vw - ${theme.spacing(2)})`,
    height: `calc((100vw - ${theme.spacing(2)}) * (2 / 3) )`,
  },
}));

export const StyledImageRenderer = styled(ImageRenderer)({
  height: "100%",
  width: "100%",
});

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
  paddingBottom: `${theme.spacing(1)} !important`,
}));
