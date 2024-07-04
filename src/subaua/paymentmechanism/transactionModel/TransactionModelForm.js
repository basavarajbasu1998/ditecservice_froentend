// import {
//   Box,
//   Button,
//   Card,
//   Checkbox,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   FormControl,
//   FormControlLabel,
//   FormHelperText,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Paper,
//   Select,
//   Stack,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Typography,
//   debounce,
// } from "@mui/material";
// import React from "react";
// import { Controller, useForm } from "react-hook-form";
// import { loadState } from "../../../helper/SessionStorage";
// import {
//   getTransactionModelAmount,
//   paymentModeSelection,
// } from "../../../redux/subaua/subauaAction";
// import { formatCurrency } from "../../../utils/formatTime";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useCallback } from "react";
// import { useMemo } from "react";
// import { getPaymnetplasview } from "../../../redux/reports/reportAction";
// import CommercialsDialog from "../../../utils/dialogs/CommercialsDialog";

// const TransactionModelForm = React.memo(({ auaData }) => {
//   const stateDataSubaua = useSelector((state) => state.subaua);

//   const stateDataSubauareport = useSelector((state) => state.report);

//   const { doneStatus, transactionModelAmount } = stateDataSubaua;
//   const retrievedValue = loadState("subauaid", "Default Value");

//   const { paymentplansview } = stateDataSubauareport;



//   const dispatch = useDispatch();

//   const [amount, setAmount] = useState();


//   const [modelTrans, setModelTrans] = useState("");
//   const [openDialog, setOpenDialog] = useState(false);







//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   //getPaymnetplasview

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//     watch,
//   } = useForm();

//   const applicationEnvironmentjava = watch("applicationEnvironmentjava");
//   const applicationEnvironmentnet = watch("applicationEnvironmentnet");
//   const applicationEnvironmentphp = watch("applicationEnvironmentphp");
//   const auaDemographic = watch("auaDemographic");
//   const auaFingerprint = watch("auaFingerprint");
//   const auaIris = watch("auaIris");
//   const auaOtp = watch("auaOtp");
//   const integrationApprochAPI = watch("integrationApprochAPI");
//   const integrationApprochThinClient = watch("integrationApprochThinClient");
//   const integrationApprochmobile = watch("integrationApprochmobile");
//   const integrationApprochweb = watch("integrationApprochweb");
//   const kuaFingerprint = watch("kuaFingerprint");
//   const kuaIris = watch("kuaIris");
//   const kuaotp = watch("kuaotp");
//   const otherservicesdbt = watch("otherservicesdbt");
//   const otherservicesdigitalsignature = watch("otherservicesdigitalsignature");
//   const rddevicesMantra = watch("rddevicesMantra");
//   const rddevicesStartek = watch("rddevicesStartek");
//   const modelTransaction = watch("modelTransaction");

//   console.log("modellllllllllllllll", modelTransaction);

//   const onSubmit = (data) => {
//     const requestData = {
//       ...data,
//       subAuaId: retrievedValue,
//       integrationcharges: amount,
//     };
//     console.log(requestData);
//     dispatch(paymentModeSelection(requestData));
//   };

//   useEffect(() => {
//     console.count("calling for amount sett");
//     if (transactionModelAmount?.code === 1000) {
//       setAmount(transactionModelAmount?.responseData?.totalamount);
//     } else {
//       setAmount(50000);
//     }
//   }, [transactionModelAmount]);

