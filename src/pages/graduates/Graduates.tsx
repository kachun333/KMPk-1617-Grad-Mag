import { CircularProgress, Typography } from "@mui/material";
import graduatesData from "assets/json/graduates_public.json";
import usePreventBodyScrollOutlet from "hooks/usePreventBodyScrollOutlet";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Graduate } from "./graduates.interface";
import GridLayout from "./GridLayout";

const pageSize = 20;

function Graduates() {
  const outletElement = usePreventBodyScrollOutlet();
  const [graduates, setGraduates] = useState<Graduate[]>(() =>
    graduatesData.slice(0, pageSize)
  );

  const canScrollFurther = graduates.length !== graduatesData.length;

  const { ref } = useInView({
    rootMargin: "400px 0px",
    skip: !canScrollFurther,
    onChange: (inView) => {
      if (inView)
        setGraduates((old) => graduatesData.slice(0, old.length + pageSize));
    },
  });

  return (
    <>
      <section style={{ margin: 16 }}>
        <main>
          <GridLayout graduates={graduates} />
        </main>
        <footer ref={ref}>
          {canScrollFurther ? (
            <div style={{ textAlign: "center" }}>
              <CircularProgress />
            </div>
          ) : (
            <Typography align="right">{`${graduates.length} graduate(s)`}</Typography>
          )}
        </footer>
      </section>
      {outletElement}
    </>
  );
}

export default Graduates;
