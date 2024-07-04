// import { Divider, Grid, Hidden, Stack, Typography } from "@mui/material";
// import React from "react";
// import CountUp from "react-countup";
// import { useNavigate } from "react-router-dom";
// import { formatIndianNumber } from "../../utils/formatTime";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getSubauaCount } from "../../redux/reports/reportAction";
// import DashBoardCard from "../../utils/card/DashBoardCard";

// const DashboardAuthCounts = () => {
//   const stateData = useSelector((state) => state.report);

//   const { subauaCount } = stateData;

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const totalAuthentication = () => {
//     navigate("/ditec/totalauth");
//   };
//   const subauaAuth = () => {
//     navigate("/ditec/subauaauth");
//   };

//   useEffect(() => {
//     dispatch(getSubauaCount());
//   }, []);
//   return (
//     <>

// <DashBoardCard />
// <Grid
//   direction={"row"}
//   justifyContent={"center"}
//   alignItems={"center"}
//   display={"flex"}
//   container
//   spacing={1}
// >


//         <Grid item md={3}>
//           <Stack
//             direction={"column"}
//             justifyContent={"center"}
//             alignItems={"center"}
//             display={"flex"}
//             onClick={subauaAuth}
//             sx={{ cursor: "pointer" }}
//           >
//             <Typography
//               variant="h5"
//               mt={{ md: 4, sm: 4, xs: 2 }}
//               color={"#14BDEE"}
//             >
//               Sub-AUAs Onboarded
//             </Typography>

//             <Typography variant="h6" mb={2}>
//               <CountUp
//                 end={Number(subauaCount?.subaua)}
//                 separator=","
//                 duration={2}
//               />
//             </Typography>
//           </Stack>
//         </Grid>
//         <Hidden xsDown>
//           <Divider sx={{ p: 1 }} orientation="vertical" flexItem />
//         </Hidden>
//         <Grid item md={3}>
//           <Stack
//             direction={"column"}
//             justifyContent={"center"}
//             alignItems={"center"}
//             display={"flex"}
//             // onClick={totalAuthentication}
//             sx={{ cursor: "pointer" }}
//           >
//             <Typography
//               variant="h5"
//               mt={{ md: 4, sm: 2, xs: 2 }}
//               color={"#14BDEE"}
//             >
//               Total Authentications
//             </Typography>
//             <Typography variant="h6" mb={2}>
//               <CountUp
//                 end={formatIndianNumber(Number(subauaCount?.yearauthtotal))}
//                 separator=","
//                 duration={2}
//               />
//             </Typography>
//           </Stack>
//         </Grid>
//         <Hidden smDown>
//           <Divider sx={{ p: 1 }} orientation="vertical" flexItem />
//         </Hidden>
//         <Grid item md={3}>
//           <Stack
//             direction={"column"}
//             justifyContent={"center"}
//             alignItems={"center"}
//             display={"flex"}
//             onClick={totalAuthentication}
//             sx={{ cursor: "pointer" }}
//           >
//             <Typography
//               color={"#14BDEE"}
//               variant="h5"
//               mt={{ md: 4, sm: 4, xs: 2 }}
//             >
//               Today's Authentications
//             </Typography>
//             <Typography variant="h6" mb={2}>
//               <CountUp
//                 end={formatIndianNumber(Number(subauaCount?.todayauthtotal))}
//                 separator=","
//                 duration={2}
//               />
//             </Typography>
//           </Stack>


//         </Grid>

//         {/* <Divider orientation="vertical" flexItem /> */}

//       </Grid>
//     </>
//   );
// };

// export default DashboardAuthCounts;

import React, { useEffect } from 'react';
import DashBoardCard from '../../utils/card/DashBoardCard';
import { Grid, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSubauaCount } from "../../redux/reports/reportAction";
import { formatIndianNumber } from "../../utils/formatTime";

const DashboardAuthCounts = () => {
  const stateData = useSelector((state) => state.report);
  const { subauaCount } = stateData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAuthentication = () => {
    // navigate("/ditec/totalauth");
  };
  const subauaAuth = () => {
    // navigate("/ditec/subauaauth");
  };

  useEffect(() => {
    dispatch(getSubauaCount());
  }, []);



  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <DashBoardCard
            avatarColor={"#F6FAFF"}
            avatarSize="80px"
            title="Sub AUAs"
            subtitle="onboarded"
            onClick={subauaAuth}
            image={"/assets/logos/subaua.png"}
            counter={formatIndianNumber(Number(subauaCount?.subaua))}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <DashBoardCard
            avatarColor={"#F6FAFF"}
            avatarSize="80px"
            title="Total"
            subtitle="Authentications"
            image={"/assets/logos/total.png"}
            hight={"60px"}
            // counter={formatIndianNumber(Number(subauaCount?.yearauthtotal))}

            counter={formatIndianNumber(Number(subauaCount?.yearauthtotal))}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DashBoardCard
            avatarColor={"#F6FAFF"}
            avatarSize="80px"
            title="Today"
            subtitle="Authentications"
            onClick={totalAuthentication}
            counter={formatIndianNumber(Number(subauaCount?.todayauthtotal))}
            image={"/assets/logos/today.png"}
            hight={"60px"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardAuthCounts;
