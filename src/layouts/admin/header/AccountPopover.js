import { useState } from "react";
// @mui
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  MenuItem,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
// mocks_
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { EMPTY_AUTH_STATE } from "../../../redux/auth/authConstants";
import Cookies from "js-cookie";
import { deepOrange, green } from "@mui/material/colors";
import { loadState } from "../../../helper/SessionStorage";

// ----------------------------------------------------------------------

const username = loadState("subauaname", "Default Value");
const account = {
  displayName: username,
  email: "",
  photoURL:
    "https://media.glassdoor.com/sqll/829159/transaction-analysts-squarelogo-1647939186094.png",
};

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: "eva:home-fill",
  },
  {
    label: "Profile",
    icon: "eva:person-fill",
  },
  {
    label: "Settings",
    icon: "eva:settings-2-fill",
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const logout = () => {
    dispatch({ type: EMPTY_AUTH_STATE });
    Cookies.remove("Role");
    navigate("/");
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar sx={{ bgcolor: green[900] }}>A</Avatar>
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={logout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
