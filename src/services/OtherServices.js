import {
  Card,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const OtherServices = () => {
  return (
    <>
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
            <Stack
              direction={"column"}
            //   justifyContent={"center"}
            //   alignItems={"center"}
            //   display={"flex"}
            >
              <Typography mb={1} variant="h3" color={"#252525"}>
                DBT-Scheme
              </Typography>
              <Typography variant="body1" textAlign={"justify"}>
                DBT allows sub-AUA agencies/ government entities to provide to
                transfer of subsidies and cash benefits directly to the
                beneficiaries accounts through their Aadhaar seeded bank
                accounts with a hope that crediting subsidies into the bank
                accounts which substantially reduce leakages, and associated
                delays, owing to the flow of fund in a multi hierarchy of
                administrative offices till it reaches the end beneficiary.
                <br />
                <br />
                DITEC uses the NPCI provided Aadhaar Enabled Payment Service
                that allows people to carry out financial transactions by
                furnishing just their Aadhaar number and verifying it with the
                help of their biometrics.
                <br /> <br /> Transactions done through this channel need
                biometric authentication through best finger. Signatures can be
                forged but not the biometrics. This has made transactions safer.
                People won’t have to carry their bank’s passbook or debit card
                for fund transfer as only Aadhaar number and your biometrics
                would be required for carrying out the transactions making it
                easy for all to use this service. More important thing is, this
                service can be integrated through portal movable devices taken
                to distant places enabling people in remote villages to make
                cashless transactions instantly.
              </Typography>

              {/* <Grid item sm={12} md={6} mt={8}> */}
              {/* <Card sx={{ mt: 4 }} borderRadius={3}>
                <img src="/assets/images/ekyc.jpg" />
              </Card> */}
              {/* </Grid> */}
            </Stack>
          </Grid>

          <Grid
            mt={6}
            item
            sm={12}
            md={6}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            {/* <Card borderRadius={3}> */}
            <img src="/assets/images/DBT1.png" width={1350} height={480} />
            {/* </Card> */}
          </Grid>


          <Grid
            mt={10}
            item
            sm={12}
            md={6}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            {/* <Card borderRadius={3}> */}
            <img
              src="/assets/images/digitalsign.png"
              width={1350}
              height={300}
            />
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
              justifyContent={"center"}
              alignItems={"center"}
            //   display={"flex"}
            >
              <Typography
                mb={1}
                variant="h3"
                color={"#252525"}
                textAlign={"justify"}
              >
                Digital Signing
              </Typography>
              <Typography variant="body1" textAlign={"justify"}>
                DITEC provides Digital Signing services to registered sub-AUAs
                agencies which facilitate an Aadhaar holder to digitally sign a
                documents and make the them available in electronic form.
                <br />
                <br /> This service allows the entities to enable the
                beneficiary/customers sign the documents using the AADHAAR based
                authentication thus requiring no paper based application form or
                documents. Authentication of the signer will be carried out by
                the e-KYC services of UIDAI and on successful authentication
                i.e., on receiving the consent from the signer, electronic
                signature on the document/data will be ascribed by eSign
                services.
              </Typography>
            </Stack>
          </Grid>


        </Grid>
      </Container>
    </>
  );
};

export default OtherServices;
