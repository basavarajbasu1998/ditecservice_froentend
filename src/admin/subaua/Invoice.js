
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { Box, Button, Card, Checkbox, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";

// import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import dayjs from 'dayjs';
// import { DateField, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import InvoiceDetials from './InvoiceDetials';
// import { getTransinvoice } from '../../redux/reports/reportAction';


// const Invoice = ({ id }) => {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(false); // State to indicate loading status
//   const [startDate, setStartDate] = useState(null); // State for start date
//   const [endDate, setEndDate] = useState(null); // State for end date
//   const [error, setError] = useState('');

//   const [open, setopen] = useState(false);




//   const stateData = useSelector((state) => state.report);

//   const { transinvoicedetiles } = stateData;


//   const handleStartDateChange = (date) => {
//     setStartDate(date);
//     setError('');
//     // If end date is before start date, reset end date
//     if (endDate && date && dayjs(endDate).isBefore(date, 'day')) {
//       setEndDate(date);
//     }
//   };

//   const handleEndDateChange = (date) => {
//     setEndDate(date);
//     setError('');
//     // If end date is before start date, show error
//     if (startDate && date && dayjs(date).isBefore(startDate, 'day')) {
//       setError('End date cannot be before start date.');
//     }
//   };

//   const handleSubmit = () => {
//     if (!startDate || !endDate) {
//       setError("Please select both start and end dates.");
//       return;
//     }
//     // setLoading(true); // Set loading to true when button is clicked

//     const data = {
//       subAuaId: id,
//       startDate: startDate.format('YYYY-MM-DD'),
//       endDate: endDate.format('YYYY-MM-DD')
//     }
//     dispatch(getTransinvoice(data))
//   };



//   useEffect(() => {
//     if (transinvoicedetiles?.code === 1000) {
//       setopen(true);
//     } else {

//     }
//   }, [transinvoicedetiles]);

//   // useEffect(() => {
//   //   if (transinvoicedetiles.code === 1000) {
//   //     setopen(true),
//   //   },
//   // }, [response]);






//   return (
//     <div>


//       <Card sx={{ p: 2 }}>
//         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//           {/* <Grid item xs={12} md={6}>
//             <Typography variant='subtitle1' sx={{ mb: 1 }}>Plan Type</Typography>
//             <Stack direction={"row"} spacing={2}>
//               <Box sx={{ minWidth: 250 }}>
//                 <FormControl fullWidth>
//                   <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                   <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                   >
//                     <MenuItem value={10}>Ten</MenuItem>
//                     <MenuItem value={20}>Twenty</MenuItem>
//                     <MenuItem value={30}>Thirty</MenuItem>
//                   </Select>
//                 </FormControl>

//               </Box>
//               <Box>
//                 <Button>Detiles</Button>
//               </Box>
//             </Stack>
//           </Grid>
//           <Grid item xs={12} md={6} justifyContent={"center"}>
//             <FormControl component="fieldset">
//               <Typography variant='subtitle1' sx={{ mb: 1 }}>Billing Cycle</Typography>
//               <FormGroup aria-label="position" row>
//                 <FormControlLabel
//                   value="start"
//                   control={<Checkbox />}
//                   label="Monthly"
//                   labelPlacement="start"
//                 />

//                 <FormControlLabel
//                   value="start"
//                   control={<Checkbox />}
//                   label="Quartely"
//                   labelPlacement="start"
//                 />

//                 <FormControlLabel
//                   value="start"
//                   control={<Checkbox />}
//                   label="Half yearly"
//                   labelPlacement="start"
//                 />

//                 <FormControlLabel
//                   value="start"
//                   control={<Checkbox />}
//                   label="Yearly"
//                   labelPlacement="start"
//                 />
//               </FormGroup>
//             </FormControl>

//           </Grid> */}


//           <Grid item xs={12} md={12}>
//             <Stack direction={{ xs: 'column', sm: 'row' }}
//               spacing={{ xs: 1, sm: 2, md: 4, }}
//             // justifyContent="center"
//             // alignItems="center"
//             >
//               <Box>
//                 <Typography variant='h5' sx={{
//                   my: 1,
//                   mx: 'auto',
//                   p: 1,
//                 }}>Start Date : </Typography>
//               </Box>
//               <Box>

//                 <LocalizationProvider
//                   dateAdapter={AdapterDayjs}
//                   localeText={{
//                     fieldMonthPlaceholder: (params) =>
//                       params.contentType === 'digit' ? 'MM' : params.format,
//                   }}
//                 >
//                   <DatePicker
//                     value={startDate}
//                     onChange={handleStartDateChange}
//                   />
//                 </LocalizationProvider>
//               </Box>
//               <Box>
//                 <Typography variant='h5' x={{
//                   my: 1,
//                   mx: 'auto',
//                   p: 1,
//                 }}>End Date : </Typography>
//               </Box>
//               <Box>

//                 <LocalizationProvider
//                   dateAdapter={AdapterDayjs}
//                   localeText={{
//                     fieldMonthPlaceholder: (params) =>
//                       params.contentType === 'digit' ? 'MM' : params.format,
//                   }}
//                 >
//                   <DatePicker
//                     value={endDate}
//                     onChange={handleEndDateChange}
//                   />
//                 </LocalizationProvider>
//               </Box>

//             </Stack>
//             {error && (
//               <Typography variant="body2" color="error" sx={{ mt: 1.5 }}>
//                 {error}
//               </Typography>
//             )}
//           </Grid>

//         </Grid>

//       </Card>



//       <Box justifyContent={"center"} textAlign={"center"} sx={{ mt: 3, mb: 2 }}>
//         <Button onClick={handleSubmit} variant="contained" color="primary" disabled={loading} startIcon={<FileDownloadIcon />} sx={{ bgcolor: "green" }}>
//           {loading ? <CircularProgress size={18} /> : "Generate Invoice"}
//         </Button>
//       </Box>



//       {/* <Box sx={{ mt: 2 }}>
//         <Divider />
//       </Box> */}
//       {/* 
//       <Box>
//         <Card sx={{ p: 2, mt: 2 }}>
//           <InvoiceDetials subAuaId={id} />
//         </Card>
//       </Box> */}



//       <Dialog
//         open={open}

//         keepMounted
//         // onClose={handleClose}
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle>{"Use Google's location service?"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-slide-description">
//             Let Google help apps determine location. This means sending anonymous
//             location data to Google, even when no apps are running.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>

//           {/* <Button onClick={handleClose}>Agree</Button> */}
//         </DialogActions>
//       </Dialog>
//     </div >
//   );
// };

// export default Invoice;



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  Box, Button, Card, CircularProgress, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Grid, Stack, Typography
} from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { getTransinvoice } from '../../redux/reports/reportAction';

const Invoice = ({ id }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const stateData = useSelector((state) => state.report);
  const { transinvoicedetiles } = stateData;

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setError('');
    if (endDate && date && dayjs(endDate).isBefore(date, 'day')) {
      setEndDate(date);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setError('');
    if (startDate && date && dayjs(date).isBefore(startDate, 'day')) {
      setError('End date cannot be before start date.');
    }
  };

  const handleSubmit = () => {
    if (!startDate || !endDate) {
      setError("Please select both start and end dates.");
      return;
    }
    // setLoading(true);
    const data = {
      subAuaId: id,
      startDate: startDate.format('YYYY-MM-DD'),
      endDate: endDate.format('YYYY-MM-DD')
    };
    setOpen(true);
    dispatch(getTransinvoice(data));
  };

  // useEffect(() => {
  //   if (transinvoicedetiles?.code === 1000) {
  //     setOpen(true);
  //   } else if (transinvoicedetiles) {
  //     setError("Failed to generate invoice. Please try again.");
  //   }
  //   setLoading(false);
  // }, [transinvoicedetiles]);

  return (
    <div>
      <Card sx={{ p: 2 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
              <Box>
                <Typography variant='h5' sx={{ my: 1, mx: 'auto', p: 1 }}>Start Date :</Typography>
              </Box>
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={startDate}
                    onChange={handleStartDateChange}
                  />
                </LocalizationProvider>
              </Box>
              <Box>
                <Typography variant='h5' sx={{ my: 1, mx: 'auto', p: 1 }}>End Date :</Typography>
              </Box>
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={endDate}
                    onChange={handleEndDateChange}
                  />
                </LocalizationProvider>
              </Box>
            </Stack>
            {error && (
              <Typography variant="body2" color="error" sx={{ mt: 1.5 }}>
                {error}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Card>

      <Box justifyContent={"center"} textAlign={"center"} sx={{ mt: 3, mb: 2 }}>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={loading}
          startIcon={<FileDownloadIcon />}
          sx={{ bgcolor: "green" }}
        >
          {loading ? <CircularProgress size={18} /> : "Generate Invoice"}
        </Button>
      </Box>

      <Dialog
        open={open}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Invoice Generated"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Your invoice has been successfully generated.Check InvoiceDetails
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Invoice;




