import CloseIcon from "@mui/icons-material/Close";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resendOTP, sendOTP } from "../../redux/auth/authActions";
import { EMPTY_AUTH_STATE } from "../../redux/auth/authConstants";
import AlertDialog from "../../utils/dialogs/AlertDialog";

const SendOtp = ({ userName, setSuccessMsg }) => {
  const stateData = useSelector((state) => state.auth);

  const { response, buttonLoading } = stateData;

  // console.log(response);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [remainingTime, setRemainingTime] = useState(30);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const [alertContent, setAlertContent] = useState({
    open: false,
    content: "",
    title: "Resend has been expired!",
    icon: <CloseIcon sx={{ width: 80, height: 80 }} />,
    color: "red",
  });

  const handleAlertClose = () => {
    setAlertContent((old) => ({
      ...old,
      open: false,
    }));
    dispatch({ type: EMPTY_AUTH_STATE });
    navigate("/auth/login");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(timer);
        setButtonDisabled(false);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isButtonDisabled, remainingTime]);

  useEffect(() => {
    if (response.code === 1000) {
      setSuccessMsg("OTP Successfully sent your Mobilenumber and Email!");
    } else if (response.code === 4000) {
      setErrorMsg("Please enter correct OTP!");
    } else if (response.code === 1500) {
      setErrorMsg("Please enter valid OTP!");
    } else if (response.code === 1013) {
      setAlertContent((old) => ({
        ...old,
        open: true,
      }));
    } else {
      setErrorMsg("");
    }
  }, [response]);

  const onOTPSubmit = (data) => {
    const request = {
      ...userName,
      otp: data?.otp,
      otpType: "Login",
    };
    console.log(request);
    dispatch(sendOTP(request));
  };

  const reSend = () => {
    console.log(userName);
    setRemainingTime(30);
    setButtonDisabled(true);
    dispatch(resendOTP(userName));
    setSuccessMsg("");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onOTPSubmit)}>
        <Grid item xs={12} md={12} mt={4}>
          {errorMsg && (
            <FormHelperText sx={{ mb: 2 }} error>
              {errorMsg}
            </FormHelperText>
          )}
          <FormControl fullWidth>
            <TextField
              type="text"
              {...register("otp", {
                required: "OTP are required!",
              })}
              label={"OTP"}
              size="medium"
            />
          </FormControl>
          {errors.otp && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.otp.message}
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
              Submit OTP
            </LoadingButton>
            <Stack
              mt={2}
              direction={"row"}
              justifyContent={"space-between"}
              display={"flex"}
              alignItems={"center"}
            >
              <FormHelperText
                sx={{ justifyContent: "center", display: "flex" }}
              >
                Resend will be enabled in {remainingTime} seconds
              </FormHelperText>

              <Button onClick={reSend} disabled={isButtonDisabled}>
                Resend OTP
              </Button>
            </Stack>
          </Box>
        </Grid>
      </form>

      <AlertDialog
        open={alertContent.open}
        icon={alertContent.icon}
        handleClose={handleAlertClose}
        title={alertContent.title}
        color={alertContent.color}
        width={"xs"}
      />
    </>
  );
};

export default SendOtp;
