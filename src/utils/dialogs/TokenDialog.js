import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import styled from '@emotion/styled'; // Added

import WrongXIcon from "../animatedIcons/WrongXIcon"; // Make sure this path is correct


const CustomIconWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function TokenDialog({ open, onClose, title, message }) {
   

    return (
        <Dialog open={open} onClose={onClose} fullWidth={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={"xs"}>

            <DialogTitle>{title}</DialogTitle>
            <Stack mt={3} justifyContent={"center"} alignItems={"center"} display={"flex"} spacing={2}>
                <Box >
                    <Avatar
                        sx={{
                            bgcolor: red[500],
                            height: 90,
                            width: 80,
                        }}
                    >
                        <CustomIconWrapper>
                            <WrongXIcon /> 
                        </CustomIconWrapper>
                    </Avatar>
                </Box>
                <DialogContent>
                    <Typography variant="subtitle1">{message}</Typography>

                </DialogContent>
            </Stack>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default TokenDialog;
