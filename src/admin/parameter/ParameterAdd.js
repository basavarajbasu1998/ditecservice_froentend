import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";

// import { CLEAR_STATE } from "../../redux/dashboard/dashboardConstant";
import DoneIcon from "@mui/icons-material/Done";
import AlertDialog from "../../utils/dialogs/AlertDialog";

const ParameterAdd = () => {
  const stateData = useSelector((state) => state.dashboard);

  const { buttonLoading, data } = stateData;
  const theme = useTheme();

  console.log("stateDataaaaaaaaaaaaaa", stateData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  console.log("ssssssssssssssssss", location);

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
          parameterName: location?.state?.data
            ? location?.state?.data.parameterName
            : "",
          parameterValue: location?.state?.data
            ? location?.state?.parameterValue
            : "",
        }}
        validationSchema={Yup.object().shape({
          parameterName: Yup.string().required("Parameter Name is required!"),
          parameterValue: Yup.string().required("Parameter Value is required!"),
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
          <form noValidate onChange={handleChange} onSubmit={handleSubmit}>
            <Container maxWidth={"lg"}>
              <Typography my={3} variant="h4">
                Parameter
              </Typography>
              <Card sx={{ p: 4 }} elevation={3}>
                <Typography mb={3} variant="h5" color={"#14BDEE"}></Typography>
                <Box>
                  <Grid container spacing={3}>
                    <Grid item md={6}>
                      <FormControl fullWidth>
                        <TextField
                          name="parameterName"
                          id="demo-simple-select"
                          value={values.parameterName}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="Parameter Name"
                        />
                      </FormControl>
                      {touched.parameterName && errors.parameterName && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.parameterName}
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid item md={6}>
                      <FormControl fullWidth>
                        <TextField
                          name="parameterValue"
                          id="demo-simple-select"
                          value={values.parameterValue}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="Parameter Value"
                        />
                      </FormControl>
                      {touched.parameterValue && errors.parameterValue && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.parameterValue}
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid
                      item
                      md={12}
                      justifyContent={"center"}
                      alignItems={"center"}
                      display={"flex"}
                    >
                      <Button variant="contained" type="submit">
                        submit
                      </Button>
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

export default ParameterAdd;
