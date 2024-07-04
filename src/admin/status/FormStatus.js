import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { pdfjs } from "react-pdf";
import { useDispatch, useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";
import { environmentalURL } from "../../environmentalURL";
import {
  documentsStatus,
  subAUAFormApproved,
} from "../../redux/admin/adminActions";
import CircularLoading from "../../utils/CircularLoading";
import AlertDialog from "../../utils/dialogs/AlertDialog";
import TextboxAlert from "../../utils/dialogs/TextboxAlert";
import FormItems from "./FormItems";
import ViewPDF from "./ViewPDF";
import TickIcon from "../../utils/animatedIcons/TickIcon";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const FormStatus = ({ formData, documentStatus }) => {
  const stateData = useSelector((state) => state.admin);

  const { buttonLoading, doneStatus } = stateData;

  const [allFormData, setAllFormData] = useState();

  useEffect(() => {
    var formallData = [
      {
        id: "1",
        formName: "Sub-AUA Application Form",
        formId: `${formData?.subAuaId}_file1`,
        status: documentStatus?.filter(
          (x) => x?.certificateId === `${formData?.subAuaId}_file1`
        )[0]?.certificateStatus,
        cid: 1,
      },
      {
        id: "2",
        formName: "Sub-KUA Application Form",
        formId: `${formData?.subAuaId}_file2`,
        status: documentStatus?.filter(
          (x) => x?.certificateId === `${formData?.subAuaId}_file2`
        )[0]?.certificateStatus,
        cid: 2,
      },
      {
        id: "3",
        formName: "Sub-AUA Mou",
        formId: `${formData?.subAuaId}_file3`,
        status: documentStatus?.filter(
          (x) => x?.certificateId === `${formData?.subAuaId}_file3`
        )[0]?.certificateStatus,
        cid: 2,
      },
      {
        id: "4",
        formName: "AUA-Sub Aggrement Form",
        formId: `${formData?.subAuaId}_file4`,
        status: documentStatus?.filter(
          (x) => x?.certificateId === `${formData?.subAuaId}_file4`
        )[0]?.certificateStatus,
        cid: 4,
      },
      {
        id: "5",
        formName: "Sub-AUA Enquiry Form",
        formId: `${formData?.subAuaId}_file5`,
        status: documentStatus?.filter(
          (x) => x?.certificateId === `${formData?.subAuaId}_file5`
        )[0]?.certificateStatus,
        cid: 5,
      },
      {
        id: "6",
        formName: "Sub-AUA Undertaking Form",
        formId: `${formData?.subAuaId}_file6`,
        status: documentStatus?.filter(
          (x) => x?.certificateId === `${formData?.subAuaId}_file6`
        )[0]?.certificateStatus,
        cid: 6,
      },
      {
        id: "7",
        formName: "Request Form",
        formId: `${formData?.subAuaId}_file7`,
        status: documentStatus?.filter(
          (x) => x?.certificateId === `${formData?.subAuaId}_file7`
        )[0]?.certificateStatus,
        cid: 7,
      },
      {
        id: "8",
        formName: "Application Form",
        formId: `${formData?.subAuaId}_file8`,
        status: documentStatus?.filter(
          (x) => x?.certificateId === `${formData?.subAuaId}_file8`
        )[0]?.certificateStatus,
        cid: 8,
      },
    ];

    setAllFormData(formallData);
  }, [documentStatus]);

  const [open, setOpen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertTitle, setAlertTitle] = React.useState("");
  const [alertIcon, setAlertIcon] = React.useState("");
  const [alertContent, setAlertContent] = React.useState("");

  const [showPDF, setShowPDF] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dispatch = useDispatch();

  const handleOnlyClose = () => {
    setOpen(false);
  };

  const handleClose = (data) => {
    setOpen(false);
    setAlertOpen(false);
    console.log(data);
    dispatch(subAUAFormApproved(data));
  };

  const openRemark = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleSubmitFile = (status, formId) => {
    const allData = {
      certificateId: formId,
      status: status,
    };
    console.log(allData);
    dispatch(subAUAFormApproved(allData));
  };

  const handleViewPDF = (data) => {
    setSelectedItem(data);
    setShowPDF(true);
  };

  const handlePdfClose = () => {
    setShowPDF(false);
  };

  useEffect(() => {
    if (doneStatus?.code === 1000) {
      if (doneStatus?.status === "Accept") {
        setAlertOpen(true);
        setAlertTitle("Success");
        setAlertIcon(<TickIcon />);
        setAlertContent("Form Approved Successfully!");
        setAllFormData((old) => {
          return old.map((item) => {
            if (item.formId === doneStatus.fileId) {
              return { ...item, status: "Accepted" };
            }
            return item;
          });
        });
      } else if (doneStatus?.status === "Reject") {
        setAlertOpen(true);
        setAlertTitle("Success");
        setAlertIcon(<TickIcon />);
        setAlertContent("Form Rejected Successfully!");
        setAllFormData((old) => {
          return old.map((item) => {
            if (item.formId === doneStatus.fileId) {
              return { ...item, status: "Rejected" };
            }
            return item;
          });
        });
      }
    }
  }, [doneStatus]);

  // if (buttonLoading) {
  //   return (
  //     <>
  //       <CircularLoading />
  //     </>
  //   );
  // }

  return (
    <>
      <Typography mb={2} variant="h5">
        Form Status
      </Typography>
      <Card sx={{ p: 4 }}>
        {allFormData?.map((item, index) => (
          <FormItems
            item={item}
            handleViewPDF={handleViewPDF}
            handleSubmitFile={handleSubmitFile}
            openRemark={openRemark}
          />
        ))}
      </Card>

      <TextboxAlert
        formId={selectedItem?.formId}
        status={"Reject"}
        open={open}
        handleClose={handleClose}
        handleOnlyClose={handleOnlyClose}
      />

      <div>
        <ViewPDF
          handleClose={handlePdfClose}
          open={showPDF}
          fileName={selectedItem ? selectedItem.formName : ""}
          href={
            selectedItem
              ? `${environmentalURL}/auth/getpdffile/${selectedItem.formId}`
              : ""
          }
        />
      </div>

      <AlertDialog
        open={alertOpen}
        handleClose={handleClose}
        title={alertTitle}
        icon={alertIcon}
        content={alertContent}
        width={"xs"}
      />
    </>
  );
};

export default FormStatus;
