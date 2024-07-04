// import React, { lazy } from "react";
// import { useSelector } from "react-redux";
// import { Navigate, useRoutes } from "react-router-dom";
// import ChangePasswordDialog from "../pages/changepassworddialog/ChangePasswordDialog";
// import Profile from "../subaua/Profile";
// import SubauaBilling from "../subaua/SubauaBilling";
// import SubauaManual from "../subaua/SubauaManual";
// import CertificateDownload from "../subaua/certificate/CertificateDownload";
// import CertificateUpload1 from "../subaua/certificate/CertificateUpload1";
// import ModeOfTransaction from "../subaua/paymentmechanism/ModeOfTransaction";
// import PaymentMechanism from "../subaua/paymentmechanism/PaymentMechanism";
// import TransactionModel from "../subaua/paymentmechanism/transactionModel/TransactionModel";
// import ChangePassword from "../pages/changepassword/ChangePassword";
// // import SubAuaChangePassword from "../pages/suauachangepassword/SubAuaChangePassword";
// import SubAuaChangePasswordForm from "../pages/suauachangepassword/SubAuaChangePasswordForm";
// import Commercials from "../subaua/paymentmechanism/commercials/Commercials";
// // import SubauaDashboard from "../subaua/SubauaDashboard";
// // import SubauaLayout from "../layouts/subaua/SubauaLayout";

// const SubauaDashboard = lazy(() => import("../subaua/SubauaDashboard"));
// const SubauaLayout = lazy(() => import("../layouts/subaua/SubauaLayout"));
// const Page404 = lazy(() => import("../error/Page404"));
// const SimpleLayout = lazy(() => import("../layouts/simple/SimpleLayout"));

// const SubauaWDRoutes = () => {
//   const stateData = useSelector((state) => state.auth);

//   const { data, response } = stateData;

//   const documents = response.documentstatus;


//   console.log("login dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", data)

//   const subauaWDRoutes = useRoutes([
//     {
//       path: "/ditec/subaua",
//       element: <SubauaLayout />,
//       children: [
//         {
//           element: <Navigate to="/ditec/subaua/onboardingmanual" />,
//           index: true,
//         },
//         { path: "certificateupload", element: <CertificateUpload1 /> },
//         { path: "certificatedownload", element: <CertificateDownload /> },
//         { path: "onboardingmanual", element: <SubauaManual /> },
//         { path: "profile", element: <Profile /> },
//         {
//           path: "paymentmechanism",
//           element: <PaymentMechanism />,
//         },
//         // { path: "changepassword", element: <ChangePasswordDialog /> },
//         { path: "subauachangepassword", element: <ChangePassword /> },
//         { path: "subauachangepassword", element: <SubAuaChangePasswordForm /> },
//         { path: "transactionmodel", element: <TransactionModel /> },
//         { path: "modeoftransaction", element: <ModeOfTransaction /> },
//         { path: "subauabilling", element: <SubauaBilling /> },
//         { path: "commercials", element: <Commercials /> },
//       ],
//     },

//     {
//       element: <SimpleLayout />,
//       children: [
//         {
//           element:
//             data?.firstUser === 1 ? (
//               <Navigate to="/ditec/subaua/onboardingmanual" />
//             ) : (
//               <Navigate to="/ditec/subaua/changepassword" />
//               // <Navigate to="/ditec/subaua/onboardingmanual" />
//             ),
//           index: true,
//         },
//         { path: "changepassword", element: <ChangePasswordDialog /> },

//         { path: "404", element: <Page404 /> },

//         { path: "*", element: <Navigate to="/404" /> },
//       ],
//     },


//   ]);
//   return <>{subauaWDRoutes}</>;
// };

// export default SubauaWDRoutes;



import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";
import ChangePasswordDialog from "../pages/changepassworddialog/ChangePasswordDialog";
import Profile from "../subaua/Profile";
import SubauaBilling from "../subaua/SubauaBilling";
import SubauaManual from "../subaua/SubauaManual";
import CertificateDownload from "../subaua/certificate/CertificateDownload";
import CertificateUpload1 from "../subaua/certificate/CertificateUpload1";
import ModeOfTransaction from "../subaua/paymentmechanism/ModeOfTransaction";
import PaymentMechanism from "../subaua/paymentmechanism/PaymentMechanism";
import TransactionModel from "../subaua/paymentmechanism/transactionModel/TransactionModel";
import ChangePassword from "../pages/changepassword/ChangePassword";
import SubAuaChangePasswordForm from "../pages/suauachangepassword/SubAuaChangePasswordForm";
import Commercials from "../subaua/paymentmechanism/commercials/Commercials";

const SubauaDashboard = lazy(() => import("../subaua/SubauaDashboard"));
const SubauaLayout = lazy(() => import("../layouts/subaua/SubauaLayout"));
const Page404 = lazy(() => import("../error/Page404"));
const SimpleLayout = lazy(() => import("../layouts/simple/SimpleLayout"));

const SubauaWDRoutes = () => {
  const stateData = useSelector((state) => state.auth);

  const { data, response } = stateData;

  const documents = response?.firstUser;

  console.log("login dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", data);

  const subauaWDRoutes = useRoutes([
    {
      path: "/ditec/subaua",
      element: <SubauaLayout />,
      children: [
        {
          element: <Navigate to="/ditec/subaua/onboardingmanual" />,
          index: true,
        },
        { path: "changepassword", element: <ChangePasswordDialog /> },
        { path: "certificateupload", element: <CertificateUpload1 /> },
        { path: "certificatedownload", element: <CertificateDownload /> },
        { path: "onboardingmanual", element: <SubauaManual /> },
        { path: "profile", element: <Profile /> },
        { path: "paymentmechanism", element: <PaymentMechanism /> },
        // { path: "subauachangepassword", element: <ChangePassword /> },
        { path: "subauachangepassword", element: <SubAuaChangePasswordForm /> },
        { path: "transactionmodel", element: <TransactionModel /> },
        { path: "modeoftransaction", element: <ModeOfTransaction /> },
        { path: "subauabilling", element: <SubauaBilling /> },
        { path: "commercials", element: <Commercials /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        {
          element:
            documents === 0 ? (
              <Navigate to="/ditec/subaua/changepassword" />
            ) : (
              <Navigate to="/ditec/subaua/onboardingmanual" />
            ),
          index: true,
        },
        // { path: "changepassword", element: <ChangePasswordDialog /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
  ]);

  return <>{subauaWDRoutes}</>;
};

export default SubauaWDRoutes;

