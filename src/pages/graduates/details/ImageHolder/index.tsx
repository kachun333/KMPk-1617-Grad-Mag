import ArrowBack from "@mui/icons-material/ArrowBack";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { Link } from "components/styled";
import ShareButton from "pages/graduates/details/ImageHolder/Share";
import { Graduate } from "pages/graduates/graduates.interface";
import React from "react";
import useSwipeDown from "./hooks/useSwipeDown";
import * as S from "./index.styled";
import { toGraduateTitle, toSharableGraduateUrl } from "./Share/index.utils";
import SidePanel from "./SidePanel";

interface ImageHolderProps {
  graduate: Graduate;
  goPrevGraduate: () => void;
  goNextGraduate: () => void;
  goShowAllGraduates: () => void;
}

const ImageHolder: React.FC<ImageHolderProps> = ({
  graduate,
  goPrevGraduate,
  goNextGraduate,
  goShowAllGraduates,
}) => {
  const ref = useSwipeDown<HTMLImageElement>({
    onSwipeDown: goShowAllGraduates,
  });

  return (
    <>
      <SidePanel
        onClick={goPrevGraduate}
        fabIcon={<ChevronLeft />}
        direction="left"
      />
      <SidePanel
        onClick={goNextGraduate}
        fabIcon={<ChevronRight />}
        direction="right"
      />
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
