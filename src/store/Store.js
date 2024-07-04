import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../redux/auth/authReducers";
import { dashboardReducer } from "../redux/dashboard/dashboardReducer";
import { adminReducers } from "../redux/admin/adminReducers";
import { subAUAReducer } from "../redux/subaua/subauaReducer";
import { superAdminReducers } from "../redux/superadmin/superAdminReducers";
import { reportsdReducer } from "../redux/reports/reportReducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  admin: adminReducers,
  subaua: subAUAReducer,
  superadmin: superAdminReducers,
  report: reportsdReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
