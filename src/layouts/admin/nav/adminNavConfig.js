import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import CheckIcon from "@mui/icons-material/Check";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import SummarizeIcon from '@mui/icons-material/Summarize';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
const adminNavConfig = [

  {
    title: "dashboard",
    path: "/ditec/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "sub AUAs/KUAs",
    icon: <InsertChartIcon />,
    path: "/ditec/admin/pendingsubaua",
  },

  {
    title: "Reports",
    icon: <SummarizeIcon />,
    path: "/ditec/admin/dashboardreports",
    children: [
      {
        title: "Details Reports",
        path: "/ditec/admin/dashboardeachdetiles",
        icon: <SignalCellularAltIcon />,
      },
    ]
  },
  // {
  //   title: "Parameter",
  //   // path: "/ditec/admin/dashboard",
  //   icon: <DashboardIcon />,
  //   children: [
  //     {
  //       title: "Parameter Add",
  //       path: "/ditec/admin/addparameter",
  //       icon: <CheckIcon />,
  //     },
  //     {
  //       title: "Parameter View",
  //       path: "/ditec/admin/viewparameter",
  //       icon: <PendingActionsIcon />,
  //     },
  //   ],
  // },
  // {
  //   title: "Service Charges",
  //   // path: "/ditec/admin/dashboard",
  //   icon: <DashboardIcon />,
  //   children: [
  //     {
  //       title: "Service Charges Add",
  //       path: "/ditec/admin/addservicecharges",
  //       icon: <CheckIcon />,
  //     },
  //     {
  //       title: "Service Charge View",
  //       path: "/ditec/admin/viewservicecharges",
  //       icon: <PendingActionsIcon />,
  //     },
  //   ],
  // },

  // children: [
  //   {
  //     title: "Onboarding Status",
  //     path: "/ditec/admin/pendingsubaua",
  //     icon: <CheckIcon />,
  //   },
  // {
  //   title: "Pending Approval",
  //   path: "/ditec/admin/pendingsubaua",
  //   icon: <PendingActionsIcon />,
  // },
  // ],
];

export default adminNavConfig;
