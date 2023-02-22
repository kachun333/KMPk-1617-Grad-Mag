import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import BannerImage from "components/common/BannerImage";

export const StyledCardActionArea = styled(CardActionArea)({
  width: "100%",
  aspectRatio: "3 / 2",
});

export const StyledCardImage = styled(BannerImage)({
  width: "100%",
  height: "100%",
});
