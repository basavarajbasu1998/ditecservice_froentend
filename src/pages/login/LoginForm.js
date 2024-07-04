import { useTheme } from "@emotion/react";
import { FaxRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Card,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

import { Formik } from "formik";

import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getLogin, getSubaua } from "../../redux/auth/authActions";
import { EMPTY_AUTH_STATE } from "../../redux/auth/authConstants";
import Cookies from "js-cookie";
import Captcha from "./Captcha";
import { useForm } from "react-hook-form";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const LoginForm = () => {
  const stateData = useSelector((state) => state.auth);

  const { data, response, buttonLoading } = stateData;

  console.log(response);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useTheme();

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [refreshCaptchaOnSubmit, setRefreshCaptchaOnSubmit] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm();

  const handleLoginSubmit = (values) => {
    Cookies.remove("Role");
    dispatch({ type: EMPTY_AUTH_STATE });
    dispatch(getLogin(values));
    // if (values.userName === "admin" && values.password === "asdf@123") {
    //   dispatch(getLogin());
    // } else if (values.userName === "subaua" && values.password === "asdf@123") {
    //   dispatch(getSubaua());
    // } else {
    //   setErrorMsg("Plese check your credentials!");
    // }
    setRefreshCaptchaOnSubmit(true);
  };

  useEffect(() => {
    if (response?.code === 1000) {
      setErrorMsg("");
    } else if (response?.code === 1001) {
      setErrorMsg("Please check your credentials!");
    } else if (response?.code === 1002) {
      setErrorMsg("Please check your credentials!");
    } else if (response?.code === 10007) {
      setErrorMsg(response?.message);
    } else if (response?.code === 4000) {
      setErrorMsg(response?.message);
    }
    else {
      setErrorMsg("");
    }
  }, [response]);

  return (
    <>
      <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <Typography variant="h4" mb={3} color={"#017DC5"}>
          Welcome to DITEC
        </Typography>
        <Grid container direction={"column"} spacing={2}>
          <Grid item xs={12} md={12}>
            {errorMsg && (
              <Card sx={{
                p: 0.5, mb: 2, border: '1px solid red', display: 'flex', // To use flexbox for centering
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
                textAlign: 'center',
              }}>
                <Grid container >
                  <Grid item>
                    <ErrorOutlineIcon sx={{ color: 'red', mr: 1, fontSize: "14px" }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                      <FormHelperText
                        sx={{ mb: 0, fontSize: '16px' }} // Remove margin bottom
                        error
                        id="standard-weight-helper-text-email-login"
                      >
                        {errorMsg}
                      </FormHelperText>
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            )}

            <FormControl fullWidth>
              <InputLabel>Email / Mobile No</InputLabel>
              <OutlinedInput
                type="text"
                name="userName"
                label={"Email / Mobile No"}
                {...register("userName", {
                  required: {
                    value: true,
                    message: "Username are required!",
                  },
                })}
              />
            </FormControl>
            {errors.userName && (
              <FormHelperText error>{errors.userName.message}</FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={12}>
            <FormControl fullWidth>
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password are required!",
                  },
                })}
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
                label={"Password"}
                inputProps={{}}
              />
            </FormControl>
            {errors.password && (
              <FormHelperText error>{errors.password.message}</FormHelperText>
            )}
            <Grid item xs={12}>
              <Captcha
                register={register}
                errors={errors}
                watch={watch}
                control={control}
                setValue={setValue}
                refreshCaptchaOnSubmit={refreshCaptchaOnSubmit}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Box sx={{ mt: 2 }}>
                <LoadingButton
                  sx={{
                    bgcolor: "#017DC5",
                    ":hover": { bgcolor: "#068edd" },
                  }}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  // loading={buttonLoading}
                  loading={response?.code === 1000 && buttonLoading}
                >
                  Sign in
                </LoadingButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default LoginForm;
