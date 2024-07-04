import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Avatar,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Slide,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { cyan, green } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { subauaChangePassword } from "../../redux/subaua/subauaAction";
import { loadState } from "../../helper/SessionStorage";
import AlertDialog from "../../utils/dialogs/AlertDialog";
import { SUB_AUA_CLEAR_STATE } from "../../redux/subaua/subauaConstant";
import { EMPTY_AUTH_STATE } from "../../redux/auth/authConstants";
import Cookies from "js-cookie";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ChangePasswordDialog = () => {
  const stateData = useSelector((state) => state.subaua);

  const dialogRef = useRef(null);
  const [show, setShow] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  const retrievedValue = loadState("subauaid", "Default Value");
  console.log(retrievedValue);

  const { response } = stateData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [alertContent, setAlertContent] = useState({
    open: false,
    title: "Success",
    icon: <DoneIcon sx={{ height: 80, width: 100 }} />,
    content: "Your password has been changed successfully!",
  });

  useEffect(() => {
    if (response?.code === 1000) {
      setIsLoading(false);
      setShow(false);
      setAlertContent((old) => ({ ...old, open: true }));
    }
  }, [response]);

  const handleClose = () => {
    dispatch({ type: SUB_AUA_CLEAR_STATE });
    setAlertContent((old) => ({ ...old, open: false }));
    dispatch({ type: EMPTY_AUTH_STATE });
    sessionStorage.removeItem("subauaid");
    Cookies.remove("Role");
    navigate("/");
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    const sendData = {
      subAuaId: retrievedValue,
      password: data.confirmPassword,
    };
    console.log(sendData);
    dispatch(subauaChangePassword(sendData));
  };

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Dialog
        open={show}
        onClose={() => {}}
        disableEscapeKeyDown={true}
        ref={dialogRef}
        fullWidth
        maxWidth="sm"
        transitionDuration={1000}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle color={"white"} bgcolor={"#14BDEE"} variant="h5">
          Change Password
        </DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Stack direction={"column"} spacing={3}>
              <Box>
                <FormControl fullWidth>
                  <FormLabel>New Password*</FormLabel>
                  <OutlinedInput
                    type={showNewPassword ? "text" : "password"}
                    name="newPassword"
                    {...register("newPassword", {
                      required: true,
                    })}
                    inputProps={{
                      autoComplete: "off", // Prevent browser autofill
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowNewPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showNewPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {errors.newPassword &&
                  errors.newPassword.type === "required" && (
                    <FormHelperText error>
                      New Password required!
                    </FormHelperText>
                  )}
              </Box>
              <Box>
                <FormControl fullWidth>
                  <FormLabel>Confirm Password*</FormLabel>
                  <OutlinedInput
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    {...register("confirmPassword", {
                      required: true,
                    })}
                    inputProps={{
                      autoComplete: "off", // Prevent browser autofill
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {errors.confirmPassword &&
                  errors.confirmPassword.type === "required" && (
                    <FormHelperText error>
                      Confirm Password required!
                    </FormHelperText>
                  )}
              </Box>
            </Stack>
          </DialogContent>

          <DialogActions sx={{ p: 1, justifyContent: "center" }}>
            <LoadingButton
              sx={{
                color: "white",
                bgcolor: "#14BDEE",
                ":hover": { bgcolor: "skyblue" },
              }}
              loading={isLoading}
              type="submit"
            >
              Change Password
            </LoadingButton>
          </DialogActions>
        </form>
      </Dialog>

      <AlertDialog
        open={alertContent.open}
        handleClose={handleClose}
        title={alertContent.title}
        icon={alertContent.icon}
        content={alertContent.content}
      />
    </div>
  );
};

export default ChangePasswordDialog;
