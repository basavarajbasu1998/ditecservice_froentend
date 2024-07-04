import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { Box, Divider, Drawer, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// mock

// hooks
// import useResponsive from "../../../hooks/useResponsive";
// components
import NavSection from "../../../components/nav-section";
import Scrollbar from "../../../components/scrollbar";
//
import { useSelector } from "react-redux";
import useResponsive from "../../../hook/useResponsive";
import adminNavConfig from "./adminNavConfig";
import superadminNavConfig from "./superAdminNavConfig";

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledHeading = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // justifyContent: "center",

  // padding: theme.spacing(2, 2.5),
  // borderRadius: Number(theme.shape.borderRadius) * 1.5,
  // backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

const ImageLogoResponssive = styled("div")(({ theme }) => ({
  marginLeft: 80,
  alignContent: "center",
  justifyContent: "center",
  display: "flex",
  width: 70,
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const stateData = useSelector((state) => state.auth);

  const { data } = stateData;

  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          my: 4,
          justifyContent: "center",
          // alignItems: "center",
          display: "flex",
        }}
      >
        <Typography color={"white"} fontFamily={"Helvetica"} variant="h3">
          DITEC
        </Typography>
      </Box>

      <NavSection
        data={data?.user === "ADMIN" ? adminNavConfig : superadminNavConfig}
      />
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: "#1B5886",
              // borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH, bgcolor: "#1B5886" },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
