import React, { useEffect } from "react";
import InvoicePdf from "./InvoicePdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Box, Button } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import { useDispatch, useSelector } from "react-redux";
import { generateInvoice } from "../../../redux/subaua/subauaAction";
import { loadState } from "../../../helper/SessionStorage";

const example = {
  organisationName: "Sample Organization",
  address: "130,main Street,Assam",
  pincode: "",
  managementName: "Surya",
  managementMobilenumber: "9909898787",
  managementEmail: "suryaprakashpallathur@gmail.com",
  subAuaId: "SAMSA11230123",
  invoiceNumber: "01232311",
  gstNumber: "12345",
  status: 0,
  subtotal: 465000.0,
  cgst: 41850.0,
  sgst: 41850.0,
  total: 548700.0,
  invoiceDate: "23-11-2023",
  intgrationInvoiceServiceCharges: [
    {
      id: 7598,
      mainService: "KUA OTP",
      subService: null,
      amount: "10000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7599,
      mainService: "APIs",
      subService: null,
      amount: "40000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7600,
      mainService: "PHP",
      subService: null,
      amount: "30000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7601,
      mainService: "KUA Fingerprint",
      subService: null,
      amount: "30000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7602,
      mainService: "Mobile",
      subService: null,
      amount: "55000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7603,
      mainService: "Dot Net",
      subService: null,
      amount: "30000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7604,
      mainService: "Java",
      subService: null,
      amount: "30000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7605,
      mainService: "KUA Iris",
      subService: null,
      amount: "30000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7606,
      mainService: "Thin Clients",
      subService: null,
      amount: "50000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7607,
      mainService: "Web",
      subService: null,
      amount: "45000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7608,
      mainService: "AUA Fingerprint",
      subService: null,
      amount: "30000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7609,
      mainService: "AUA Iris",
      subService: null,
      amount: "30000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7610,
      mainService: "Digital Signature",
      subService: null,
      amount: "45000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7610,
      mainService: "Digital Signature",
      subService: null,
      amount: "45000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7610,
      mainService: "Digital Signature",
      subService: null,
      amount: "45000",
      subAuaId: "SAMSA11230123",
    },
    {
      id: 7610,
      mainService: "Digital Signature",
      subService: null,
      amount: "45000",
      subAuaId: "SAMSA11230123",
    },
  ],
};

const Invoice = () => {
  const stateData = useSelector((state) => state.subaua);
  const dispatch = useDispatch();

  const retrievedValue = loadState("subauaid", "Default Value");

  const { invoice } = stateData;

  useEffect(() => {
    const request = {
      subAuaId: retrievedValue,
    };
    dispatch(generateInvoice(request));
  }, []);
  return (
    <>
      <PDFDownloadLink
        document={<InvoicePdf pdfData={invoice} />}
        fileName="invoice.pdf"
      >
        {({ blob, url, loading, error }) => (
          <Button
            startIcon={<ArticleIcon />}
            sx={{ backgroundColor: "#33b249" }}
            variant="contained"
          >
            {loading ? "Loading document..." : "Invoice"}
          </Button>
        )}
      </PDFDownloadLink>
      {/* <Box sx={{ width: "100%", height: "100vh" }}>
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
          <InvoicePdf pdfData={invoice} />
        </PDFViewer>
      </Box> */}
    </>
  );
};

export default Invoice;
