import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import { LoadingButton } from "@mui/lab";
// import { CLEAR_STATE } from "../../redux/dashboard/dashboardConstant";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DoneIcon from "@mui/icons-material/Done";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AlertDialog from "../utils/dialogs/AlertDialog";

const SubauaBilling = () => {
  const stateData = useSelector((state) => state.dashboard);

  const { buttonLoading, data } = stateData;
  const theme = useTheme();

  console.log("stateDataaaaaaaaaaaaaa", stateData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);
  const [alertTitle, setAlertTitle] = React.useState("");
  const [alertIcon, setAlertIcon] = React.useState("");
  const [alertContent, setAlertContent] = React.useState("");

  const handleValueSubmit = (values, { resetForm }) => {
    // dispatch({ type: CLEAR_STATE });
    console.log(values);

    // dispatch(subauaRegistration(values, resetForm));
  };

  const handleClose = () => {
    // dispatch({ type: CLEAR_STATE });
    setOpen(false);
  };

  useEffect(() => {
    if (data?.code === 0) {
      setOpen(true);
      setAlertTitle("Success");
      setAlertIcon(<DoneIcon sx={{ height: 80, width: 100 }} />);
      setAlertContent(
        "Your Form Successfully Submitted,Please check your mail for further details!"
      );
    }
  }, [stateData]);

  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          organisationName: "",
          serviceStartDate: "",
          serviceEndDate: "",
          billingType: "",
          billingCyle: "",
        }}
        validationSchema={Yup.object().shape({})}
        onSubmit={handleValueSubmit}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          setFieldError,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onChange={handleChange} onSubmit={handleSubmit}>
            <Container maxWidth={"lg"}>
              <Typography my={3} variant="h4" color={"#14BDEE"}>
                Sub-AUA Billing Form
              </Typography>
              <Card sx={{ p: 4 }} elevation={3}>
                <Typography mb={3} variant="h5" color={"#14BDEE"}></Typography>
                <Box>
                  <Grid container spacing={3}>
                    <Grid item md={6}>
                      <FormControl fullWidth>
                        <TextField
                          name="userName"
                          id="demo-simple-select"
                          value={values.userName}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="Username"
                        />
                      </FormControl>
                      {touched.userName && errors.userName && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.userName}
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid item md={6}>
                      <FormControl fullWidth>
                        <TextField
                          name="organisationName"
                          id="demo-simple-select"
                          value={values.organisationName}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="Organisation Name"
                        />
                      </FormControl>
                      {touched.organisationName && errors.organisationName && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.organisationName}
                        </FormHelperText>
                      )}
                    </Grid>

                    <Grid item md={6}>
                      <FormControl
                        fullWidth
                        sx={{ ...theme.typography.customInput }}
                      >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                              label="Service StartDate"
                              value={values.serviceStartDate}
                              onBlur={handleBlur}
                              onChange={(value) => {
                                const d = new Date(value);

                                var options = {
                                  year: "numeric",
                                  month: "numeric",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  second: "numeric",
                                  hour12: true,
                                };

                                var text = d.toLocaleString("en-US", options);
                                setFieldValue("serviceStartDate", text, true);
                              }}
                              slotProps={{ textField: { fullWidth: true } }}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </FormControl>
                      {touched.endDate && errors.endDate && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.endDate}
                        </FormHelperText>
                      )}
                    </Grid>

                    <Grid item md={6}>
                      <FormControl
                        fullWidth
                        sx={{ ...theme.typography.customInput }}
                      >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                              label="Service End Date"
                              value={values.serviceEndDate}
                              onBlur={handleBlur}
                              onChange={(value) => {
                                const d = new Date(value);

                                var options = {
                                  year: "numeric",
                                  month: "numeric",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  second: "numeric",
                                  hour12: true,
                                };

                                var text = d.toLocaleString("en-US", options);
                                setFieldValue("serviceEndDate", text, true);
                              }}
                              slotProps={{ textField: { fullWidth: true } }}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </FormControl>
                      {touched.serviceEndDate && errors.serviceEndDate && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.serviceEndDate}
                        </FormHelperText>
                      )}
                    </Grid>

                    <Grid item md={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Transaction Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          name="transactionStatus"
                          id="demo-simple-select"
                          value={values.transactionStatus}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="TransactionStatus"
                        >
                          <MenuItem value={"ALL"} selected>
                            ALL
                          </MenuItem>
                          <MenuItem value={"NA"}>NA</MenuItem>
                          <MenuItem value={"Payment Success"}>
                            Payment Success
                          </MenuItem>
                          <MenuItem
                            value={"Payment Success and Department Failure"}
                          >
                            Payment Success and Department Failure
                          </MenuItem>
                          <MenuItem value={"Refund Failure"}>
                            Refund Failure
                          </MenuItem>
                          <MenuItem value={"Refund initiated"}>
                            Refund initiated
                          </MenuItem>
                          <MenuItem value={"Refund success"}>
                            Refund success
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item md={6}>
                      <FormControl fullWidth>
                        <TextField
                          name="pincode"
                          id="demo-simple-select"
                          value={values.pincode}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="Pincode"
                        />
                      </FormControl>
                      {touched.pincode && errors.pincode && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.pincode}
                        </FormHelperText>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Card>
              <AlertDialog
                open={open}
                handleClose={handleClose}
                title={alertTitle}
                icon={alertIcon}
                content={alertContent}
              />
            </Container>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SubauaBilling;
