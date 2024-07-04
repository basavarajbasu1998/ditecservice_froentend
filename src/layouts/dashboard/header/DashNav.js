import MenuIcon from "@mui/icons-material/Menu";
import { Collapse, Container, FormControl, Hidden, InputLabel, MenuItem, NativeSelect, Popover, Select, Stack, styled, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { DashNavItem } from "./DashNavItem";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { EMPTY_AUTH_STATE } from "../../../redux/auth/authConstants";
import { useState } from "react";
import { useEffect } from "react";
import CustomButton from "../../../dashboard/utils/CustomButton";
import LanguageIcon from '@mui/icons-material/Language';

// import { dsd } from '../../../../public/assets/images/dashlogo.png';

// import sasd from './dashlogo.png'

const drawerWidth = 240;

const HEADER_MOBILE = 60;

const HEADER_DESKTOP = 92;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const ImageResponssive = styled("div")(({ theme }) => ({
  width: 300,
  [theme.breakpoints.down("sm")]: {
    width: 200,
  },
  [theme.breakpoints.down("xs")]: {
    width: 200,
  },
}));

const ActiveLink = ({ to, activeClassName, ...rest }) => {
  return <NavLink to={to} activeClassName={activeClassName} {...rest} />;
};



const StyledActiveLink = styled(ActiveLink)(({ theme }) => ({
  fontWeight: "bold",
  textDecoration: "none",
  "&.active": {
    position: "relative",
    color: "#4fd8ff",
    color: "black", // Set text color to black for active state
    "&::after": {
      content: "''",
      position: "absolute",
      left: 0,
      bottom: "-2px", // Adjust the value to control the gap
      width: "100%",
      height: "2px",
      color: "#4fd8ff",
      background: theme.palette.primary.main,
    },
  },
}));

function DashNav() {
  // const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // const isSmallScreen = useMediaQuery('(max-width:600px)');
  // const fontSize = isSmallScreen ? '5px' : '20px';

  // const { window } = props;
  const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));


  const [openIndex, setOpenIndex] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState('Language');


  const [isBoxVisible, setIsBoxVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);




  const [fontSizes, setFontSizes] = useState({});

  useEffect(() => {
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    const initialFontSizes = {};
    elements.forEach(el => {
      initialFontSizes[el.tagName] = window.getComputedStyle(el).fontSize;
    });
    setFontSizes(initialFontSizes);
  }, []);

  const changeFontSize = (direction) => {
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    elements.forEach(el => {
      const currentSize = parseFloat(window.getComputedStyle(el).fontSize);
      el.style.fontSize = `${currentSize + direction}px`;
    });
  };

  const resetFontSize = () => {
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    elements.forEach(el => {
      el.style.fontSize = fontSizes[el.tagName];
    });
  };



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsBoxVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // const handleSkipToMainContent = () => {
  //   document.getElementById('content').focus();
  // };

  const handleSkipToMainContent = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus();
    }
  };


  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const mobHandleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const login = () => {
    dispatch({ type: EMPTY_AUTH_STATE });
    navigate("/auth/login");
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MENU
      </Typography>
      <Divider />
      <List>
        {DashNavItem.map((nav, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => {
                  if (nav.subMenu) {
                    mobHandleClick(index);
                  } else {
                    navigate(nav.path);
                    handleDrawerToggle();
                  }
                }}
              >
                <ListItemText primary={nav.name} />
                {nav.subMenu &&
                  (openIndex === index ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </ListItem>

            {nav.subMenu && (
              <Collapse
                sx={{ bgcolor: "Gainsboro" }}
                in={openIndex === index}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {nav.subMenu.map((subNav, subIndex) => (
                    <ListItem key={subIndex} disablePadding>
                      <ListItemButton
                        sx={{ textAlign: "center" }}
                        onClick={() => {
                          navigate(subNav.path);
                          handleDrawerToggle();
                        }}
                      >
                        <ListItemText primary={subNav.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
        <Button
          sx={{ fontSize: 16 }}
          onClick={login}
          variant="contained"
          size="large"
        >
          Login
        </Button>
      </List>
    </Box>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{ maxHeight: 130, backgroundColor: "white", color: "black", flexGrow: 1 }}
        >
          {isBoxVisible && (
            <Box
              sx={{
                backgroundColor: "#2a75bb",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: '200px',
                paddingRight: '200px',
                '@media screen and (max-width: 600px)': {
                  paddingLeft: '10px',
                  paddingRight: '10px',
                }
              }}

            >
              <Stack direction={"row"} spacing={1} sx={{ mr: 1 }}>

                <img src="/assets/logos/gov.png" alt="Smiley face" width="32" height="22" style={{ marginTop: "5px" }} />
                <Button size="small" sx={{ color: "white", minWidth: 0, marginRight: 1, fontWeight: 100 }}>Government of Assam</Button>
              </Stack>
              <Stack direction={"row"}>
                <Hidden smDown>
                  <Button size="small" sx={{ color: "white", minWidth: 0, marginRight: 1, fontWeight: 100 }} href="#main-content" onClick={handleSkipToMainContent} className="skip-to-content-link" >Skip to Main Content</Button>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>|</Typography>
                  {/* <Button size="small" sx={{ color: "white", minWidth: 0, marginRight: 1 }}>-A</Button> */}

                  {/* <Button size="small" sx={{ color: "white", minWidth: 0, marginRight: 1 }}>A</Button>

                  <Button size="small" sx={{ color: "white", minWidth: 0, marginRight: 1 }}>A+</Button> */}

                  <Button size="small" sx={{ color: "white", minWidth: 0, marginRight: 1 }} onClick={() => changeFontSize(-1)}>
                    -A
                  </Button>
                  <Button size="small" sx={{ color: "white", minWidth: 0, marginRight: 1 }} onClick={resetFontSize}>A</Button>

                  <Button size="small" sx={{ color: "white", minWidth: 0, marginRight: 1 }} onClick={() => changeFontSize(1)}>
                    A+
                  </Button>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>|</Typography>
                </Hidden>


                <Typography sx={{ color: "white", fontSize: "12px", display: 'flex', alignItems: 'center' }}>
                  <FormControl size="small" sx={{ minWidth: 120 }}>

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedValue}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(selected) => (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <LanguageIcon sx={{ fontSize: '16px', marginRight: '8px', color: 'white' }} />
                          {selected ? selected : <span style={{ color: 'gray' }}>Select</span>}
                        </div>
                      )}
                      sx={{
                        color: "white",
                        fontSize: "12px",
                        '.MuiOutlinedInput-notchedOutline': { border: 0 },  // Remove border
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 0 },
                        '&:hover .MuiOutlinedInput-notchedOutline': { border: 0 },
                        '& .MuiSelect-select': {
                          display: 'flex',
                          alignItems: 'center',
                          padding: 0,
                          paddingLeft: '8px',  // Adjust padding if needed
                        },
                      }}
                    >
                      <MenuItem value="english" sx={{ fontSize: "12px" }}>English</MenuItem>
                      {/* Add more MenuItem components as needed */}
                    </Select>
                  </FormControl>
                </Typography>

              </Stack>
            </Box>
          )}
          {/* <StyledToolbar> */}
          <StyledToolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* <Searchbar /> */}

            <Stack direction="row" alignItems="center">
              <Stack>
                <Stack>
                  <ImageResponssive>
                    <img src="/assets/logos/ditec-login-logo.png" />
                  </ImageResponssive>
                </Stack>
              </Stack>
              {/* </Hidden> */}
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
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Box onMouseLeave={handleClose}>
                  <Stack
                    direction="row"
                    alignItems={"center"}
                    spacing={4}
                    onMouseLeave={handleClose}
                  >
                    {DashNavItem.map((nav, index) => (

                      <>
                        <StyledActiveLink
                          key={index}
                          to={nav?.path}
                          activeClassName="active"
                        >
                          <a href={nav.path} target="_blank" rel="noopener noreferrer">
                            <Button
                              sx={{
                                color: "black",
                                fontSize: "16px",
                                fontWeight: "normal",
                                '&:hover': {
                                  background: "none"
                                }
                              }}
                              onMouseEnter={nav.subMenu ? handleClick : null}
                            // onMouseLeave={nav.subMenu ? handleClose : null}
                            >
                              {nav?.name}
                            </Button>
                          </a>
                        </StyledActiveLink>
                        {nav.subMenu && (
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                          >
                            <Box onMouseLeave={handleClose} sx={{ color: "black" }}>
                              {nav.subMenu.map((subNav, index) => (
                                <Stack
                                  // onMouseLeave={handleClose}
                                  direction={"column"}
                                  p={2}
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                  display={"flex"}
                                  spacing={0.5}
                                >
                                  <StyledActiveLink
                                    key={index}
                                    to={subNav.path}
                                    onClick={handleClose}
                                    activeClassName="active"
                                  >

                                    <Typography

                                      sx={{
                                        color: "black",
                                        '&:hover': {
                                          // backgroundColor: '#09c8ff',
                                          boxShadow: 'none',
                                          color: "#09c8ff",
                                          textDecoration: "none"
                                        }
                                      }}>
                                      {subNav.name}
                                    </Typography>
                                  </StyledActiveLink>

                                  {/* <Divider sx={{ mt: 5 }} flexItem /> */}
                                </Stack>
                              ))}
                            </Box>
                          </Popover>
                        )}
                      </>
                    ))}
                    <CustomButton
                      title={"Login"}
                      to={"/auth/login"}
                      sx={{
                        fontSize: 16,
                        backgroundColor: "#09c8ff",
                        boxShadow: 0,
                        ":hover": {
                          backgroundColor: "#0a90b7",
                        },
                      }}
                      // onClick={() => {
                      //   dispatch({ type: EMPTY_AUTH_STATE });
                      //   navigate("/auth/login");
                      // }}
                      variant="contained"
                      size="large"
                    >
                      Login
                    </CustomButton>
                  </Stack>
                </Box>
              </Box>
              <Stack>
                <Divider light={false} flexItem={true} orientation="vertical" />
              </Stack>
              {/* <LanguagePopover />
          <NotificationsPopover /> */}
            </Stack>
          </StyledToolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              // display: { xl: 'block', sm: 'none' },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

DashNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashNav;




