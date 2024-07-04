import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const InvoiceView = ({ open, handleClose, pdfUrl }) => {
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
            <DialogTitle>View PDF</DialogTitle>
            <DialogContent>
                <embed src={pdfUrl} type="application/pdf" width="100%" height="500px" />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default InvoiceView;



