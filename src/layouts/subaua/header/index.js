import PropTypes from "prop-types";
// @mui
import {
  AppBar,
  Box,
  Divider,
  Grid,
  Hidden,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// utils
import { bgBlur } from "../../../utils/cssStyles";
// components
import Iconify from "../../../components/iconify";
//
import AccountPopover from "./AccountPopover";
import NotificationsPopover from "./NotificationsPopover";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.paper }),
  boxShadow: "none",
  padding: 5,
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
  // backgroundColor: "darkkhaki"
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    // padding: theme.spacing(0, 5),
  },
}));

const ImageResponssive = styled("div")({
  width: "100%",
  height: "auto",
});

const ImageLogoResponssive = styled("div")(({ theme }) => ({
  width: 300,
  [theme.breakpoints.down("sm")]: {
    width: 200,
  },
  [theme.breakpoints.down("xs")]: {
    width: 200,
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  return (
    <>
      <StyledRoot>
        <StyledToolbar>
          <IconButton
            onClick={onOpenNav}
            sx={{
              color: "text.primary",
              display: { lg: "none" },
            }}
          >
            <Iconify icon="eva:menu-2-fill" />
          </IconButton>

          {/* <Searchbar /> */}

          <Stack mr={2} direction="row" alignItems="center">
            <ImageLogoResponssive>
              <img src="/assets/logos/ditec-login-logo.png" />
            </ImageLogoResponssive>
          </Stack>

          <Box sx={{ flexGrow: 1 }} />

          <Stack
            direction="row"
            alignItems="center"
            spacing={{
              xs: 0.5,
              sm: 1,
            }}
          >
            {/* <ImageResponssive>
            <Stack
              direction="row"
              spacing={3}
              sx={{ marginRight: "10px !important" }}
            >
              <Hidden mdDown>
                <img src="https://amritmahotsav.nic.in/writereaddata/portal/images/g-20-logo.png" />

                <img src="https://amritmahotsav.nic.in/writereaddata/portal/images/logo-black.png" />
              </Hidden>
            </Stack>
          </ImageResponssive> */}

            <Stack spacing={3} ml={3} direction={"row"}>
              <NotificationsPopover />
              <AccountPopover />
            </Stack>
          </Stack>
        </StyledToolbar>
      </StyledRoot>
    </>
  );
}
