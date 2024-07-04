import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";
import Documentation from "../subaua/Documentation";
import Setting from "../subaua/Setting";
import SubauaBilling from "../subaua/SubauaBilling";
// import SubauaDashboard from "../subaua/SubauaDashboard";
// import SubauaLayout from "../layouts/subaua/SubauaLayout";

const SubauaDashboard = lazy(() => import("../subaua/SubauaDashboard"));
const SubauaLayout = lazy(() => import("../layouts/subaua/SubauaLayout"));
const Page404 = lazy(() => import("../error/Page404"));
const SimpleLayout = lazy(() => import("../layouts/simple/SimpleLayout"));

const SubauaRoutes = () => {
  const stateData = useSelector((state) => state.auth);

  const { data, response } = stateData;

  const documents = response.documentstatus;

  const subauaRoutes = useRoutes([
    {
      path: "/ditec/subaua",
      element: <SubauaLayout />,
      children: [
        { element: <Navigate to="/ditec/subaua/dashboard" />, index: true },
        { path: "dashboard", element: <SubauaDashboard /> },
        { path: "setting", element: <Setting /> },
        { path: "documentation", element: <Documentation /> },
        { path: "subauabilling", element: <SubauaBilling /> },
      ],
    },

    {
      element: <SimpleLayout />,
      children: [
        {
          element: <Navigate to="/ditec/subaua/dashboard" />,
          index: true,
        },

        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
  ]);
  return <>{subauaRoutes}</>;
};

export default SubauaRoutes;
