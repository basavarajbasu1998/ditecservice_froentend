import * as React from 'react';
import { DataGrid, GridToolbarExport } from '@mui/x-data-grid';
import { Box, Button, Card, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch, useSelector } from 'react-redux';
import { getOrglistsubaua, getReportDashboard } from '../../redux/reports/reportAction';
import { useEffect } from 'react';

// Custom Toolbar Component
const CustomToolbar = () => {
    return (
        <Box sx={{ p: 2, textAlign: "right", justifyContent: "right" }}>
            <GridToolbarExport />
        </Box>
    );
};

const columns = [
    { field: 'slNo', headerName: 'ID', width: 90 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'agencyCode', headerName: 'SUBAUA', width: 150 },
    { field: 'otpYCountAua', headerName: 'Auth Otp', width: 110 },
    { field: 'bioYCountAua', headerName: 'Auth Bio', width: 160 },
    { field: 'ekycTotalCountAua', headerName: 'Auth Total', width: 160 },
    { field: 'otpYCountKua', headerName: 'e-KYC Otp', width: 160 },
    { field: 'bioYCountKua', headerName: 'e-KYC Bio', width: 110 },
    { field: 'ekycTotalCountKua', headerName: 'e-KYC Total', width: 160 },
];



const DashBoardReports = () => {

    const today = dayjs();


    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [subauaId, setSubauaId] = useState(null);
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);

    const stateData = useSelector((state) => state.report);
    const { dashboardlist, orglist } = stateData;

    const dispatch = useDispatch();



    useEffect(() => {
        const data = {
            subAuaId: subauaId,
            startDate: today.format('YYYY-MM-DD'),
            endDate: today.format('YYYY-MM-DD')
        };
        dispatch(getReportDashboard(data));
        dispatch(getOrglistsubaua())
    }, []);

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
            subAuaId: subauaId,
            startDate: startDate.format('YYYY-MM-DD'),
            endDate: endDate.format('YYYY-MM-DD')
        };

        console.log("dashboardreports dateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", data)
        setOpen(true);
        // dispatch(getTransinvoice(data));
        dispatch(getReportDashboard(data))
    };

    console.log("dashboardlist", dashboardlist)

    const PAGE_SIZE = 5;
    // const PAGE_SIZE = 10;
    return (


        <>
            <Card sx={{ p: 2 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                            <Box>
                                <Typography variant='subtitle1' sx={{ mx: 'auto', p: 1 }}>Start Date :</Typography>
                            </Box>
                            <Box>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        slotProps={{ textField: { size: 'small' } }}
                                        value={startDate}
                                        onChange={handleStartDateChange}
                                    />
                                </LocalizationProvider>
                            </Box>
                            <Box>
                                <Typography variant='subtitle1' sx={{ mx: 'auto', p: 1 }}>End Date :</Typography>
                            </Box>
                            <Box>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        slotProps={{ textField: { size: 'small' } }}
                                        value={endDate}
                                        onChange={handleEndDateChange}
                                    />
                                </LocalizationProvider>
                            </Box>






                            <Box sx={{ width: "250px" }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Subaua</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={subauaId}
                                        label="subaua"
                                        size='small'
                                        onChange={(e) => setSubauaId(e.target.value)}
                                    >
                                        {Array.isArray(orglist) && orglist.map((org) => (
                                            <MenuItem key={org?.subAuaID} value={org?.subAuaID} >{org?.orgName}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Stack>
                        {error && (
                            <Typography variant="body2" color="error" sx={{ mt: 1.5 }}>
                                {error}
                            </Typography>
                        )}


                        <Box justifyContent={"center"} textAlign={"center"} sx={{ mt: 3, mb: 2 }}>
                            <Button
                                onClick={handleSubmit}
                                variant="contained"
                                color="primary"
                                sx={{ bgcolor: "green" }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Card>

            {
                dashboardlist && dashboardlist.length > 0 && (


                    <div style={{ height: '500px', width: '100%' }}>
                        <DataGrid
                            rows={dashboardlist || []}
                            columns={columns}
                            pageSize={PAGE_SIZE}
                            // rowsPerPageOptions={[3]}
                            components={{ Toolbar: CustomToolbar }}
                            getRowId={() => crypto.randomUUID()}
                            sx={{
                                "& .MuiDataGrid-columnHeader": {
                                    backgroundColor: "#1B5886",
                                    color: "white",
                                    fontWeight: 700,
                                    cursor: "pointer"
                                },
                            }}
                        />

                    </div>
                )
            }
            <Box sx={{ justifyContent: "center", textAlign: "center", mt: 10 }}>
                <Typography>Not data found</Typography>
            </Box>

        </>
    );
}

export default DashBoardReports;
