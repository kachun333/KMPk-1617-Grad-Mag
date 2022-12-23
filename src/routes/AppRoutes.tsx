import GraduateDetails from "pages/GraduateDetails";
import Graduates from "pages/graduates/Graduates";
import Home from "pages/Home";
import PageNotFound from "pages/PageNotFound";
import Videos from "pages/videos/Videos";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="graduates" element={<Graduates />}>
        <Route path=":id" element={<GraduateDetails />} />
      </Route>
      <Route path="videos" element={<Videos />} />
      <Route element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
