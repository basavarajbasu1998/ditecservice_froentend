import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import ParameterAdd from "../admin/parameter/ParameterAdd";
import ParameterView from "../admin/parameter/ParameterView";
import ServiceChargesAdd from "../admin/servicecharges/ServiceChargesAdd";
import ServiceChargesView from "../admin/servicecharges/ServiceChargesView";
import TestComponent from "../utils/TestComponent";
import DashBoardReports from "../admin/dashboardreports/DashBoardReports";
import DashboardEachReports from "../admin/dashboardreports/DashboardEachReports";

const AdminDashboard = lazy(() => import("../admin/AdminDashboard"));
const AdminLayout = lazy(() => import("../layouts/admin/AdminLayout"));
const Page404 = lazy(() => import("../error/Page404"));
const SimpleLayout = lazy(() => import("../layouts/simple/SimpleLayout"));
const SubAUA = lazy(() => import("../admin/subaua/SubAUA"));
const SubauaIndex = lazy(() => import("../admin/subaua"));
const Cumulative = lazy(() => import("../admin/cumulative/Cumulative"));
const PendingSubaua = lazy(() => import("../admin/PendingSubaua"));
const StatusPage = lazy(() => import("../admin/status/StatusPage"));

const AdminRoutes = () => {
  const adminRoutes = useRoutes([
    {
      path: "/ditec/admin",
      element: <AdminLayout />,
      children: [
        { element: <Navigate to="/ditec/admin/dashboard" />, index: true },
        { path: "dashboard", element: <AdminDashboard /> },
        { path: "subaua", element: <SubauaIndex /> },
        { path: "subauadetails/:id", element: <SubAUA /> },
        { path: "cumulative", element: <Cumulative /> },
        { path: "pendingsubaua", element: <PendingSubaua /> },
        { path: "status", element: <StatusPage /> },
        { path: "addparameter", element: <ParameterAdd /> },
        { path: "viewparameter", element: <ParameterView /> },
        { path: "addservicecharges", element: <ServiceChargesAdd /> },
        { path: "viewservicecharges", element: <ServiceChargesView /> },
        { path: "dashboardreports", element: <DashBoardReports /> },
        { path: "dashboardeachdetiles", element: <DashboardEachReports /> },
        { path: "test", element: <TestComponent /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/ditec/admin/dashboard" />, index: true },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
  ]);
  return <>{adminRoutes}</>;
};

export default AdminRoutes;
