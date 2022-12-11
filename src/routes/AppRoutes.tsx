import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "components/pages/Home";
import Login from "components/pages/auth/Login";
import Verify from "components/pages/auth/Verify";
import Create from "components/pages/auth/Create";
import Reset from "components/pages/auth/Reset";
import PageNotFound from "components/pages/PageNotFound";
import Graduates from "components/pages/Graduates";
import GraduateDetails from "components/pages/GraduateDetails";
import Lecturers from "components/pages/Lecturers";
import Videos from "components/pages/Videos";
import ChapIntro from "components/pages/magazine/ChapIntro";
import Magazine from "components/pages/magazine/Magazine";
import Jpp from "components/pages/magazine/chap1/Jpp";

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
