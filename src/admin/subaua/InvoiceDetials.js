



// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { getInvoiceEditTransinvoicedetiles, getTotalTransinvoicedetiles } from '../../redux/reports/reportAction';
// import { DataGrid } from '@mui/x-data-grid';
// import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
// import axios from 'axios';
// import { environmentalURL } from '../../environmentalURL';
// import { loadState } from '../../helper/SessionStorage';

// const InvoiceDetials = ({ subAuaId }) => {
//     const token = loadState("token", "Default Value");
//     const dispatch = useDispatch();
//     const stateData = useSelector((state) => state.report);
//     const { register, handleSubmit, reset, formState: { errors } } = useForm();
//     const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
//     const [openDialog, setOpenDialog] = useState(false);

//     const handleEditClick = (invoiceId) => {
//         setSelectedInvoiceId(invoiceId);
//         setOpenDialog(true);
//     };

//     const handleCloseDialog = () => {
//         setOpenDialog(false);
//         reset(); // Reset the form when closing the dialog
//     };

//     const handleViewPdfClick = async (invoiceId) => {

//         console.log(invoiceId)
//         try {
//             const data = {
//                 invoiceId: invoiceId,
//             };
//             console.log(data, "Clicked");
//             const response = await axios.post(
//                 `${environmentalURL}/adminuser/invoiceprintdetiles`,
//                 data,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                     responseType: 'blob'
//                 }
//             );
//             const blob = new Blob([response.data], { type: 'application/pdf' });
//             const url = window.URL.createObjectURL(blob);

//             // Open blob in a new tab
//             window.open(url, '_blank');

//             const a = document.createElement('a');
//             a.href = url;
//             // a.download = 'subauainvoice.pdf';
//             document.body.appendChild(a);
//             a.click();
//             window.URL.revokeObjectURL(url);
//         } catch (error) {
//             console.error("Error downloading invoice", error);
//         } finally {
//             // setLoading(false); // Set loading to false when download is completed or failed
//         }
//     };

//     const { transinvoicedetiles } = stateData;

//     const PAGE_SIZE = 5;

//     const request = {
//         subAuaId: subAuaId
//     };

//     useEffect(() => {
//         dispatch(getTotalTransinvoicedetiles(request));
//     }, [dispatch, subAuaId]);

//     const onSubmit = (data) => {
//         console.log("Invoice ID:", selectedInvoiceId);
//         console.log("Form Data:", data);
//         handleCloseDialog();
//         dispatch(getInvoiceEditTransinvoicedetiles(data));
//     };

//     const columns = [
//         { field: 'id', headerName: 'ID', width: 50 },
//         { field: 'invoiceId', headerName: 'Invoice Number', width: 180 },
//         { field: 'startDate', headerName: 'Start Date', width: 120 },
//         { field: 'endDate', headerName: 'End Date', width: 120 },
//         { field: 'netamount', headerName: 'Amount', width: 152, type: 'number' },
//         { field: 'status', headerName: 'Status', width: 155 },
//         {
//             field: 'actions',
//             headerName: 'Actions',
//             width: 300,
//             renderCell: (params) => (
//                 <div>
//                     <Button variant="contained" color="secondary" size="small" style={{ marginRight: 8 }} onClick={() => handleEditClick(params.row.invoiceId)}>
//                         Update
//                     </Button>
//                     <Button variant="contained" color="primary" size="small" onClick={() => handleViewPdfClick(params.row.invoiceId)}>
//                         View PDF
//                     </Button>
//                 </div>
//             ),
//         },
//     ];

//     return (
//         <div>
//             <DataGrid
//                 rows={transinvoicedetiles || []}
//                 columns={columns}
//                 initialState={{
//                     pagination: {
//                         paginationModel: {
//                             pageSize: 5,
//                         },
//                     },
//                 }}
//                 pageSize={PAGE_SIZE}
//                 sx={{
//                     "& .MuiDataGrid-columnHeader": {
//                         backgroundColor: "#1B5886",
//                         color: "white",
//                         fontWeight: 700,
//                         cursor: "pointer"
//                     },
//                 }}
//             />

//             <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
//                 <DialogTitle>Edit Invoice Status</DialogTitle>
//                 <DialogContent>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <FormControl fullWidth>
//                             <InputLabel id="status-label">Status</InputLabel>
//                             <input type="hidden" {...register("invoiceId")} value={selectedInvoiceId} />
//                             <Select
//                                 {...register("status", { required: true })}
//                                 labelId="status-label"
//                                 id="status"
//                                 defaultValue=""
//                                 fullWidth
//                             >
//                                 <MenuItem value="wait for payment">Wait for Payment</MenuItem>
//                                 <MenuItem value="received payment">Received Payment</MenuItem>
//                                 <MenuItem value="close">Close</MenuItem>
//                                 <MenuItem value="cancel">Cancel</MenuItem>
//                             </Select>
//                             {errors.status && <Typography color="error">Status is required</Typography>}
//                         </FormControl>
//                         <Box sx={{ mt: 2 }}>
//                             <TextField
//                                 {...register("remarks", { required: true })}
//                                 label="Remarks"
//                                 multiline
//                                 fullWidth
//                             />
//                         </Box>
//                         {errors.remarks && <Typography color="error">Remarks is required</Typography>}
//                         <DialogActions>
//                             <Button onClick={handleCloseDialog}>Cancel</Button>
//                             <Button type="submit" color="primary">Save</Button>
//                         </DialogActions>
//                     </form>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     );
// };

