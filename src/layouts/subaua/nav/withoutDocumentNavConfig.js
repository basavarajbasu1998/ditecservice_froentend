import DownloadIcon from "@mui/icons-material/Download";
import SummarizeIcon from "@mui/icons-material/Summarize";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PaymentsIcon from "@mui/icons-material/Payments";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ContactlessIcon from "@mui/icons-material/Contactless";
import DescriptionIcon from "@mui/icons-material/Description";
import Person2Icon from "@mui/icons-material/Person2";
import DashboardIcon from "@mui/icons-material/Dashboard";

const withoutDocumentNavConfig = [

  {
    title: "Dashboard",
    path: "https://aua.assam.gov.in/auaportal",
    icon: <DashboardIcon />,
    target: "_blank",
  },
  {
    title: "Profile",
    path: "/ditec/subaua/profile",
    icon: <Person2Icon />,
  },

  {
    title: "Onboarding Manual",
    path: "/ditec/subaua/onboardingmanual",
    icon: <InsertDriveFileIcon />,
  },
  {
    title: "Onboarding Document",
    icon: <SummarizeIcon />,
    children: [
      {
        title: "Documents Download",
        icon: <DownloadIcon />,
        path: "/ditec/subaua/certificatedownload",
      },
      {
        title: "Documents Upload",
        icon: <UploadFileIcon />,
        path: "/ditec/subaua/certificateupload",
      },
    ],
  },

  {
    title: "Commercials Sub Aua",
    path: "/ditec/subaua/commercials",
    icon: <Person2Icon />,
  },

  // {
  //   title: "Payment mechanism",
  //   path: "/ditec/subaua/paymentmechanism",
  //   icon: <PaymentsIcon />,
  // },
  // {
  //   title: "Transaction Model",
  //   path: "/ditec/subaua/transactionmodel",
  //   icon: <ReceiptLongIcon />,
  // },
  // {
  //   title: "Mode of Transaction",
  //   path: "/ditec/subaua/modeoftransaction",
  //   icon: <ContactlessIcon />,
  // },
  // {
  //   title: "Invoice",
  //   path: "/ditec/subaua/invoice",
  //   icon: <DescriptionIcon />,
  // },
];

export default withoutDocumentNavConfig;
