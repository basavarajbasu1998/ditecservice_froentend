import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";

import OpenSansRegular from "../../../utils/fonts/openSans/OpenSans-Regular.ttf";
import OpenSanBold from "../../../utils/fonts/openSans/OpenSans-Bold.ttf";
import OpenSanExtraBold from "../../../utils/fonts/openSans/OpenSans-ExtraBold.ttf";

import AllerRegular from "../../../utils/fonts/aller/Aller_Rg.ttf";
import AllerBold from "../../../utils/fonts/aller/Aller_Bd.ttf";
import AllerDisply from "../../../utils/fonts/aller/AllerDisplay.ttf";

import LatoRegular from "../../../utils/fonts/lato/Lato-Regular.ttf";
import LatoBold from "../../../utils/fonts/lato/Lato-Bold.ttf";
import LatoSemiBold from "../../../utils/fonts/lato/Lato-Semibold.ttf";
import { formatCurrency, formatIndianNumber } from "../../../utils/formatTime";

Font.register({
  family: "OpenSans",
  fonts: [
    {
      src: OpenSansRegular,
    },
    {
      src: OpenSanBold,
      fontWeight: "bold",
    },
    {
      src: AllerDisply,
      fontWeight: "normal",
      fontStyle: "italic",
    },
  ],
});

Font.register({
  family: "Aller",
  fonts: [
    {
      src: AllerRegular,
    },
    {
      src: AllerBold,
      fontWeight: "bold",
    },
    {
      src: OpenSanExtraBold,
      fontWeight: "normal",
      fontStyle: "italic",
    },
  ],
});

