import { styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const AuthLayout = () => {
  return (
    <>
      <StyledRoot>
        <Outlet />
      </StyledRoot>
    </>
  );
};

export default AuthLayout;
