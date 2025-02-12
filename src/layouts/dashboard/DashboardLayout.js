import React from "react";
import DashNav from "./header/DashNav";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Typography, styled } from "@mui/material";
import Footer from "./footer/Footer";


const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 39,
  paddingBottom: theme.spacing(10),
  backgroundColor: "white",
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 28,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const DashboardLayout = () => {
  return (
    <>
      <DashNav />
      <StyledRoot>
        <Main>
          <Outlet />
        </Main>
      </StyledRoot>
      <Footer />
    </>
  );
};

export default DashboardLayout;



