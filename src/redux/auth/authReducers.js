import { getCookies, setCookies } from "../../helper/CookieStorage";
import { saveState } from "../../helper/SessionStorage";
import {
  AUTH_CHANGE_PASSWORD,
  AUTH_ERROR,
  AUTH_FORGOT_PASSWORD,
  AUTH_LOADING_OFF,
  AUTH_LOADING_ON,
  AUTH_LOGIN,
  AUTH_REQUEST_OTP,
  AUTH_SEND_OTP,
  AUTH_SUBAUA_CHANGEPASSWORD,
  EMPTY_AUTH_STATE,
} from "./authConstants";

const initialState = {
  status: "done",
  data: getCookies("Role", {}),
  response: {},
  loggedIn: false,
  isLoading: false,
  error: {},
  buttonLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      setCookies("Role", {
        document: action.payload.responseData?.documentstatus,
        user: action.payload.responseData?.user,
        firstUser: action.payload.responseData?.firsttimeuser,
      });
      saveState("subauaid", action.payload.responseData?.userName);
      saveState("token", action.payload.responseData?.token)
      saveState("subauaname", action.payload.responseData?.subauaname)
    
      return {
        ...state,
        data: action.payload.responseData?.user,
        response: action.payload,
        loggedIn: true,
        isLoading: true,
      };
    case AUTH_ERROR:
      // setCookies('Role', action.payload);
      return { ...state, error: action.payload, isLoading: true };
    case AUTH_FORGOT_PASSWORD:
      return { ...state, response: action.payload, isLoading: true };
    case AUTH_REQUEST_OTP:
      return { ...state, response: action.payload, isLoading: true };
    case AUTH_SEND_OTP:
      return { ...state, response: action.payload, isLoading: true };
    case AUTH_CHANGE_PASSWORD:
      return { ...state, response: action.payload, isLoading: true };

    case AUTH_SUBAUA_CHANGEPASSWORD:
      return { ...state, response: action.payload, isLoading: true };

    case AUTH_LOADING_ON:
      return { ...state, buttonLoading: true };
    case AUTH_LOADING_OFF:
      return { ...state, buttonLoading: false };
    case EMPTY_AUTH_STATE:
      return { ...state, loggedIn: false, data: {}, error: {}, response: {} };
    default: {
      return state;
    }
  }
};
