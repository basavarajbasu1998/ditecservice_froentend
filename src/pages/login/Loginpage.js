import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Hidden,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm";
import { Helmet } from "react-helmet-async";
import { EMPTY_AUTH_STATE } from "../../redux/auth/authConstants";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

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

const Loginpage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <title> DITEC | Login </title>
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
              // marginY={13}
              spacing={3}
            >
              <Box minWidth={350}>
                <LoginForm />
                <Box sx={{ mt: 2 }}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    display={"flex"}
                  >
                    {/* <Link
                      variant="subtitle2"
                      to={"/auth/forgotpassword"}
                      onClick={() => dispatch({ type: EMPTY_AUTH_STATE })}
                      style={{
                        textDecoration: "none",
                        color: "#017DC5",
                      }}
                    >
                      Forgot Password?
                    </Link> */}
                    <Link
                      variant="subtitle2"
                      to={"/auth/otp"}
                      onClick={() => dispatch({ type: EMPTY_AUTH_STATE })}
                      style={{
                        textDecoration: "none",
                        color: "#017DC5",
                      }}
                    >
                      Login with OTP
                    </Link>
                  </Stack>
                </Box>
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

export default Loginpage;
