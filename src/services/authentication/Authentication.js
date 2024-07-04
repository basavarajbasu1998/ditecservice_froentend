import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Avatar from "@mui/material/Avatar";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { cyan, pink } from "@mui/material/colors";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { Helmet } from "react-helmet-async";

const Authentication = () => {
  return (
    <>
      <Helmet>
        <title> DITEC | Authentication </title>
      </Helmet>
      {/* <Box sx={{ mt: 1.6 }}>
        <img src="/assets/banner/authbanner.png" height={"350px"} width={"100%"}></img>
      </Box> */}


      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={3} sx={{ p: 1 }}>
          <Typography variant="h3" fontFamily={"inherit"} color={"#252525"}>
            Aadhaar Authentication Services
          </Typography>
          <Grid
            item
            sm={12}
            md={12}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >

            <Typography
              variant="body1"
              fontFamily={"inherit"}
              textAlign={"justify"}
            >
              DITEC,Assam Authentication Services are designed to provide
              secure and reliable identity verification solutions to
              organizations and individuals within the state. These services
              enable the verification of personal information using Aadhaar
              credentials, ensuring accurate and trustworthy authentication.
              This document outlines the key features and benefits of Assam
              Authentication Services.
              <br />

              <Typography sx={{ p: 2 }}> <img src="/assets/banner/authservice.png" height={240} width={"100%"} /></Typography>


              <br /> DITEC,Assam Authentication Services prioritize the
              security and efficiency of identity verification processes. The
              services ensure the secure transmission and storage of personal
              information, adherence to data protection standards, and
              compliance with relevant regulations. By streamlining the
              authentication process, organizations can enhance operational
              efficiency and provide seamless service delivery.
              <br />
              <br /> DITEC plays a crucial role in preventing identity fraud
              and unauthorized access to services. By utilizing robust
              verification methods and leveraging the Aadhaar database, these
              services help organizations validate the identity of individuals
              accurately. This reduces the risk of fraudulent activities and
              enhances the overall security of operations.
              <br />
            </Typography>


            {/* <Stack
              direction={"column"}
            //   justifyContent={"center"}
            //   alignItems={"center"}
            //   display={"flex"}
            >

            </Stack> */}
          </Grid>
          <Grid
            item
            sm={12}
            md={12}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            <Stack direction={"column"}>
              {/* <img src="/assets/images/authentication2.png" height={240} /> */}
              <Typography variant="body1" textAlign={"justify"}>
                <br /> By leveraging Assam Authentication Services,
                organizations can reduce costs associated with manual
                verification processes, physical document storage, and identity
                fraud mitigation. Automation and digitization of identity
                verification contribute to significant cost savings and improved
                operational efficiency.
                <br />
                <br /> Compliance with regulatory requirements and provide an
                auditable record of identity verification transactions. This
                enables organizations to demonstrate adherence to legal and
                regulatory frameworks and supports effective auditing and
                monitoring of authentication processes.
              </Typography>
            </Stack>
          </Grid>

          <Grid mt={10} item md={12}>
            <Typography variant="h3" fontFamily={"inherit"} color={"#252525"}>
              Authentication Services Overview
            </Typography>
            <Divider orientation="horizontal" flexItem />
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="body1"
              fontFamily={"inherit"}
              textAlign={"justify"}
            >
              Authentication Services talks about the verification and
              validation that can be provided by the DITEC to the
              onboarding/registered users as part of AUA/KUA framework.
            </Typography>
            <Grid item xs={12} md={12}>
              <Typography
                sx={{ mt: 4, mb: 2 }}
                variant="h6"
                component="div"
                color={"MidnightBlue"}
              >
                AUA/KUA Framework provides the following authentication
                Services:
              </Typography>
            </Grid>
          </Grid>



          <Grid item md={6}>
            <Stack direction={"column"} spacing={1}>
              <Typography
                sx={{ mb: 2 }}
                variant="h6"
                component="div"
                color={"#14BDEE"}
              >
                Demographic Matching
              </Typography>
              <Typography variant="body1" textAlign={"justify"}>
                DITEC Aadhaar Demographic Authentication provides various levels
                of verification based on the extent of demographic information
                available and required for authentication. This process involves
                validating the demographic details provided by the individual
                against the Aadhaar database. The Aadhaar system offers three
                levels of demographic authentication: Basic, Partial, and Full.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            md={6}
            justifyContent={"center"}
            display={"flex"}
            alignItems={"center"}
          >
            <img
              src="/assets/images/demographic.png"
              width={1600}
              height={240}
            />
          </Grid>

          <Grid sx={{ p: 2 }}>
            <Typography
              sx={{ mt: 4, mb: 1 }}
              variant="subtitle2"
              component="div"
              color={"MidnightBlue"}
            >
              Basic
            </Typography>
            <Typography variant="body1" textAlign={"justify"}>
              Basic Demographic Authentication verifies a limited set of
              demographic information against the Aadhaar database. It
              includes the individual's name and address.
            </Typography>
            <Typography
              sx={{ mt: 4, mb: 1 }}
              variant="subtitle2"
              component="div"
              color={"MidnightBlue"}
            >
              Partial
            </Typography>
            <Typography variant="body1" textAlign={"justify"}>
              Partial Demographic Authentication extends the level of
              verification beyond basic details and includes additional
              demographic information for authentication. It verifies a
              broader range of demographic attributes, such as the
              individual's date of birth, gender.
            </Typography>
            <Typography
              sx={{ mt: 4, mb: 1 }}
              variant="subtitle2"
              component="div"
              color={"MidnightBlue"}
            >
              Full
            </Typography>
            <Typography variant="body1" textAlign={"justify"}>
              Full Demographic Authentication encompasses the highest level of
              verification, ensuring the most extensive validation of
              demographic details. It verifies all available demographic
              attributes associated with the individual's Aadhaar number.
            </Typography>
            <Typography
              sx={{ mb: 1, mt: 2 }}
              variant="h6"
              component="div"
              color={"MidnightBlue"}
            >
              e-KYC
            </Typography>
            <Typography variant="body1" textAlign={"justify"}>
              Assam Aadhaar e-KYC offers multiple verification methods,
              including Biometric authentication and OTP Verification.
              These methods enhance the security and reliability of the e-KYC
              process by leveraging unique biological characteristics and
              one-time passwords associated with Aadhaar credentials.
            </Typography>

          </Grid>

          <Grid item md={6}>
            <Typography mt={2} variant="subtitle1">
              Fingerprint Verification
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <KeyboardDoubleArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="The individual's fingerprints are captured using certified biometric devices." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <KeyboardDoubleArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="The captured fingerprints are compared against the stored fingerprint data associated with the Aadhaar number in the Aadhaar database." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <KeyboardDoubleArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="If the fingerprints match, the individual's identity is verified successfully." />
              </ListItem>
            </List>
          </Grid>

          <Grid
            item
            md={6}
            justifyContent={"center"}
            display={"flex"}
            alignItems={"center"}
          >
            <img src="/assets/images/ekyc2.png" width={1600} height={240} />
          </Grid>

          <Grid sx={{ p: 3 }}>
            <Typography mt={2} variant="subtitle1">
              IRIS Verification
            </Typography>
            <Stack direction={"column"} spacing={1}>
            </Stack>
            <List>
              <ListItem>
                <ListItemIcon>
                  <KeyboardDoubleArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Iris verification utilizes the unique pattern in an individual's Iris for authentication." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <KeyboardDoubleArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="The individual's Iris scan is captured using specialized Iris scanning devices" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <KeyboardDoubleArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="The captured Iris scan is compared against the stored Iris data associated with the Aadhaar number in the Aadhaar database." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <KeyboardDoubleArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="If the Iris patterns match, the individual's identity is authenticated successfully" />
              </ListItem>
            </List>
          </Grid>

          <Grid sx={{ p: 3 }}>
            <Typography mt={2} variant="subtitle1" sx={{ mb: 1 }}>
              OTP Verification
            </Typography>
            <Typography variant="body1" textAlign={"justify"}>
              Assam Aadhaar e-KYC involves using a one-time password (OTP)
              sent to the registered mobile number or email address associated
              with the Aadhaar number. The OTP serves as an additional factor
              for identity verification.
            </Typography>
          </Grid>
          {/* <Typography mt={2} variant="subtitle1">
                Generation and Transmission
              </Typography>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <KeyboardDoubleArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="An OTP is generated and sent to the registered mobile number or email address." />
                </ListItem>
              </List> */}

          {/* </Grid> */}



          {/* <Grid mt={2} item md={12}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              spacing={4}
              alignItems={"center"}
              display={"flex"}
            >
              <Stack>
                <Box>
                  <Avatar sx={{ bgcolor: cyan[500], height: 120, width: 120 }}>
                    <AdUnitsIcon sx={{ height: 80, width: 100 }} />
                  </Avatar>
                </Box>
              </Stack>
              <Stack direction={"column"}>
                <Typography mb={2} variant="h4" color={"#14BDEE"}>
                  One-Time-Password (OTP)
                </Typography>
                <Typography variant="body1" fontFamily={"inherit"}>
                  Matching refers to matching with the OTP is sent to the
                  registered mobile number of the customer. The customer shall
                  provide this OTP during authentication and the same shall be
                  matched with the OTP at the UIDAI CIDR.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid mt={2} item md={12}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              spacing={4}
              alignItems={"center"}
              display={"flex"}
            >
              <Stack>
                <Box>
                  <Avatar sx={{ bgcolor: cyan[500], height: 120, width: 120 }}>
                    <FingerprintIcon sx={{ height: 80, width: 100 }} />
                  </Avatar>
                </Box>
              </Stack>
              <Stack direction={"column"}>
                <Typography mb={2} variant="h4" color={"#14BDEE"}>
                  Biometric Matching
                </Typography>
                <Typography variant="body1" fontFamily={"inherit"}>
                  Refers to matching the biometric attributes (Fingerprints or
                  IRIS) of a resident in the UIDAI database (CIDR) to the
                  biometric data submitted by the customer using an
                  authentication device and return the response. <br />
                  <br />
                  In case of the fingerprint authentication the service provider
                  can opt for the Best Finger Detection (BFD) service which
                  would facilitate the users to select the best quality finger
                  based on the rank out of captured fingerprints. It would help
                  the service agencies to avoid the fingerprint authentication
                  mismatches and allow them perform the services more
                  efficiently and faster manner.
                </Typography>
              </Stack>
            </Stack>
          </Grid>  */}
        </Grid>
      </Container>
      {/* <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid mt={10} item md={12}>
          <Typography variant="h3" fontFamily={"inherit"} color={"#14BDEE"}>
            e-KYC
          </Typography>
          <Divider orientation="horizontal" flexItem />
        </Grid>
        <Grid container spacing={3}>
          <Grid
            mt={6}
            item
            sm={12}
            md={6}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
      
            <img src="/assets/images/ekyc1.png" width={1500} height={220} />
  
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            <Stack
              direction={"column"}
     
            >
              <Typography variant="h3">e-KYC</Typography>
              <Typography variant="body1">
                Aadhaar eKYC is a service offered by the Unique Identification
                Authority of India (UIDAI). Under eKYC organizations can
                validate the identity of an individual by verifying the personal
                details of an individual such as name, address, etc. against his
                or her biometric information held with the Aadhaar database.The
                Aadhaar holder needs to be adequately notified of the purpose
                for which his eKYC transaction is being conducted
              </Typography>
            </Stack>
          </Grid>

        </Grid>
      </Container> */}
    </>
  );
};

export default Authentication;
