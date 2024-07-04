import { useDispatch, useSelector } from "react-redux";
import AdminRoutes from "./route/AdminRoutes";
import DashboardRoutes from "./route/DashboardRoutes";
import SubauaRoutes from "./route/SubauaRoutes";
import SubauaWDRoutes from "./route/SubauaWDRoutes";
import SuperAdminRoutes from "./route/SuperAdminRoutes";
import { useEffect } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { dialogService } from "./redux/admin/adminActions";
import { ADMIN_DIALOG_OPEN } from "./redux/admin/adminConstants";
import { useLocation } from "react-router-dom";

const USER = "ADMIN";

const Router = () => {
  const stateData = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // const location = useLocation();

  const { data } = stateData;
  console.log("user Defineeeeeeee", data);

  // useEffect(() => {
  //   let timeInterval;

  //   const delayedFunction = async () => {
  //     await new Promise((resolve) => {
  //       timeInterval = setTimeout(() => {
  //         console.log("your session has expired");

  //         const dialogData = {
  //           icon: <HighlightOffIcon sx={{ height: 60, width: 60 }} />,
  //           title: "Expired",
  //           content: "Session Expired!",
  //           width: "xs",
  //           color: "red",
  //           path: "/ditec/dashboard",
  //         };

  //         dispatch({ type: ADMIN_DIALOG_OPEN });
  //         dispatch(dialogService(dialogData));

  //         resolve();
  //       }, 20 * 60 * 1000); // 20 minutes in milliseconds
  //     });
  //   };

  //   if (data?.user) {
  //     delayedFunction();
  //   }

  //   return () => {
  //     clearTimeout(timeInterval);
  //   };
  // }, []);

  if (data?.user === "ADMIN") {
    return <AdminRoutes />;
  } else if (data?.user === "SUPERADMIN") {
    return <SuperAdminRoutes />;
  } else if (data?.user === "SUBAUA" && data?.document === false) {
    return <SubauaWDRoutes />;
  } else if (data?.user === "SUBAUA" && data?.document === true) {
    // return <SubauaRoutes />;
    return <SubauaWDRoutes />;
  } else {
    return <DashboardRoutes />;
  }
};

export default Router;
