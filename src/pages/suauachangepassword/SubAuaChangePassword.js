import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DoneIcon from "@mui/icons-material/Done";
import { loadState } from "../../helper/SessionStorage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AlertDialog from "../../utils/dialogs/AlertDialog";
import { EMPTY_AUTH_STATE } from "../../redux/auth/authConstants";
import { useEffect } from "react";
import { getsubauaChangePassword } from "../../redux/auth/authActions";

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const stateData = useSelector((state) => state.auth);
  const { data, response, buttonLoading } = stateData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [alertContent, setAlertContent] = useState({
    open: false,
    title: "Success",
    icon: <DoneIcon sx={{ height: 80, width: 100 }} />,
    content: "Your password has been changed successfully!",
  });
  const retrievedValue = loadState("subauaid", "Default Value");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    dispatch({ type: EMPTY_AUTH_STATE });
    setAlertContent((old) => ({ ...old, open: false }));
    navigate("/auth/login");
  };

  const handlePasswordChange = (values) => {
    const { newPassword, confirmPassword } = values;

    if (newPassword !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return false;
    }
    setErrorMsg("");
    return true;
  };

  const handleLoginSubmit = async (values) => {
    console.log("dataaaaaaaaaaaaaa", values);
    const isValidPassword = handlePasswordChange(values);
    if (!isValidPassword) {
      return;
    }
    const data = {
      subAuaId: retrievedValue,
      newpassword: values.newPassword,
      password: values.currentPassword,
    };
    try {
      dispatch(getsubauaChangePassword(data));
    } catch (error) {}
  };

  useEffect(() => {
    if (response?.code === 1000) {
      setAlertContent((old) => ({ ...old, open: true }));
    } else if (response?.code === 10005) {
      console.log("ressssssssssssssssssssssssssssssss", response);
      setErrorMsg("Password is Wrong!");
    } else if (response?.code === 10006) {
      setErrorMsg("Old password and new Password cannot be the same.");
    }
    console.log("out side", response);
  }, [response]);

  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)}>
      <Card sx={{ p: 2 }}>
        <Typography variant="h4" mb={3} color={"#017DC5"}>
          Change Password
        </Typography>
        <Stack direction="column" spacing={3} alignItems="center">
          {errorMsg && (
            <FormHelperText sx={{ mb: 2 }} error>
              {errorMsg}
            </FormHelperText>
          )}
          <TextField
            fullWidth
            label="Current Password"
            name="currentPassword"
            type="password"
            {...register("currentPassword", {
              required: "Current Password required!",
            })}
            error={!!errors.currentPassword}
            helperText={errors.currentPassword?.message}
          />

          <TextField
            fullWidth
            label="New Password"
            type={showPassword ? "text" : "password"}
            name="newPassword"
            {...register("newPassword", {
              required: "New Password required!",
            })}
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message}
            id="outlined-adornment-password-login"
            InputProps={{
              endAdornment: (
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
              ),
            }}
          />
          <TextField
            fullWidth
            label="Confirm New Password"
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm Password required!",
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            id="outlined-adornment-password-confirm"
          />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Stack>

        <AlertDialog
          open={alertContent.open}
          handleClose={handleClose}
          title={alertContent.title}
          icon={alertContent.icon}
          content={alertContent.content}
        />
      </Card>
    </form>
  );
};

export default ChangePasswordForm;
