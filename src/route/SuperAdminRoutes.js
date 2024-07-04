import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Cumulative from "../admin/cumulative/Cumulative";
import PendingSubaua from "../admin/PendingSubaua";
import StatusPage from "../admin/status/StatusPage";
import ParameterAdd from "../admin/parameter/ParameterAdd";
import ParameterView from "../admin/parameter/ParameterView";
import ServiceChargesAdd from "../admin/servicecharges/ServiceChargesAdd";
import ServiceChargesView from "../admin/servicecharges/ServiceChargesView";
import TestComponent from "../utils/TestComponent";
import SADocumentMaster from "../superadmin/spdocuments/documentsmaster/SADocumentMaster";
import SADocumentSub from "../superadmin/spdocuments/SADocumentSub";
import SADocumentMasterAdd from "../superadmin/spdocuments/documentsmaster/SADocumentMasterAdd";

const AdminDashboard = lazy(() => import("../admin/AdminDashboard"));
const AdminLayout = lazy(() => import("../layouts/admin/AdminLayout"));
const Page404 = lazy(() => import("../error/Page404"));
const SimpleLayout = lazy(() => import("../layouts/simple/SimpleLayout"));
const SubAUA = lazy(() => import("../admin/subaua/SubAUA"));
const SubauaIndex = lazy(() => import("../admin/subaua"));

const SuperAdminRoutes = () => {
  const superAdminRoutes = useRoutes([
    {
      path: "/ditec/superadmin",
      element: <AdminLayout />,
      children: [
        { element: <Navigate to="/ditec/superadmin/dashboard" />, index: true },
        { path: "dashboard", element: <AdminDashboard /> },
        { path: "subaua", element: <SubauaIndex /> },
        { path: "subauadetails", element: <SubAUA /> },
        { path: "cumulative", element: <Cumulative /> },
        { path: "pendingsubaua", element: <PendingSubaua /> },
        { path: "status", element: <StatusPage /> },
        { path: "addparameter", element: <ParameterAdd /> },
        { path: "viewparameter", element: <ParameterView /> },
        { path: "addservicecharges", element: <ServiceChargesAdd /> },
        { path: "viewservicecharges", element: <ServiceChargesView /> },
        { path: "documentmaster", element: <SADocumentMaster /> },
        { path: "documentmasteradd", element: <SADocumentMasterAdd /> },
        { path: "documentsub", element: <SADocumentSub /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/ditec/superadmin/dashboard" />, index: true },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
  ]);
  return <>{superAdminRoutes}</>;
};

export default SuperAdminRoutes;