// export default InvoiceDetials;



import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getInvoiceEditTransinvoicedetiles, getTotalTransinvoicedetiles } from '../../redux/reports/reportAction';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { environmentalURL } from '../../environmentalURL';
import { loadState } from '../../helper/SessionStorage';

import InvoiceView from './invoice/InvoiceView';

const InvoiceDetails = ({ subAuaId }) => {
    const token = loadState("token", "Default Value");
    const dispatch = useDispatch();
    const stateData = useSelector((state) => state.report);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [openPDFDialog, setOpenPDFDialog] = useState(false);
    const [pdfUrl, setPdfUrl] = useState('');

    const handleEditClick = (invoiceId) => {
        setSelectedInvoiceId(invoiceId);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        reset(); // Reset the form when closing the dialog
    };

    const handleViewPdfClick = async (invoiceId) => {
        try {
            const data = { invoiceId };
            const response = await axios.post(
                `${environmentalURL}/adminuser/invoiceprintdetiles`,
                data,
                {
                    headers: { Authorization: `Bearer ${token}` },
                    responseType: 'blob'
                }
            );
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            setPdfUrl(url);
            setOpenPDFDialog(true);
        } catch (error) {
            console.error("Error downloading invoice", error);
        }
    };

    const { transinvoicedetiles } = stateData;

    const PAGE_SIZE = 5;

    const request = { subAuaId };

    useEffect(() => {
        dispatch(getTotalTransinvoicedetiles(request));
    }, [dispatch, subAuaId]);

    const onSubmit = (data) => {
        handleCloseDialog();
        dispatch(getInvoiceEditTransinvoicedetiles(data));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'invoiceId', headerName: 'Invoice Number', width: 180 },
        { field: 'startDate', headerName: 'Start Date', width: 120 },
        { field: 'endDate', headerName: 'End Date', width: 120 },
        { field: 'netamount', headerName: 'Amount', width: 152, type: 'number' },
        { field: 'status', headerName: 'Status', width: 155 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 300,
            renderCell: (params) => (
                <div>
                    <Button variant="contained" color="secondary" size="small" style={{ marginRight: 8 }} onClick={() => handleEditClick(params.row.invoiceId)}>
                        Update
                    </Button>
                    <Button variant="contained" color="primary" size="small" onClick={() => handleViewPdfClick(params.row.invoiceId)}>
                        View
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <DataGrid
                rows={transinvoicedetiles || []}
                columns={columns}
                pageSize={PAGE_SIZE}
                sx={{
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: "#1B5886",
                        color: "white",
                        fontWeight: 700,
                        cursor: "pointer"
                    },
                }}
            />

            <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
                <DialogTitle>Edit Invoice Status</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl fullWidth>
                            <InputLabel id="status-label">Status</InputLabel>
                            <input type="hidden" {...register("invoiceId")} value={selectedInvoiceId} />
                            <Select
                                {...register("status", { required: true })}
                                labelId="status-label"
                                id="status"
                                defaultValue=""
                                fullWidth
                            >
                                <MenuItem value="wait for payment">Wait for Payment</MenuItem>
                                <MenuItem value="received payment">Received Payment</MenuItem>
                                <MenuItem value="close">Close</MenuItem>
                                <MenuItem value="cancel">Cancel</MenuItem>
                            </Select>
                            {errors.status && <Typography color="error">Status is required</Typography>}
                        </FormControl>
                        <Box sx={{ mt: 2 }}>
                            <TextField
                                {...register("remarks", { required: true })}
                                label="Remarks"
                                multiline
                                fullWidth
                            />
                        </Box>
                        {errors.remarks && <Typography color="error">Remarks is required</Typography>}
                        <DialogActions>
                            <Button onClick={handleCloseDialog}>Cancel</Button>
                            <Button type="submit" color="primary">Save</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>

            <InvoiceView open={openPDFDialog} handleClose={() => setOpenPDFDialog(false)} pdfUrl={pdfUrl} />
        </div>
    );
};

export default InvoiceDetails;






// InvoiceDetails.js

// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useSelector, useDispatch } from 'react-redux';
// import { getInvoiceEditTransinvoicedetiles, getPrintinvoicedetiles, getTotalTransinvoicedetiles } from '../../redux/reports/reportAction';
// import { DataGrid } from '@mui/x-data-grid';
// import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
// import axios from 'axios';
// import { environmentalURL } from '../../environmentalURL';
// import { loadState } from '../../helper/SessionStorage';

