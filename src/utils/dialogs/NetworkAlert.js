import { Avatar, Box, Stack, Typography, styled } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { green, red } from "@mui/material/colors";
import * as React from "react";
import WrongXIcon from "../animatedIcons/WrongXIcon";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { LOADING_OFF } from "../../redux/admin/adminConstants";
import { AUTH_LOADING_OFF } from "../../redux/auth/authConstants";
import { SUB_AUA_LOADING_OFF } from "../../redux/subaua/subauaConstant";

const CustomIconWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NetworkAlert = () => {
  const stateData = useSelector((state) => state.admin);

  const { error } = stateData;
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    if (error.code === "ERR_NETWORK" || error.code === "ERR_BAD_RESPONSE") {
      setOpen(true);
    }
  }, [error]);

  const handleClose = () => {
    setOpen(false);
    dispatch({ type: LOADING_OFF });
    dispatch({ type: AUTH_LOADING_OFF });
    dispatch({ type: SUB_AUA_LOADING_OFF });
  };

  return (
    <Box>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xs"}
      >
        <Stack
          mt={3}
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          spacing={2}
        >
          <Box>
            <Avatar
              sx={{
                bgcolor: red[500],
                height: 120,
                width: 120,
              }}
            >
              <CustomIconWrapper>
                <WrongXIcon />
              </CustomIconWrapper>
            </Avatar>
          </Box>

          <Typography variant="h4">{error.code}</Typography>
        </Stack>
        <DialogActions sx={{ p: 1 }}>
          <Button onClick={() => handleClose()} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NetworkAlert;
