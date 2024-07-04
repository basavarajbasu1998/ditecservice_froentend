import { Stack } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Stack
      mb={3}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={() => navigate(-1)} />
    </Stack>
  );
};

export default BackButton;
