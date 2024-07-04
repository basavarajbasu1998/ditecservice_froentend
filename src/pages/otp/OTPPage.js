import {
  Box,
  Card,
  CardContent,
  Grid,
  Hidden,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import OTP from "./OTP";

const ImageResponssive = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ImageResponssiveLogo = styled("div")(({ theme }) => ({
  width: 400,
  [theme.breakpoints.down("md")]: {
    width: 280,
  },
}));

const OTPPage = () => {
  return (
    <>
      <Helmet>
        <title> DITEC | Login With OTP </title>
      </Helmet>
      <Grid container>
        <Hidden mdDown>
          <Grid
            item
            sm={4}
            md={6}
            lg={6.5}
            sx={{
              background: "url('/assets/images/loginpage1.png')", // Replace with your image URL
              backgroundSize: "cover", // Make the background image responsive
              backgroundPosition: "center",
            }}
          ></Grid>
        </Hidden>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={5.5}
          sx={{ height: "100vh", width: "100%" }}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
        >
          {/* <Container maxWidth="xl"> */}
          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            spacing={9}
          >
            <Box>
              <ImageResponssiveLogo>
                <img src="/assets/logos/ditec-login-logo.png" />
              </ImageResponssiveLogo>
            </Box>

            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              spacing={3}
            >
              <Box minWidth={350}>
                <OTP />
              </Box>
            </Stack>
          </Stack>
          {/* </Container> */}
          {/* </Stack> */}
        </Grid>
      </Grid>
    </>
  );
};

export default OTPPage;
