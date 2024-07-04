import {
  SUB_AUA_CHANGEPASSWORD,
  SUB_AUA_CLEAR_STATE,
  SUB_AUA_GET_ALL_NOTIFICATION,
  SUB_AUA_INVOICE_GENERATOR,
  SUB_AUA_LOADING_OFF,
  SUB_AUA_LOADING_ON,
  SUB_AUA_PAYMENT_DETAILS_NAVIGATE,
  SUB_AUA_SUCCESS_STATUS,
  SUB_AUA_TRACKER,
  SUB_AUA_TRANSACTIONAL_MODEL_AMOUNT,
} from "./subauaConstant";

const initialState = {
  status: "Done",
  tracker: {},
  doneStatus: {},
  response: {},
  allNotifications: {},
  afterPaymentNavigate: {},
  transactionModelAmount: {},
  invoice: {},
  isLoading: false,
  buttonLoading: false,
};

export const subAUAReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUB_AUA_TRACKER:
      return {
        ...state,
        tracker: action.payload.responseData[0],
        isLoading: true,
      };
    case SUB_AUA_SUCCESS_STATUS:
      return { ...state, doneStatus: action.payload, isLoading: true };
    case SUB_AUA_CHANGEPASSWORD:
      return { ...state, response: action.payload, isLoading: true };
    case SUB_AUA_GET_ALL_NOTIFICATION:
      return {
        ...state,
        allNotifications: action.payload.responseData,
        isLoading: true,
      };
    case SUB_AUA_PAYMENT_DETAILS_NAVIGATE:
      return {
        ...state,
        afterPaymentNavigate: action.payload.responseData,
        isLoading: true,
      };
    case SUB_AUA_TRANSACTIONAL_MODEL_AMOUNT:
      return {
        ...state,
        transactionModelAmount: action.payload,
        isLoading: true,
      };
    case SUB_AUA_INVOICE_GENERATOR:
      return {
        ...state,
        invoice: action.payload?.responseData,
        isLoading: true,
      };
    case SUB_AUA_LOADING_ON:
      return { ...state, buttonLoading: true };
    case SUB_AUA_LOADING_OFF:
      return { ...state, buttonLoading: false };
    case SUB_AUA_CLEAR_STATE:
      return { ...state, buttonLoading: false, response: {}, doneStatus: {} };
    default:
      return state;
  }
};
