import axios from "axios";
import {
  environmentalURL,
  reportsEnvironmentalURL,
} from "../../environmentalURL";
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
  REPORT_LIST_DASHBOARD,
  REPORT_LOADING_OFF,
  REPORT_LOADING_ON,
} from "./reportConstant";
import { ADMIN_ERROR_STATE } from "../admin/adminConstants";
import { loadState } from "../../helper/SessionStorage";

const token = loadState("token", "Default Value");

export const getSubauaCount = () => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .get(`${environmentalURL}/auth/allsubservice`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_ALL_SUBAUA_COUNT, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const getSubauaTodayTransactions = (request) => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/authtodaybarchartsubauadata`, request,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log("sub aua dataaaaaaaaaaaaaaaaaaaaaa", res.data);

      dispatch({ type: GET_AUA_TODAY_TRANSACTION_COUNT, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const getSubauaTotalTransactions = () => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .get(`${environmentalURL}/auth/totalbarchartsubauadata`)
    .then((res) => {
      console.log("sub aua dataaaaaaaaaaaaaaaaaaaaaa", res.data);

      dispatch({ type: GET_AUA_TOTAL_TRANSACTION_COUNT, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};



export const getSubauaTodayTotalTransactions = () => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .get(`${environmentalURL}/auth/todaytotalbarchartsubauadata`)
    .then((res) => {
      console.log("sub aua dataaaaaaaaaaaaaaaaaaaaaa", res.data);

      dispatch({ type: GET_AUA_TODAY_TOTAL_TRANSACTION_COUNT, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const getkuatodaybarchartsubauadata = (request) => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/kuatodaybarchartsubauadata`, request,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log("sub aua axiosssssssssssssssssssssssssssssssss", res.data);

      dispatch({
        type: GET_AUA_TODAY_EKYC_TRANSACTION_COUNT,
        payload: res.data,
      });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const getyearwisesubauacarddata = (request) => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/yearwisesubauacarddata`, request,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      dispatch({ type: GET_AUA_YEARWISE_COUNT, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const getauamonthlychartdata = (request) => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/auamonthlychartdata`, request,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      dispatch({ type: GET_AUA_AUTH_MONTHLY_WISE, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const getkuamonthlychartdata = (request) => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/kuamonthlychartdata`, request,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      dispatch({ type: GET_AUA_EKYC_MONTHLY_WISE, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const getauayeardonutcharts = (request) => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/auayeardonutcharts`, request,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      dispatch({ type: GET_AUA_AUTH_DONUTCHART_YEARWISE, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const getkuayeardonutcharts = (request) => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/kuayeardonutcharts`, request,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      dispatch({ type: GET_AUA_EKYC_DONUTCHART_YEARWISE, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const getauatodaydonutcharts = (request) => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/auatodaydonutcharts`, request,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      dispatch({ type: GET_AUA_AUTH_DONUTCHART_TODAYWISE, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const getkuatodaydonutcharts = (request) => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/kuatodaydonutcharts`, request, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      dispatch({ type: GET_AUA_EKYC_DONUTCHART_TODAYWISE, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const getallsubaua = () => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .get(`${environmentalURL}/adminuser/allsubaua`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log("axiossssssss data", res.data);
      dispatch({ type: GET_AUA_ALLSUBAUA, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};



//=========================================================================================


export const getTransinvoice = (request) => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/invoicetrans`, request,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log(res.data)
      dispatch({ type: GET_INVOICE_DETILES, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};


export const getTotalTransinvoicedetiles = (request) => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/eachinvoicetrans`, request,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      dispatch({ type: GET_INVOICE_DETILES, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};


export const getInvoiceEditTransinvoicedetiles = (request) => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/invoicedetiles`, request,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      dispatch({ type: INVOICE_EDIT_DETILES, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};



export const getPrintinvoicedetiles = (request) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${environmentalURL}/adminuser/invoicedetiles`,
      request,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'blob', // Set responseType to 'blob' to get the response as a blob
      }
    );

    // Assuming INVOICE_PRINT_DETILES is the action type to handle the PDF data
    dispatch({ type: INVOICE_PRINT_DETILES, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: ADMIN_ERROR_STATE, payload: err });
  }
};






export const getPaymnetplasview = (request) => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/paymnetplasview`, request,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log("res.data  res.data", res.data)
      dispatch({ type: PAYMENT_PLANS_VIEW, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};


export const getReportDashboard = (request) => async (dispatch) => {
  await axios.post(`${environmentalURL}/adminuser/dashboardreports`, request, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((res) => {
    console.log("res.data  res.data", res.data)
    dispatch({ type: REPORT_LIST_DASHBOARD, payload: res.data });
  }).catch((err) => {
    console.log(err);
    dispatch({ type: REPORT_LIST_DASHBOARD, payload: err });
  });





}





export const getOrglistsubaua = () => async (dispatch) => {
  // dispatch({ type: REPORT_LOADING_ON });
  await axios
    .get(`${environmentalURL}/adminuser/orglist`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log("axiossssssss data", res.data);
      dispatch({ type: ORGLIST, payload: res.data });
      // dispatch({ type: REPORT_LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};
