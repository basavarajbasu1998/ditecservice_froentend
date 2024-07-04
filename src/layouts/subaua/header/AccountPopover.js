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

const account = {
  displayName: "Transaction Analysts",
  email: "",
  photoURL:
    "https://media.glassdoor.com/sqll/829159/transaction-analysts-squarelogo-1647939186094.png",
};

const MENU_OPTIONS = [
  {
    label: "Profile",
    icon: "eva:home-fill",
    path: "/ditec/subaua/profile",
  },
  {
    label: "Change Password",
    icon: "eva:person-fill",
    path: "/ditec/subaua/subauachangepassword",
  },
  // {
  //   label: "Settings",
  //   icon: "eva:settings-2-fill",
  // },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const retrievedValue = loadState("subauaname", "Default Value");
  console.log(retrievedValue);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  // const handleClose = (path) => {
  //   console.log(path, "iiiiiiiiiiiii");
  //   navigate(path);
  //   setOpen(null);
  // };

  const handleClose = (path) => {
    try {
      navigate(path);
      setOpen(null);
    } catch (error) {
      console.error("Navigation Error:", error);
    }
  };

  const logout = () => {
    dispatch({ type: EMPTY_AUTH_STATE });
    sessionStorage.removeItem("subauaid");
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
        <Avatar sx={{ bgcolor: green[900] }}> {retrievedValue?.charAt(0)}</Avatar>

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
            {retrievedValue}
          </Typography>
          {/* <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {account.email}
          </Typography> */}
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS?.map((option) => (
            <MenuItem
              key={option?.label}
              onClick={() => handleClose(option?.path)}
            >
              {option?.label}
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
