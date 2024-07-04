import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saAllDocumentsView } from "../../redux/superadmin/superAdminAction";

const documentName = [
  {
    name: "Sub-AUA Application Form",
    value: "subauaApplicationForm",
  },
  {
    name: "Sub-AUA MOU",
    value: "subauamou",
  },
  {
    name: "Sub-AUA Aggrement Form",
    value: "subauaAggrementForm",
  },
  {
    name: "Sub-AUA Enquiry Form",
    value: "subauaEnquiryForm",
  },
  {
    name: "Sub-AUA Undertaking Form",
    value: "subauaUndertakingForm",
  },
  {
    name: "Request Form",
    value: "requestForm",
  },
  {
    name: "Application Form",
    value: "applicationForm",
  },
];

const SADocumentSub = () => {
  const StateData = useSelector((state) => state.superadmin);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { documentsAllData, doneStatus } = StateData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(saAllDocumentsView());
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Container maxWidth="lg">
        <Typography mb={2} variant="h4">
          Heading
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card sx={{ p: 3 }}>
            <Stack direction={"column"} alignItems={"center"} spacing={3}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Document
                  </InputLabel>
                  <Select
                    sx={{ width: 460 }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select Document"
                    {...register("document", {
                      required: true,
                    })}
                  >
                    {documentsAllData.map((item, index) => (
                      <MenuItem key={index} value={item.certfacteMasterTitle}>
                        {item.certfacteMasterTitle}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {errors.document && errors.document.type === "required" && (
                  <FormHelperText error>Document required!</FormHelperText>
                )}
              </Box>
              <Box>
                <TextField
                  sx={{ width: 460 }}
                  type="text"
                  name="certfacteMasterTitle"
                  {...register("certfacteMasterTitle", {
                    required: true,
                  })}
                  label={"Title"}
                />

                {errors.certfacteMasterTitle &&
                  errors.certfacteMasterTitle.type === "required" && (
                    <FormHelperText error>Title required!</FormHelperText>
                  )}
              </Box>

              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Stack>
          </Card>
        </form>
      </Container>
    </>
  );
};

export default SADocumentSub;
