import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  documentsStatus,
  subAUApproval,
  subauaData,
} from "../../redux/admin/adminActions";
import FormStatus from "./FormStatus";
import { LoadingButton } from "@mui/lab";
import AlertDialog from "../../utils/dialogs/AlertDialog";
import CircularLoading from "../../utils/CircularLoading";
import GenAPI from "./GenAPI";

const StatusPage = () => {
  const stateData = useSelector((state) => state.admin);

  const { doneStatus, buttonLoading, auaData, documentStatus, genapikey } =
    stateData;

  console.log("status Page firsttttttttttttttttttttttttttttttt", auaData);

  console.log("status Page idddddddddddddddddddddddddd", auaData?.subAuaId);

  //   console.log(stateData);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [alertContent, setAlertContent] = useState({
    open: false,
    content: "",
    data: {},
  });

  const [pendingStatus, setPendingStatus] = useState(auaData?.status);

  useEffect(() => {
    const data = {
      subAuaId: location.state.data,
    };
    dispatch(documentsStatus(data));
    dispatch(subauaData(data));
  }, []);

  useEffect(() => {
    setPendingStatus(auaData?.status);
  }, [auaData]);

  const handleAlertSubmit = (data) => {
    console.log("ddddddattttttttt", data);
    setPendingStatus(data.status);
    dispatch(subAUApproval(data));
    setAlertContent((old) => ({
      ...old,
      open: false,
    }));
  };

  const handleAlertClose = () => {
    setAlertContent((old) => ({
      ...old,
      open: false,
    }));
  };

  const changedData = (data) => {
    setPendingStatus(data);
  };

  const handleChangeStatus = (value) => {
    console.log(value);

    if (value === 1) {
      const data = {
        subAuaId: location.state.data,
        status: "Approved",
      };
      setAlertContent((old) => ({
        ...old,
        open: true,
        data: data,
        content: "Do you want to Approve?",
      }));
    } else {
      const data = {
        subAuaId: location.state.data.subAuaId,
        status: "Rejected",
      };
      setAlertContent((old) => ({
        ...old,
        open: true,
        data: data,
        content: "Do you want to Reject?",
      }));
    }
  };

  if (documentStatus?.length < 0 && auaData?.length < 0) {
    return (
      <>
        <CircularLoading />
      </>
    );
  }
  // if (buttonLoading) {
  //   return (
  //     <>
  //       <CircularLoading />
  //     </>
  //   );
  // }

  return (
    <>
      <Container maxWidth={"lg"}>
        <Stack direction={"row"} alignItems={"flex-start"}>
          <KeyboardBackspaceIcon
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
        </Stack>
        <Typography my={3} variant="h4" color={"#1B5886"}>
          Sub-AUA Registration Form
        </Typography>

        <Card sx={{ p: 4 }}>
          <Typography mb={3} variant="h5" color={"#1B5886"}>
            Organisation Details
          </Typography>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box>
                  <FormLabel sx={{ mb: 1 }}> Organisation Name</FormLabel>
                </Box>
                <FormControl fullWidth>
                  <TextField
                    disabled
                    name="organisationName"
                    id="demo-simple-select"
                    value={auaData?.organisationName}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <FormLabel sx={{ mb: 1 }}>
                    Business Application Name
                  </FormLabel>
                </Box>
                <FormControl fullWidth>
                  <TextField
                    name="businessApplicationName"
                    id="demo-simple-select"
                    value={auaData?.businessApplicationName}
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box>
                  <FormLabel sx={{ mb: 1 }}>Address</FormLabel>
                </Box>
                <FormControl fullWidth>
                  <TextField
                    multiline
                    rows={4}
                    name="address"
                    id="demo-simple-select"
                    value={auaData?.address}
                    disabled
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          <Typography color={"#1B5886"} my={3} variant="h5">
            Management Point of contact
          </Typography>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box>
                  <FormLabel sx={{ mb: 1 }}>Name</FormLabel>
                </Box>
                <FormControl fullWidth>
                  <TextField
                    name="managementName"
                    id="demo-simple-select"
                    disabled
                    value={auaData?.managementName}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <FormLabel sx={{ mb: 1 }}>Designation</FormLabel>
                </Box>
                <FormControl fullWidth>
                  <TextField
                    name="managementDesignationName"
                    id="demo-simple-select"
                    disabled
                    value={auaData?.managementDesignationName}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box>
                  <FormLabel sx={{ mb: 1 }}>Mobile Number</FormLabel>
                </Box>
                <FormControl fullWidth>
                  <TextField
                    name="managementMobilenumber"
                    id="demo-simple-select"
                    disabled
                    value={auaData?.managementMobilenumber}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <FormLabel sx={{ mb: 1 }}>Email</FormLabel>
                </Box>
                <FormControl fullWidth>
                  <TextField
                    name="managementEmail"
                    id="demo-simple-select"
                    disabled
                    value={auaData?.managementEmail}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          <Typography my={3} variant="h5" color={"#1B5886"}>
            Technical Point of contact
          </Typography>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box>
                  <FormLabel sx={{ mb: 1 }}>Name</FormLabel>
                </Box>
                <FormControl fullWidth>
                  <TextField
                    name="technicalName"
                    id="demo-simple-select"
                    disabled
                    value={auaData?.technicalName}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <FormLabel sx={{ mb: 1 }}>Designation</FormLabel>
                </Box>
                <FormControl fullWidth>
                  <TextField
                    name="technicalDesignationName"
                    id="demo-simple-select"
                    disabled
                    value={auaData?.technicalDesignationName}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box>
                  <FormLabel sx={{ mb: 1 }}>Mobile Number</FormLabel>
                </Box>
                <FormControl fullWidth>
                  <TextField
                    name="technicalMobilenumber"
                    id="demo-simple-select"
                    disabled
                    value={auaData?.technicalMobilenumber}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <FormLabel sx={{ mb: 1 }}>Email</FormLabel>
                </Box>
                <FormControl fullWidth>
                  <TextField
                    name="technicalEmail"
                    id="demo-simple-select"
                    disabled
                    value={auaData?.technicalEmail}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          <Typography my={3} variant="h5" color={"#1B5886"}>
            Authentication Service
          </Typography>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="subtitle1">AUA Services</Typography>
                </Box>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="auaDemographic"
                        disabled
                        checked={auaData?.auaDemographic}
                      />
                    }
                    label="Demograpic"
                  />

                  <>
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">
                        category
                      </FormLabel>

                      <Stack ml={3} direction={"row"} spacing={2}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="auaDemoghrapicBasic"
                              disabled
                              checked={auaData?.auaDemoghrapicBasic}
                            />
                          }
                          label="Basic"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="auaDemoghrapicpoi"
                              disabled
                              checked={auaData?.auaDemoghrapicpoi}
                            />
                          }
                          label="POI"
                        />{" "}
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="auaDemoghrapicFull"
                              disabled
                              checked={auaData?.auaDemoghrapicFull}
                            />
                          }
                          label="Full"
                        />
                      </Stack>
                    </FormControl>
                  </>

                  <FormControlLabel
                    control={
                      <Checkbox
                        name="auaOtp"
                        disabled
                        checked={auaData?.auaOtp}
                      />
                    }
                    label="OTP"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="auaFingerprint"
                        disabled
                        checked={auaData?.auaFingerprint}
                      />
                    }
                    label="Fingerprint"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="auaIris"
                        checked={auaData?.auaIris}
                        disabled
                      />
                    }
                    label="Iris"
                  />
                </FormGroup>
              </Grid>
              <Grid item md={6}>
                <Box>
                  <Typography variant="subtitle1">KUA Services</Typography>
                </Box>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="kuaOtp"
                        disabled
                        checked={auaData?.kuaOtp}
                      />
                    }
                    label="OTP"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="kuaFingerprint"
                        disabled
                        checked={auaData?.kuaFingerprint}
                      />
                    }
                    label="Fingerprint"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="kuaIris"
                        disabled
                        checked={auaData?.kuaIris}
                      />
                    }
                    label="Iris"
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={3}>
            <Grid mt={2} item xs={12} md={6}>
              <Box>
                <FormLabel sx={{ mb: 1 }}>Authentication Purpose</FormLabel>
              </Box>
              <FormControl fullWidth>
                <TextField
                  multiline
                  rows={4}
                  name="authenticationPurpose"
                  disabled
                  value={auaData?.authenticationPurpose}
                />
              </FormControl>
            </Grid>

            <Grid mt={2} item xs={12} md={6}>
              <Box>
                <FormLabel sx={{ mb: 1 }}>eKYC purpose</FormLabel>
              </Box>
              <FormControl fullWidth>
                <TextField
                  multiline
                  rows={4}
                  name="kycpurpose"
                  disabled
                  value={auaData?.kycpurpose}
                />
              </FormControl>
            </Grid>

            <Grid item md={3}>
              <Box>
                <Typography variant="subtitle1">
                  Integration Approach
                </Typography>
              </Box>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="integrationApprochAPI"
                      disabled
                      checked={auaData?.integrationApprochAPI}
                    />
                  }
                  label="APIs"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="integrationApprochThinClient"
                      disabled
                      checked={auaData?.integrationApprochThinClient}
                    />
                  }
                  label="Thin Clients"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="integrationApprochweb"
                      disabled
                      checked={auaData?.integrationApprochweb}
                    />
                  }
                  label="Web"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="integrationApprochmobile"
                      disabled
                      checked={auaData?.integrationApprochmobile}
                    />
                  }
                  label="Mobile"
                />
              </FormGroup>
            </Grid>

            <Grid item md={3}>
              <Box>
                <Typography variant="subtitle1">
                  Application Environment
                </Typography>
              </Box>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="applicationEnvironmentjava"
                      disabled
                      checked={auaData?.applicationEnvironmentjava}
                    />
                  }
                  label="Java"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="applicationEnvironmentnet"
                      disabled
                      checked={auaData?.applicationEnvironmentnet}
                    />
                  }
                  label=".NET"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="applicationEnvironmentphp"
                      disabled
                      checked={auaData?.applicationEnvironmentphp}
                    />
                  }
                  label="PHP"
                />
              </FormGroup>
            </Grid>

            <Grid item md={3}>
              <Box>
                <Typography variant="subtitle1">RD Devices</Typography>
              </Box>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="applicationEnvironment"
                      disabled
                      checked={auaData?.rddevicesMantra}
                    />
                  }
                  label="Mantra"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="applicationEnvironment"
                      disabled
                      checked={auaData?.rddevicesStartek}
                    />
                  }
                  label="StarTek"
                />
              </FormGroup>
            </Grid>
            <Grid item md={3}>
              <Box>
                <Typography variant="subtitle1">Other Services</Typography>
              </Box>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="otherservicesdbt"
                      disabled
                      checked={auaData?.otherservicesdbt}
                    />
                  }
                  label="DBT"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="otherservicesdigitalsignature"
                      disabled
                      checked={auaData?.otherservicesdigitalsignature}
                    />
                  }
                  label="Digital Signature"
                />
              </FormGroup>
            </Grid>
          </Grid>

          <Box sx={{ my: 4 }}>
            <Divider flexItem />
          </Box>
        </Card>
        <Box sx={{ mt: 3 }}>
          {documentStatus !== null &&
            documentStatus !== undefined &&
            Object.keys(documentStatus).length != 0 && (
              <FormStatus documentStatus={documentStatus} formData={auaData} />
            )}
        </Box>

        <Card sx={{ p: 2, mt: 1 }}>
          {pendingStatus === "Approved" && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h5">Status</Typography>
              <Stack mt={2} direction={"row"} spacing={2}>
                <Typography color={"green"}>●</Typography>{" "}
                <Typography color={"green"} variant="subtitle1">
                  Approved
                </Typography>
              </Stack>
            </Box>
          )}
          {pendingStatus === "Pending" && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h5">Status</Typography>
              <Stack mt={2} direction={"row"} spacing={2}>
                <Typography color={"#eed202"}>●</Typography>{" "}
                <Typography color={"#eed202"} variant="subtitle1">
                  {pendingStatus}
                </Typography>
              </Stack>
              <Stack mt={2} direction={"row"} spacing={2}>
                <LoadingButton
                  loading={buttonLoading}
                  onClick={() => handleChangeStatus(1)}
                  variant="contained"
                  color="success"
                >
                  Approval
                </LoadingButton>
                <LoadingButton
                  loading={buttonLoading}
                  onClick={() => handleChangeStatus(2)}
                  variant="contained"
                  color="error"
                >
                  Reject
                </LoadingButton>
              </Stack>
            </Box>
          )}
          {pendingStatus === "Rejected" && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h5">Status</Typography>
              <Stack mt={2} direction={"row"} spacing={2}>
                <Typography color={"error"}>●</Typography>{" "}
                <Typography color={"error"} variant="subtitle1">
                  Rejected
                </Typography>
              </Stack>
            </Box>
          )}
        </Card>

        <Card sx={{ p: 2, mt: 1 }}>
          <CardContent>
            <Typography variant="h6">API KEYS</Typography>
          </CardContent>
          <GenAPI subAuaId={auaData?.subAuaId} />
        </Card>

        <Card sx={{ p: 2, margin: "10px" }}>
          <Typography variant="h6">Account Details</Typography>
          <div>
            <Button
              sx={{ margin: "10px" }}
              variant="contained"
              color={auaData?.accountStatus === "Active" ? "primary" : "error"}
              disabled={auaData?.accountStatus === "Active"}
            >
              Active
            </Button>
            <Button
              sx={{ margin: "10px" }}
              variant="contained"
              color={
                auaData?.accountStatus === "Deactive" ? "error" : "primary"
              }
              disabled={auaData?.accountStatus === "Deactive"}
            >
              Deactive
            </Button>
          </div>
          {auaData?.accountStatus && (
            <Typography
              sx={{ margin: "10px" }}
              variant="body2"
              color={auaData.accountStatus === "Active" ? "primary" : "error"}
            >
              {auaData.accountStatus === "Active"
                ? "This account is currently activated."
                : "This account is currently deactivated."}
            </Typography>
          )}
        </Card>
      </Container>

      <AlertDialog
        open={alertContent.open}
        handleClose={handleAlertSubmit}
        handleOnlyClose={handleAlertClose}
        content={alertContent.content}
        data={alertContent.data}
        width={"xs"}
      />
    </>
  );
};

export default StatusPage;
