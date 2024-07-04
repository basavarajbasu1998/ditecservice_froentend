import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Stack,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import React from "react";
import ScrollAnimation from "../../utils/card/ScrollAnimation";
import { useNavigate } from "react-router-dom";

const ImageResponssive = styled("div")(({ theme }) => ({
  width: 530,
  [theme.breakpoints.down("xl")]: {
    width: 500,
  },
  [theme.breakpoints.down("md")]: {
    width: 450,
  },
  [theme.breakpoints.down("sm")]: {
    width: 400,
  },
}));

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px); // Adjust the value for the desired up-down movement
  }
  100% {
    transform: translateY(0);
  }
`;

const ImageAnimation = styled("div")(({ theme }) => ({
  animation: `${bounceAnimation} 4s infinite`, // Adjust the duration and iteration count as needed
}));

const DashboardDitecContent = () => {

  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
        // border={"1px solid lightgrey"}
        >
          <ImageResponssive>
            <ImageAnimation>
              {/* <img src="/assets/images/aadharauthentication.png" alt="Ditec" /> */}
              <img src="/assets/images/aaaf.png" alt="Ditec" />
            </ImageAnimation>
          </ImageResponssive>
        </Box>
      </Grid>
      <Grid
        item
        md={6}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
      >
        <Stack
          direction={"column"}
        // justifyContent={"center"}
        // alignItems={"center"}
        // display={"flex"}
        >
          <Typography variant="subtitle1" mb={2} color={"#1A73E9"}>
            DITEC          </Typography>
          <Typography variant="h3" mb={2} color={"#252525"}>
            Aadhaar Authentication Framework
          </Typography>
          <Typography variant="body1" textAlign={"justify"} color={"#52575C"} sx={{ fontFamily: '"Manrope", sans-serif', fontWeight: "100", }}>
            DITEC Aadhaar Authentication Framework offers seamless integration
            for Sub-Authentication User Agency (Sub-AUAs), allowing them to
            onboard and leverage various Aadhaar services.With our robust
            platform, Sub-AUA can access Authentication and Know Your Customer
            (KYC) services, as well as other value-added services such as Direct
            Benefit Transfer (DBT) schemes and Digital Signing. By utilizing our
            Aadhaar Authentication Framework, Sub-AUAs can enhance their service
            offerings, streamline processes, and ensure secure and reliable
            identity Verification and Validation. We are committed to providing
            a robust integration platform, compliant with UIDAI guidelines, and
            supporting you in delivering efficient and trusted services to the
            Sub-AUAs.
          </Typography>
          <Box sx={{ mt: 2, p: 1 }}>
            <Button variant="contained" sx={{
              borderRadius: "25px",
              backgroundColor: "#1A73E9",
              boxShadow: "none",
              fontWeight: "100"
            }} onClick={() => { navigate("/ditec/authentication") }}>Read More</Button>

          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default DashboardDitecContent;
