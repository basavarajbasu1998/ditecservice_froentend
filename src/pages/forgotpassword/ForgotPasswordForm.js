import { useTheme } from "@emotion/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";

import { Formik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { EMPTY_AUTH_STATE } from "../../redux/auth/authConstants";
import { forgotPassword } from "../../redux/auth/authActions";
import { CLEAR_STATE } from "../../redux/dashboard/dashboardConstant";
import AlertDialog from "../../utils/dialogs/AlertDialog";

const ForgotPasswordForm = () => {
  const stateData = useSelector((state) => state.auth);

  const { data, response, buttonLoading } = stateData;

  console.log(response);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useTheme();
  const [errorMsg, setErrorMsg] = useState("");

  const [alertContent, setAlertContent] = useState({
    open: false,
    title: "Success",
    icon: <DoneIcon sx={{ height: 80, width: 100 }} />,
    content:
      "Mail Successfully Sent you mail id,Please Check your mail for further details!",
  });

  const handleLoginSubmit = (values, { resetForm }) => {
    console.log(values);
    setErrorMsg("");
    dispatch({ type: EMPTY_AUTH_STATE });
    dispatch(forgotPassword(values, resetForm));
  };

  useEffect(() => {
    if (response?.code === 1000) {
      setAlertContent((old) => ({ ...old, open: true }));
    } else if (response?.code === 1500) {
      setErrorMsg("User not there!");
    }
  }, [response]);

  const handleClose = () => {
    dispatch({ type: CLEAR_STATE });
    setAlertContent((old) => ({ ...old, open: false }));
  };

  return (
    <>
      <Formik
        initialValues={{
          managementEmail: "",
        }}
        validationSchema={Yup.object().shape({
          managementEmail: Yup.string().max(255).required("Email required!"),
        })}
        onSubmit={handleLoginSubmit}
      >
        {({
          errors,

          handleBlur,
          handleChange,
          handleSubmit,
          setFieldError,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Typography variant="h4" mb={3} color={"#017DC5"}>
              Forgot Password
            </Typography>
            <Grid container direction={"column"} spacing={2}>
              <Grid item xs={12} md={12}>
                {errorMsg && (
                  <FormHelperText
                    sx={{ mb: 2 }}
                    error
                    id="standard-weight-helper-text-email-login"
                  >
                    {errorMsg}
                  </FormHelperText>
                )}

                <FormControl
                  fullWidth
                  error={Boolean(touched.newPassword && errors.newPassword)}
                  sx={{ ...theme.typography.customInput }}
                >
                  <FormLabel sx={{ mb: 1 }}>Email</FormLabel>
                  {/* <InputLabel htmlFor="outlined-adornment-email-login">
                    Email
                  </InputLabel> */}
                  <OutlinedInput
                    type="text"
                    value={values.managementEmail}
                    name="managementEmail"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Email"
                    size="medium"
                  />
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

              <Grid item xs={12} md={12}>
                <Box sx={{ mt: 2 }}>
                  {/* <AnimateButton> */}
                  <LoadingButton
                    // disableElevation
                    // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="secondary"
                    loading={buttonLoading}
                  >
                    Submit
                  </LoadingButton>
                  {/* </AnimateButton> */}
                </Box>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>

      <AlertDialog
        open={alertContent.open}
        handleClose={handleClose}
        title={alertContent.title}
        icon={alertContent.icon}
        content={alertContent.content}
      />
    </>
  );
};

export default ForgotPasswordForm;
