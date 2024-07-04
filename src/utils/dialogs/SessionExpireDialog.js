import { Avatar, Box, Slide, Stack, Typography, styled } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { green } from "@mui/material/colors";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ADMIN_DIALOG_CLOSE,
  CLEAR_STATE,
} from "../../redux/admin/adminConstants";
import { useEffect } from "react";
import { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SessionExpireDialog = () => {
  const stateData = useSelector((state) => state.admin);
  const { dialogData, dialogState } = stateData;
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { icon, title, content, width, data, color, handleOnlyClose, path } =
    dialogData;

  const handleClose = () => {
    dispatch({ type: CLEAR_STATE });
    dispatch({ type: ADMIN_DIALOG_CLOSE });
    if (path) {
      navigate(path);
      window.location.reload();
    }
  };

  return (
    <Box>
      <Dialog
        fullWidth={true}
        open={dialogState}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={width}
      >
        <DialogContent>
          <Stack
            mt={icon ? 2 : 0}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            spacing={1}
          >
            {icon && (
              <Box>
                <Avatar
                  sx={{
                    bgcolor: color ? color : green[500],
                    height: 102,
                    width: 102,
                  }}
                >
                  {icon}
                </Avatar>
              </Box>
            )}
            <Typography variant="h4">{title}</Typography>
          </Stack>

          <DialogContentText
            mt={1}
            justifyContent={icon ? "center" : ""}
            alignItems={icon ? "center" : ""}
            display={icon ? "center" : ""}
            id="alert-dialog-description"
          >
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {handleOnlyClose && (
            <Button onClick={() => handleOnlyClose()}>cancel</Button>
          )}
          <Button onClick={handleClose} autoFocus>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SessionExpireDialog;
