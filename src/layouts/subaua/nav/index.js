import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { Box, Drawer, Link, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
// mock

// hooks
// import useResponsive from "../../../hooks/useResponsive";
// components
import NavSection from "../../../components/nav-section";
import Scrollbar from "../../../components/scrollbar";
//
import { useSelector } from "react-redux";
import useResponsive from "../../../hook/useResponsive";
import documentNavConfig from "./documentNavConfig";
import withoutDocumentNavConfig from "./withoutDocumentNavConfig";

// ----------------------------------------------------------------------

const account = {
  displayName: "Transaction Analysts",
  email: "",
  photoURL:
    "https://media.glassdoor.com/sqll/829159/transaction-analysts-squarelogo-1647939186094.png",
};

const NAV_WIDTH = 280;

const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  //   justifyContent: "center",

  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
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

// const document = false;

export default function Nav({ openNav, onCloseNav }) {
  const stateData = useSelector((state) => state.auth);

  const { data, response } = stateData;

  const documents = response.documentstatus;
  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {/* <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        <ImageLogoResponssive>
          <img src="/favicon/favicon-16x16.png" />
        </ImageLogoResponssive>
      </Box> */}

      <Box sx={{ mt: 5, mb: 5, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            {/* <Avatar src={account.photoURL} alt="photoURL" /> */}

            <Box sx={{ ml: 2 }}>
              <Typography ml={7} variant="subtitle2" sx={{ color: "white" }}>
                DITEC
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {account.role}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <NavSection
        data={documents ? documentNavConfig : withoutDocumentNavConfig}
      />

      <Box sx={{ flexGrow: 1 }} />

      {/* <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
          <Box
            component="img"
            src="/assets/illustrations/illustration_avatar.png"
            sx={{ width: 100, position: 'absolute', top: -50 }}
          />

          <Box sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h6">
              Get more?
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              From only $69
            </Typography>
          </Box>

          <Button href="https://material-ui.com/store/items/minimal-dashboard/" target="_blank" variant="contained">
            Upgrade to Pro
          </Button>
        </Stack>
      </Box> */}
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
              borderRightStyle: "dashed",
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
