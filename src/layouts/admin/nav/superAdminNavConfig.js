import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import CheckIcon from "@mui/icons-material/Check";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";


const superadminNavConfig = [
  {
    title: "sub AUAs/KUAs",
    icon: <InsertChartIcon />,
    path: "/ditec/superadmin/pendingsubaua",
  },
  {
    title: "dashboard",
    path: "/ditec/superadmin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Parameter",
    icon: <DashboardIcon />,

    children: [
      {
        title: "Parameter Add",
        path: "/ditec/superadmin/addparameter",
        icon: <CheckIcon />,
      },
      {
        title: "Parameter View",
        path: "/ditec/superadmin/viewparameter",
        icon: <PendingActionsIcon />,
      },
    ],
  },
  {
    title: "Service Charges",
    icon: <DashboardIcon />,
    children: [
      {
        title: "Service Charges Add",
        path: "/ditec/superadmin/addservicecharges",
        icon: <CheckIcon />,
      },
      {
        title: "Service Charge View",
        path: "/ditec/superadmin/viewservicecharges",
        icon: <PendingActionsIcon />,
      },
    ],
  },
  {
    title: "Documents",
    icon: <InsertDriveFileIcon />,
    children: [
      {
        title: "Documents Master",
        path: "/ditec/superadmin/documentmaster",
        icon: <CheckIcon />,
      },
      {
        title: "Documents Sub",
        path: "/ditec/superadmin/documentsub",
        icon: <PendingActionsIcon />,
      },
    ],
  },
];
export default superadminNavConfig;
