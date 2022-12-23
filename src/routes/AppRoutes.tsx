import GraduateDetails from "components/pages/GraduateDetails";
import Graduates from "components/pages/graduates/Graduates";
import Home from "components/pages/Home";
import Lecturers from "components/pages/Lecturers";
import PageNotFound from "components/pages/PageNotFound";
import Videos from "components/pages/videos/Videos";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="graduates" element={<Graduates />}>
        <Route path=":id" element={<GraduateDetails />} />
      </Route>
      <Route path="Lecturers" element={<Lecturers />} />
      <Route path="videos" element={<Videos />} />
      <Route element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
