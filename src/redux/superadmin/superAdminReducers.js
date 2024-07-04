import {
  SUPERADMIN_ADD_DOCUMENTS,
  SUPERADMIN_CLEAR_STATE,
  SUPERADMIN_DELETE_DOCUMENTS,
  SUPERADMIN_LOADING_OFF,
  SUPERADMIN_LOADING_ON,
  SUPERADMIN_UPDATE_DOCUMENTS,
  SUPERADMIN_VIEW_DOCUMENTS,
} from "./superAdminConstants";

const initialState = {
  status: "Done",
  documentsAllData: {},
  doneStatus: {},
  isLoading: false,
  buttonLoading: false,
};

export const superAdminReducers = (state = initialState, action) => {
  switch (action.type) {
    case SUPERADMIN_VIEW_DOCUMENTS:
      return {
        ...state,
        documentsAllData: action.payload.responseData,
        isLoading: true,
      };

    case SUPERADMIN_ADD_DOCUMENTS:
      return {
        ...state,
        doneStatus: action.payload,
        isLoading: true,
      };
    case SUPERADMIN_DELETE_DOCUMENTS:
      return {
        ...state,
        doneStatus: action.payload,
        isLoading: true,
      };
    case SUPERADMIN_UPDATE_DOCUMENTS:
      return {
        ...state,
        doneStatus: action.payload,
        isLoading: true,
      };

    case SUPERADMIN_LOADING_ON:
      return {
        ...state,
        buttonLoading: true,
      };
    case SUPERADMIN_LOADING_OFF:
      return {
        ...state,
        buttonLoading: false,
      };
    case SUPERADMIN_CLEAR_STATE:
      return {
        ...state,
        doneStatus: {},
      };
    default:
      return state;
  }
};
