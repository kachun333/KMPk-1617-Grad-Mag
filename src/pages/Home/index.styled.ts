import { styled } from "@mui/material/styles";
import BannerImage from "components/common/BannerImage";

export const HeroContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "center",
    height: "calc(100vh - 64px)",
    overflow: "hidden",
    width: "100%",
  },
}));

export const HeroImg = styled(BannerImage)({
  width: "100%",
});

export const AboutBox = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));
