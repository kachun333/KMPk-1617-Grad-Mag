import graduatesData from "assets/json/graduates_public.json";
import PageNotFound from "pages/PageNotFound";
import React from "react";
import { useParams } from "react-router-dom";
import GraduateDetailsInfo from "./GraduateDetailsInfo";
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
    <S.GraduateDetailsPaper>
      <S.GraduateDetailsImageBox>
        <ImageHolder graduate={graduate} />
      </S.GraduateDetailsImageBox>
      <S.GraduateDetailsInfoBox>
        <GraduateDetailsInfo graduate={graduate} />
      </S.GraduateDetailsInfoBox>
    </S.GraduateDetailsPaper>
  );
}

export default GraduateDetails;
