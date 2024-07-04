import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DoneIcon from "@mui/icons-material/Done";
import DownloadIcon from "@mui/icons-material/Download";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { environmentalURL } from "../../environmentalURL";
import { loadState } from "../../helper/SessionStorage";
import {
  documentsStatus,
  subauaFileUpload,
} from "../../redux/admin/adminActions";
import { CLEAR_STATE } from "../../redux/admin/adminConstants";
import AlertDialog from "../../utils/dialogs/AlertDialog";
import { useLayoutEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NavigationContol from "../utils/NavigationContol";

const CertificateUpload1 = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*------ For taking a Subauaid from session storage --------*/
  const retrievedValue = loadState("subauaid", "Default Value");
  console.log(retrievedValue);

  /*------ For taking a value form Redux --------*/
  const stateData = useSelector((state) => state.admin);
  const { doneStatus, buttonLoading, cerdata, documentStatus } = stateData;

  console.log("redsrsfstttttttttt", documentStatus);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm();

  // State variables for selected file names and button status.
  const [selectedFileName, setSelectedFileName] = useState("");
  const [subauaApplicationFormName, setSubauaApplicationFormName] =
    useState("");
  const [subkuaApplicationFormName, setSubkuaApplicationFormName] =
    useState("");
  const [subauaUndertakingFormName, setSubauaUndertakingFormName] =
    useState("");
  const [subauaAggrementFormName, setSubauaAggrementFormName] = useState("");
  const [subauaMouFormName, setSubauaMouFormName] = useState("");
  const [requestFormName, setRequestFormName] = useState("");
  const [applicationFormName, setApplicationFormName] = useState("");

  const [isButtonDisable, setIsButtonDisable] = useState(false);
  const [navigatePage, setNavigatePage] = useState(false);

  // State variable for displaying an alert.
  const [alertContent, setAlertContent] = useState({
    open: false,
    title: "Success",
    icon: <DoneIcon sx={{ height: 80, width: 100 }} />,
    content: "Your Documents Submitted Successfully!",
    notice:
      "Wait for approval from our end. Once your documents are approved, you can proceed to the next page.",
  });

  // Effect to fetch document status on component mount.
  useEffect(() => {
    const certdata = {
      subAuaId: retrievedValue,
    };
    dispatch(documentsStatus(certdata));
  }, []);

  // Effect to check if all documents have been navigated.
  useEffect(() => {
    if (
      documentStatus !== null &&
      documentStatus !== undefined &&
      documentStatus.length > 0
    ) {
      const allNavigateStatusTrue = documentStatus?.every(
        (x) => x?.navigateStatus === true
      );
      setNavigatePage(allNavigateStatusTrue ? false : true);
    }
  }, [documentStatus]);

  // Effect to clear form values if a file is removed.
  useEffect(() => {
    if (selectedFileName === null) {
      setValue("subauaEnquiryForm", "");
    } else if (subauaApplicationFormName === null) {
      setValue("subauaApplicationForm", "");
    } else if (subkuaApplicationFormName === null) {
      setValue("subkuaApplicationFormName", "");
    } else if (subauaUndertakingFormName === null) {
      setValue("subauaUndertakingForm", "");
    } else if (subauaAggrementFormName === null) {
      setValue("subauaAggrementForm", "");
    } else if (subauaMouFormName === null) {
      setValue("subauamou", "");
    } else if (requestFormName === null) {
      setValue("requestForm", "");
    } else if (applicationFormName === null) {
      setValue("applicationForm", "");
    }
  }, [
    selectedFileName,
    subauaApplicationFormName,
    subauaAggrementFormName,
    subauaMouFormName,
    subauaUndertakingFormName,
    requestFormName,
    applicationFormName,
    subkuaApplicationFormName,
  ]);

  // Function to remove a file based on the form it belongs to.
  const romoveFile = (values) => {
    if (values === 1) {
      setSubauaApplicationFormName(null);
    } else if (values === 2) {
      setSubkuaApplicationFormName(null);
    } else if (values === 3) {
      setSubauaMouFormName(null);
    } else if (values === 4) {
      setSubauaAggrementFormName(null);
    } else if (values === 5) {
      setSelectedFileName(null);
    }
  };

  // Function to remove a file based on the form it belongs to (second set of documents).
  const romoveFile1 = (values) => {
    if (values === 1) {
      setSubauaUndertakingFormName(null);
    } else if (values === 2) {
      setRequestFormName(null);
    } else if (values === 3) {
      setApplicationFormName(null);
    }
  };

  // Function to handle file input change for the first set of documents, Here I am set the filename for show to the user using MUI Chip.
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (event.target.id === "subauaEnquiryForm") {
      setSelectedFileName(file ? file.name : "");
    } else if (event.target.id === "subauaApplicationForm") {
      setSubauaApplicationFormName(file ? file.name : "");
    } else if (event.target.id === "subkuaApplicationForm") {
      setSubkuaApplicationFormName(file ? file.name : "");
    } else if (event.target.id === "subauaAggrementForm") {
      setSubauaAggrementFormName(file ? file.name : "");
    } else if (event.target.id === "subauamou") {
      setSubauaMouFormName(file ? file.name : "");
    }
  };

  // Function to handle file input change for the Second set of documents, Here I am set the filename for show to the user using MUI Chip.
  const handleFileChange1 = (event) => {
    const file = event.target.files[0];
    if (event.target.id === "subauaUndertakingForm") {
      setSubauaUndertakingFormName(file ? file.name : "");
    } else if (event.target.id === "applicationForm") {
      setApplicationFormName(file ? file.name : "");
    } else if (event.target.id === "requestForm") {
      setRequestFormName(file ? file.name : "");
    }
  };

  // Function to handle submission of form values.
  const handleValueSubmit = (values) => {
    const data = {
      subAuaId: retrievedValue,
      subauaEnquiryForm: values.subauaEnquiryForm
        ? values.subauaEnquiryForm[0]
        : "",
      subaua: values.subauaApplicationForm
        ? values.subauaApplicationForm[0]
        : "",
      subkua: values.subkuaApplicationForm
        ? values.subkuaApplicationForm[0]
        : "",
      subauaUndertakingForm: values.subauaUndertakingForm
        ? values.subauaUndertakingForm[0]
        : "",
      subauaAggrementForm: values.subauaAggrementForm
        ? values.subauaAggrementForm[0]
        : "",
      subauaMOU: values.subauamou ? values.subauamou[0] : "",
      requestForm: values.requestForm ? values.requestForm[0] : "",
      applicationForm: values.applicationForm ? values.applicationForm[0] : "",
    };

    console.log(data);

    dispatch(subauaFileUpload(data));
  };

  // Function to close the alert.
  const handleClose = () => {
    dispatch({ type: CLEAR_STATE });
    setAlertContent((old) => ({ ...old, open: false }));
  };

  // Arrays containing information about documents (first and second sets).
  if (
    documentStatus !== null &&
    documentStatus !== undefined &&
    documentStatus.length > 0
  ) {
    var subAuatoAUA = [
      {
        id: 1,
        title: "Sub-AUA Application Form",
        formName: "subauaApplicationForm",
        formStatus: documentStatus?.filter(
          (x) => x?.certificateId === `${retrievedValue}_file1`
        )[0]?.certificateStatus,
        selected: subauaApplicationFormName,
        href:
          `${environmentalURL}` + "/getpdffile/" + `${retrievedValue}_file1`,
      },
      {
        id: 2,
        title: "Sub-KUA Application Form",
        formName: "subkuaApplicationForm",
        formStatus: documentStatus?.filter(
          (x) => x?.certificateId === `${retrievedValue}_file2`
        )[0]?.certificateStatus,
        selected: subkuaApplicationFormName,
        href:
          `${environmentalURL}` + "/getpdffile/" + `${retrievedValue}_file2`,
      },
      {
        id: 3,
        title: "Sub-AUA MOU",
        formName: "subauamou",
        formStatus: documentStatus?.filter(
          (x) => x?.certificateId === `${retrievedValue}_file3`
        )[0]?.certificateStatus,
        selected: subauaMouFormName,
        href:
          `${environmentalURL}` + "/getpdffile/" + `${retrievedValue}_file3`,
      },
      {
        id: 4,
        title: "Sub-AUA Aggrement Form",
        formName: "subauaAggrementForm",
        formStatus: documentStatus?.filter(
          (x) => x?.certificateId === `${retrievedValue}_file4`
        )[0]?.certificateStatus,
        selected: subauaAggrementFormName,
        href:
          `${environmentalURL}` + "/auth/getpdffile/" + `${retrievedValue}_file4`,


      },
      {
        id: 5,
        title: "Sub-AUA Enquiry Form",
        formName: "subauaEnquiryForm",
        formStatus: documentStatus?.filter(
          (x) => x?.certificateId === `${retrievedValue}_file5`
        )[0]?.certificateStatus,
        selected: selectedFileName,
        href:
          `${environmentalURL}` + "/getpdffile/" + `${retrievedValue}_file5`,
      },
    ];
  }

  if (
    documentStatus !== null &&
    documentStatus !== undefined &&
    documentStatus.length > 0
  ) {
    var subAuatoAUAtouidai = [
      {
        id: 1,
        title: "Sub-AUA Undertaking Form",
        formName: "subauaUndertakingForm",
        formStatus: documentStatus?.filter(
          (x) => x?.certificateId === `${retrievedValue}_file6`
        )[0]?.certificateStatus,
        selected: subauaUndertakingFormName,
        href:
          `${environmentalURL}` + "/getpdffile/" + `${retrievedValue}_file6`,
      },
      {
        id: 2,
        title: "Request Form",
        formName: "requestForm",
        formStatus: documentStatus?.filter(
          (x) => x?.certificateId === `${retrievedValue}_file7`
        )[0]?.certificateStatus,
        selected: requestFormName,
        href:
          `${environmentalURL}` + "/getpdffile/" + `${retrievedValue}_file7`,
      },
      {
        id: 3,
        title: "Application Form",
        formName: "applicationForm",
        formStatus: documentStatus?.filter(
          (x) => x?.certificateId === `${retrievedValue}_file8`
        )[0]?.certificateStatus,
        selected: applicationFormName,
        href:
          `${environmentalURL}` + "/getpdffile/" + `${retrievedValue}_file8`,
      },
    ];
  }

  // Effect to display an alert when the submission is successful.
  useEffect(() => {
    if (doneStatus.code === 1000) {
      setAlertContent((old) => ({ ...old, open: true }));
      setIsButtonDisable(true);
      setSubauaApplicationFormName(null);
      setSubauaMouFormName(null);
      setSubauaAggrementFormName(null);
      setSelectedFileName(null);
      setSubauaUndertakingFormName(null);
      setRequestFormName(null);
      setApplicationFormName(null);
    }
  }, [doneStatus]);

  return (
    <>
      <Container sx={{ mt: 4 }} maxWidth={"xl"}>
        <Stack mb={3} direction={"column"}>
          <Typography variant="h4">Upload files</Typography>
          <FormHelperText>
            (Only PDF, JPG, and JPEG files are allowed and size limit 2 MB Only)
          </FormHelperText>
        </Stack>
        <Typography mb={2} variant="h6">
          Sub-AUA - DITEC
        </Typography>

        {/* Form to handle document submission with validation.*/}
        <form onSubmit={handleSubmit(handleValueSubmit)}>
          <Paper elevation={2} sx={{ p: 2 }}>
            {/* Mapping through the first set of documents */}
            {subAuatoAUA?.map((item, index) => (
              <>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <Stack direction={"row"} spacing={3}>
                      {/* Displaying the document ID */}
                      <Typography variant="body1">{item.id}</Typography>

                      <Stack mt={1} direction={"column"}>
                        {/* Displaying the document title */}
                        <Typography variant="body1">{item.title}</Typography>
                        {/* Displaying validation error if any */}
                        {errors[item.formName] && (
                          <FormHelperText error>
                            {errors[item.formName].message}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={8}
                    justifyContent={"flex-end"}
                    alignItems={"flex-end"}
                    display={"flex"}
                  >
                    <Stack direction={"row"} spacing={3}>
                      {item.selected && (
                        // Displaying a chip with the selected file name and an option to remove it
                        <Chip
                          sx={{
                            height: "auto",
                            "& .MuiChip-label": {
                              display: "block",
                              whiteSpace: "normal",
                            },
                          }}
                          label={item.selected}
                          onDelete={() => {
                            romoveFile(item.id);
                          }}
                        />
                      )}
                      {/* Displaying file upload and download options based on document status */}
                      {!(item.formStatus === "Accepted") &&
                        !(item.formStatus === "Pending") && (
                          <FormControl>
                            <label htmlFor={item.formName}>
                              <Box>
                                <Button
                                  variant="contained"
                                  component="span"
                                  size="small"
                                  disabled={isButtonDisable}
                                  startIcon={<CloudUploadIcon />}
                                  style={{
                                    textTransform: "none",
                                  }}
                                >
                                  choose File
                                </Button>
                                <input
                                  type="file"
                                  id={item.formName}
                                  disabled={isButtonDisable}
                                  {...register(item.formName, {
                                    onChange: (e) => handleFileChange(e),
                                    required: {
                                      value: true,
                                      message: `${item.title} is required!`,
                                    },
                                    validate: (value) => {
                                      if (value) {
                                        // Validating file type and size
                                        const allowedTypes = [
                                          "application/pdf",
                                          "image/jpeg",
                                          "image/jpg",
                                        ];
                                        const fileType = value[0].type;
                                        const fileSize = value[0].size; // in bytes
                                        const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
                                        if (!allowedTypes.includes(fileType)) {
                                          return "Only PDF, JPG, and JPEG files are allowed!";
                                        }
                                        if (fileSize > maxSizeInBytes) {
                                          return "File size should be less than 2MB!";
                                        }
                                      }
                                      return true;
                                    },
                                  })}
                                  style={{ display: "none" }}
                                />
                              </Box>
                            </label>
                          </FormControl>
                        )}

                      {item.formStatus === "Accepted" && (
                        // Displaying a download button for accepted documents
                        <Button
                          startIcon={<DownloadIcon />}
                          sx={{ bgcolor: "#14BDEE", mr: 2 }}
                          href={item.href}
                          size="small"
                          variant="contained"
                        >
                          download
                        </Button>
                      )}

                      <Typography
                        color={
                          item.formStatus === "Accepted"
                            ? "green"
                            : item.formStatus === "Pending"
                              ? "#C3C300"
                              : "red"
                        }
                        variant="body1"
                      >
                        {/* Displaying document status with different colors */}
                        {item.formStatus === "Accepted"
                          ? "●" + " " + "Accepted"
                          : item.formStatus === "Pending"
                            ? "●" + " " + "Pending"
                            : item.formStatus === "Rejected"
                              ? "●" + " " + "Rejected"
                              : ""}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
                {item.id !== 5 && (
                  <Box sx={{ p: 1 }}>
                    <Divider flexItem />
                  </Box>
                )}
              </>
            ))}
          </Paper>
          {/* Title for the second set of documents */}
          <Typography mt={3} mb={1} variant="h6">
            Sub-AUA - DITEC - UIDAI
          </Typography>
          <Paper elevation={2} sx={{ p: 2 }}>
            {/* Mapping through the second set of documents */}
            {subAuatoAUAtouidai?.map((item, index) => (
              <>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <Stack direction={"row"} spacing={3}>
                      <Typography variant="body1">{item.id}</Typography>

                      <Stack mt={1} direction={"column"}>
                        <Typography variant="body1">{item.title}</Typography>

                        {errors[item.formName] && (
                          <FormHelperText error>
                            {errors[item.formName].message}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={8}
                    justifyContent={"flex-end"}
                    alignItems={"flex-end"}
                    display={"flex"}
                  >
                    <Stack direction={"row"} spacing={3}>
                      {item.selected && (
                        <Chip
                          label={item.selected}
                          onDelete={() => {
                            romoveFile1(item.id);
                          }}
                        />
                      )}

                      {!(item.formStatus === "Accepted") &&
                        !(item.formStatus === "Pending") && (
                          <FormControl>
                            <label htmlFor={item.formName}>
                              <Box>
                                <Button
                                  variant="contained"
                                  component="span"
                                  size="small"
                                  sx={{ fontSize: isMobile ? "8px" : "14px" }}
                                  disabled={isButtonDisable}
                                  startIcon={<CloudUploadIcon />}
                                  style={{
                                    textTransform: "none",
                                  }}
                                >
                                  choose File
                                </Button>
                                <input
                                  type="file"
                                  id={item.formName}
                                  disabled={isButtonDisable}
                                  {...register(item.formName, {
                                    onChange: (e) => handleFileChange1(e),
                                    required: {
                                      value: true,
                                      message: `${item.title} is required!`,
                                    },
                                    validate: (value) => {
                                      if (value) {
                                        const allowedTypes = [
                                          "application/pdf",
                                          "image/jpeg",
                                          "image/jpg",
                                        ];
                                        const fileType = value[0].type;
                                        const fileSize = value[0].size; // in bytes
                                        const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
                                        if (!allowedTypes.includes(fileType)) {
                                          return "Only PDF, JPG, and JPEG files are allowed!";
                                        }
                                        if (fileSize > maxSizeInBytes) {
                                          return "File size should be less than 2MB!";
                                        }
                                      }
                                      return true;
                                    },
                                  })}
                                  style={{ display: "none" }}
                                />
                              </Box>
                            </label>
                          </FormControl>
                        )}

                      {item.formStatus === "Accepted" && (
                        <Box>
                          <Button
                            startIcon={<DownloadIcon />}
                            sx={{ bgcolor: "#14BDEE", mr: 2 }}
                            href={item.href}
                            size="small"
                            variant="contained"
                          >
                            download
                          </Button>
                        </Box>
                      )}

                      <Typography
                        color={
                          item.formStatus === "Accepted"
                            ? "green"
                            : item.formStatus === "Pending"
                              ? "#C3C300"
                              : "red"
                        }
                        variant="body1"
                      >
                        {item.formStatus === "Accepted"
                          ? "●" + " " + "Accepted"
                          : item.formStatus === "Pending"
                            ? "●" + " " + "Pending"
                            : item.formStatus === "Rejected"
                              ? "●" + " " + "Rejected"
                              : ""}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
                {/* {item.id !== 3 && ( */}
                <Box sx={{ p: 1 }}>
                  <Divider flexItem />
                </Box>
                {/* )} */}
              </>
            ))}

            <Stack
              mt={2}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
            >
              <LoadingButton
                loading={buttonLoading}
                type="submit"
                variant="contained"
                disabled={navigatePage ? false : true}
              >
                Upload
              </LoadingButton>
            </Stack>
          </Paper>
        </form>

        {/* <Stack mt={2} direction={"row"} justifyContent={"flex-end"}>
          <Button
            endIcon={<ArrowForwardIcon />}
            disabled={navigatePage}
            variant="contained"
            onClick={() => navigate("/ditec/subaua/paymentmechanism")}
          >
            Next
          </Button>
        </Stack> */}

        {!navigatePage && (
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Stack spacing={1} direction={"column"}>
                <Typography variant="h5" color="#FFBF00">
                  NOTE
                </Typography>
                <Typography variant="body1">
                  {/* Wait for approval form our end. Once your documents are
                  approved, wait sometimes our technical person will contact
                  soon.Thank you! */}
                  Your application was successfully verified. Our technical team
                  will contact you for onboarding and testing Demo. Thank you!
                </Typography>
                <Typography mt={5} variant="subtitle1">
                  Contact
                </Typography>
                <Stack direction={"row"} spacing={3}>
                  <Typography variant="body1">TPOC Mobile</Typography>
                  <Typography variant="body1">+91 9999999999</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        )}

        <NavigationContol
          path={"/ditec/subaua/paymentmechanism"}
          disabled={navigatePage}
          tooltipMessage={
            "Upload all documents and wait for approval. Once your documents are approved, you will be able to proceed to the next page."
          }
        />
      </Container>
      <AlertDialog
        open={alertContent.open}
        handleClose={handleClose}
        title={alertContent.title}
        icon={alertContent.icon}
        content={alertContent.content}
        notice={alertContent.notice}
      />
    </>
  );
};

export default CertificateUpload1;
