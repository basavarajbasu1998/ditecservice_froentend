import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";

import Dashboard from "../dashboard/Dashboard";
import SubauaAuthentication from "../dashboard/reports/SubauaAuthentication";
import TotalAuthentication from "../dashboard/reports/TotalAuthentication";
import AuthLayout from "../layouts/auth/AuthLayout";
import SimpleLayout from "../layouts/simple/SimpleLayout";
import AboutPage from "../pages/AboutPage";
import ChangePassword from "../pages/changepassword/ChangePassword";
import Contacts from "../pages/contacts/Contacts";
import ForgotPassword from "../pages/forgotpassword/ForgotPassword";
import Loginpage from "../pages/login/Loginpage";
import OTPPage from "../pages/otp/OTPPage";
import OtherServices from "../services/OtherServices";
import Authentication from "../services/authentication/Authentication";
import EKYC from "../services/ekyc/EKYC";
import SubAUA from "../services/subaua/SubAUA";
import SubauaRegistrtionForm from "../services/subaua/SubauaRegistrtionForm";
import TestComponent from "../utils/TestComponent";

// const Dashboard = lazy(() => import("../dashboard/Dashboard"));
// const SubauaAuthentication = lazy(() =>
//   import("../dashboard/reports/SubauaAuthentication")
// );
// const TotalAuthentication = lazy(() =>
//   import("../dashboard/reports/TotalAuthentication")
// );
// const AuthLayout = lazy(() => import("../layouts/auth/AuthLayout"));

// const SimpleLayout = lazy(() => import("../layouts/simple/SimpleLayout"));
// const AboutPage = lazy(() => import("../pages/AboutPage"));
// const ChangePassword = lazy(() =>
//   import("../pages/changepassword/ChangePassword")
// );
// const Contacts = lazy(() => import("../pages/contacts/Contacts"));
// const ForgotPassword = lazy(() =>
//   import("../pages/forgotpassword/ForgotPassword")
// );
// const Loginpage = lazy(() => import("../pages/login/Loginpage"));
// const OtherServices = lazy(() => import("../services/OtherServices"));
// const Authentication = lazy(() =>
//   import("../services/authentication/Authentication")
// );
// const EKYC = lazy(() => import("../services/ekyc/EKYC"));
// const SubAUA = lazy(() => import("../services/subaua/SubAUA"));
// const SubauaRegistrtionForm = lazy(() =>
//   import("../services/subaua/SubauaRegistrtionForm")
// );
// const TestComponent = lazy(() => import("../utils/TestComponent"));

const DashboardRoutes = () => {
  const dashboardRoutes = useRoutes([
    {
      path: "/ditec",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/ditec/dashboard" />, index: true },
        { path: "dashboard", element: <Dashboard /> },
        { path: "e-kyc", element: <EKYC /> },
        { path: "authentication", element: <Authentication /> },
        { path: "subaua", element: <SubAUA /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <Contacts /> },
        { path: "totalauth", element: <TotalAuthentication /> },
        { path: "subauaauth", element: <SubauaAuthentication /> },
        { path: "register", element: <SubauaRegistrtionForm /> },
        { path: "otherservices", element: <OtherServices /> },
        { path: "test", element: <TestComponent /> },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { element: <Navigate to="/auth/login" /> },
        { path: "login", element: <Loginpage /> },
        { path: "changepassword/:id", element: <ChangePassword /> },
        { path: "forgotpassword", element: <ForgotPassword /> },
        { path: "otp", element: <OTPPage /> },
      ],
    },

    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/ditec/dashboard" />, index: true },
        // { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
  ]);
  return <>{dashboardRoutes}</>;
};

export default DashboardRoutes;
