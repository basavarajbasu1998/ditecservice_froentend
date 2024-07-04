import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
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

const ServiceChargesAdd = () => {
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
          serviceType: location?.state?.data
            ? location?.state?.data.parameterName
            : "",
          transactionStart1: location?.state?.data
            ? location?.state?.transactionStart1
            : "",
          transactionStart2: location?.state?.data
            ? location?.state?.data.transactionStart2
            : "",
          transactionStart3: location?.state?.data
            ? location?.state?.transactionStart3
            : "",
          transactionStart4: location?.state?.data
            ? location?.state?.data.transactionStart4
            : "",
          transactionEnd1: location?.state?.data
            ? location?.state?.transactionEnd1
            : "",
          transactionEnd1: location?.state?.data
            ? location?.state?.data.transactionEnd1
            : "",
          transactionEnd1: location?.state?.data
            ? location?.state?.transactionEnd1
            : "",
          transactionEnd1: location?.state?.data
            ? location?.state?.data.transactionEnd1
            : "",
          transactionCharges1: location?.state?.data
            ? location?.state?.transactionCharges1
            : "",
          transactionCharges2: location?.state?.data
            ? location?.state?.transactionCharges2
            : "",
          transactionCharges3: location?.state?.data
            ? location?.state?.transactionCharges3
            : "",
          transactionCharges4: location?.state?.data
            ? location?.state?.transactionCharges4
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
                Service Charges
              </Typography>
              <Card sx={{ p: 4 }} elevation={3}>
                <Typography mb={3} variant="h5" c></Typography>
                <Box>
                  <Grid container spacing={3}>
                    <Grid item md={12}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Service Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          name="serviceType"
                          id="demo-simple-select"
                          value={values.serviceType}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="service Type"
                        >
                          <MenuItem value={"ekyc"} selected>
                            eKYC
                          </MenuItem>
                          <MenuItem value={"authentication"}>
                            Authentication
                          </MenuItem>
                          <MenuItem value={"dbtscheme"}>DBT Scheme</MenuItem>
                          <MenuItem value={"digital Signature"}>
                            Digital Signature
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item md={4}>
                      <FormControl fullWidth>
                        <TextField
                          name="transactionStart1"
                          id="demo-simple-select"
                          value={values.transactionStart1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="transactionStart1"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item md={6}>
                      <FormControl fullWidth>
                        <TextField
                          name="transactionStart2"
                          id="demo-simple-select"
                          value={values.transactionStart2}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="Parameter Value"
                        />
                      </FormControl>
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

export default ServiceChargesAdd;
