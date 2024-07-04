import axios from "axios";
import {
  SUB_AUA_CHANGEPASSWORD,
  SUB_AUA_GET_ALL_NOTIFICATION,
  SUB_AUA_INVOICE_GENERATOR,
  SUB_AUA_LOADING_OFF,
  SUB_AUA_LOADING_ON,
  SUB_AUA_PAYMENT_DETAILS_NAVIGATE,
  SUB_AUA_SUCCESS_STATUS,
  SUB_AUA_TRACKER,
  SUB_AUA_TRANSACTIONAL_MODEL_AMOUNT,
} from "./subauaConstant";
import { environmentalURL } from "../../environmentalURL";
import { ADMIN_ERROR_STATE } from "../admin/adminConstants";
import { loadState } from "../../helper/SessionStorage";


const token = loadState("token", "Default Value");

export const subauaTrackers = (data) => async (dispatch) => {
  console.log("action trackerrrr dataaaaaa", data);
  await axios
    .post(`${environmentalURL}/adminuser/progresstatus`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SUB_AUA_TRACKER, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const subauaChangePassword = (data) => async (dispatch) => {
  dispatch({ type: SUB_AUA_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/subchangepassword`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SUB_AUA_CHANGEPASSWORD, payload: res.data });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    });
};

export const getAllNotification = (data) => async (dispatch) => {
  dispatch({ type: SUB_AUA_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/getallnotification`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SUB_AUA_GET_ALL_NOTIFICATION, payload: res.data });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    });
};

export const reduceNotificationCount = (data) => async (dispatch) => {
  dispatch({ type: SUB_AUA_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/notification`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log(res.data);

      // dispatch({ type: SUB_AUA_GET_ALL_NOTIFICATION, payload: res.data });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    });
};

export const paymentModeSelection = (data) => async (dispatch) => {
  dispatch({ type: SUB_AUA_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/subauaupdate`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SUB_AUA_SUCCESS_STATUS, payload: res.data });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    });
};

export const paymentDetails = (data) => async (dispatch) => {
  dispatch({ type: SUB_AUA_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/paymentmode`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SUB_AUA_SUCCESS_STATUS, payload: res.data });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    });
};

export const paymentNavigate = (data) => async (dispatch) => {
  dispatch({ type: SUB_AUA_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/paymentnavigate`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SUB_AUA_PAYMENT_DETAILS_NAVIGATE, payload: res.data });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    });
};

export const getTransactionModelAmount = (data) => async (dispatch) => {
  dispatch({ type: SUB_AUA_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/transactionamount`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SUB_AUA_TRANSACTIONAL_MODEL_AMOUNT, payload: res.data });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    });
};

export const generateInvoice = (data) => async (dispatch) => {
  dispatch({ type: SUB_AUA_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/invoice`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SUB_AUA_INVOICE_GENERATOR, payload: res.data });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
      dispatch({ type: SUB_AUA_LOADING_OFF });
    });
};
