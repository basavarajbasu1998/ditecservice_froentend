import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import BackButton from "../../utils/BackButton";
import { Controller, useForm } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useDispatch, useSelector } from "react-redux";
import {
  paymentDetails,
  paymentNavigate,
} from "../../redux/subaua/subauaAction";
import AlertDialog from "../../utils/dialogs/AlertDialog";
import { loadState } from "../../helper/SessionStorage";
import { useState } from "react";
import TickIcon from "../../utils/animatedIcons/TickIcon";
import { SUB_AUA_CLEAR_STATE } from "../../redux/subaua/subauaConstant";
import { useEffect } from "react";
import { listOfBanks } from "../../utils/constants/bankList";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NavigationContol from "../utils/NavigationContol";

const ModeOfTransaction = () => {
  const stateData = useSelector((state) => state.subaua);

  const { doneStatus, afterPaymentNavigate } = stateData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm();

  const retrievedValue = loadState("subauaid", "Default Value");
  const paymentMode = watch("paymentMode");

  const [alertContent, setAlertContent] = useState({
    open: false,
    title: "Success",
    content: "Data has been successfully submitted",
    icon: <TickIcon />,
  });

  const handleAlertClose = () => {
    dispatch({ type: SUB_AUA_CLEAR_STATE });
    setAlertContent((old) => ({ ...old, open: false }));
  };

  useEffect(() => {
    const request = {
      subAuaId: retrievedValue,
    };
    dispatch(paymentNavigate(request));

    if (doneStatus.code == 1000) {
      setAlertContent((old) => ({ ...old, open: true }));
    }
  }, [doneStatus]);

  const onSubmit = (data) => {
    console.log(data);
    const request = {
      subAuaId: retrievedValue,
      ...data,
    };
    dispatch(paymentDetails(request));
  };

  return (
    <>
      <Container maxWidth={"lg"}>
        {/* <BackButton /> */}
        <Typography my={3} variant="h5">
          Mode of Payment
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card sx={{ p: 4 }} elevation={3}>
            <Typography mb={3} variant="h5">
              Available Payment Modes
            </Typography>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <FormControl>
                    <Controller
                      name="paymentMode"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Please select Payment Mode type!" }}
                      render={({ field }) => (
                        <RadioGroup {...field} row={{ sm: false, md: true }}>
                          <FormControlLabel
                            value="online"
                            control={<Radio />}
                            labelPlacement="end"
                            label={"Online"}
                          />

                          <FormControlLabel
                            value="offline"
                            disabled
                            control={<Radio />}
                            labelPlacement="end"
                            label={"Offline"}
                          />
                        </RadioGroup>
                      )}
                    />
                  </FormControl>
                  {errors?.paymentMode && (
                    <FormHelperText error>
                      {errors?.paymentMode?.message}
                    </FormHelperText>
                  )}
                </Grid>
                {paymentMode === "online" && (
                  <>
                    <Grid item xs={12} md={12}>
                      <Typography mb={1} variant="h6">
                        Online Payment Details
                      </Typography>
                      <Divider flexItem />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <FormControl fullWidth>
                          <InputLabel htmlFor="outlined-adornment-acname">
                            Account Number
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-acname"
                            type="number"
                            name="acNo"
                            label="Account Number"
                            {...register("acNo", {
                              required: {
                                value: true,
                                message: "Account Number required!",
                              },
                            })}
                          />
                        </FormControl>
                        {errors.acNo && (
                          <FormHelperText error>
                            {errors.acNo.message}
                          </FormHelperText>
                        )}
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <FormControl fullWidth>
                          <Controller
                            name="bankName"
                            defaultValue=""
                            control={control}
                            rules={{ required: "Bank Name are require!" }}
                            render={({ field }) => (
                              <>
                                <InputLabel id="poa-district">
                                  Bank Name
                                </InputLabel>
                                <Select
                                  {...field}
                                  labelId="poa-district"
                                  label="Bank Name"
                                >
                                  {listOfBanks.map((item) => (
                                    <MenuItem value={item.toLocaleLowerCase()}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </>
                            )}
                          />
                        </FormControl>
                        {errors.bankName && (
                          <FormHelperText error>
                            {errors.bankName.message}
                          </FormHelperText>
                        )}
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <FormControl fullWidth>
                          <InputLabel htmlFor="outlined-adornment-ifsc">
                            IFSC Code
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-ifsc"
                            type="text"
                            name="ifsc"
                            label="IFSC code"
                            {...register("ifsc", {
                              required: {
                                value: true,
                                message: "IFSC code required!",
                              },
                            })}
                            onChange={(e) => {
                              e.target.value = e.target.value.toUpperCase(); // Convert input to uppercase
                              // You can add other onChange logic here if needed
                            }}
                          />
                        </FormControl>
                        {errors.ifsc && (
                          <FormHelperText error>
                            {errors.ifsc.message}
                          </FormHelperText>
                        )}
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <FormControl fullWidth>
                          <InputLabel htmlFor="outlined-adornment-scpname">
                            Account Person Name
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-scpname"
                            type="text"
                            name="accountPersonName"
                            label=" Account Person Name"
                            {...register("accountPersonName", {
                              required: {
                                value: true,
                                message: "Account Person Name required!",
                              },
                            })}
                          />
                        </FormControl>
                        {errors.accountPersonName && (
                          <FormHelperText error>
                            {errors.accountPersonName.message}
                          </FormHelperText>
                        )}
                      </Box>
                    </Grid>
                  </>
                )}

                {paymentMode === "offline" && (
                  <>
                    <Grid item xs={12} md={12}>
                      <Typography mb={1} variant="h6">
                        Offline Payment Details
                      </Typography>
                      <Divider flexItem />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box mt={1}>
                        <FormControl fullWidth>
                          <InputLabel htmlFor="outlined-adornment-acname">
                            Cheque Number
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-acname"
                            type="number"
                            name="chequeNumber"
                            label="Cheque Number"
                            {...register("chequeNumber", {
                              required: {
                                value: true,
                                message: "Cheque Number required!",
                              },
                            })}
                          />
                        </FormControl>
                        {errors.chequeNumber && (
                          <FormHelperText error>
                            {errors.chequeNumber.message}
                          </FormHelperText>
                        )}
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Controller
                        control={control}
                        name="chequeDate"
                        rules={{
                          required: "Cheque Date is required!",
                        }}
                        render={({ field: { onChange } }) => (
                          <>
                            <FormControl fullWidth>
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={["DatePicker"]}>
                                  <DatePicker
                                    sx={{ width: "100%" }}
                                    label="Cheque Date"
                                    disablePast
                                    onChange={(date) => {
                                      onChange(date);
                                    }}
                                    format={"MM/DD/YYYY"}
                                  />
                                </DemoContainer>
                              </LocalizationProvider>
                            </FormControl>
                          </>
                        )}
                      />
                      {errors.chequeDate && (
                        <FormHelperText error>
                          {errors.chequeDate.message}
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <FormControl fullWidth>
                          <InputLabel htmlFor="outlined-adornment-amount">
                            Amount
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-ifsc"
                            type="number"
                            name="amount"
                            label="Amount"
                            {...register("amount", {
                              required: {
                                value: true,
                                message: "Amount are required!",
                              },
                            })}
                          />
                        </FormControl>
                        {errors.amount && (
                          <FormHelperText error>
                            {errors.amount.message}
                          </FormHelperText>
                        )}
                      </Box>
                    </Grid>
                  </>
                )}

                <Grid
                  item
                  md={12}
                  justifyContent={"center"}
                  alignItems={"center"}
                  display={"flex"}
                >
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </form>
        <Stack mt={2} direction={"row"} justifyContent={"flex-end"}>
          <Button
            endIcon={<ArrowForwardIcon />}
            disabled={afterPaymentNavigate?.navigateStatus ? false : true}
            variant="contained"
            onClick={() => navigate("/ditec/subaua/invoice")}
          >
            Next
          </Button>
        </Stack>
        <NavigationContol
          path={"/ditec/subaua/invoice"}
          disabled={afterPaymentNavigate?.navigateStatus ? false : true}
          tooltipMessage={
            "After submitting your payment Mode, you can proceed to the next step."
          }
        />
        <AlertDialog
          open={alertContent.open}
          handleClose={handleAlertClose}
          title={alertContent.title}
          content={alertContent.content}
          icon={alertContent.icon}
          width={"xs"}
        />
      </Container>
    </>
  );
};

export default ModeOfTransaction;
