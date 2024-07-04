import { LoadingButton } from "@mui/lab";
import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { requestOTP } from "../../redux/auth/authActions";
import SendOtp from "./SendOtp";

const OTP = () => {
  const stateData = useSelector((state) => state.auth);

  const { response, buttonLoading } = stateData;

  // console.log(response);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [otpBoolean, setOtpBoolean] = useState(false);

  const [userName, setUsername] = useState();

  const onSubmit = (data) => {
    setUsername(data);
    const request = {
      userName: data.userName,
      otpType: "Login",
    };
    console.log(request);
    dispatch(requestOTP(request));
  };

  useEffect(() => {
    if (response?.code === 1000) {
      setOtpBoolean(true);
      setSuccessMsg("OTP Successfully sent your Mobilenumber and Email!");
    } else if (response?.code === 1500) {
      setErrorMsg("Invalid or Mismatch username!");
      setSuccessMsg("");
    } else {
      setErrorMsg("");
      setSuccessMsg("");
    }
  }, [response]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction={"column"} spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" mb={2} color={"#017DC5"}>
              Login with OTP
            </Typography>
          </Grid>
          {successMsg && (
            <Grid item xs={12}>
              <FormHelperText sx={{ color: "green" }}>
                {successMsg}
              </FormHelperText>
            </Grid>
          )}
          {!otpBoolean && (
            <>
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

                <FormControl fullWidth>
                  <TextField
                    type="text"
                    {...register("userName", {
                      required: "Username are required!",
                    })}
                    label={"Email / Mobile No"}
                    size="medium"
                  />
                </FormControl>
                {errors.userName && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-email-login"
                  >
                    {errors.userName.message}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} md={12}>
                <Box sx={{ mt: 2 }}>
                  <LoadingButton
                    // disableElevation

                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="secondary"
                    loading={buttonLoading}
                  >
                    Request OTP
                  </LoadingButton>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </form>
      {otpBoolean && (
        <SendOtp setSuccessMsg={setSuccessMsg} userName={userName} />
      )}
    </>
  );
};

export default OTP;