//   const memoizedRequest = useMemo(() => {
//     return {
//       subAuaId: retrievedValue,
//       applicationEnvironmentjava: applicationEnvironmentjava,
//       applicationEnvironmentnet: applicationEnvironmentnet,
//       applicationEnvironmentphp: applicationEnvironmentphp,
//       auaDemographic: auaDemographic,
//       auaFingerprint: auaFingerprint,
//       auaIris: auaIris,
//       auaOtp: auaOtp,
//       integrationApprochAPI: integrationApprochAPI,
//       integrationApprochThinClient: integrationApprochThinClient,
//       integrationApprochmobile: integrationApprochmobile,
//       integrationApprochweb: integrationApprochweb,
//       kuaFingerprint: kuaFingerprint,
//       kuaIris: kuaIris,
//       kuaotp: kuaotp,
//       otherservicesdbt: otherservicesdbt,
//       otherservicesdigitalsignature: otherservicesdigitalsignature,
//       rddevicesMantra: rddevicesMantra,
//       rddevicesStartek: rddevicesStartek,
//       transactionModel: modelTransaction,
//     };
//   }, [
//     applicationEnvironmentjava,
//     applicationEnvironmentnet,
//     applicationEnvironmentphp,
//     auaDemographic,
//     auaFingerprint,
//     auaIris,
//     auaOtp,
//     integrationApprochAPI,
//     integrationApprochThinClient,
//     integrationApprochmobile,
//     integrationApprochweb,
//     kuaFingerprint,
//     kuaIris,
//     kuaotp,
//     otherservicesdbt,
//     otherservicesdigitalsignature,
//     rddevicesMantra,
//     rddevicesStartek,
//     modelTransaction,
//   ]);

//   useEffect(() => {
//     console.log(memoizedRequest);
//     dispatch(getTransactionModelAmount(memoizedRequest));
//   }, [memoizedRequest]);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Card sx={{ p: 4 }}>
//         <Grid container spacing={3}>
//           <Grid item md={6}>
//             <Stack direction={"column"}>
//               <Typography variant="subtitle1">AUA Service</Typography>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="auaFingerprint"
//                       {...register("auaFingerprint")}
//                       defaultChecked={auaData?.auaFingerprint ? true : false}
//                     />
//                   }
//                   label="Fingerprint"
//                 />
//               </FormControl>

//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="auaotp"
//                       {...register("auaOtp")}
//                       defaultChecked={auaData?.auaOtp ? true : false}
//                     />
//                   }
//                   label="OTP"
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="auaIris"
//                       {...register("auaIris")}
//                       defaultChecked={auaData?.auaIris ? true : false}
//                     />
//                   }
//                   label="Iris"
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="auaDemographic"
//                       {...register("auaDemographic")}
//                       defaultChecked={auaData?.auaDemographic ? true : false}
//                     />
//                   }
//                   label="Demographic"
//                 />
//               </FormControl>
//             </Stack>
//           </Grid>
//           <Grid item md={6}>
//             <Stack direction={"column"}>
//               <Typography variant="subtitle1">KUA Service</Typography>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="kuaFingerprint"
//                       {...register("kuaFingerprint")}
//                       defaultChecked={auaData?.kuaFingerprint ? true : false}
//                     />
//                   }
//                   label="Fingerprint"
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="kuaIris"
//                       {...register("kuaIris")}
//                       defaultChecked={auaData?.kuaIris ? true : false}
//                     />
//                   }
//                   label="Iris"
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="kuaotp"
//                       {...register("kuaotp")}
//                       defaultChecked={auaData?.kuaotp ? true : false}
//                     />
//                   }
//                   label="OTP"
//                 />
//               </FormControl>
//             </Stack>
//           </Grid>
//           <Grid item md={3}>
//             <Stack direction={"column"}>
//               <Typography variant="subtitle1">Integration Approach</Typography>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="integrationApprochAPI"
//                       {...register("integrationApprochAPI")}
//                       defaultChecked={
//                         auaData?.integrationApprochAPI ? true : false
//                       }
//                     />
//                   }
//                   label="APIs"
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="integrationApprochThinClient"
//                       {...register("integrationApprochThinClient")}
//                       defaultChecked={
//                         auaData?.integrationApprochThinClient ? true : false
//                       }
//                     />
//                   }
//                   label="ThinClient"
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="integrationApprochweb"
//                       {...register("integrationApprochweb")}
//                       defaultChecked={
//                         auaData?.integrationApprochweb ? true : false
//                       }
//                     />
//                   }
//                   label="Web"
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="integrationApprochmobile"
//                       {...register("integrationApprochmobile")}
//                       defaultChecked={
//                         auaData?.integrationApprochmobile ? true : false
//                       }
//                     />
//                   }
//                   label="Mobile"
//                 />
//               </FormControl>
//             </Stack>
//           </Grid>

