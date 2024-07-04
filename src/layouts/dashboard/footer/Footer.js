// import {
//   Box,
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Hidden,
//   IconButton,
//   Paper,
//   Stack,
//   Typography,
//   styled,
// } from "@mui/material";
// import React from "react";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";

// const ImageLogoResponssive = styled("div")(({ theme }) => ({
//   width: 400,
//   [theme.breakpoints.down("xl")]: {
//     width: 400,
//   },
//   [theme.breakpoints.down("md")]: {
//     width: 300,
//   },
//   [theme.breakpoints.down("sm")]: {
//     width: 200,
//   },
//   [theme.breakpoints.down("xs")]: {
//     width: 200,
//   },
// }));

// const Footer = () => {
//   return (
//     <>
//       <Paper elevation={2} sx={{ backgroundColor: "skyblue !important" }}>
//         <Grid container spacing={3}>
//           <Grid mb={2} item xs={12}>
//             <Box
//               sx={{
//                 marginBottom: { xs: "5px !important", md: "10px !important" },
//               }}
//             >
//               <Divider sx={{ mt: 3 }} flexItem>
//                 © 2023 DITEC - All Rights Reserved
//               </Divider>
//             </Box>
//           </Grid>
//         </Grid>
//       </Paper>
//     </>
//   );
// };

// export default Footer;


