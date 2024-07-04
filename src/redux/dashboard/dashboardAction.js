import axios from "axios";
import { environmentalURL } from "../../environmentalURL";
import {
  LOADING_OFF,
  LOADING_ON,
  SUB_AUA_DAILY_COUNT,
  SUB_AUA_REGISTRATION,
} from "./dashboardConstant";
import { ADMIN_ERROR_STATE } from "../admin/adminConstants";
import { loadState } from "../../helper/SessionStorage";

const token = loadState("token", "Default Value");

export const subauaRegistration = (data, resetForm) => async (dispatch) => {
  console.log("enter into the action");
  dispatch({ type: LOADING_ON });
  await axios
    .post(`${environmentalURL}/auth/subauadata`, data)
    .then((res) => {
      console.log(res.data);
      resetForm();
      dispatch({ type: SUB_AUA_REGISTRATION, payload: res.data });
      dispatch({ type: LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const getDailyWiseCount = () => async (dispatch) => {
  dispatch({ type: LOADING_ON });
  await axios
    .get(`${environmentalURL}/auth/monthlywisechartdata`,)
    .then((res) => {
      console.log("axiossssssss data", res.data);
      dispatch({ type: SUB_AUA_DAILY_COUNT, payload: res.data });
      dispatch({ type: LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};