//           <Grid item md={3}>
//             <Stack direction={"column"}>
//               <Typography variant="subtitle1">
//                 Application Environment
//               </Typography>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="applicationEnvironmentjava"
//                       {...register("applicationEnvironmentjava")}
//                       defaultChecked={
//                         auaData?.applicationEnvironmentjava ? true : false
//                       }
//                     />
//                   }
//                   label="Java"
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="applicationEnvironmentnet"
//                       {...register("applicationEnvironmentnet")}
//                       defaultChecked={
//                         auaData?.applicationEnvironmentnet ? true : false
//                       }
//                     />
//                   }
//                   label=".Net"
//                 />
//               </FormControl>

//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="applicationEnvironmentphp"
//                       {...register("applicationEnvironmentphp")}
//                       defaultChecked={
//                         auaData?.applicationEnvironmentphp ? true : false
//                       }
//                     />
//                   }
//                   label="PHP"
//                 />
//               </FormControl>
//             </Stack>
//           </Grid>
//           <Grid item md={3}>
//             <Stack direction={"column"}>
//               <Typography variant="subtitle1">RD devices</Typography>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="rddevicesMantra"
//                       {...register("rddevicesMantra")}
//                       defaultChecked={auaData?.rddevicesMantra ? true : false}
//                     />
//                   }
//                   label="Mantra"
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="rddevicesStartek"
//                       {...register("rddevicesStartek")}
//                       defaultChecked={auaData?.rddevicesStartek ? true : false}
//                     />
//                   }
//                   label="StartTek"
//                 />
//               </FormControl>
//             </Stack>
//           </Grid>
//           <Grid item md={3}>
//             <Stack direction={"column"}>
//               <Typography variant="subtitle1">Other Services</Typography>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="otherservicesdbt"
//                       {...register("otherservicesdbt")}
//                       defaultChecked={auaData?.otherservicesdbt ? true : false}
//                     />
//                   }
//                   label="DBT"
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       disabled={auaData?.navigateStatus}
//                       name="otherservicesdigitalsignature"
//                       {...register("otherservicesdigitalsignature")}
//                       defaultChecked={
//                         auaData?.otherservicesdigitalsignature ? true : false
//                       }
//                     />
//                   }
//                   label="Digital Signature"
//                 />
//               </FormControl>
//             </Stack>
//           </Grid>

//           <Grid item xs={12} md={12}>
//             <Stack direction={"row"} spacing={1}>
//               <FormControl fullWidth>
//                 <Controller
//                   name="modelTransaction"
//                   control={control}
//                   defaultValue=""
//                   rules={{ required: "Transaction Model are require!" }}
//                   render={({ field }) => (
//                     <>
//                       <InputLabel id="poa-district">Transaction Plans</InputLabel>
//                       {/* <Select
//                       disabled={auaData?.navigateStatus}
//                       {...field}
//                       labelId="poa-district"
//                       label="Transaction Model"
//                       value={
//                         auaData?.modelTransaction
//                           ? auaData?.modelTransaction
//                           : modelTransaction
//                       }
//                     > */}

//                       <Select
//                         disabled={auaData?.navigateStatus}
//                         {...field}
//                         labelId="poa-district"
//                         label="Transaction Model"
//                         value={auaData?.modelTransaction ? auaData.modelTransaction : modelTransaction}
//                         onChange={(e) => {
//                           setModelTrans(e.target.value);
//                           field.onChange(e);
//                           handleClickOpen();
//                         }}
//                       >
//                         <MenuItem value={"Silver"} selected>
//                           {/* Upto 50000 Transactions */}
//                           Silver
//                         </MenuItem>
//                         <MenuItem value={"Gold"}>
//                           {/* Monthly Transaction Based */}
//                           Gold
//                         </MenuItem>
//                         <MenuItem value={"Platinum"}>
//                           {/* Quarterly Transaction Based */}
//                           Platinum
//                         </MenuItem>
//                         {/* <MenuItem value={"annualyTransaction"}>
//                         Annually Transaction Based
//                       </MenuItem>
//                       <MenuItem value={"unlimited"}>Unlimited</MenuItem> */}
//                       </Select>
//                     </>
//                   )}
//                 />


