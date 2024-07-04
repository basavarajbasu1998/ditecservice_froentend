import { Avatar, Box, Stack, Typography, styled } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { green } from "@mui/material/colors";
import * as React from "react";

const CustomIconWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlertDialog = ({
  open,
  handleClose,
  icon,
  title,
  content,
  width,
  data,
  color,
  handleOnlyClose,
  notice,
  redirect,
}) => {
  return (
    <Box>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={width}
      >
        <Stack
          mt={icon ? 3 : 0}
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          spacing={2}
        >
          {icon && (
            <Box>
              <Avatar
                sx={{
                  bgcolor: color ? color : green[500],
                  height: 120,
                  width: 120,
                }}
              >
                <CustomIconWrapper>{icon}</CustomIconWrapper>
              </Avatar>
            </Box>
          )}
          <Typography variant="h4">{title}</Typography>
        </Stack>
        <DialogContent>
          <DialogContentText
            justifyContent={icon ? "center" : ""}
            alignItems={icon ? "center" : ""}
            display={icon ? "center" : ""}
            id="alert-dialog-description"
          >
            {content}
          </DialogContentText>
          {notice && (
            <Box sx={{ mt: 2 }}>
              <Stack spacing={1} direction={"column"}>
                <Typography variant="h5" color="#FFBF00">
                  NOTE
                </Typography>
                <DialogContentText>{notice}</DialogContentText>
              </Stack>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 1 }}>
          {handleOnlyClose && (
            <Button onClick={() => handleOnlyClose()}>cancel</Button>
          )}
          <Button
            href={redirect ? redirect : null}
            onClick={() => handleClose(data)}
            autoFocus
          >
            {color ? "OK" : "Done"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AlertDialog;
