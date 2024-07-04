import axios from "axios";
import { environmentalURL } from "../../environmentalURL";
import {
  SUPERADMIN_ADD_DOCUMENTS,
  SUPERADMIN_DELETE_DOCUMENTS,
  SUPERADMIN_LOADING_OFF,
  SUPERADMIN_LOADING_ON,
  SUPERADMIN_UPDATE_DOCUMENTS,
  SUPERADMIN_VIEW_DOCUMENTS,
} from "./superAdminConstants";
import { ADMIN_ERROR_STATE } from "../admin/adminConstants";

export const saAllDocumentsView = () => async (dispatch) => {
  dispatch({ type: SUPERADMIN_LOADING_ON });
  await axios
    .get(`${environmentalURL}/adminuser/subAuacertifactemasteralldata`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SUPERADMIN_VIEW_DOCUMENTS, payload: res.data });
      dispatch({ type: SUPERADMIN_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const saAddDocuments = (data, reset) => async (dispatch) => {
  dispatch({ type: SUPERADMIN_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/subAuacertifactemaster`, data)
    .then((res) => {
      console.log(res.data);
      // reset();
      dispatch({ type: SUPERADMIN_ADD_DOCUMENTS, payload: res.data });
      dispatch({ type: SUPERADMIN_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const saDeleteDocuments = (data) => async (dispatch) => {
  console.log("action data", data);
  dispatch({ type: SUPERADMIN_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/subauacertifactemasterdelete`, data)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SUPERADMIN_DELETE_DOCUMENTS, payload: res.data });
      dispatch({ type: SUPERADMIN_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const saUpdateDocuments = (data) => async (dispatch) => {
  console.log("action data", data);
  dispatch({ type: SUPERADMIN_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/subAuacertifactemasterupdate`, data)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SUPERADMIN_UPDATE_DOCUMENTS, payload: res.data });
      dispatch({ type: SUPERADMIN_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};
