import graduatesData from "assets/json/graduates_public.json";
import PageNotFound from "pages/PageNotFound";
import React from "react";
import { useParams } from "react-router-dom";
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
  if (!graduate) {
    return <PageNotFound />;
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
