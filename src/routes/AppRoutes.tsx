import Create from "components/pages/auth/Create";
import Login from "components/pages/auth/Login";
import Reset from "components/pages/auth/Reset";
import Verify from "components/pages/auth/Verify";
import GraduateDetails from "components/pages/GraduateDetails";
import Graduates from "components/pages/graduates/Graduates";
import Home from "components/pages/Home";
import Lecturers from "components/pages/Lecturers";
import Jpp from "components/pages/magazine/chap1/Jpp";
import ChapIntro from "components/pages/magazine/ChapIntro";
import Magazine from "components/pages/magazine/Magazine";
import PageNotFound from "components/pages/PageNotFound";
import Videos from "components/pages/videos/Videos";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="auth" element={<Home />}>
        <Route path="login" element={<Login />} />
        <Route path="verify" element={<Verify />} />
        <Route path="create" element={<Create />} />
        <Route path="reset" element={<Reset />} />
      </Route>
      <Route path="graduates" element={<Graduates />}>
        <Route path=":id" element={<GraduateDetails />} />
      </Route>
      <Route path="Lecturers" element={<Lecturers />} />
      <Route path="videos" element={<Videos />} />
      <Route path="magazine" element={<Magazine />}>
        <Route path="chap" element={<Magazine />}>
          <Route path=":chapId" element={<ChapIntro />} />
          <Route path="1/jpp" element={<Jpp />} />
        </Route>
      </Route>
      <Route element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
