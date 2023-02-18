import graduatesData from "assets/json/graduates_public.json";
import { setDocumentTitle } from "providers/app-title/app-title.utils";
import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import GraduateDetailsInfo from "./GraduateDetailsInfo";
import GraduateDetailsPaper from "./GraduateDetailsPaper";
import useNavigateGraduate from "./hooks/useNavigateGraduate";
import ImageHolder from "./ImageHolder";
import { toGraduateTitle } from "./ImageHolder/Share/index.utils";
import * as S from "./index.styled";

type GraduateDetailsParams = {
  graduateId?: string;
};

function GraduateDetails() {
  const params = useParams<GraduateDetailsParams>();
  const currentGraduateId = parseInt(params.graduateId ?? "", 10);

  const { goPrevGraduate, goNextGraduate, goShowAllGraduates } =
    useNavigateGraduate({
      graduates: graduatesData,
      currentGraduateId,
    });

  const currentGraduate = graduatesData[currentGraduateId - 1];
  useEffect(() => {
    if (currentGraduate) {
      const graduateTitle = toGraduateTitle(currentGraduate);
      setDocumentTitle(graduateTitle);
    }
  }, [currentGraduate]);

  if (!currentGraduate) {
    return <Navigate to="/404" replace />;
  }

  return (
    <GraduateDetailsPaper
      goPrevGraduate={goPrevGraduate}
      goNextGraduate={goNextGraduate}
    >
      <S.GraduateDetailsImageBox>
        <ImageHolder
          graduate={currentGraduate}
          goShowAllGraduates={goShowAllGraduates}
        />
      </S.GraduateDetailsImageBox>
      <GraduateDetailsInfo
        key={currentGraduateId} // reset scroll position when change
        graduate={currentGraduate}
      />
    </GraduateDetailsPaper>
  );
}

export default GraduateDetails;
