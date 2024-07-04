import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import DashboardAuthCounts from "./components/DashboardAuthCounts";
import DashboardCarosel from "./components/DashboardCarosel";
import DashboardDitecContent from "./components/DashboardDitecContent";
import DashboardOnboarding from "./components/DashboardOnboarding";
import DashboardReports from "./components/DashboardReports";
import CardUtils from "./utils/CardUtils";
import { content } from "./utils/CaroselCardContent";
import { motion } from "framer-motion";
import ServiceCard from "../utils/card/ServiceCard";
import ScrollAnimation from "../utils/card/ScrollAnimation";
import { useNavigate } from "react-router-dom";

const ekycBody =
  " Aadhaar eKYC is a service offered by the Unique Identification Authority of India (UIDAI). Under eKYC organizations can validate the identity of an individual by verifying the personal details of an individual such as name, address, etc.";
const authenticationBody =
  "Aadhaar authentication is the process where in Aadhaar number, along with other attributes (demographic/ biometrics/ OTP) is submitted to UIDAI's Central Identities Data Repository (CIDR) for verification.";

const subauaBody =
  "Agencies that access Aadhaar authentication through an existing AUA. (Under this project it is envisaged that all the State Government Departmental Schemes would on-board themselves as Sub-AUAs and avail Aadhaar Authentication services).";

const Dashboard = () => {
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title> DITEC | Dashboard </title>
      </Helmet>
      <Box sx={{ mt: 3 }}>
        <DashboardCarosel />
      </Box>
      <Grid item xs={6} md={12} >
        <Box sx={{
          mt: 2, justifyContent: "center", textAlign: "center",
          //  backgroundColor: "#F6FAFF", 
          p: 2
        }}>
          <DashboardAuthCounts />
        </Box>
      </Grid>



      <Grid container spacing={3} >

        <Container maxWidth="lg">
          <Grid item md={12} mt={{ md: 8, sm: 6 }}
          >
            <div id="main-content">
              <ScrollAnimation timeout={400} direction={"up"}>
                <Box sx={{ p: 2 }}>
                  <DashboardDitecContent />
                </Box >
              </ScrollAnimation >
            </div>
          </Grid>
        </Container>

        {/* <Grid item md={12} mt={{ md: 10, sm: 5 }}>
          <Box sx={{
            backgroundColor: "#F8F8F8", height: "400px", p: 2, display: "flex", alignItems: "center",
            justifyContent: "center",
          }}>
            <ScrollAnimation timeout={400} direction={"up"}>
              <Container maxWidth="lg">
                <DashboardOnboarding />
              </Container>
            </ScrollAnimation >
          </Box >
        </Grid> */}
        <Container maxWidth="lg">

          <Grid item md={12} mt={{ md: 10, sm: 5 }}>
            <Box>
              <ScrollAnimation timeout={400} direction={"up"}>
                <Box sx={{ p: 2 }}>
                  <DashboardOnboarding />
                </Box >
              </ScrollAnimation>
            </Box>
          </Grid>
        </Container>


        <Container maxWidth="lg">
          <Grid item md={12} >
            <ScrollAnimation timeout={600}>
              <Box sx={{ p: 2 }}>
                <DashboardReports />
              </Box >
            </ScrollAnimation >
          </Grid>
        </Container>
      </Grid>
      <Box sx={{ backgroundColor: "#F8F8F8", p: 1 }}>
        <ScrollAnimation timeout={400} direction={"right"}>
          <Typography color={"#252525"} variant="h3" sx={{ textAlign: "center", mb: 2 }}>
            Our Services
          </Typography>
          <Grid container spacing={1} xs={6} md={12} justifyContent="center" alignItems="center" sx={{ p: 2 }}>
            <Grid item xs={12} md={3} justifyContent="center" sx={{ margin: "8 auto" }}>
              <ServiceCard
                avatarSize={80}
                image="/assets/images/onboardservice.png"
                avatarColor="white"
                title="Sub AUA/KUA Onboarding"
                subtitle="Sub-AUA Agency onboarding process talks about the pre-requisites/initial process steps to be fulfilled by the Government departments/agencies which are willing to avail the DITEC provided services"
                onClick={() => navigate("/ditec/subaua")}
              />
            </Grid>

            <Grid item xs={12} md={3} justifyContent="center" sx={{ margin: "10 auto" }}>
              <ServiceCard
                avatarSize={80}
                image="/assets/images/authservice.png"
                avatarColor="white"
                title="Authentication"
                subtitle="Aadhaar authentication is the process where in Aadhaar number, along with other attributes (demographic/ biometrics/ OTP) is submitted to UIDAI's Central Identities Data Repository (CIDR) for verification"
                onClick={() => navigate("/ditec/authentication")}
              />
            </Grid>
            <Grid item xs={12} md={3} justifyContent="center" sx={{ margin: "10 auto" }}>
              <ServiceCard
                avatarSize={80}
                image="/assets/images/ekycservics.png"
                avatarColor="white"
                title="e-KYC"
                subtitle="Aadhaar e-KYC is a service offered by the Unique Identification Authority of India (UIDAI). Under e-KYC organizations can validate the identity of an individual by verifying the personal details of an individual such as name, address, etc."
                onClick={() => navigate("/ditec/subaua")}
              />
            </Grid>
          </Grid>
        </ScrollAnimation>
      </Box>

      {/* </Container> */}
    </>
  );
};

export default Dashboard;
