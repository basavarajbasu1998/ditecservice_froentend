// import {
//   Box,
//   Container,
//   FormControl,
//   Grid,
//   IconButton,
//   InputLabel,
//   MenuItem,
//   Select,
//   Stack,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import CardComponent from "../../utils/CardComponent";

// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import AdUnitsIcon from "@mui/icons-material/AdUnits";
// import FingerprintIcon from "@mui/icons-material/Fingerprint";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import AccountTreeIcon from "@mui/icons-material/AccountTree";
// import PieChart from "../../utils/chart/PieChart";
// import MultipleBarChart from "../../utils/chart/MultipleBarChart";
// import MultipleLineChart from "../../utils/chart/MultipleLineChart";
// import { useNavigate } from "react-router";
// import HorizandalBarChart from "../../utils/chart/HorizandalBarChart";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   getauamonthlychartdata,
//   getauatodaydonutcharts,
//   getkuamonthlychartdata,
//   getkuatodaydonutcharts,
//   getyearwisesubauacarddata,
// } from "../../redux/reports/reportAction";

// const SubAUA = () => {
//   const navigate = useNavigate();

//   const { id } = useParams();

//   const stateData = useSelector((state) => state.report);

//   const {
//     yearSubauaCount,
//     auatodaydonutcharts,
//     monthlyauthcount,
//     monthlyekyccount,
//     auayeardonutcharts,
//     kuatodaydonutcharts,
//   } = stateData;

//   console.log("auatodaydonutcharts", yearSubauaCount);

//   console.log("idddddddd", id);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const request = {
//       subAuaId: id,
//     };
//     dispatch(getyearwisesubauacarddata(request));
//     dispatch(getauamonthlychartdata(request));
//     dispatch(getkuamonthlychartdata(request));
//     dispatch(getkuatodaydonutcharts(request));
//     dispatch(getauatodaydonutcharts(request));
//   }, []);

//   const [state, setState] = React.useState("active");

//   const handleChange = (event) => {
//     setState(event.target.value);
//   };
//   const subAUAClick = () => {
//     navigate("/ditec/admin/subaua");
//   };
//   return (
//     <>
//       <Container maxWidth="xl">
//         <Stack
//           direction="row"
//           alignItems="center"
//           justifyContent="space-between"
//         >
//           <IconButton onClick={() => navigate(-1)} aria-label="back">
//             <ArrowBackIcon />
//           </IconButton>
//         </Stack>
//         <Stack
//           mb={3}
//           direction="row"
//           alignItems="center"
//           justifyContent="space-between"
//         >
//           <Typography my={2} variant="h5">
//             {id}
//           </Typography>
//           <Stack direction="row" spacing={3} alignItems="center">
//             <Typography variant="subtitle2">Status</Typography>
//             <Box sx={{ minWidth: 120 }}>
//               <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Status</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={state}
//                   label="status"
//                   onChange={handleChange}
//                 >
//                   <MenuItem value={"active"}>Active</MenuItem>
//                   <MenuItem value={"inactive"}>InActive</MenuItem>
//                   <MenuItem value={"disable"}>Disable</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </Stack>
//         </Stack>
//         <Grid container spacing={3}>
//           <Grid item xs={6} sm={6} md={4}>
//             <CardComponent
//               // total={456756}
//               total={yearSubauaCount?.yearwisetotal}
//               header={"Total Transactions"}
//               // icon={<AccountTreeIcon sx={{ height: 50, width: 50 }} />}
//               // avatarBackround={
//               //   "linear-gradient(to right, #F08080, #A70CFF)! important"
//               // }
//             />
//           </Grid>
//           <Grid item xs={6} sm={6} md={4}>
//             <CardComponent
//               // total={76757}
//               total={yearSubauaCount?.yearwiseauthtotal}
//               header={"Authentication"}
//               authdemo={yearSubauaCount?.authdemo}
//               authFp={yearSubauaCount?.authbio}
//               authIr={yearSubauaCount?.authiris}
//               // icon={<AdUnitsIcon sx={{ height: 50, width: 50 }} />}
//             />
//           </Grid>
//           <Grid item xs={6} sm={6} md={4}>
//             <CardComponent
//               // total={23353}
//               total={yearSubauaCount?.yearwiseekyctotal}
//               header={"e-KYC"}
//               ekycFp={yearSubauaCount?.ekycbio}
//               ekycIr={yearSubauaCount?.ekyciris}
//               ekycOTP={yearSubauaCount?.ekycotp}
//               // icon={<FingerprintIcon sx={{ height: 50, width: 50 }} />}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={4}>
//             {Object.keys(auatodaydonutcharts).length != 0 && (
//               <PieChart
//                 chartData={auatodaydonutcharts?.authcount}
//                 height={300}
//                 chartLabel={auatodaydonutcharts?.authnames}
//                 title={"Today Authentication Transactions"}
//               />
//             )}
//           </Grid>
//           <Grid item xs={12} sm={12} md={8}>
//             {Object.keys(monthlyauthcount).length != 0 && (
//               <MultipleLineChart
//                 title={"Daywise Monthly Authentication Transactions"}
//                 // chartLabels={[
//                 //   "2022-05-01",
//                 //   "2022-06-01",
//                 //   "2022-07-01",
//                 //   "2022-08-01",
//                 //   "2022-09-01",
//                 //   "2022-10-01",
//                 //   "2022-11-01",
//                 //   "2022-12-01",
//                 //   "2023-01-01",
//                 //   "2023-02-01",
//                 //   "2023-03-01",
//                 //   "2023-04-01",
//                 //   "2023-05-01",
//                 // ]}