//               </FormControl>
//               {errors.transactionModel && (
//                 <FormHelperText error>
//                   {errors.transactionModel.message}
//                 </FormHelperText>
//               )}

//               <Button
//                 {...field}
//                 onChange={(e) => {
//                   setModelTrans(e.target.value);
//                   field.onChange(e);
//                   handleClickOpen();
//                 }}>View Detiles</Button>
//             </Stack>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <Stack
//               direction={"row"}
//               justifyContent={"flex-end"}
//               alignItems={"center"}
//               spacing={2}
//             >
//               <Typography variant="subtitle1">Integration Charges :</Typography>
//               <Typography variant="subtitle1">
//                 {auaData?.integrationcharges
//                   ? formatCurrency(auaData?.integrationcharges)
//                   : formatCurrency(amount)}
//               </Typography>
//             </Stack>
//           </Grid>
//           <Grid
//             item
//             xs={12}
//             justifyContent={"center"}
//             alignItems={"center"}
//             display={"flex"}
//           >
//             <Button
//               disabled={auaData?.navigateStatus}
//               variant="contained"
//               type="submit"
//             >
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//       </Card>

//     </form >
//   );
// });

// export default TransactionModelForm;



import {
  Box,
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  debounce,
} from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { loadState } from "../../../helper/SessionStorage";
import {
  getTransactionModelAmount,
  paymentModeSelection,
} from "../../../redux/subaua/subauaAction";
import { formatCurrency } from "../../../utils/formatTime";
import { useDispatch, useSelector } from "react-redux";
import CommercialsDialog from "../../../utils/dialogs/CommercialsDialog";
import { getPaymnetplasview } from "../../../redux/reports/reportAction";


