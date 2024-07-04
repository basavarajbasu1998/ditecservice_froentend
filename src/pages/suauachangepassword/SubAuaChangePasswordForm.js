import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SubAuaChangePassword from "./SubAuaChangePassword";

const ChangePasswordForm = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Grid container justifyContent="center" sx={{ p: 4 }}>
        <Grid item xs={12} md={6}>
          <SubAuaChangePassword />
        </Grid>
      </Grid>
    </div>
  );
};

export default ChangePasswordForm;
