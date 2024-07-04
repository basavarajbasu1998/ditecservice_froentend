import React, { useEffect, useState } from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import { Box, styled } from "@mui/material";
import Nav from "./nav";
import ApplicationTracker from "./ApplicationTracker";
import { useSelector } from "react-redux";

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
  minHeight: "100vh",
  paddingTop: APP_BAR_MOBILE + 32,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 28,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const SubauaLayout = () => {
  const stateData = useSelector((state) => state.auth);

  const { data } = stateData;
  const [showStsBar, setShowStsBar] = useState(false);

  useEffect(() => {
    if (data.user === "SUBAUA" && data.document === false) {
      setShowStsBar(true);
    }
  }, [data]);
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
      <Header onOpenNav={() => setOpen(true)} />

      <Nav openNav={open} onCloseNav={() => setOpen(false)} />
      <Main>
        {/* <Box
          sx={{
            p: 2,
            pl: -5,
            backgroundColor: "ButtonFace",
            position: "fixed",
            top: 100,
            zIndex: 999,
            width: 1220, 
          }}
        > */}
        <Box sx={{ mb: 2 }}>
          <ApplicationTracker showStsBar={showStsBar} />
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Main>
    </StyledRoot>
  );
};

export default SubauaLayout;
