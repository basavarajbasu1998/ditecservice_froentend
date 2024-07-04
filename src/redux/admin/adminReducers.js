import {
  ACCOUNT_STATUS,
  ADMIN_DIALOG_CLOSE,
  ADMIN_DIALOG_DATA,
  ADMIN_DIALOG_OPEN,
  ADMIN_DOCUMENT_STATUS,
  ADMIN_ERROR_STATE,
  CLEAR_STATE,
  FILE_UPLOAD,
  GET_SUBAUA,
  LOADING_OFF,
  LOADING_ON,
  SUBAUA_API_KEY,
  SUBAUA_APPROVAL,
  SUBAUA_DATA,
  SUBAUA_FORM_APPROVED,
  SUBAUA_FORM_DOCUMENTS,
  SUBAUA_GEN_API,
  SUBAUA_PRO_KEY,
} from "./adminConstants";

const initialState = {
  status: "Done",
  data: {},
  doneStatus: {},
  auaData: {},
  cerdata: {},
  documentStatus: {},
  formApproved: {},
  isLoading: false,
  buttonLoading: false,
  dialogState: false,
  dialogData: {},
  genapikey: {},
  apikey: {},
  accountstatus: {},
  error: {},
  //<===== Reports =======>//
  allTransactionTotal: {},
};

export const adminReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBAUA:
      return {
        ...state,
        data: action.payload.responseData,
        isLoading: true,
      };
    case SUBAUA_DATA:
      return {
        ...state,
        auaData: action.payload,
        isLoading: true,
      };
    case SUBAUA_APPROVAL:
      return {
        ...state,
        formApproved: action.payload,
        isLoading: true,
      };
    case ADMIN_DOCUMENT_STATUS:
      return {
        ...state,
        documentStatus: action.payload,
        isLoading: true,
      };
    case SUBAUA_FORM_APPROVED:
      return {
        ...state,
        doneStatus: action.payload,
        isLoading: true,
      };
    case SUBAUA_FORM_DOCUMENTS:
      return {
        ...state,
        cerdata: action.payload,
        isLoading: true,
      };
    case FILE_UPLOAD:
      return {
        ...state,
        doneStatus: action.payload,
        isLoading: true,
      };

    case SUBAUA_GEN_API:
      return {
        ...state,
        genapikey: action.payload,
        isLoading: true,
      };

    case SUBAUA_API_KEY:
      return {
        ...state,
        apikey: action.payload,
        isLoading: true,
      };


    case ACCOUNT_STATUS:
      return {
        ...state,
        accountstatus: action.payload,
        isLoading: true,
      }
    // ===================== Reports ===========================

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
        error: {},
        doneStatus: {},
      };
    case ADMIN_ERROR_STATE:
      return {
        ...state,
        error: action.payload,
      };
    case ADMIN_DIALOG_DATA:
      return {
        ...state,
        dialogData: action.payload,
      };
    case ADMIN_DIALOG_OPEN:
      return {
        ...state,
        dialogState: true,
      };
    case ADMIN_DIALOG_CLOSE:
      return {
        ...state,
        dialogState: false,
      };
    default:
      return state;
  }
};