// import InvoiceView from './invoice/InvoiceView';

// const InvoiceDetails = ({ subAuaId }) => {
//     const token = loadState("token", "Default Value");
//     const dispatch = useDispatch();
//     const { transinvoicedetiles, printinvoice } = useSelector((state) => state.report);
//     const { register, handleSubmit, reset, formState: { errors } } = useForm();
//     const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
//     const [openDialog, setOpenDialog] = useState(false);
//     const [openPDFDialog, setOpenPDFDialog] = useState(false);
//     const [pdfUrl, setPdfUrl] = useState('');

//     const handleEditClick = (invoiceId) => {
//         setSelectedInvoiceId(invoiceId);
//         setOpenDialog(true);
//     };

//     const handleCloseDialog = () => {
//         setOpenDialog(false);
//         reset(); // Reset the form when closing the dialog
//     };

//     const handleViewPdfClick = async (invoiceId) => {
//         const request = {
//             invoiceId: invoiceId,
//         }
//         dispatch(getPrintinvoicedetiles(request))
//     };

//     const PAGE_SIZE = 5;

//     useEffect(() => {
//         dispatch(getTotalTransinvoicedetiles({ subAuaId }));
//     }, [dispatch, subAuaId]);

//     const onSubmit = (data) => {
//         handleCloseDialog();
//         dispatch(getInvoiceEditTransinvoicedetiles(data));
//     };

//     useEffect(() => {
//         if (printinvoice) {
//             const blob = new Blob([printinvoice], { type: 'application/pdf' });
//             const url = window.URL.createObjectURL(blob);
//             setPdfUrl(url);
//             setOpenPDFDialog(true);
//         }
//     }, [printinvoice]);

//     const columns = [
//         { field: 'id', headerName: 'ID', width: 50 },
//         { field: 'invoiceId', headerName: 'Invoice Number', width: 180 },
//         { field: 'startDate', headerName: 'Start Date', width: 120 },
//         { field: 'endDate', headerName: 'End Date', width: 120 },
//         { field: 'netamount', headerName: 'Amount', width: 152, type: 'number' },
//         { field: 'status', headerName: 'Status', width: 155 },
//         {
//             field: 'actions',
//             headerName: 'Actions',
//             width: 300,
//             renderCell: (params) => (
//                 <div>
//                     <Button variant="contained" color="secondary" size="small" style={{ marginRight: 8 }} onClick={() => handleEditClick(params.row.invoiceId)}>
//                         Update
//                     </Button>
//                     <Button variant="contained" color="primary" size="small" onClick={() => handleViewPdfClick(params.row.invoiceId)}>
//                         View
//                     </Button>
//                 </div>
//             ),
//         },
//     ];

//     return (
//         <div>
//             <DataGrid
//                 rows={transinvoicedetiles || []}
//                 columns={columns}
//                 pageSize={PAGE_SIZE}
//                 sx={{
//                     "& .MuiDataGrid-columnHeader": {
//                         backgroundColor: "#1B5886",
//                         color: "white",
//                         fontWeight: 700,
//                         cursor: "pointer"
//                     },
//                 }}
//             />

//             <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
//                 <DialogTitle>Edit Invoice Status</DialogTitle>
//                 <DialogContent>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <FormControl fullWidth>
//                             <InputLabel id="status-label">Status</InputLabel>
//                             <input type="hidden" {...register("invoiceId")} value={selectedInvoiceId} />
//                             <Select
//                                 {...register("status", { required: true })}
//                                 labelId="status-label"
//                                 id="status"
//                                 defaultValue=""
//                                 fullWidth
//                             >
//                                 <MenuItem value="wait for payment">Wait for Payment</MenuItem>
//                                 <MenuItem value="received payment">Received Payment</MenuItem>
//                                 <MenuItem value="close">Close</MenuItem>
//                                 <MenuItem value="cancel">Cancel</MenuItem>
//                             </Select>
//                             {errors.status && <Typography color="error">Status is required</Typography>}
//                         </FormControl>
//                         <Box sx={{ mt: 2 }}>
//                             <TextField
//                                 {...register("remarks", { required: true })}
//                                 label="Remarks"
//                                 multiline
//                                 fullWidth
//                             />
//                         </Box>
//                         {errors.remarks && <Typography color="error">Remarks is required</Typography>}
//                         <DialogActions>
//                             <Button onClick={handleCloseDialog}>Cancel</Button>
//                             <Button type="submit" color="primary">Save</Button>
//                         </DialogActions>
//                     </form>
//                 </DialogContent>
//             </Dialog>

//             <InvoiceView open={openPDFDialog} handleClose={() => setOpenPDFDialog(false)} pdfUrl={pdfUrl} />
//         </div>
//     );
// };

// export default InvoiceDetails;