const TransactionModelForm = React.memo(({ auaData }) => {
  const stateDataSubaua = useSelector((state) => state.subaua);
  const stateDataSubauareport = useSelector((state) => state.report);
  const { doneStatus, transactionModelAmount } = stateDataSubaua;
  const retrievedValue = loadState("subauaid", "Default Value");
  const { paymentplansview } = stateDataSubauareport;

  const dispatch = useDispatch();
  const [amount, setAmount] = useState();
  const [modelTrans, setModelTrans] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = (transactionModel) => {
    setModelTrans(transactionModel);
    setOpen(true);

    console.log("transactionModel  transactionModel", transactionModel)
    const request = {
      planType: transactionModel,
    }
    dispatch(getPaymnetplasview(request))

  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("paymentplansview  paymentplansview  paymentplansview", paymentplansview)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const applicationEnvironmentjava = watch("applicationEnvironmentjava");
  const applicationEnvironmentnet = watch("applicationEnvironmentnet");
  const applicationEnvironmentphp = watch("applicationEnvironmentphp");
  const auaDemographic = watch("auaDemographic");
  const auaFingerprint = watch("auaFingerprint");
  const auaIris = watch("auaIris");
  const auaOtp = watch("auaOtp");
  const integrationApprochAPI = watch("integrationApprochAPI");
  const integrationApprochThinClient = watch("integrationApprochThinClient");
  const integrationApprochmobile = watch("integrationApprochmobile");
  const integrationApprochweb = watch("integrationApprochweb");
  const kuaFingerprint = watch("kuaFingerprint");
  const kuaIris = watch("kuaIris");
  const kuaotp = watch("kuaotp");
  const otherservicesdbt = watch("otherservicesdbt");
  const otherservicesdigitalsignature = watch("otherservicesdigitalsignature");
  const rddevicesMantra = watch("rddevicesMantra");
  const rddevicesStartek = watch("rddevicesStartek");
  const modelTransaction = watch("modelTransaction");

  const onSubmit = (data) => {
    const requestData = {
      ...data,
      subAuaId: retrievedValue,
      integrationcharges: amount,
    };
    dispatch(paymentModeSelection(requestData));
  };

  useEffect(() => {
    console.count("calling for amount sett");
    if (transactionModelAmount?.code === 1000) {
      setAmount(transactionModelAmount?.responseData?.totalamount);
    } else {
      setAmount(50000);
    }
  }, [transactionModelAmount]);

  const memoizedRequest = useMemo(() => {
    return {
      subAuaId: retrievedValue,
      applicationEnvironmentjava: applicationEnvironmentjava,
      applicationEnvironmentnet: applicationEnvironmentnet,
      applicationEnvironmentphp: applicationEnvironmentphp,
      auaDemographic: auaDemographic,
      auaFingerprint: auaFingerprint,
      auaIris: auaIris,
      auaOtp: auaOtp,
      integrationApprochAPI: integrationApprochAPI,
      integrationApprochThinClient: integrationApprochThinClient,
      integrationApprochmobile: integrationApprochmobile,
      integrationApprochweb: integrationApprochweb,
      kuaFingerprint: kuaFingerprint,
      kuaIris: kuaIris,
      kuaotp: kuaotp,
      otherservicesdbt: otherservicesdbt,
      otherservicesdigitalsignature: otherservicesdigitalsignature,
      rddevicesMantra: rddevicesMantra,
      rddevicesStartek: rddevicesStartek,
      transactionModel: modelTransaction,
    };
  }, [
    applicationEnvironmentjava,
    applicationEnvironmentnet,
    applicationEnvironmentphp,
    auaDemographic,
    auaFingerprint,
    auaIris,
    auaOtp,
    integrationApprochAPI,
    integrationApprochThinClient,
    integrationApprochmobile,
    integrationApprochweb,
    kuaFingerprint,
    kuaIris,
    kuaotp,
    otherservicesdbt,
    otherservicesdigitalsignature,
    rddevicesMantra,
    rddevicesStartek,
    modelTransaction,
  ]);

  useEffect(() => {
    dispatch(getTransactionModelAmount(memoizedRequest));
  }, [memoizedRequest]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ p: 4 }}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Stack direction={"column"}>
              <Typography variant="subtitle1">AUA Service</Typography>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="auaFingerprint"
                      {...register("auaFingerprint")}
                      defaultChecked={auaData?.auaFingerprint ? true : false}
                    />
                  }
                  label="Fingerprint"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="auaOtp"
                      {...register("auaOtp")}
                      defaultChecked={auaData?.auaOtp ? true : false}
                    />
                  }
                  label="OTP"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="auaIris"
                      {...register("auaIris")}
                      defaultChecked={auaData?.auaIris ? true : false}
                    />
                  }
                  label="Iris"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="auaDemographic"
                      {...register("auaDemographic")}
                      defaultChecked={auaData?.auaDemographic ? true : false}
                    />
                  }
                  label="Demographic"
                />
              </FormControl>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Stack direction={"column"}>
              <Typography variant="subtitle1">KUA Service</Typography>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="kuaFingerprint"
                      {...register("kuaFingerprint")}
                      defaultChecked={auaData?.kuaFingerprint ? true : false}
                    />
                  }
                  label="Fingerprint"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="kuaIris"
                      {...register("kuaIris")}
                      defaultChecked={auaData?.kuaIris ? true : false}
                    />
                  }
                  label="Iris"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="kuaOtp"
                      {...register("kuaOtp")}
                      defaultChecked={auaData?.kuaOtp ? true : false}
                    />
                  }
                  label="OTP"
                />
              </FormControl>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <Stack direction={"column"}>
              <Typography variant="subtitle1">Integration Approach</Typography>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="integrationApprochAPI"
                      {...register("integrationApprochAPI")}
                      defaultChecked={
                        auaData?.integrationApprochAPI ? true : false
                      }
                    />
                  }
                  label="APIs"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="integrationApprochThinClient"
                      {...register("integrationApprochThinClient")}
                      defaultChecked={
                        auaData?.integrationApprochThinClient ? true : false
                      }
                    />
                  }
                  label="ThinClient"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="integrationApprochweb"
                      {...register("integrationApprochweb")}
                      defaultChecked={
                        auaData?.integrationApprochweb ? true : false
                      }
                    />
                  }
                  label="Web"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="integrationApprochmobile"
                      {...register("integrationApprochmobile")}
                      defaultChecked={
                        auaData?.integrationApprochmobile ? true : false
                      }
                    />
                  }
                  label="Mobile"
                />
              </FormControl>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <Stack direction={"column"}>
              <Typography variant="subtitle1">Application Environment</Typography>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="applicationEnvironmentjava"
                      {...register("applicationEnvironmentjava")}
                      defaultChecked={
                        auaData?.applicationEnvironmentjava ? true : false
                      }
                    />
                  }
                  label="Java"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="applicationEnvironmentnet"
                      {...register("applicationEnvironmentnet")}
                      defaultChecked={
                        auaData?.applicationEnvironmentnet ? true : false
                      }
                    />
                  }
                  label=".Net"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="applicationEnvironmentphp"
                      {...register("applicationEnvironmentphp")}
                      defaultChecked={
                        auaData?.applicationEnvironmentphp ? true : false
                      }
                    />
                  }
                  label="PHP"
                />
              </FormControl>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <Stack direction={"column"}>
              <Typography variant="subtitle1">RD devices</Typography>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="rddevicesMantra"
                      {...register("rddevicesMantra")}
                      defaultChecked={auaData?.rddevicesMantra ? true : false}
                    />
                  }
                  label="Mantra"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="rddevicesStartek"
                      {...register("rddevicesStartek")}
                      defaultChecked={auaData?.rddevicesStartek ? true : false}
                    />
                  }
                  label="StartTek"
                />
              </FormControl>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <Stack direction={"column"}>
              <Typography variant="subtitle1">Other Services</Typography>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="otherservicesdbt"
                      {...register("otherservicesdbt")}
                      defaultChecked={auaData?.otherservicesdbt ? true : false}
                    />
                  }
                  label="DBT"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={auaData?.navigateStatus}
                      name="otherservicesdigitalsignature"
                      {...register("otherservicesdigitalsignature")}
                      defaultChecked={
                        auaData?.otherservicesdigitalsignature ? true : false
                      }
                    />
                  }
                  label="Digital Signature"
                />
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack direction={"row"} spacing={1}>
              <FormControl fullWidth>
                <Controller
                  name="modelTransaction"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Transaction Model is required!" }}
                  render={({ field }) => (
                    <>
                      <InputLabel id="poa-district">Transaction Plans</InputLabel>
                      <Select
                        disabled={auaData?.navigateStatus}
                        {...field}
                        labelId="poa-district"
                        label="Transaction Model"
                        value={auaData?.modelTransaction ? auaData.modelTransaction : modelTransaction}
                        onChange={(e) => {
                          setModelTrans(e.target.value);
                          field.onChange(e);
                          handleClickOpen(e.target.value); // Pass the selected value to the handler
                        }}
                      >
                        <MenuItem value={"Silver"}>
                          Silver
                        </MenuItem>
                        <MenuItem value={"Gold"}>
                          Gold
                        </MenuItem>
                        <MenuItem value={"Platinum"}>
                          Platinum
                        </MenuItem>
                      </Select>
                    </>
                  )}
                />
              </FormControl>
              {errors.modelTransaction && (
                <FormHelperText error>
                  {errors.modelTransaction.message}
                </FormHelperText>
              )}
              <Button
                onClick={() => handleClickOpen(modelTransaction)}
                value={modelTransaction}
                disabled={auaData?.navigateStatus}
              >
                View Details
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack
              direction={"row"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              spacing={2}
            >
              <Typography variant="subtitle1">Integration Charges :</Typography>
              <Typography variant="subtitle1">
                {auaData?.integrationcharges
                  ? formatCurrency(auaData?.integrationcharges)
                  : formatCurrency(amount)}
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            <Button
              disabled={auaData?.navigateStatus}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
        <CommercialsDialog open={open} onClose={handleClose} data={paymentplansview} model={modelTransaction} />
      </Card>
    </form>
  );
});

export default TransactionModelForm;
