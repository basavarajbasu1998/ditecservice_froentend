import { Box, Grid, Hidden, Stack, styled } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import ChangePasswordForm from "./ChangePasswordForm";

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

const ChangePassword = () => {
  return (
    <>
      <Helmet>
        <title> DITEC | ChangePassword </title>
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
          >
            {/* <Stack direction={"row"} spacing={5}> */}
            {/* <Hidden lgDown>
            <ImageResponssive>
              <img src="/assets/images/loginpage1.png" />
            </ImageResponssive>
          </Hidden> */}
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={8} md={6} lg={5.5}>
          {/* <Container maxWidth="xl"> */}
          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            mt={4}
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
              marginY={20}
              spacing={3}
            >
              <Box minWidth={350}>
                <ChangePasswordForm />
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

export default ChangePassword;
