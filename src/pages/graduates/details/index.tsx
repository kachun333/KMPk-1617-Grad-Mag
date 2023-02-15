import graduatesData from "assets/json/graduates_public.json";
import { setDocumentTitle } from "providers/app-title/app-title.utils";
import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import GraduateDetailsInfo from "./GraduateDetailsInfo";
import GraduateDetailsPaper from "./GraduateDetailsPaper";
import ImageHolder from "./ImageHolder";
import * as S from "./index.styled";

type GraduateDetailsParams = {
  graduateId?: string;
};

function GraduateDetails() {
  const params = useParams<GraduateDetailsParams>();
  const graduateId = parseInt(params.graduateId ?? "", 10);
  const graduate = graduatesData[graduateId - 1];

  useEffect(() => {
    if (graduate) {
      const newTitle = graduate.name_ch
        ? `${graduate.name_ch} ${graduate.name}`
        : graduate.name;
      setDocumentTitle(newTitle);
    }
  }, [graduate]);

  if (!graduate) {
    return <Navigate to="/404" replace />;
  }

  return (
    <GraduateDetailsPaper
      key={graduateId} // reset scroll position & state when change
      graduateId={graduateId}
      graduates={graduatesData}
    >
      <S.GraduateDetailsImageBox>
        <ImageHolder graduate={graduate} />
      </S.GraduateDetailsImageBox>
      <S.GraduateDetailsInfoBox>
        <GraduateDetailsInfo graduate={graduate} />
      </S.GraduateDetailsInfoBox>
    </GraduateDetailsPaper>
  );
}

export default GraduateDetails;
