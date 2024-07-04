import {
  Box,
  FormControl,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import * as React from "react";
import { useForm } from "react-hook-form";

const TextboxAlert = ({
  open,
  handleClose,
  handleOnlyClose,
  cid,
  certificate1id,
  subAuaId,
  status,
  content,
  formId,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [show, setShow] = React.useState(true);

  const onSubmit = (data) => {
    console.log(data);

    if (data?.remarks) {
      const allData = {
        status: status,
        certificateId: formId,
        remarks: data.remarks,
      };
      handleClose(allData);
    }
  };

  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("Selected file:", file);

    // Rest of your logic...
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={{ p: 2, width: 500 }}>
          <Typography mb={2} color={"darkslateblue"} variant="h5">
            Reason for Rejecting the form
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Stack
                direction={"column"}
                // justifyContent={"center"}
                alignItems={"center"}
                // display={"flex"}
                spacing={3}
              >
                <Stack direction={"column"}>
                  <FormControl fullWidth>
                    <TextField
                      sx={{ width: 460 }}
                      type="text"
                      name="remarks"
                      {...register("remarks", {
                        required: show ? true : false,
                      })}
                      label={"Remarks"}
                    />
                  </FormControl>
                  {errors.remarks && errors.remarks.type === "required" && (
                    <FormHelperText error>remarks required!</FormHelperText>
                  )}
                </Stack>
              </Stack>
            </Box>

            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {/* Your Form Successfully Submitted,Please check your mail for further
                details! */}
                {content}
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ p: 1 }}>
              <Button onClick={() => handleOnlyClose()}>Cancel</Button>
              <Button type="submit" onClick={onSubmit} autoFocus>
                Send
              </Button>
            </DialogActions>
          </form>
        </Box>
      </Dialog>
    </div>
  );
};

export default TextboxAlert;