//                 chartLabels={monthlyauthcount?.authdates}
//                 chartData={[
//                   {
//                     name: "Demographic",
//                     type: "bar",
//                     data: monthlyauthcount?.authdemographic,
//                   },
//                   {
//                     name: "FingerPrint",
//                     type: "line",
//                     data: monthlyauthcount?.authfingerprint,
//                   },
//                   {
//                     name: "Iris",
//                     type: "area",
//                     data: monthlyauthcount?.authiris,
//                   },
//                 ]}
//               />
//             )}
//           </Grid>
//           <Grid item xs={12} sm={12} md={4}>
//             {Object.keys(kuatodaydonutcharts).length != 0 && (
//               <PieChart
//                 height={300}
//                 chartData={kuatodaydonutcharts?.ekyccount}
//                 chartLabel={kuatodaydonutcharts?.ekycnames}
//                 title={"Today e-KYC Transactions"}
//               />
//             )}
//           </Grid>
//           <Grid item xs={12} sm={12} md={8}>
//             {Object.keys(monthlyekyccount).length != 0 && (
//               <MultipleLineChart
//                 title={"Monthly e-KYC Authentication Transaction"}
//                 chartLabels={monthlyekyccount?.ekycdates}
//                 chartData={[
//                   {
//                     name: "OTP",
//                     type: "bar",
//                     // data: [
//                     //   876, 234, 512, 690, 412, 187, 932, 546, 301, 322, 981,
//                     //   708, 413,
//                     // ],
//                     data: monthlyekyccount?.ekycdemographic,
//                   },
//                   {
//                     name: "FingerPrint",
//                     type: "area",
//                     // data: [
//                     //   123, 567, 890, 456, 789, 234, 678, 901, 345, 678, 234,
//                     //   567, 890,
//                     // ],
//                     data: monthlyekyccount?.ekycfingerprint,
//                   },
//                   {
//                     name: "Iris",
//                     type: "line",
//                     // data: [
//                     //   910, 293, 384, 845, 601, 222, 432, 651, 178, 789, 456,
//                     //   987, 345,
//                     // ],
//                     data: monthlyekyccount?.ekyciris,
//                   },
//                 ]}
//               />
//             )}
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// };

// export default SubAUA;




import {
  Box,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  Tabs,
  Tab,
  Card,
} from "@mui/material";
// import React, { useState, useEffect } from "react";
// import CardComponent from "../../utils/CardComponent";

// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import PieChart from "../../utils/chart/PieChart";
// import MultipleLineChart from "../../utils/chart/MultipleLineChart";
// import { useNavigate, useParams } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import {

//   getauamonthlychartdata,
//   getauatodaydonutcharts,
//   getkuamonthlychartdata,
//   getkuatodaydonutcharts,
//   getyearwisesubauacarddata,
// } from "../../redux/reports/reportAction";
// import Invoice from "./Invoice";

// const SubAUA = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const stateData = useSelector((state) => state.report);

//   const {
//     yearSubauaCount,
//     auatodaydonutcharts,
//     monthlyauthcount,
//     monthlyekyccount,
//     kuatodaydonutcharts,

//   } = stateData;

//   const dispatch = useDispatch();

//   useEffect(() => {
//     const request = {
//       subAuaId: id,
//     };
//     dispatch(getyearwisesubauacarddata(request));
//     dispatch(getauamonthlychartdata(request));
//     dispatch(getkuamonthlychartdata(request));
//     dispatch(getkuatodaydonutcharts(request));
//     dispatch(getauatodaydonutcharts(request));

//   }, [dispatch, id]);

//   const [state, setState] = useState("active");
//   const [tabValue, setTabValue] = useState(0);

//   const handleChange = (event) => {
//     setState(event.target.value);
//   };

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };


import React, { useState, useEffect } from 'react';

import PieChart from '../../utils/chart/PieChart';
import MultipleLineChart from '../../utils/chart/MultipleLineChart';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  getauamonthlychartdata,
  getauatodaydonutcharts,
  getkuamonthlychartdata,
  getkuatodaydonutcharts,
  getyearwisesubauacarddata,
} from '../../redux/reports/reportAction';
import CardComponent from '../../utils/CardComponent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Invoice from "./Invoice";
import SubTransDash from "./SubTransDash";
import InvoiceDetials from './InvoiceDetials';
import APIkeys from "./apikey/APIkeys";
import InvoiceDetails from "./InvoiceDetials";

const SubAUA = () => {
  const navigate = useNavigate();
  const { id, orgName } = useParams();
  const stateData = useSelector((state) => state.report);
  const dispatch = useDispatch();

  const {
    yearSubauaCount,
    auatodaydonutcharts,
    monthlyauthcount,
    monthlyekyccount,
    kuatodaydonutcharts,
  } = stateData;

  useEffect(() => {
    const request = {
      subAuaId: id,
    };
    dispatch(getyearwisesubauacarddata(request));
    dispatch(getauamonthlychartdata(request));
    dispatch(getkuamonthlychartdata(request));
    dispatch(getkuatodaydonutcharts(request));
    dispatch(getauatodaydonutcharts(request));
  }, [dispatch, id]);

  const [state, setState] = useState('active');
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };


  return (
    <>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton onClick={() => navigate(-1)} aria-label="back">
            <ArrowBackIcon />
          </IconButton>
        </Stack>
        <Stack
          mb={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography my={2} variant="h5">
            {id}
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Typography variant="subtitle2">Status</Typography>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={state}
                  label="status"
                  onChange={handleChange}
                >
                  <MenuItem value={"active"}>Active</MenuItem>
                  <MenuItem value={"inactive"}>InActive</MenuItem>
                  <MenuItem value={"disable"}>Disable</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </Stack>

        <Tabs value={tabValue} onChange={handleTabChange} aria-label="sub-AUA tabs">

          <Tab label="Dashboard" />
          <Tab label=" API Keys" />
          <Tab label="Invoice" />
          <Tab label=" Invoice Details" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>

          <SubTransDash id={id} />

        </TabPanel>

        <TabPanel value={tabValue} index={1}>

          <APIkeys id={id} />

        </TabPanel>

       
        <TabPanel value={tabValue} index={2}>
          <Box>
            <Card sx={{ p: 2, mt: 2 }}>
              <InvoiceDetails subAuaId={id} />
            </Card>
          </Box>
        </TabPanel>
      </Container>
    </>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default SubAUA;

