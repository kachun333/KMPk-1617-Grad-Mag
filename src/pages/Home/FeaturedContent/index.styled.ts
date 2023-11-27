import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import BannerImage from "components/common/BannerImage";

export const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  width: "100%",
  aspectRatio: "3 / 2",
  "&:hover": {
    background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
  },
}));

export const StyledCardImage = styled(BannerImage)(() => ({
  width: "100%",
  height: "100%",
  opacity: 1,
  "&:hover": {
    opacity: 0.95
  },
}));
