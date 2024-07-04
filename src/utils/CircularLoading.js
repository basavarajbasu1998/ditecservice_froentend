import { CircularProgress } from "@mui/material";
import React from "react";

const styles = {
  container: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
    borderRadius: "8px",
    padding: "16px",
    pointerEvents: "none",
  },
};

const CircularLoading = () => {
  return (
    <div style={styles.container}>
      <CircularProgress />
    </div>
  );
};

export default CircularLoading;
