import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  saAddDocuments,
  saUpdateDocuments,
} from "../../../redux/superadmin/superAdminAction";
import { LoadingButton } from "@mui/lab";
import { SUPERADMIN_CLEAR_STATE } from "../../../redux/superadmin/superAdminConstants";
import AlertDialog from "../../../utils/dialogs/AlertDialog";
import TickIcon from "../../../utils/animatedIcons/TickIcon";

const SADocumentMasterAdd = () => {
  const stateData = useSelector((state) => state.superadmin);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { doneStatus, buttonLoading } = stateData;

  console.log(doneStatus);

  const [alertContent, setAlertContent] = useState({
    open: false,
    title: "Success",
    icon: <TickIcon />,
    content: "",
  });

  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  // console.log(location.state?.data);
  const onSubmit = (data) => {
    dispatch({ type: SUPERADMIN_CLEAR_STATE });
    console.log(data);
    if (
      location.state &&
      location.state.data &&
      location.state.data.certfacteMasterTitle
    ) {
      const sendData = {
        id: location.state?.data?.id,
        certfacteMasterTitle: data.certfacteMasterTitle,
      };
      console.log(sendData);
      dispatch(saUpdateDocuments(sendData, reset));
    } else {
      dispatch(saAddDocuments(data, reset));
    }
  };

  const handleAlertClose = () => {
    dispatch({ type: SUPERADMIN_CLEAR_STATE });
    setAlertContent((old) => ({ ...old, open: false }));
    navigate("/ditec/superadmin/documentmaster");
  };

  useEffect(() => {
    if (
      location.state &&
      location.state.data &&
      location.state.data.certfacteMasterTitle
    ) {
      setValue(
        "certfacteMasterTitle",
        location.state.data.certfacteMasterTitle
      );
    }
  }, [location.state]);

  useEffect(() => {
    if (doneStatus.code === 1000) {
      setAlertContent((old) => ({
        ...old,
        open: true,
        content: doneStatus.message,
      }));
    } else if (doneStatus.code === 1012) {
      setError(doneStatus.message);
    }
  }, [doneStatus]);

  return (
    <>
      <Container maxWidth="lg">
        <Stack direction={"row"} alignItems={"flex-start"} mb={1}>
          <KeyboardBackspaceIcon
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
        </Stack>
        <Typography mb={2} variant="h4">
          Heading
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card sx={{ p: 3 }}>
            <Stack
              direction={"column"}
              // justifyContent={"center"}
              alignItems={"center"}
              // display={"flex"}
              spacing={3}
            >
              <Box>
                <TextField
                  sx={{ width: 460 }}
                  type="text"
                  name="certfacteMasterTitle"
                  {...register("certfacteMasterTitle", {
                    required: true,
                  })}
                  label={"Title"}
                />

                {errors.certfacteMasterTitle &&
                  errors.certfacteMasterTitle.type === "required" && (
                    <FormHelperText error>Title required!</FormHelperText>
                  )}
                {error && <FormHelperText error>{error}</FormHelperText>}
              </Box>

              <LoadingButton
                loading={buttonLoading}
                variant="contained"
                type="submit"
              >
                {location.state?.data?.certfacteMasterTitle
                  ? "Update"
                  : "Submit"}
              </LoadingButton>
            </Stack>
          </Card>
        </form>

        <AlertDialog
          open={alertContent.open}
          handleClose={handleAlertClose}
          title={alertContent.title}
          icon={alertContent.icon}
          content={alertContent.content}
          width={"xs"}
        />
      </Container>
    </>
  );
};

export default SADocumentMasterAdd;
