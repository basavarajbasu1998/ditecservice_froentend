import axios from "axios";
import { environmentalURL, serviceURL } from "../../environmentalURL";
import {
  ACCOUNT_STATUS,
  ADMIN_DIALOG_DATA,
  ADMIN_DOCUMENT_STATUS,
  ADMIN_ERROR_STATE,
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
} from "./adminConstants";
import { reach } from "yup";
import { loadState } from "../../helper/SessionStorage";


const token = loadState("token", "Default Value");

export const subAUAgetData = () => async (dispatch) => {
  dispatch({ type: LOADING_ON });
  await axios
    .get(`${environmentalURL}/adminuser/subuseralldatatable`,

      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_SUBAUA, payload: res.data });
      dispatch({ type: LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const subauaData = (data) => async (dispatch) => {
  console.log("action subaua", data);
  dispatch({ type: LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/subuserdatabyid`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then((res) => {
      console.log(res.data);
      // changedData(data.status);
      dispatch({ type: SUBAUA_DATA, payload: res.data });
      dispatch({ type: LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const subAUApproval = (data) => async (dispatch) => {
  console.log("action", data);
  dispatch({ type: LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/approvereq`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then((res) => {
      console.log(res.data);
      // changedData(data.status);
      dispatch({
        type: SUBAUA_APPROVAL,
        payload: res.data,
      });
      dispatch({ type: LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const documentsStatus = (data) => async (dispatch) => {
  console.log("action", data);
  dispatch({ type: LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/allcertificatestatus`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then((res) => {
      console.log("all certificate cordinations", res.data,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      // changedData(data.status);
      dispatch({
        type: ADMIN_DOCUMENT_STATUS,
        payload: res.data.responseData,
      });
      dispatch({ type: LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const subAUAFormDownload = (subauaid, formid) => async (dispatch) => {
  dispatch({ type: LOADING_ON });
  await axios
    .get(`${serviceURL}adminuser/getpdffile/${subauaid}/${formid}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then((res) => {
      console.log(res.data);
      // changedData(data.status);
      dispatch({ type: SUBAUA_FORM_APPROVED, payload: res.data });
      dispatch({ type: LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const subAUAFormApproved = (data) => async (dispatch) => {
  console.log("action", data);
  dispatch({ type: LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/eachcertifacetestatus`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then((res) => {
      console.log(res.data);
      const allData = {
        ...res.data,
        status: data?.status,
        fileId: data?.certificateId,
      };
      console.log(allData);
      // changedData(data.status);
      dispatch({ type: SUBAUA_FORM_APPROVED, payload: allData });
      dispatch({ type: LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const subauaFileUpload = (data) => async (dispatch) => {
  console.log("comming action here");
  dispatch({ type: LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/uploadcertifacte`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      },
    })
    .then((res) => {
      console.log(res.data);

      dispatch({ type: FILE_UPLOAD, payload: res.data });
      dispatch({ type: LOADING_OFF });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const documentsList = (data) => async (dispatch) => {
  await axios
    .post(`${environmentalURL}/adminuser/subAuacertifactemasteralldata`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

    )
    .then((res) => {
      console.log(res.data);
      // changedData(data.status);
      dispatch({ type: SUBAUA_FORM_DOCUMENTS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const generateApi = (data) => async (dispatch) => {
  await axios
    .post(`${environmentalURL}/adminuser/apikeys`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log("apiiiiiii", res.data);
      dispatch({ type: SUBAUA_GEN_API, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADMIN_ERROR_STATE, payload: err });
    });
};

export const getGenSubAuaAPI = (data) => async (dispatch) => {
  dispatch({ type: LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/subauakey`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log("apikeyyyyyyyyyyyyyyyyyyyyy", res.data);
      dispatch({ type: LOADING_OFF });
      dispatch({ type: SUBAUA_API_KEY, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};




export const getAccountStatus = (data) => async (dispatch) => {
  dispatch({ type: LOADING_ON });
  await axios
    .post(`${environmentalURL}/adminuser/accountdetiles`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((res) => {
      console.log("apikeyyyyyyyyyyyyyyyyyyyyy", res.data);
      dispatch({ type: LOADING_OFF });
      dispatch({ type: ACCOUNT_STATUS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};







export const dialogService = (data) => (dispatch) => {
  dispatch({ type: ADMIN_DIALOG_DATA, payload: data });
};
