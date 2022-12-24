import ErrorElement from "components/common/ErrorElement";
import AppLayout from "layout/AppLayout";
import GraduateDetails from "pages/GraduateDetails";
import Graduates from "pages/graduates/Graduates";
import Home from "pages/Home";
import PageNotFound from "pages/PageNotFound";
import Videos from "pages/videos/Videos";
import React from "react";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "graduates",
        errorElement: <ErrorElement />,
        children: [
          { index: true, element: <Graduates /> },
          {
            path: ":graduateId",
            element: <GraduateDetails />,
          },
        ],
      },
      {
        path: "videos",
        element: <Videos />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
];

export default routes;
