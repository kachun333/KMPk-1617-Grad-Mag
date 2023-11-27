import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import GraduateImage from "pages/graduates/components/GraduateImage";

export const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const StyledImageContainer = styled("div")(({ theme }) => {
  const gridLayoutMargin = theme.spacing(2);
  const graduateCardMargin = theme.spacing(1);
  const margin = `${gridLayoutMargin} * 2 + ${graduateCardMargin} * 2`;
  return {
    "&:hover": {
      background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
    },
    [theme.breakpoints.up("sm")]: {
      width: 282,
      height: 188,
    },
    [theme.breakpoints.down("sm")]: {
      width: `calc(100vw - (${margin}))`,
      height: `calc((100vw - (${margin})) * (2 / 3) )`,
    },
  };
});

export const StyledGraduateImage = styled(GraduateImage)(() => ({
  height: "100%",
  width: "100%",
  opacity: 1,
  "&:hover": {
    opacity: 0.95
  },
}));

/**
 * innerHTML will be hidden
 * but this element still occupies space
 */
export const PlaceholderTypography = styled(Typography)({
  textIndent: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
});
