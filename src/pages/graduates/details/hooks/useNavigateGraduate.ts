import { Graduate } from "pages/graduates/graduates.interface";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

interface UseNavigateGraduateProps {
  currentGraduateId: number;
  graduates: Graduate[];
}

interface UseNavigateGraduateRes {
  hasPrevGraduate: boolean;
  hasNextGraduate: boolean;
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
  const prevGraduate: Graduate | undefined = useMemo(
    () => graduates[currIndex - 1],
    [currIndex, graduates]
  );
  const nextGraduate: Graduate | undefined = useMemo(
    () => graduates[currIndex + 1],
    [currIndex, graduates]
  );

  const hasPrevGraduate = !!prevGraduate;
  const hasNextGraduate = !!nextGraduate;

  const goPrevGraduate = useCallback(() => {
    if (hasPrevGraduate)
      navigate(`/graduates/${prevGraduate.id}`, { preventScrollReset: true });
  }, [hasPrevGraduate, navigate, prevGraduate?.id]);

  const goNextGraduate = useCallback(() => {
    if (hasNextGraduate)
      navigate(`/graduates/${nextGraduate.id}`, { preventScrollReset: true });
  }, [hasNextGraduate, navigate, nextGraduate?.id]);

  const goShowAllGraduates = useCallback(() => {
    navigate(`/graduates`, { preventScrollReset: true });
  }, [navigate]);

  return {
    hasPrevGraduate,
    hasNextGraduate,
    goPrevGraduate,
    goNextGraduate,
    goShowAllGraduates,
  };
}

export default useNavigateGraduate;
