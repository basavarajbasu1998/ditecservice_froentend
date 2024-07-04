import { useTheme } from "@emotion/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import { Formik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { EMPTY_AUTH_STATE } from "../../redux/auth/authConstants";
import { changePassword } from "../../redux/auth/authActions";
import AlertDialog from "../../utils/dialogs/AlertDialog";

const ChangePasswordForm = () => {
  const { id } = useParams();

  const stateData = useSelector((state) => state.auth);

  const { data, response, buttonLoading } = stateData;

  console.log(response);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useTheme();

  const [errorMsg, setErrorMsg] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [alertContent, setAlertContent] = useState({
    open: false,
    title: "Success",
    icon: <DoneIcon sx={{ height: 80, width: 100 }} />,
    content: "Your password has been changed successfully!",
  });
  const handleClose = () => {
    dispatch({ type: EMPTY_AUTH_STATE });
    setAlertContent((old) => ({ ...old, open: false }));
    navigate("/auth/login");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLoginSubmit = (values, { resetForm }) => {
    const data = {
      subAuaId: id,
      password: values.confirmPassword,
    };
    dispatch({ type: EMPTY_AUTH_STATE });
    dispatch(changePassword(data, resetForm));
  };

  useEffect(() => {
    if (response?.code === 1000) {
      setAlertContent((old) => ({ ...old, open: true }));
    }
  }, [response]);

  return (
    <>
      <Formik
        initialValues={{
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object().shape({
          newPassword: Yup.string()
            .max(255)
            .required("New Password is required!"),
          confirmPassword: Yup.string()
            .max(255)
            .required("Confirm Password is required!")
            .oneOf(
              [Yup.ref("newPassword")],
              "New Password and Confirm Password Should be same!"
            ),
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
              Change Password
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
                  <InputLabel htmlFor="outlined-adornment-email-login">
                    New Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email-login"
                    type="password"
                    value={values.newPassword}
                    name="newPassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="New Password"
                    size="medium"
                  />
                </FormControl>
                {touched.newPassword && errors.newPassword && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-email-login"
                  >
                    {errors.newPassword}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} md={12}>
                <FormControl
                  fullWidth
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                  sx={{ ...theme.typography.customInput }}
                >
                  <InputLabel htmlFor="outlined-adornment-password-login">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-login"
                    type={showPassword ? "text" : "password"}
                    value={values.confirmPassword}
                    name="confirmPassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Confirm Password"
                    inputProps={{}}
                  />
                </FormControl>
                {touched.confirmPassword && errors.confirmPassword && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-password-login"
                  >
                    {errors.confirmPassword}
                  </FormHelperText>
                )}
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
                      Change Password
                    </LoadingButton>
                    {/* </AnimateButton> */}
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <AlertDialog
              open={alertContent.open}
              handleClose={handleClose}
              title={alertContent.title}
              icon={alertContent.icon}
              content={alertContent.content}
            />
          </form>
        )}
      </Formik>
    </>
  );
};

export default ChangePasswordForm;
