import {
  Box,
  Card,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ConnectedFocusError } from "focus-formik-error";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FastField, Formik } from "formik";
import * as Yup from "yup";

import DoneIcon from "@mui/icons-material/Done";
import { LoadingButton } from "@mui/lab";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { subauaRegistration } from "../../redux/dashboard/dashboardAction";
import { CLEAR_STATE } from "../../redux/dashboard/dashboardConstant";
import AlertDialog from "../../utils/dialogs/AlertDialog";
import WrongXIcon from "../../utils/animatedIcons/WrongXIcon";

const SubauaRegistrtionForm = () => {
  const stateData = useSelector((state) => state.dashboard);

  const { buttonLoading, data } = stateData;
  console.log("stateDataaaaaaaaaaaaaa", stateData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);
  const [alertTitle, setAlertTitle] = React.useState("");
  const [alertIcon, setAlertIcon] = React.useState("");
  const [alertContent, setAlertContent] = React.useState("");

  const handleValueSubmit = (values, { resetForm }) => {
    dispatch({ type: CLEAR_STATE });
    console.log(values);

    dispatch(subauaRegistration(values, resetForm));
  };

  const handleClose = () => {
    dispatch({ type: CLEAR_STATE });
    setOpen(false);
    navigate("/ditec/dashboard");
  };

  useEffect(() => {
    if (data?.code === 1000) {
      setOpen(true);
      setAlertTitle("Success");
      setAlertIcon(<DoneIcon sx={{ height: 80, width: 100 }} />);
      setAlertContent(
        "Your Form Successfully Submitted,Please check your mail for further details!"
      );
    }
    else if (data?.code == 1006) {
      // setOpen(true);
      // setAlertTitle("Success");
      // setAlertIcon(<WrongXIcon sx={{ height: 80, width: 100, color: "red" }} />);
      // setAlertContent(
      //   "User Email already Exist!!!"
      // );
      setError("User Email already Exist!!!")
    }
    else if (data?.code == 1007) {
      // setOpen(true);
      // setAlertTitle("Failure");
      // setAlertIcon(<WrongXIcon sx={{ height: 80, width: 100, color: "red" }} />);
      // setAlertContent(
      //   "User MobileNumber already Exist!!"
      // );
      setError("User MobileNumber already Exist!!")
    } else if (data?.code == 4000) {
      //   setOpen(true);
      //   setAlertTitle("Failure");
      //   setAlertIcon(<WrongXIcon sx={{ height: 80, width: 100, color: "red" }} />);
      //   setAlertContent(
      //     data?.message,
      //   );
    } else {
      setError(data?.message)
    }
  }, [stateData]);

  const validate = (values) => {
    const errors = {};

    if (
      !values.auaDemographic &&
      // !values.auaOtp &&
      !values.auaFingerprint &&
      !values.auaIris &&
      !values.kuaOtp &&
      !values.kuaFingerprint &&
      !values.kuaIris
    ) {
      errors.checkboxGroup = "Please select at least one field!";
    }
    if (
      values.auaDemographic &&
      !values.auaDemoghrapicBasic &&
      !values.auaDemoghrapicpoi &&
      !values.auaDemoghrapicFull
    ) {
      errors.checkboxGroup1 = "Please select at least one field!";
    }

    // if (!values.kuaOtp && !values.kuaFingerprint && !values.kuaIris) {
    //   errors.checkboxGroup1 = "Please select at least one field!";
    // }

    return errors;
  };
  return (
    <>
      <Helmet>
        <title> DITEC | Registration Form </title>
      </Helmet>
      <Formik
        initialValues={{
          organisationName: "",
          businessApplicationName: "",
          address: "",
          district: "",
          city: "",
          pincode: "",
          managementName: "",
          managementDesignationName: "",
          managementMobilenumber: "",
          managementEmail: "",
          technicalName: "",
          technicalDesignationName: "",
          technicalEmail: "",
          technicalMobilenumber: "",
          auaDemoghrapicBasic: false,
          auaDemoghrapicpoi: false,
          auaDemoghrapicFull: false,
          auaDemographic: false,
          // auaOtp: false,
          auaFingerprint: false,
          auaIris: false,
          kuaOtp: false,
          kuaFingerprint: false,
          kuaIris: false,
          authenticationPurpose: "",
          kycpurpose: "",
          applicationEnvironmentjava: false,
          applicationEnvironmentnet: false,
          applicationEnvironmentphp: false,
          rddevicesMantra: false,
          rddevicesStartek: false,
          integrationApprochAPI: false,
          integrationApprochThinClient: false,
          integrationApprochweb: false,
          integrationApprochmobile: false,
          rddevices: "",
          otherservicesdbt: false,
          otherservicesdigitalsignature: false,
        }}
        enableReinitialize={true}
        validate={validate}
        validationSchema={Yup.object().shape({
          organisationName: Yup.string().required(
            "Organisation Name is required!"
          ),
          businessApplicationName: Yup.string().required(
            "Business Application Name is required!"
          ),
          address: Yup.string().required("Address is required!"),
          managementName: Yup.string().required("MPOC Name is required!"),
          managementDesignationName: Yup.string().required(
            "MPOC Designation Name is required!"
          ),
          managementMobilenumber: Yup.string()
            .required("MPOC Mobilenumber is required!")
            .matches(
              /^(\+91)?[6-9][0-9]{9}$/, // Regex pattern for a 10-digit numeric mobile number
              "Invalid mobile number"
            ),
          managementEmail: Yup.string()
            .required("MPOC Email is required!")
            .matches(
              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              "Invalid email address"
            ),
          technicalName: Yup.string().required("TPOC Name is required!"),
          technicalDesignationName: Yup.string().required(
            "TPOC Designation Name is required!"
          ),
          technicalMobilenumber: Yup.string()
            .required("TPOC Mobile Number is required!")
            .matches(
              /^[0-9]{10}$/, // Regex pattern for a 10-digit numeric mobile number
              "Invalid mobile number"
            )
            .notOneOf(
              [Yup.ref("managementMobilenumber"), null],
              "Mobile Number should be different for MPOC and TPOC!"
            ),
          technicalEmail: Yup.string()
            .required("TPOC Email is required!")
            .matches(
              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              "Invalid email address"
            )
            .notOneOf(
              [Yup.ref("managementEmail"), null],
              "EmailId should be different for MPOC and TPOC!"
            ),
          authenticationPurpose: Yup.string().required(
            "Authentication Purpose Name is required!"
          ),
          kycpurpose: Yup.string().required("eKYC Purpose Name is required!"),
        })}
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
          <form onChange={handleChange} onSubmit={handleSubmit}>
            <ConnectedFocusError />
            <Container maxWidth={"lg"}>
              <Typography my={3} variant="h4" color={"#14BDEE"}>
                Sub-AUA Registration Form
              </Typography>


              {error && (
                <Box sx={{ mt: 2 }}>
                  <FormHelperText
                    sx={{ mb: 2 }}
                    error
                    id="standard-weight-helper-text-email-login"
                  >
                    {error}
                  </FormHelperText>
                </Box>
              )}

              <Card sx={{ p: 4 }} elevation={3}>
                <Typography mb={3} variant="h5" color={"#14BDEE"}>
                  Organisation Details
                  <span style={{ color: "red" }}>&nbsp;*</span>
                </Typography>
                <Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>





                      <FormControl fullWidth>
                        <FastField name="organisationName">
                          {() => (
                            <TextField
                              name="organisationName"
                              label="Organisation Name"
                              value={values.organisationName}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                          )}
                        </FastField>
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
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <FastField name="businessApplicationName">
                          {() => (
                            <TextField
                              label="Business Application Name"
                              name="businessApplicationName"
                              value={values.businessApplicationName}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                          )}
                        </FastField>
                      </FormControl>
                      {touched.businessApplicationName &&
                        errors.businessApplicationName && (
                          <FormHelperText
                            error
                            id="standard-weight-helper-text-email-login"
                          >
                            {errors.businessApplicationName}
                          </FormHelperText>
                        )}
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <FormControl fullWidth>
                        <FastField
                          name="businessApplicationName"
                          value={values.address}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        >
                          {() => (
                            <TextField
                              multiline
                              rows={2}
                              name="address"
                              label="Address"
                            />
                          )}
                        </FastField>
                      </FormControl>
                      {touched.address && errors.address && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.address}
                        </FormHelperText>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Card>
              <Card sx={{ p: 4, mt: 2 }} elevation={3}>
                <Typography color={"#14BDEE"} variant="h5">
                  Management Point of Contact
                  <span style={{ color: "red" }}>&nbsp;*</span>
                </Typography>
                <FormHelperText
                  sx={{ mb: 2 }}
                  color={"lightslategray"}
                  mb={3}
                  variant="body1"
                >
                  (Email Id and Mobile Number should be different for MPOC and
                  TPOC)
                </FormHelperText>
                <Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <FastField name="managementName">
                          {() => (
                            <TextField
                              name="managementName"
                              value={values.managementName}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="Name"
                            />
                          )}
                        </FastField>
                      </FormControl>
                      {touched.managementName && errors.managementName && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.managementName}
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <FastField name="managementDesignationName">
                          {() => (
                            <TextField
                              name="managementDesignationName"
                              value={values.managementDesignationName}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="Designation"
                            />
                          )}
                        </FastField>
                      </FormControl>
                      {touched.managementDesignationName &&
                        errors.managementDesignationName && (
                          <FormHelperText
                            error
                            id="standard-weight-helper-text-email-login"
                          >
                            {errors.managementDesignationName}
                          </FormHelperText>
                        )}
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <FastField name="managementMobilenumber">
                          {() => (
                            <TextField
                              name="managementMobilenumber"
                              value={values.managementMobilenumber}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="Mobile Number"
                            />
                          )}
                        </FastField>
                      </FormControl>
                      {touched.managementMobilenumber &&
                        errors.managementMobilenumber && (
                          <FormHelperText
                            error
                            id="standard-weight-helper-text-email-login"
                          >
                            {errors.managementMobilenumber}
                          </FormHelperText>
                        )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <FastField name="managementEmail">
                          {() => (
                            <TextField
                              name="managementEmail"
                              value={values.managementEmail}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="Email"
                            />
                          )}
                        </FastField>
                      </FormControl>
                      {touched.managementEmail && errors.managementEmail && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.managementEmail}
                        </FormHelperText>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Card>
              <Card sx={{ p: 4, mt: 2 }} elevation={3}>
                <Typography variant="h5" color={"#14BDEE"}>
                  Technical Point of Contact
                  <span style={{ color: "red" }}>&nbsp;*</span>
                </Typography>
                <FormHelperText
                  sx={{ mb: 2 }}
                  color={"lightslategray"}
                  mb={3}
                  variant="body1"
                >
                  (Email Id and Mobile Number should be different for MPOC and
                  TPOC)
                </FormHelperText>

                <Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <FastField name="technicalName">
                          {() => (
                            <TextField
                              name="technicalName"
                              id="demo-simple-select"
                              value={values.technicalName}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="Name"
                            />
                          )}
                        </FastField>
                      </FormControl>
                      {touched.technicalName && errors.technicalName && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.technicalName}
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <FastField name="technicalDesignationName">
                          {() => (
                            <TextField
                              name="technicalDesignationName"
                              value={values.technicalDesignationName}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="Designation"
                            />
                          )}
                        </FastField>
                      </FormControl>
                      {touched.technicalDesignationName &&
                        errors.technicalDesignationName && (
                          <FormHelperText
                            error
                            id="standard-weight-helper-text-email-login"
                          >
                            {errors.technicalDesignationName}
                          </FormHelperText>
                        )}
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <FastField name="technicalMobilenumber">
                          {() => (
                            <TextField
                              name="technicalMobilenumber"
                              value={values.technicalMobilenumber}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="Mobile Number"
                            />
                          )}
                        </FastField>
                      </FormControl>
                      {touched.technicalMobilenumber &&
                        errors.technicalMobilenumber && (
                          <FormHelperText
                            error
                            id="standard-weight-helper-text-email-login"
                          >
                            {errors.technicalMobilenumber}
                          </FormHelperText>
                        )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <FastField name="technicalEmail">
                          {() => (
                            <TextField
                              name="technicalEmail"
                              value={values.technicalEmail}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="Email"
                            />
                          )}
                        </FastField>
                      </FormControl>
                      {touched.technicalEmail && errors.technicalEmail && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.technicalEmail}
                        </FormHelperText>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Card>
              <Card sx={{ p: 4, mt: 2 }} elevation={3}>
                <Typography mb={3} variant="h5" color={"#14BDEE"}>
                  Authentication Services
                  <span style={{ color: "red" }}>&nbsp;*</span>
                </Typography>
                <Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Typography variant="subtitle1">
                          AUA Services
                        </Typography>
                      </Box>
                      <FormGroup>
                        <FastField name="auaDemographic">
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="auaDemographic"
                                  value={values.auaDemographic}
                                />
                              }
                              label="Demographic"
                            />
                          )}
                        </FastField>
                        {values.auaDemographic === true && (
                          <>
                            <FormControl>
                              <FormLabel id="demo-radio-buttons-group-label">
                                category
                              </FormLabel>
                              { }
                              <Stack ml={3} direction={"row"} spacing={2}>
                                <FastField name="auaDemoghrapicBasic">
                                  {() => (
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          name="auaDemoghrapicBasic"
                                          value={values.auaDemoghrapicBasic}
                                        />
                                      }
                                      label="Basic"
                                    />
                                  )}
                                </FastField>
                                <FastField>
                                  {() => (
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          name="auaDemoghrapicpoi"
                                          value={values.auaDemoghrapicpoi}
                                        />
                                      }
                                      label="POI"
                                    />
                                  )}
                                </FastField>
                                <FastField>
                                  {() => (
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          name="auaDemoghrapicFull"
                                          value={values.auaDemoghrapicFull}
                                        />
                                      }
                                      label="Full"
                                    />
                                  )}
                                </FastField>
                              </Stack>
                              {errors.checkboxGroup1 && (
                                <FormHelperText sx={{ mt: 1, ml: 2 }} error>
                                  {errors.checkboxGroup1}
                                </FormHelperText>
                              )}
                            </FormControl>
                          </>
                        )}
                        {/* <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="auaOtp"
                                  value={values.auaOtp}
                                />
                              }
                              label="OTP"
                            />
                          )}
                        </FastField> */}
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="auaFingerprint"
                                  value={values.auaFingerprint}
                                />
                              }
                              label="Fingerprint"
                            />
                          )}
                        </FastField>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="auaIris"
                                  value={values.auaIris}
                                />
                              }
                              label="Iris"
                            />
                          )}
                        </FastField>
                        {errors.checkboxGroup && (
                          <FormHelperText error>
                            {errors.checkboxGroup}
                          </FormHelperText>
                        )}
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Typography variant="subtitle1">
                          KUA Services
                        </Typography>
                      </Box>
                      <FormGroup>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="kuaOtp"
                                  value={values.kuaOtp}
                                />
                              }
                              label="OTP"
                            />
                          )}
                        </FastField>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="kuaFingerprint"
                                  value={values.kuaFingerprint}
                                />
                              }
                              label="Fingerprint"
                            />
                          )}
                        </FastField>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="kuaIris"
                                  value={values.kuaIris}
                                />
                              }
                              label="Iris"
                            />
                          )}
                        </FastField>
                      </FormGroup>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <FastField>
                          {() => (
                            <TextField
                              multiline
                              rows={3}
                              name="authenticationPurpose"
                              value={values.authenticationPurpose}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="Authentication Purpose"
                            />
                          )}
                        </FastField>
                      </FormControl>
                      {touched.authenticationPurpose &&
                        errors.authenticationPurpose && (
                          <FormHelperText
                            error
                            id="standard-weight-helper-text-email-login"
                          >
                            {errors.authenticationPurpose}
                          </FormHelperText>
                        )}
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <FastField>
                          {() => (
                            <TextField
                              multiline
                              rows={3}
                              name="kycpurpose"
                              value={values.kycpurpose}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="eKYC Purpose"
                            />
                          )}
                        </FastField>
                      </FormControl>
                      {touched.kycpurpose && errors.kycpurpose && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.kycpurpose}
                        </FormHelperText>
                      )}
                    </Grid>

                    <Grid item xs={6} md={3}>
                      <Box>
                        <Typography variant="subtitle1">
                          Integration Approach
                        </Typography>
                      </Box>
                      <FormGroup>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="integrationApprochAPI"
                                  value={values.integrationApprochAPI}
                                />
                              }
                              label="APIs"
                            />
                          )}
                        </FastField>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="integrationApprochThinClient"
                                  value={values.integrationApprochThinClient}
                                />
                              }
                              label="Thin Clients"
                            />
                          )}
                        </FastField>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="integrationApprochweb"
                                  value={values.integrationApprochweb}
                                />
                              }
                              label="Web"
                            />
                          )}
                        </FastField>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="integrationApprochmobile"
                                  value={values.integrationApprochmobile}
                                />
                              }
                              label="Mobile"
                            />
                          )}
                        </FastField>
                      </FormGroup>
                    </Grid>

                    <Grid item xs={6} md={3}>
                      <Box>
                        <Typography variant="subtitle1">
                          Application Environment
                        </Typography>
                      </Box>
                      <FormGroup>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="applicationEnvironmentjava"
                                  value={values.applicationEnvironmentjava}
                                />
                              }
                              label="Java"
                            />
                          )}
                        </FastField>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="applicationEnvironmentnet"
                                  value={values.applicationEnvironmentnet}
                                />
                              }
                              label=".NET"
                            />
                          )}
                        </FastField>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="applicationEnvironmentphp"
                                  value={values.applicationEnvironmentphp}
                                />
                              }
                              label="PHP"
                            />
                          )}
                        </FastField>
                      </FormGroup>
                    </Grid>

                    <Grid item xs={6} md={3}>
                      <Box>
                        <Typography variant="subtitle1">RD Devices</Typography>
                      </Box>
                      <FormGroup>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="applicationEnvironment"
                                  value={values.rddevicesMantra}
                                />
                              }
                              label="Mantra"
                            />
                          )}
                        </FastField>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="applicationEnvironment"
                                  value={values.rddevicesStartek}
                                />
                              }
                              label="StarTek"
                            />
                          )}
                        </FastField>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Box>
                        <Typography variant="subtitle1">
                          Other Services
                        </Typography>
                      </Box>
                      <FormGroup>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="otherservicesdbt"
                                  value={values.otherservicesdbt}
                                />
                              }
                              label="DBT"
                            />
                          )}
                        </FastField>
                        <FastField>
                          {() => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="otherservicesdigitalsignature"
                                  value={values.otherservicesdigitalsignature}
                                />
                              }
                              label="Digital Signature"
                            />
                          )}
                        </FastField>
                      </FormGroup>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      justifyContent={"center"}
                      alignItems={"center"}
                      display={"flex"}
                    >
                      <LoadingButton
                        loading={buttonLoading}
                        variant="contained"
                        type="submit"
                      >
                        submit
                      </LoadingButton>
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
                path={"/ditec/dashboard"}
              />
            </Container>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SubauaRegistrtionForm;
