
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography, Box, Card } from '@mui/material';

const Commercials = () => {

    const data = {
        authenticationServices: [
            { modality: 'Auth/OTP/BFD', category: 'Silver', perTransaction: 0.70, quarterlyCommitment: 15000 },
            { modality: 'Auth/OTP/BFD', category: 'Gold', perTransaction: 0.30, quarterlyCommitment: '' },
            { modality: 'Auth/OTP/BFD', category: 'Platinum', perTransaction: 0.10, quarterlyCommitment: '' },
            { modality: 'e-KYC', category: 'Silver', perTransaction: 1.50, quarterlyCommitment: '' },
            { modality: 'e-KYC', category: 'Gold', perTransaction: 0.75, quarterlyCommitment: '' },
            { modality: 'e-KYC', category: 'Platinum', perTransaction: 0.50, quarterlyCommitment: '' },
        ],
        billingCategories: [
            { category: 'Silver', range: '1 to 2,50,000' },
            { category: 'Gold', range: '2,50,001 to 25,00,000' },
            { category: 'Platinum', range: '25,00,001 or above' },
        ],
        aadhaarDataVault: [
            { transactions: 'Up to 10 Lacs', rate: 10000 },
            { transactions: 'Above 10 Lakh and up to 1 Crore', rate: 50000 },
            { transactions: 'Above 1 Crore', rate: 500000 },
        ],
    };
    return (

        <>
            <h3>Authentication Services</h3>
            <Paper>
                <Table sx={{ justifyContent: "center", textAlign: "center", p: 2 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell size='small'>Modality</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Per Trans charges (Rs.)</TableCell>
                            <TableCell>Quarterly Commitment (Rs.)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.authenticationServices.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell size='small'>{row.modality}</TableCell>
                                <TableCell>{row.category}</TableCell>
                                <TableCell>{row.perTransaction}</TableCell>
                                <TableCell>{row.quarterlyCommitment}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

            <h3>Billing Categories</h3>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Range</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.billingCategories.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.category}</TableCell>
                                <TableCell>{row.range}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

            <Card sx={{ p: 2, mt: 1 }}>
                <Typography variant='subtitle1'>Terms :</Typography>
                <Box sx={{ mt: 2 }}>
                    <Typography variant='body1' gutterBottom>
                        Registration Charges are non-refundable and non-adjustable with the number of transactions performed by Sub-AUA or with any other charges. Registration charges are payable annually at the time of signing and/or renewal of agreement.
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        Proforma Invoice will be generated on quarterly basis i.e., in the month of April, July, October and January for the quarters Jan-Mar, Apr-Jun, Jul-Sep and Oct-Dec respectively. Payment shall be ensured against the proforma invoice. Tax invoice will be generated and shared after payment in full against the proforma invoice.
                    </Typography>

                    <Typography variant='body1' gutterBottom>
                        Billing category will be decided for each quarter based on number of transactions within that quarter and transaction charges will be applicable for the quarter accordingly.
                    </Typography>

                    <Typography variant='body1' gutterBottom>
                        Billing category will be decided separately for e-KYC and non-e-KYC transactions on the basis of monthly count of transactions.
                    </Typography>

                    <Typography variant='body1' gutterBottom>
                        Every Transaction for which a response is sent to Sub-AUA after completing authentication process with UIDAI will be counted for billing purpose irrespective of the response type.
                    </Typography>

                    <Typography variant='body1' gutterBottom>
                        OTP requested for the purpose of Authentication or e-KYC will be considered as separate transaction for billing purpose.
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        e-KYC sharing will be done as per the guidelines of UIDAI.
                    </Typography>

                    <Typography variant='body1' gutterBottom>
                        If number of Transactions by the Sub-AUA in a particular quarter are worth less than Rs. 15,000 (without Taxes). DITEC will charge Rs. 15,000/- (taxes additional) as a minimum quarterly commitment.
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        Partial minimum commitment (ref: Clause h) above will be payable if service starts/ends in mid quarter.
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        Taxes as applicable will be charged extra on all the charges mentioned above
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        Services to Sub-AUA may be put on hold if payment against the proforma invoice is not received in full within 30 days of generation of proforma invoice.
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        Charges/Penalty imposed on DITEC by UIDAI on the transactions performed by Sub-AUA will be addition to the above-mentioned charges. DITEC will be charge additional overhead on such penalty at the rate of 20% of the penalty imposed by UIDAI.
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        DITEC may revise rates or/and payment terms mentioned above during the period of the agreement between DITEC and Sub-AUA with a prior information of 30 days.
                    </Typography>



                </Box>
            </Card>

            <h3>Commercials for Sub-AUA's for AADHAAR DATA VAULT (ADV)</h3>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>No. of Transactions per Year</TableCell>
                            <TableCell>Amount(Rs)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.aadhaarDataVault.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.transactions}</TableCell>
                                <TableCell>{row.rate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <Card sx={{ mt: 2, p: 3 }}>
                <Typography variant='body1' gutterBottom>
                    Requesting entity/department availing Aadhaar Data Vault (ADV) service will be charged towards a minimum transaction commitment for a particular year irrespective of slab chosen from the above table.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    A minimum commitment amount of Rs. 10000 would be charged at the time of signing of an agreement with DITEC and subsequently on completion of specified number of transactions as per the above table.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Transactions allotted can be utilized within a year from the date of allotment. Once the allotted transactions gets over and for continuation of service requesting entity/department must repay the amount as per the plan selected from the above table.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Requesting entity/department would be free to decide the option from above mentioned table as per the need during repayment of amount once the allowed transactions are about to get over. DITEC will provide a time of 1 week to make the payments.
                </Typography>

                <Typography variant='body1' gutterBottom>
                    Amount charges are non – refundable and non – adjustable with the number of transactions performed by Sub-AUA or with any other charges.
                </Typography>
                <Typography variant='body1' gutterBottom>Taxes as applicable will be charged extra on all the charges mentioned.

                </Typography>
                <Typography variant='body1' gutterBottom>
                    Every transaction for which a response is sent to the requesting entity/department after completing the process with Aadhaar data vault will be counted for billing purposes irrespective of the response type.

                </Typography>
                <Typography variant='body1' gutterBottom>
                    DITEC may revise rates and/or payment terms mentioned above during the period of the agreement with DITEC and the department/ requesting entity with a prior intimation of 30 days. Those rate revisions may be carried out on a half-yearly basis depending upon the transaction load, expenses carried out by DITEC in technology up-graduation, etc.

                </Typography>

                <Typography variant='body1' gutterBottom>
                    License fee or any other such charges levied by UIDAI or any regulatory body appointed by Govt. of India for using Aadhaar data vault as a service shall be payable additionally by the department/ requesting entity according to UIDAI notifications.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Cost towards any audit/compliance requirement of department/requesting entity (if any) applications as issued by UIDAI or any regulatory body appointed by Govt. of India for using Aadhaar data vault as a service shall be borne by requesting entity/department.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Penalty (for non-compliance) issued by UIDAI or any regulatory body appointed by Govt. of India due to department/requesting entity applications/personal, network etc. while using Aadhaar data vault as a service shall be borne by requesting entity/ department.
                </Typography>
                <Typography variant='body1' gutterBottom>
                </Typography>

                <Typography variant='body1' gutterBottom>
                    Any misuse or mishandling of the Aadhaar number or the reference number retrieved from the Aadhaar data vault will be responsibility of the department/requesting entity. Any charges/penalty imposed by UIDAI directly or through DITEC for such a breach will be in addition to the above-mentioned transactions charges. DITEC will also charge additional overhead on such penalty as the rate of 20% of the penalty imposed by UIDAI/DITEC or any regulatory body appointed by Govt. of India for Aadhaar Data Vault service.

                </Typography>

                <Typography variant='body1' gutterBottom>
                    The department/entity has to sign an agreement with DITEC before availing of the service
                </Typography>

                <Typography variant='body1' gutterBottom>
                    Non-payment of charges would entail the discontinuation of service and DITEC will not guarantee stored data in the ADV during or after that period.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    DITEC would have a full right to delete the department data due to lack/delay of payments by the department/requesting entity.
                </Typography>
            </Card>
        </>
    );
};

export default Commercials;