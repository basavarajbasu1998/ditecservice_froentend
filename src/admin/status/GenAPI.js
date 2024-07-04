import React, { useState, useEffect } from "react";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import AlertDialog from "../../utils/dialogs/AlertDialog";
import { useDispatch, useSelector } from "react-redux";
import { generateApi, getGenSubAuaAPI } from "../../redux/admin/adminActions";

import EditIcon from '@mui/icons-material/Edit';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
const GenAPI = ({ subAuaId }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [prokey, setProkey] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [runCount, setRunCount] = useState(0);

  const stateData = useSelector((state) => state.admin);
  const { buttonLoading, apikey } = stateData;

  console.log("apikeyapikeyapikeyapikey", apikey);

  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleGenerateApiKey = () => {
    setShowConfirmation(true);
  };

  const handleProductionApiKey = () => {
    setProkey(true);
  };

  const handleAlertClose = () => {
    setShowConfirmation(false);
  };

  const handleProAlertClose = () => {
    setProkey(false);
  };



  const handleAlertProSubmit = () => {
    console.log("clicked")
    const data = {
      subAuaId: subAuaId,
      environment: "Production",
    };
    dispatch(generateApi(data));
    handleAlertClose();
    // window.location.reload();
  };
  return (
    <div>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Stack direction={"row"} spacing={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleProductionApiKey}
                startIcon={<VpnKeyIcon />}
                // disabled={buttonLoading}
                sx={{ borderRadius: "20px" }}
                text="bold"
              >
                API Key's
              </Button>
            </Stack>
            {/* <Box sx={{ mt: 2, }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleEditClick}
                sx={{ borderRadius: "20px" }}
                startIcon={<EditIcon />} // Add the icon using the startIcon prop
              >

                Edit
              </Button>
            </Box> */}
          </Grid>
        </Grid>
      </Box>


      <AlertDialog
        open={prokey}
        handleClose={handleAlertProSubmit}
        handleOnlyClose={handleProAlertClose}
        content="Do you want to Generate API Key's..?"
      />
    </div>
  );
};

export default GenAPI;
