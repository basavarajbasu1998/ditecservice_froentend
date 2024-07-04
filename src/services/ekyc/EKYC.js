import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";

const EKYC = () => {
  return (
    <>
      <Helmet>
        <title> DITEC | E-Kyc </title>
      </Helmet>
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={3}>
          <Grid
            item
            sm={12}
            md={6}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            {/* <Card borderRadius={3}> */}
            <img src="/assets/images/ekyc1.png" width={1500} height={220} />
            {/* </Card> */}
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
              //   justifyContent={"center"}
              //   alignItems={"center"}
              //   display={"flex"}
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

              {/* <Grid item sm={12} md={6} mt={8}> */}
              {/* <Card sx={{ mt: 4 }} borderRadius={3}>
                <img src="/assets/images/ekyc.jpg" />
              </Card> */}
              {/* </Grid> */}
            </Stack>
          </Grid>
          {/* <Grid mt={10} item md={6}>
            <Typography variant="h3"> Here e-KYC flow</Typography>
          </Grid>
          <Grid mt={10} item md={6}>
            <Typography variant="body1">
              e-KYC front-end application captures Aadhaar number +
              biometric/OTP of resident and forms the encrypted PID block KUA
              forms the Auth XML using the PID block, signs it, uses that to
              form final e-KYC input XML and sends to KSA KSA forwards the eKYC
              XML to Aadhaar e-KYC service Aadhaar e-KYC service authenticates
              the resident and if successful responds with digitally signed and
              encrypted XML containing resident's latest demographic and
              photograph information e-KYC response (containing demographic data
              and photograph), by default, is encrypted with KUA public key KSA
              sends the response back to KUA enabling paperless electronic KYC
            </Typography>
          </Grid> */}
        </Grid>
      </Container>

      <Grid
        mt={10}
        container
        bgcolor={"BlanchedAlmond"}
        minHeight={400}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        spacing={3}
        px={3}
      >
        <Grid
          item
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          md={6}
          mb={3}
        >
          <Card sx={{ maxWidth: 600, py: 4 }}>
            <CardHeader title="Online Aadhar e-KYC Using OTP" />
            <CardContent>
              <Typography variant="body1">
                You can initiate your e-KYC process online using the one-time
                password (OTP) sent to the mobile number linked to your Aadhaar
                card. You would need to click on the ‘Generate OTP’ option for
                the same. Enter the OTP to authenticate your identity and
                complete the e-KYC process.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          md={6}
          mb={3}
        >
          <Card sx={{ maxWidth: 600, py: 1 }}>
            <CardHeader
              title={" Online e-KYC Aadhar Biometric Authentication"}
            />
            <CardContent>
              <Typography variant="body1">
                You also have the option to complete your Aadhaar KYC
                verification electronically using your biometrics. For this, you
                would need to place a request for online e-KYC Aadhaar Biometric
                Authentication while submitting your registration application. A
                representative would then visit you at the address mentioned in
                the application and use a scanner to match your biometric
                readings with the information on the UIDAI database.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default EKYC;
