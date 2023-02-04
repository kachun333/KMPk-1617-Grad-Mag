import graduatesData from "assets/json/graduates_public.json";
import React, { useDeferredValue } from "react";
import GridLayout from "./GridLayout";

function Graduates() {
  const deferredGraduatesData = useDeferredValue(graduatesData);
  return (
    <main>
      <GridLayout graduates={deferredGraduatesData} />
    </main>
  );
}

export default Graduates;
