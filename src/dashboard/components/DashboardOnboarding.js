// import {
//   Box,
//   Grid,
//   Hidden,
//   Stack,
//   Typography,
//   keyframes,
//   styled,
// } from "@mui/material";
// import React from "react";

// const ImageResponssive = styled("div")(({ theme }) => ({
//   width: 530,
//   [theme.breakpoints.down("xl")]: {
//     width: 500,
//   },
//   [theme.breakpoints.down("md")]: {
//     width: 450,
//   },
//   [theme.breakpoints.down("sm")]: {
//     width: 400,
//   },
// }));

// const bounceAnimation = keyframes`
//   0% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-8px); // Adjust the value for the desired up-down movement
//   }
//   100% {
//     transform: translateY(0);
//   }
// `;

// const ImageAnimation = styled("div")(({ theme }) => ({
//   animation: `${bounceAnimation} 4s infinite`, // Adjust the duration and iteration count as needed
// }));

// const DashboardOnboarding = () => {
//   return (
//     <>
//       <Grid container spacing={3}>
//         <Grid item md={12}>
//           <Typography variant="h3" color={"#14BDEE"}>
//             Sub AUA/KUA Onboarding
//           </Typography>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           md={6}
//           alignItems={"center"}
//           justifyContent={"center"}
//           display={"flex"}
//         >
//           <Typography variant="body1" textAlign={"justify"}>
//             DITEC,Sub-AUA/KUA onboarding process talks about the
//             pre-requisites/initial process steps to be fulfilled by the agencies
//             which are willing to avail the AUA/KUA provided services . The
//             agencies can enter an agreement with DITEC as per the UIDAI
//             specifications and avail the services, or they either can onboard
//             directly with UIDAI to register as an AUA/KUA.
//           </Typography>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           md={6}
//           alignItems={"center"}
//           justifyContent={"center"}
//           display={"flex"}
//         >
// <ImageResponssive>
//   <img src="/assets/gifs/onboardingservices.gif" />
// </ImageResponssive>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default DashboardOnboarding;


// import {
//   Box,
//   Button,
//   Grid,
//   Hidden,
//   Stack,
//   Typography,
//   keyframes,
//   styled,
// } from "@mui/material";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const ImageResponssive = styled("div")(({ theme }) => ({
//   width: 530,
//   [theme.breakpoints.down("xl")]: {
//     width: 500,
//   },
//   [theme.breakpoints.down("md")]: {
//     width: 450,
//   },
//   [theme.breakpoints.down("sm")]: {
//     width: 400,
//   },
// }));

// const bounceAnimation = keyframes`
//   0% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-8px); // Adjust the value for the desired up-down movement
//   }
//   100% {
//     transform: translateY(0);
//   }
// `;

// const ImageAnimation = styled("div")(({ theme }) => ({
//   animation: `${bounceAnimation} 4s infinite`, // Adjust the duration and iteration count as needed
// }));

// const DashboardOnboarding = () => {

//   const navigate = useNavigate();

//   return (
//     <>
//       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//         <Grid item xs={12} md={6}>

//           <Box sx={{ mb: 2, p: 1 }}>
//             <Typography variant="subtitle1" mb={2} color={"#1A73E9"}>
//               SUB AUA
//             </Typography>

//             <Typography variant="h3" mb={2} color={"#252525"}>
//               Sub AUA/KUA Onboarding
//             </Typography>
//           </Box>

//           <Typography variant="body1" textAlign={"justify"} sx={{
//             fontFamily: '"Manrope", sans-serif', fontWeight: "100",
//           }}>
//             DITEC,Sub-AUA/KUA onboarding process talks about the
//             pre-requisites/initial process steps to be fulfilled by the agencies
//             which are willing to avail the AUA/KUA provided services . The
//             agencies can enter an agreement with DITEC as per the UIDAI
//             specifications and avail the services, or they either can onboard
//             directly with UIDAI to register as an AUA/KUA.
//           </Typography>

//           <Box sx={{ mt: 2, p: 2 }}>
//             <Button variant="contained" sx={{
//               borderRadius: "25px",
//               backgroundColor: "#1A73E9",
//               boxShadow: "none",
//               fontWeight: "100"
//             }} onClick={() => { navigate("/ditec/authentication") }}>Read More</Button>

//           </Box>

//         </Grid>


//         <Grid item xs={12} md={6}>
//           {/* <Box alignItems={"center"} justifyContent={"center"} > */}
//             <ImageResponssive>
//               <img src="/assets/gifs/onboardingservices1.gif" />
//             </ImageResponssive>
//           {/* </Box> */}
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default DashboardOnboarding;


import {
  Box,
  Button,
  Grid,
  Hidden,
  Stack,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ImageResponssive = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  width: "100%",
  [theme.breakpoints.down("xl")]: {
    maxWidth: 500,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: 450,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: 400,
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

const DashboardOnboarding = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2, p: 1 }}>
            <Typography variant="subtitle1" mb={2} color={"#1A73E9"} fontWeight>
              SUB AUA
            </Typography>

            <Typography variant="h3" mb={2} color={"#252525"} fontWeight>
              Sub AUA/KUA Onboarding
            </Typography>
          </Box>

          <Typography
            variant="body1"
            textAlign={"justify"}
            sx={{
              fontFamily: '"Manrope", sans-serif',
              fontWeight: "100",
            }}
          >
            DITEC, Sub-AUA/KUA onboarding process talks about the
            pre-requisites/initial process steps to be fulfilled by the agencies
            which are willing to avail the AUA/KUA provided services . The
            agencies can enter an agreement with DITEC as per the UIDAI
            specifications and avail the services, or they either can onboard
            directly with UIDAI to register as an AUA/KUA.
          </Typography>

          <Box sx={{ mt: 2, p: 2 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "25px",
                backgroundColor: "#1A73E9",
                boxShadow: "none",
                fontWeight: "100",
              }}
              onClick={() => {
                navigate("/ditec/subaua");
              }}
            >
              Read More
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>

          <ImageResponssive>
            <img src="/assets/gifs/onboardingservices.png" alt="onboarding gif" />
          </ImageResponssive>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardOnboarding;



