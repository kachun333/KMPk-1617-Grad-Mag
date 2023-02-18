import ArrowBack from "@mui/icons-material/ArrowBack";
import { Link } from "components/styled";
import ShareButton from "pages/graduates/details/ImageHolder/Share";
import { Graduate } from "pages/graduates/graduates.interface";
import React from "react";
import useSwipeDown from "./hooks/useSwipeDown";
import * as S from "./index.styled";
import { toGraduateTitle, toSharableGraduateUrl } from "./Share/index.utils";

interface ImageHolderProps {
  graduate: Graduate;
  goShowAllGraduates: () => void;
}

const ImageHolder: React.FC<ImageHolderProps> = ({
  graduate,
  goShowAllGraduates,
}) => {
  const ref = useSwipeDown<HTMLImageElement>({
    onSwipeDown: goShowAllGraduates,
  });

  return (
    <>
      <S.ImageToolbar>
        <Link to="/graduates" preventScrollReset>
          <S.ImageToolbarIconButton
            edge="start"
            aria-label="close"
            size="large"
          >
            <ArrowBack />
          </S.ImageToolbarIconButton>
        </Link>
        <S.ImageToolbarTitle />
        <ShareButton
          graduateUrl={toSharableGraduateUrl(graduate.id)}
          graduateText={toGraduateTitle(graduate)}
          iconBtnProps={{
            edge: "end",
            "aria-label": "share",
            size: "large",
          }}
        />
      </S.ImageToolbar>
      <S.StyledGraduateImage
        graduateName={graduate.name}
        imgProps={{
          ref,
          sizes: "(min-width: 600px) calc(100vw - 360px), 100vw",
        }}
      />
    </>
  );
};

export default ImageHolder;
