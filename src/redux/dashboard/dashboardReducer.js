import {
  CLEAR_STATE,
  LOADING_OFF,
  LOADING_ON,
  SUB_AUA_DAILY_COUNT,
  SUB_AUA_REGISTRATION,
} from "./dashboardConstant";

const initialState = {
  status: "Done",
  data: {},
  subAuaDailyCount: {},
  isLoading: false,
  buttonLoading: false,
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUB_AUA_REGISTRATION:
      return {
        ...state,
        data: action.payload,
        isLoading: true,
      };
    case SUB_AUA_DAILY_COUNT:
      return {
        ...state,
        subAuaDailyCount: action.payload.responseData,
        isLoading: true,
      };
    case LOADING_ON:
      return {
        ...state,
        buttonLoading: true,
      };
    case LOADING_OFF:
      return {
        ...state,
        buttonLoading: false,
      };
    case CLEAR_STATE:
      return {
        ...state,
        data: {},
      };
    default:
      console.log("working default state");
      return state;
  }
};