import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PhoneIcon from '@mui/icons-material/Phone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Paper
        elevation={2}
        sx={{
          // padding: "20px",
          textAlign: "center",
          // backgroundImage: "url(/assets/images/footerbglogo.png)",
          // margin: "8px",
          backgroundColor: "#1f5385",
          borderRadius: "0px"
        }}
      >
        <Box sx={{ p: 2 }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ alignItems: "center", justifyContent: "center", }}>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h5"
                gutterBottom
                display={"flex"}
                sx={{ color: "white", mt: 3, }}
              >
                <img
                  src="/assets/images/ditecfooterlogo.png"
                  alt="logo"
                  width={"350px"}
                />
              </Typography>


              <Stack direction={"row"}>
                <IconButton aria-label="Location" sx={{ color: "cyan", mr: 1 }}>
                  <PlaceIcon sx={{ color: "#fff" }} />
                </IconButton>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "white", mt: 1, fontFamily: "'Open Sans', sans-serif", fontWeight: 200, }}
                  textAlign={"left"}
                  justifyContent={"center"}
                  display={"flex"}

                >
                  Directorate of Information Technology, Electronics &
                  Communication(DITEC) Behind CM Block Secretariat,
                  Dispur,Guwahati-781006, Assam.
                </Typography>
              </Stack>





              <Stack direction={"row"}>
                <IconButton aria-label="Location" sx={{ color: "cyan", mr: 1 }}>
                  <LocalPostOfficeIcon sx={{ color: "#fff" }} />
                </IconButton>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "white", mr: 1, mt: 1, fontFamily: "'Open Sans', sans-serif", fontWeight: 200, }}
                >
                  ditec_support@assam.gov.in
                </Typography>
              </Stack>


              <Stack direction="row" alignItems="center">
                <IconButton
                  aria-label="Location"
                  sx={{ color: "cyan", mr: 1, }}
                >
                  <PhoneIcon sx={{ color: "#fff" }} />
                </IconButton>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "white", mr: 1,  fontFamily: "'Open Sans', sans-serif", fontWeight: 200, }}
                  textAlign={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                >
                  +91 9957926630
                </Typography>
              </Stack>
            </Grid>
            {/* <Grid item xs={6} sm={3} sx={{ color: "white", }}>
              <Box sx={{ color: "white" }}>
                <Typography variant="h6" textAlign={"left"} sx={{ mb: 2 }}>
                  Resources
                </Typography>

                <Typography variant="subtitle2" textAlign={"left"} sx={{ mb: 1, fontFamily: "'Open Sans', sans-serif", fontWeight: 200, }}>
                  Terms & Conditions
                </Typography>

                <Typography variant="subtitle2" textAlign={"left"} sx={{ mb: 1, fontFamily: "'Open Sans', sans-serif", fontWeight: 200, }}>
                  Copyright Policy
                </Typography>
                <Typography variant="subtitle2" textAlign={"left"} sx={{ mb: 1, fontFamily: "'Open Sans', sans-serif", fontWeight: 200, }}>
                  Help &  Support
                </Typography>

              </Box>
            </Grid> */}
            <Grid item xs={6} sm={2} sx={{ color: "white", }}>
              <Box sx={{ color: "white" }}>
                <Typography variant="h6" textAlign={"left"} sx={{ mb: 2 }}>
                  Services
                </Typography>
                <Typography variant="subtitle2" textAlign={"left"} sx={{
                  mb: 1, fontFamily: "'Open Sans', sans-serif", fontWeight: 200,
                  textDecoration: 'none',
                  color: 'white', // Initial color
                  '&:hover': {
                    color: '#14BDEE', cursor: 'pointer',  // Color on hover
                  }
                }}>
                  <Typography variant="subtitle2" onClick={() => { navigate("/ditec/subaua") }} sx={{
                    color: "white",

                    fontFamily: "'Open Sans', sans-serif", fontWeight: 200,
                    '&:hover': {
                      color: '#14BDEE',
                      cursor: 'pointer',

                    }
                  }}>Onboarding Services</Typography>
                </Typography>
                <Typography variant="subtitle2" textAlign={"left"} sx={{
                  mb: 1, fontFamily: "'Open Sans', sans-serif", fontWeight: 200, color: 'white', // Initial color
                  '&:hover': {
                    color: '#14BDEE', cursor: 'pointer',  // Color on hover
                  }
                }}>


                  <Typography variant="subtitle2" onClick={() => { navigate("/ditec/authentication") }} sx={{
                    color: "white",

                    fontFamily: "'Open Sans', sans-serif", fontWeight: 200,
                    '&:hover': {
                      color: '#14BDEE',
                      cursor: 'pointer',

                    }
                  }}>Authentication Services</Typography>
                </Typography>

                <Typography variant="subtitle2" textAlign={"left"} sx={{
                  mb: 1, fontFamily: "'Open Sans', sans-serif", fontWeight: 200, color: 'white',
                  '&:hover': {
                    color: '#14BDEE',
                    cursor: 'pointer',
                  }
                }}>



                  <Typography variant="subtitle2" onClick={() => { navigate("/ditec/otherservices") }} sx={{
                    color: "white",
                    fontFamily: "'Open Sans', sans-serif", fontWeight: 200,
                    '&:hover': {
                      color: '#14BDEE',
                      cursor: 'pointer',

                    }
                  }}>Others Services</Typography>


                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6} sm={2} sx={{ color: "white", }}>
              <Box sx={{ color: "white" }}>
                <Typography variant="h6" textAlign={"left"} sx={{ mb: 2 }}>

                  UseFull Links
                </Typography>

                {/* <Typography textAlign={"left"} sx={{
                  mb: 1, fontFamily: "'Open Sans', sans-serif", fontWeight: 200, color: 'white', // Initial color
                  '&:hover': {
                    color: '#14BDEE',
                    cursor: 'pointer',  // Color on hover
                  }
                }} variant="subtitle2">
                  <Link
                    href="https://aua.assam.gov.in/"
                    underline="none"
                    sx={{
                      color: "white",
                      '&:hover': {
                        color: '#14BDEE',
                        cursor: 'pointer',
                      }
                    }}

                  >

                    Aadhaar FrameWork Assam

                  </Link>
                </Typography> */}

                <Typography textAlign={"left"} sx={{
                  mb: 1, fontFamily: "'Open Sans', sans-serif", fontWeight: 200, color: 'white', // Initial color
                  '&:hover': {
                    color: '#14BDEE', // Color on hover
                  }
                }} variant="subtitle2">
                  <Link
                    href="https://aua.assam.gov.in/auaportal"
                    underline="none"
                    sx={{
                      color: "white",
                      '&:hover': {
                        color: '#14BDEE',
                        cursor: 'pointer',
                      }
                    }}
                    target="_blank"

                  >
                    Ekyc Portal
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: '5px' }} />
                  </Link>

                </Typography>

                <Typography variant="subtitle2" textAlign={"left"} sx={{
                  mb: 1, fontFamily: "'Open Sans', sans-serif", fontWeight: 200, color: 'white', // Initial color
                  '&:hover': {
                    color: '#14BDEE',
                    cursor: 'pointer', // Color on hover
                  }
                }}>
                  <Link
                    href="https://uidai.gov.in/"
                    underline="none"
                    sx={{
                      fontFamily: "'Open Sans', sans-serif", fontWeight: 200, color: 'white',
                      '&:hover': {
                        color: '#14BDEE',
                        cursor: 'pointer',  // Color on hover
                      }
                    }}
                    target="_blank"
                  >
                    UIDAI
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: '5px' }} />
                  </Link>

                </Typography>


              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 2 }} />
          <Typography sx={{
            color: "white", mt: 2, fontFamily: "'Open Sans', sans-serif", fontWeight: 10, color: 'white', // Initial color
            // '&:hover': {
            //   color: '#14BDEE', // Color on hover
            // }
          }}>
            © 2023 DITEC - All Rights Reserved
          </Typography>
        </Box>
      </Paper>
    </div >
  );
};

export default Footer;
