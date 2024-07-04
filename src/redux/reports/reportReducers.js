import {
  GET_ALL_SUBAUA_COUNT,
  GET_AUA_ALLSUBAUA,
  GET_AUA_AUTH_DONUTCHART_TODAYWISE,
  GET_AUA_AUTH_DONUTCHART_YEARWISE,
  GET_AUA_AUTH_MONTHLY_WISE,
  GET_AUA_EKYC_DONUTCHART_TODAYWISE,
  GET_AUA_EKYC_DONUTCHART_YEARWISE,
  GET_AUA_EKYC_MONTHLY_WISE,
  GET_AUA_TODAY_EKYC_TRANSACTION_COUNT,
  GET_AUA_TODAY_TOTAL_TRANSACTION_COUNT,
  GET_AUA_TODAY_TRANSACTION_COUNT,
  GET_AUA_TOTAL_TRANSACTION_COUNT,
  GET_AUA_YEARWISE_COUNT,
  GET_INVOICE_DETILES,
  GET_TRANS_INVOICE,
  GET_TRANS_INVOICE_DETILES,
  HIIIIIII,
  INVOICE_EDIT_DETILES,
  INVOICE_PRINT_DETILES,
  ORGLIST,
  PAYMENT_PLANS_VIEW,
  REPORT_CLEAR_STATE,
  REPORT_LIST_DASHBOARD,
  REPORT_LOADING_OFF,
  REPORT_LOADING_ON,
} from "./reportConstant";

const initialState = {
  status: "Done",
  subauaCount: {},
  todaySubauaCount: {},
  totalSubauaCount: {},
  todayekycSubauaCount: {},
  yearSubauaCount: {},
  monthlyauthcount: {},
  monthlyekyccount: {},
  auayeardonutcharts: {},
  kuayeardonutcharts: {},
  auatodaydonutcharts: {},
  kuatodaydonutcharts: {},
  subauatodayallcount: {},
  transinvoice: {},
  transinvoicedetiles: {},
  dashboardlist: {},
  editinvoice: {},
  allsubaua: {},
  paymentplansview: {},
  orglist: {},
  isLoading: false,
  buttonLoading: false,
};

export const reportsdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SUBAUA_COUNT:
      return {
        ...state,
        subauaCount: action.payload.responseData,
        isLoading: true,
      };
    case GET_AUA_TODAY_TRANSACTION_COUNT:
      return {
        ...state,
        todaySubauaCount: action.payload.responseData,
        isLoading: true,
      };
    case GET_AUA_TOTAL_TRANSACTION_COUNT:
      return {
        ...state,
        totalSubauaCount: action.payload.responseData,
        isLoading: true,
      };


    case GET_AUA_TODAY_TOTAL_TRANSACTION_COUNT:
      return {
        ...state,
        subauatodayallcount: action.payload.responseData,
        isLoading: true,
      };

    case GET_AUA_TODAY_EKYC_TRANSACTION_COUNT:
      return {
        ...state,
        todayekycSubauaCount: action.payload.responseData,
        isLoading: true,
      };

    case GET_AUA_YEARWISE_COUNT:
      return {
        ...state,
        yearSubauaCount: action.payload.responseData,
        isLoading: true,
      };

    case GET_AUA_AUTH_MONTHLY_WISE:
      return {
        ...state,
        monthlyauthcount: action.payload.responseData,
        isLoading: true,
      };

    case GET_AUA_EKYC_MONTHLY_WISE:
      return {
        ...state,
        monthlyekyccount: action.payload.responseData,
        isLoading: true,
      };



    case REPORT_LIST_DASHBOARD:
      return {
        ...state,
        dashboardlist: action.payload.responseData,
        isLoading: true,
      };


    case GET_AUA_AUTH_DONUTCHART_YEARWISE:
      return {
        ...state,
        auayeardonutcharts: action.payload.responseData,
        isLoading: true,
      };

    case GET_AUA_EKYC_DONUTCHART_YEARWISE:
      return {
        ...state,
        kuayeardonutcharts: action.payload.responseData,
        isLoading: true,
      };

    case GET_AUA_AUTH_DONUTCHART_TODAYWISE:
      return {
        ...state,
        auatodaydonutcharts: action.payload.responseData,
        isLoading: true,
      };

    case GET_AUA_EKYC_DONUTCHART_TODAYWISE:
      return {
        ...state,
        kuatodaydonutcharts: action.payload.responseData,
        isLoading: true,
      };

    case GET_AUA_ALLSUBAUA:
      return {
        ...state,
        allsubaua: action.payload.responseData,
        isLoading: true,
      };

    case GET_TRANS_INVOICE:
      return {
        transinvoice: action.payload.responseData,
        isLoading: true,
      }

    case GET_INVOICE_DETILES:
      return {
        transinvoicedetiles: action.payload.responseData,
        isLoading: true,
      }

    case INVOICE_EDIT_DETILES:
      return {
        editinvoice: action.payload.responseData,
        isLoading: true
      }

    case INVOICE_PRINT_DETILES:
      return {
        printinvoice: action.payload.responseData,
        isLoading: true
      }

    case PAYMENT_PLANS_VIEW:
      return {
        paymentplansview: action.payload.responseData,
        isLoading: true
      }

    case ORGLIST:
      return {
        orglist: action.payload.responseData,
        isLoading: true
      }

    case REPORT_LOADING_ON:
      return {
        ...state,
        buttonLoading: true,
      };
    case REPORT_LOADING_OFF:
      return {
        ...state,
        buttonLoading: false,
      };
    case REPORT_CLEAR_STATE:
      return {
        ...state,
        subauaCount: {},
        transinvoicedetiles: {},
        // paymentplansview: {},
      };
    default:
      return state;
  }
};
