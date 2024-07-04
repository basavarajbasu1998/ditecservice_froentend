



import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    DialogActions,
    Button,
    Box
} from '@mui/material';

const transformData = (responseData) => {
    if (!responseData) {
        return {
            authenticationServices: [],
            billingCategories: [],
            aadhaarDataVault: []
        };
    }

    // Transforming the authentication services data
    const authenticationServices = responseData.map(item => ({
        modality: item.authcationtype,
        category: item.planType,
        perTransaction: item.eachtransamount,
        quarterlyCommitment: item.amount
    }));

    // Since no specific billing categories and AADHAAR data vault data are provided in responseData,
    // I'm assuming some dummy values for demonstration. You can adjust these based on actual data.

    // Transforming the billing categories data (dummy values for illustration)
    const billingCategories = [
        { category: 'Silver', range: '1-2,50,000' },
        { category: 'Gold', range: '2,50,001-5,00,000' }
    ];

    // Transforming the AADHAAR Data Vault data (dummy values for illustration)
    const aadhaarDataVault = [
        { transactions: 'Up to 1,00,000', rate: '10,000' },
        { transactions: '1,00,001 to 5,00,000', rate: '20,000' }
    ];

    return { authenticationServices, billingCategories, aadhaarDataVault };
};

const CommercialsDialog = ({ open, onClose, data, model }) => {

    const transformedData = transformData(data?.responseData);
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
            <DialogTitle>Commercials for Sub-AUA's of <span style={{ color: "blue" }}> {model}</span></DialogTitle>
            <DialogContent>
                <Typography variant='subtitle1' sx={{}}>Registration Fees per Annum</Typography>
                <Typography variant='subtitle2'>  <span style={{ color: "blue" }}>1,00,000 </span> (with e- KYC) Or <span style={{ color: "blue" }}>50,000</span> (without e-KYC)</Typography>
                <h3>Authentication Services</h3>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: "center" }}>Modality</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Per Trans charges (Rs.)</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Billing Cycle</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Start Transaction</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>End Transaction</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>Quarterly Commitment (Rs.)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.length > 0 ? (
                                data.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ textAlign: "center" }}>{row.authcationtype}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{row.planType}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{row.eachtransamount}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{row.billingCycle}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{row.startTrans}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{row.endTrans}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{row.amount}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={7}>No Palns available</TableCell>
                                </TableRow>
                            )}
                        </TableBody>

                    </Table>
                </Paper>

                <Box sx={{ mt: 2 }}>
                    <Typography variant='body1' gutterBottom>
                        Registration Charges are non-refundable and non-adjustable with the number of transactions performed by Sub-AUA or with any other charges. Registration charges are payable annually at the time of signing and/or renewal of agreement.
                    </Typography>

                    <Typography variant='body2' gutterBottom>
                        Proforma Invoice will be generated on a quarterly basis i.e., in the month of April, July, October, and January for the quarters Jan-Mar, Apr-Jun, Jul-Sep, and Oct-Dec respectively. Payment shall be ensured against the proforma invoice. Tax invoice will be generated and shared after payment in full against the proforma invoice.
                    </Typography>

                    <Typography variant='body2' gutterBottom>
                        Billing category will be decided for each quarter based on the number of transactions within that quarter, and transaction charges will be applicable for the quarter accordingly. Billing category will be decided separately for e-KYC and non-e-KYC transactions on the basis of the monthly count of transactions. Every Transaction for which a response is sent to Sub-AUA after completing the authentication process with UIDAI will be counted for billing purpose irrespective of the response type. OTP requested for the purpose of Authentication or e-KYC will be considered as a separate transaction for billing purpose. e-KYC sharing will be done as per the guidelines of UIDAI.
                    </Typography>

                    <Typography variant='body2' gutterBottom>
                        If the number of Transactions by the Sub-AUA in a particular quarter is worth less than Rs. 15,000 (without Taxes), DITEC will charge Rs. 15,000/- (taxes additional) as a minimum quarterly commitment. Partial minimum commitment (ref: Clause h) above will be payable if service starts/ends in mid-quarter. Taxes as applicable will be charged extra on all the charges mentioned above. Services to Sub-AUA may be put on hold if payment against the proforma invoice is not received in full within 30 days of generation of proforma invoice.
                    </Typography>

                    <Typography variant='body2' gutterBottom>
                        Charges/Penalty imposed on DITEC by UIDAI on the transactions performed by Sub-AUA will be addition to the above-mentioned charges. DITEC will charge additional overhead on such penalty at the rate of 20% of the penalty imposed by UIDAI. DITEC may revise rates or/and payment terms mentioned above during the period of the agreement between DITEC and Sub-AUA with prior information of 30 days.
                    </Typography>
                </Box>

            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CommercialsDialog;
