import { Graduate } from "pages/graduates/graduates.interface";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

interface UseNavigateGraduateProps {
  currentGraduateId: number;
  graduates: Graduate[];
}

interface UseNavigateGraduateRes {
  goPrevGraduate: () => void;
  goNextGraduate: () => void;
  goShowAllGraduates: () => void;
}

function useNavigateGraduate(
  props: UseNavigateGraduateProps
): UseNavigateGraduateRes {
  const { currentGraduateId, graduates } = props;
  const navigate = useNavigate();

  const currIndex = currentGraduateId - 1;
  const prevGraduate = useMemo(
    () => graduates[currIndex - 1],
    [currIndex, graduates]
  );
  const nextGraduate = useMemo(
    () => graduates[currIndex + 1],
    [currIndex, graduates]
  );

  const hasPrev = !!prevGraduate;
  const hasNext = !!nextGraduate;

  const goPrevGraduate = useCallback(() => {
    if (hasPrev)
      navigate(`/graduates/${prevGraduate.id}`, { preventScrollReset: true });
  }, [hasPrev, navigate, prevGraduate.id]);

  const goNextGraduate = useCallback(() => {
    if (hasNext)
      navigate(`/graduates/${nextGraduate.id}`, { preventScrollReset: true });
  }, [hasNext, navigate, nextGraduate.id]);

  const goShowAllGraduates = useCallback(() => {
    navigate(`/graduates`, { preventScrollReset: true });
  }, [navigate]);

  return {
    goPrevGraduate,
    goNextGraduate,
    goShowAllGraduates,
  };
}

export default useNavigateGraduate;
