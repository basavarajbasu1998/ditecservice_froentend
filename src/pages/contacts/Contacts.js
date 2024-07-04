
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  keyframes,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import BusinessIcon from "@mui/icons-material/Business";
import { cyan, indigo } from "@mui/material/colors";
import ContactCard from "./ContactCard";
import ScrollAnimation from "../../utils/card/ScrollAnimation";
import { styled } from "@mui/styles";

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

const Contacts = () => {


  const cartRef = useRef(null);



  const [google, setGoogle] = useState(null);

  function initMap() {
    if (!google) return;

    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 26.14258110797439, lng: 91.7888696985305 },

      zoom: 8
    });
  }

  useEffect(() => {
    if (window.google && window.google.maps) {
      setGoogle(window.google);
    }
  }, []);

  useEffect(() => {
    if (google) {
      initMap();
    }
  }, [google]);
  return (
    <>
      {/* <Box sx={{ mt: 2 }}>
        <img src="/assets/banner/contact.png" height={"300px"} width={"100%"}></img>
      </Box> */}

      {/* <Box sx={{ backgroundColor: "#F8F8F8", p: 2, mt: 4 }}> */}
      <Card sx={{ mt: 2, }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ p: 3 }}>
            <Grid item xs={12} md={6}>
              <Stack direction={"column"} spacing={3} sx={{ mt: 4 }}>


                <ScrollAnimation timeout={600} direction={"right"}>
                  <Card sx={{
                    p: 3, backgroundColor: "#F8F8F8", boxShadow: "none", transition: '0.3s', "&:hover": {
                      color: "black", bgcolor: "F6F6F6", transform: 'scale(1.02)',

                    }
                  }}>
                    <Stack direction={"row"} spacing={2}>
                      <img src="/assets/images/address.png" height={"80px"} width={"65px"}></img>
                      <Stack direction={"column"} spacing={1}>
                        <Typography variant="body1" sx={{ color: "blue" }}>Office Address</Typography>
                        <Typography variant="body">
                          Directorate of Information Technology, Electronics and Communication(DITEC)
                          Behind CM Block Assam Secretariat,Dispur, Guwahati-781006, Assam.
                        </Typography>
                      </Stack>
                    </Stack>
                  </Card>
                </ScrollAnimation>
                <ScrollAnimation timeout={400} direction={"right"}>
                  <Card sx={{
                    p: 3,
                    backgroundColor: "#F8F8F8", boxShadow: "none", transition: '0.3s', "&:hover": {
                      color: "black", bgcolor: "F6F6F6", transform: 'scale(1.02)',
                    }
                  }}>
                    <Stack direction={"column"} spacing={4}>
                      <Stack direction={"row"} spacing={2} >

                        <img src="/assets/images/phone.png" height={"60px"} width={"70px"}></img>
                        <Stack direction={"column"} spacing={"2"}>
                          {/* <Typography variant="body1" sx={{ color: "blue" }}>How can we help you ?</Typography> */}
                          <Typography variant="body1" sx={{ color: "blue" }}>If you have any queries...?</Typography>
                          <Typography variant="body1">Mobile Number : +91 9957926630</Typography>
                        </Stack>
                      </Stack>

                      <Stack direction={"row"} spacing={3}>
                        <img src="/assets/images/emailpic.png" height={"60px"} width={"60px"}></img>
                        <Stack direction={"column"} spacing={1}>
                          <Typography></Typography>
                          <Typography></Typography>
                          <Typography variant="body1">e-Mail : ditec_support@assam.gov.in</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Card>
                </ScrollAnimation>

                {/* <ScrollAnimation timeout={500} direction={"right"}>
                  <Card sx={{
                    p: 3, backgroundColor: "#F8F8F8", boxShadow: "none", transition: '0.3s', "&:hover": {
                      color: "black", bgcolor: "F6F6F6", transform: 'scale(1.02)',

                    }
                  }}>
                    <Stack direction={"row"} spacing={2}>
                      <img src="/assets/images/emailpic.png" height={"60px"} width={"60px"}></img>
                      <Stack direction={"column"} spacing={1}>
                        <Typography></Typography>
                        <Typography variant="body1" sx={{ color: "blue" }}>How can we help you ?</Typography>
                        <Typography variant="body1">e-Mail : ditec-asm.gov.in</Typography>
                      </Stack>
                    </Stack>
                  </Card>
                </ScrollAnimation> */}

              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ alignItems: "center", p: 1 }}>
                {/* <ImageResponssive>
                  <ImageAnimation>
                    <img src="/assets/images/customer.png" height={"500px"} width={"100%"}></img>


                  </ImageAnimation>
                </ImageResponssive> */}


                <div id="map" style={{ width: '100%', height: '500px' }}></div>
              </Box>
            </Grid>

          </Grid>

        </Container>
      </Card>
      {/* </Box > */}
    </>
  );
};

export default Contacts;