Font.register({
  family: "Lato",
  fonts: [
    {
      src: LatoRegular,
    },
    {
      src: LatoBold,
      fontWeight: "bold",
    },
    {
      src: LatoSemiBold,
      fontWeight: "normal",
      fontStyle: "italic",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    // padding: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  logo: {
    height: 30,
    width: 40,
    // backgroundColor: "#d6e3ff",
    marginLeft: 20,
    marginTop: 5,
  },

  headerText: {
    marginLeft: 35,
    marginTop: 20,
    // color: "#4287f5",
    textAlign: "center",
    fontFamily: "Lato",
    fontWeight: "normal",
    fontSize: 18, // Adjust the size as needed
  },

  invoiceHeader: {
    fontFamily: "Lato",
    fontWeight: "bold",
    color: "#4287f5",
    fontSize: "22px",
    alignSelf: "center",
    padding: 7,
  },
  leftContent: {
    flex: 1.5,
    alignItems: "flex-start",
    padding: 10,
  },

  rightContent: {
    flex: 1,
    alignItems: "flex-start",
    borderRadius: 4,
    backgroundColor: "#f7fffe",
    padding: 10,
  },
  bankDetails: {
    flex: 3,
    alignItems: "flex-start",
    marginTop: 10,
    // padding: 10,
  },
  subTotal: {
    flex: 1,
    alignItems: "flex-start",
    borderRadius: 4,
    padding: 10,
  },
  maindetails: {
    marginTop: 5,
    fontFamily: "Lato",
    fontWeight: "normal",
    flexDirection: "row",
    padding: 10,
    fontSize: "11px",
  },
  table: {
    width: "100%",
    fontSize: "16px",
    padding: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1 solid #4287f5",
  },
  tableHeader: {
    width: "33.33%",
    padding: 10,
    color: "white",
    backgroundColor: "#4287f5",
    fontSize: "12px",
    fontFamily: "Lato",
    fontWeight: "normal",
    textAlign: "center",
  },
  tableCell: {
    width: "33.33%",
    padding: 15,
    fontSize: "9px",
    textAlign: "center",
    fontWeight: "normal",
    fontFamily: "Lato",
  },
  evenTableCell: {
    backgroundColor: "#e6f7ff", // Set your desired background color for even cells
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#c9f8ff",
    padding: 20,
    fontSize: 10,
    color: "#4287f5",
  },
});

const InvoicePdf = ({ pdfData }) => {
  console.log("finall pdffffffff", pdfData);

  // const { intgrationInvoiceServiceCharges } = pdfData;
  const intgrationInvoiceServiceCharges = pdfData?.intgrationInvoiceServiceCharges ?? 0;

  const renderInvoicePage = (pageIndex, content, totalPages) => (
    console.log(pageIndex, totalPages),
    (
      <Page key={pageIndex} size="A4" style={styles.page}>
        {content}
        {pageIndex === totalPages && renderLastPageContent()}
        <View style={styles.footer}>
          <Text>Thank you for using e-KYC Service</Text>
        </View>
      </Page>
    )
  );

  const renderFirstPageContent = () => (
    <View style={styles.maindetails}>
      <View style={styles.leftContent}>
        <Text style={{ padding: 3, fontWeight: "bold" }}>
          Customer Name :
          <Text style={{ fontWeight: "normal" }}>
            {pdfData?.organisationName}
          </Text>
        </Text>
        <Text style={{ padding: 3, fontWeight: "bold" }}>
          Email Id :
          <Text style={{ fontWeight: "normal" }}>
            {pdfData?.managementEmail}
          </Text>
        </Text>
        <Text style={{ padding: 3, fontWeight: "bold" }}>
          Mobile No :
          <Text style={{ fontWeight: "normal" }}>
            {" "}
            {pdfData?.managementMobilenumber}
          </Text>
        </Text>
        <Text style={{ padding: 3, fontWeight: "bold" }}>
          Address :
          <Text style={{ fontWeight: "normal" }}>{pdfData?.address}</Text>
        </Text>
      </View>
      <View style={styles.rightContent}>
        <Text style={{ padding: 3, fontWeight: "bold" }}>
          Email :
          <Text style={{ fontWeight: "normal" }}>
            ditec_support@assam.gov.in
          </Text>
        </Text>
        <Text style={{ padding: 3, fontWeight: "bold" }}>Address</Text>
        <Text style={{ padding: 3 }}>
          <Text style={{ fontWeight: "normal" }}>
            Directorate of informationTechnology Electronics and
            Communication(DITEC)Behind CMBlock Assam Secretariat,Dispur,Guwahati
            781006,Assam
          </Text>
        </Text>
      </View>
    </View>
  );

  const renderLastPageContent = () => (
    <View style={styles.maindetails}>
      <View style={styles.bankDetails}>
        {/* <Text style={{ padding: 3, fontWeight: "bold" }}>
          Payment Details :
          <Text style={{ fontWeight: "normal" }}> Suryaprakash</Text>
        </Text> */}
        <Text style={{ padding: 3, fontWeight: "bold" }}>
          Account Name :
          <Text style={{ fontWeight: "normal" }}> Transaction Analysts</Text>
        </Text>
        <Text style={{ padding: 3, fontWeight: "bold" }}>
          Account Number :
          <Text style={{ fontWeight: "normal" }}> 8876565434</Text>
        </Text>
        <Text style={{ padding: 3, fontWeight: "bold" }}>
          Bank Name :
          <Text style={{ fontWeight: "normal" }}> State Bank of India</Text>
        </Text>
        <Text style={{ padding: 3, fontWeight: "bold" }}>
          IFSC Code :<Text style={{ fontWeight: "normal" }}> STATR0998R56</Text>
        </Text>
        {/* <Text style={{ padding: 3, fontWeight: "bold" }}>
          Amount in Words :
          <Text style={{ fontWeight: "normal" }}> 8876565434</Text>
        </Text> */}
      </View>
      <View style={styles.subTotal}>
        <Text style={{ padding: 3, fontWeight: "bold" }}>
          Sub Total : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Text style={{ fontWeight: "normal" }}>
            {pdfData?.subtotal && formatIndianNumber(pdfData?.subtotal)}
          </Text>
        </Text>
        <Text style={{ padding: 3, fontWeight: "bold" }}>
          SGST - 9% : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Text style={{ fontWeight: "normal" }}>
            {pdfData?.sgst && formatIndianNumber(pdfData?.sgst)}
          </Text>
        </Text>
        <Text style={{ padding: 3, fontWeight: "bold" }}>
          CGST - 9% : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Text style={{ fontWeight: "normal" }}>
            {pdfData?.cgst && formatIndianNumber(pdfData?.cgst)}
          </Text>
        </Text>
        {/* <Text style={{ padding: 3, fontWeight: "bold" }}>
          IGST - 18% : <Text style={{ fontWeight: "normal" }}> {formatCurrency(pdfData?.total)}</Text>
        </Text> */}
        {/* <Text style={{ padding: 3, fontWeight: "bold" }}>
          Previous Dues :
          <Text style={{ fontWeight: "normal" }}> YHOK900986</Text>
        </Text> */}
        <Text
          style={{
            marginTop: 4,
            padding: 5,
            fontWeight: "bold",
            backgroundColor: "#4287f5",
            color: "white",
          }}
        >
          Grand Total : &nbsp;
          <Text style={{ fontWeight: "semibold" }}>
            {formatCurrency(pdfData?.total)}
          </Text>
        </Text>
      </View>
    </View>
  );

  const renderTable = (tableIndex) => {
    const rowsPerPage = 8; // Adjust based on the number of rows you want per page
    const startRow = tableIndex * rowsPerPage;
    const endRow = startRow + rowsPerPage;

    const tableRows = intgrationInvoiceServiceCharges
      ?.slice(startRow, endRow)
      .map((item, index) => (
        <View
          key={index}
          style={[
            styles.tableRow,
            index % 2 === 1 ? styles.evenTableCell : null,
          ]}
        >
          <View style={styles.tableCell}>
            <Text>{item.id}</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>{item.mainService}</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>{item.subService}</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>{item?.hsnCode}</Text>
          </View>
          {/* <View style={styles.tableCell}>
          <Text>{item.billingCycle}</Text>
        </View> */}
          <View style={styles.tableCell}>
            <Text>{formatIndianNumber(item.amount)}</Text>
          </View>
        </View>
      ));

    return (
      <View key={tableIndex}>
        {/* Table Header */}
        <View style={styles.tableRow}>
          <View style={styles.tableHeader}>
            <Text>SL.No</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text>Main Service</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text>Sub Service</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text>HSN Code</Text>
          </View>
          {/* <View style={styles.tableHeader}>
            <Text>Billing Cycle</Text>
          </View> */}
          <View style={styles.tableHeader}>
            <Text>Amount</Text>
          </View>
        </View>

        {/* Table Rows */}
        {tableRows}
      </View>
    );
  };

  const totalPages = Math.ceil(intgrationInvoiceServiceCharges?.length / 8); // Assuming 20 rows per page
  return (
    <>
      <Document>
        {Array.from({ length: totalPages }, (_, pageIndex) => {
          const startTable = pageIndex;
          const endTable = startTable + 1;
          const tableContent = Array.from(
            { length: endTable - startTable },
            (_, tableIndex) => renderTable(startTable + tableIndex)
          );

          return renderInvoicePage(
            pageIndex + 1,
            <View>
              <View style={styles.container}>
                <Image
                  src={"/assets/images/indian-emblem.png"}
                  style={styles.logo}
                />
                <Text style={styles.headerText}>
                  Directorate of Information Technology,
                  {"\n"} Electronics and Communication(DITEC) Assam
                </Text>
              </View>
              <View style={{ backgroundColor: "#d6e3ff" }}>
                <Text style={styles.invoiceHeader}>INVOICE</Text>
              </View>
              <View style={styles.maindetails}>
                <View style={styles.leftContent}>
                  <Text style={{ padding: 3, fontWeight: "bold" }}>
                    Date :
                    <Text style={{ fontWeight: "normal" }}>
                      {pdfData?.invoiceDate}
                    </Text>
                  </Text>
                  <Text style={{ padding: 3, fontWeight: "bold" }}>
                    <Text>
                      GST Number :
                      <Text style={{ fontWeight: "normal" }}>
                        {pdfData?.gstNumber}
                      </Text>
                    </Text>
                  </Text>
                </View>
                <View style={styles.rightContent}>
                  <Text style={{ padding: 3, fontWeight: "bold" }}>
                    Invoice Date :
                    <Text style={{ fontWeight: "normal" }}>
                      {pdfData?.invoiceDate}
                    </Text>
                  </Text>
                  {/* <Text style={{ padding: 3, fontWeight: "bold" }}>
                    Invoice Due Date :{" "}
                    <Text style={{ fontWeight: "normal" }}>12/12/2023</Text>
                  </Text> */}
                  <Text style={{ padding: 3, fontWeight: "bold" }}>
                    Invoice Number :
                    <Text style={{ fontWeight: "normal" }}>
                      {pdfData?.invoiceNumber}
                    </Text>
                  </Text>
                  <Text style={{ padding: 3, fontWeight: "bold" }}>
                    GSTIN Number :
                    <Text style={{ fontWeight: "normal" }}>
                      {pdfData?.gstNumber}
                    </Text>
                  </Text>
                </View>
              </View>
              {pageIndex === 0 && renderFirstPageContent()}
              <View style={styles.table}>{tableContent}</View>
            </View>,
            totalPages
          );
        })}
      </Document>
    </>
  );
};

export default InvoicePdf;
