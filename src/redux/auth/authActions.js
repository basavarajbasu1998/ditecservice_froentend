import axios from "axios";
import { environmentalURL } from "../../environmentalURL";
import { ADMIN_ERROR_STATE } from "../admin/adminConstants";
import {
  AUTH_CHANGE_PASSWORD,
  AUTH_LOADING_OFF,
  AUTH_LOADING_ON,
  AUTH_LOGIN,
  AUTH_REQUEST_OTP,
  AUTH_SUBAUA_CHANGEPASSWORD,
} from "./authConstants";
import { loadState } from "../../helper/SessionStorage";



export const getLogin = (data) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING_ON });
  await axios
    .post(`${environmentalURL}/auth/subaualogin`, data


    )
    .then((res) => {
      console.log(res.data);
      if (res.data?.code === 1000) {
        if (res.data.responseData.user === "SUBAUA") {
          if (res.data.responseData.firstUser === 0) {
            window.location.replace("/ditec/subaua/changepassword");
          }
          window.location.replace("/ditec/subaua/onboardingmanual");
        } else if (res.data.responseData.user === "ADMIN") {
          window.location.replace("/ditec/admin/dashboard");
        }
      } else {
      }
      // dispatch({ type: AUTH_LOADING_OFF });
      dispatch({ type: AUTH_LOGIN, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const forgotPassword = (data, resetForm) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING_ON });
  await axios
    .post(`${environmentalURL}/subauaforgotpsw`, data)
    .then((res) => {
      console.log(res.data);
      resetForm();
      dispatch({ type: AUTH_LOADING_OFF });
      dispatch({ type: AUTH_LOGIN, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const changePassword = (data, resetForm) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING_ON });
  await axios
    .post(`${environmentalURL}/forgotpasswordchange`, data)
    .then((res) => {
      console.log(res.data);
      resetForm();
      dispatch({ type: AUTH_LOADING_OFF });
      dispatch({ type: AUTH_CHANGE_PASSWORD, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const requestOTP = (data) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING_ON });
  await axios
    .post(`${environmentalURL}/auth/otp`, data)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: AUTH_LOADING_OFF });
      dispatch({ type: AUTH_REQUEST_OTP, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const resendOTP = (data) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING_ON });
  await axios
    .post(`${environmentalURL}/auth/resendotp`, data)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: AUTH_LOADING_OFF });
      dispatch({ type: AUTH_REQUEST_OTP, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const sendOTP = (data) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING_ON });
  await axios
    .post(`${environmentalURL}/auth/enterotp`, data)
    .then((res) => {
      console.log(res.data);
      if (res.data?.code === 1000) {
        window.location.replace("/");
      } else {
      }
      dispatch({ type: AUTH_LOADING_OFF });
      dispatch({ type: AUTH_LOGIN, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const getsubauaChangePassword = (data) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING_ON });
  await axios
    .post(`${environmentalURL}/subauachangepsw`, data)
    .then((res) => {
      console.log("axioessssssssssssssssssssssssssssssssssss", res.data);
      dispatch({ type: AUTH_LOADING_OFF });
      dispatch({ type: AUTH_SUBAUA_CHANGEPASSWORD, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};
