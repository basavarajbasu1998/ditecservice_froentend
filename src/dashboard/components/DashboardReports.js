import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

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

// const DashboardReports = () => {
//   return (
//     <>
//       <Grid container spacing={3}>
//         {/* <Grid item xs={12} md={12}>
//           <Typography variant="h3" color={"#14BDEE"}>
//             Reports
//           </Typography>
//         </Grid> */}

//         <Grid
//           item
//           xs={12}
//           md={6}
//           mt={2}
//           alignItems={"center"}
//           justifyContent={"center"}
//           display={"flex"}
//         >
<Box alignItems={"center"} justifyContent={"center"} display={"flex"}>
  <ImageResponssive>
    <img src="/assets/gifs/reports.gif" />
  </ImageResponssive>
</Box>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           md={6}
//           mt={2}
//           alignItems={"center"}
//           justifyContent={"center"}
//           display={"flex"}
//         >
//           <Stack direction={"column"}>
//             <Typography variant="h3" mb={3} color={"#14BDEE"}>
//               Reports
// </Typography>
// <Typography variant="body1" textAlign={"justify"}>
//   DITEC provides comprehensive reports to Sub-AUAs, offering
//   valuable insights and data related to their operations and
//   transactions. These reports aim to assist Sub-AUAs in
//   understanding their Percentage of successful transactions, Total
//   number of transactions processed within a specified period. making
//   informed decisions, Graphical representation or statistical data
//   showcasing transaction patterns and trends over time., and trends
//   of Aadhaar authentication for the specific sub-AUA. While the
//   exact content may vary depending on the system and requirements.
// </Typography>

// <List>
//   <ListItem>
//     <ListItemIcon>
//       <KeyboardDoubleArrowRightIcon />
//     </ListItemIcon>
//     <ListItemText primary="Authentication Metrics" />
//   </ListItem>
//   <ListItem>
//     <ListItemIcon>
//       <KeyboardDoubleArrowRightIcon />
//     </ListItemIcon>
//     <ListItemText primary="Service-wise Breakdown" />
//   </ListItem>
//   <ListItem>
//     <ListItemIcon>
//       <KeyboardDoubleArrowRightIcon />
//     </ListItemIcon>
//     <ListItemText primary="Time-based Analysis" />
//   </ListItem>
//   <ListItem>
//     <ListItemIcon>
//       <KeyboardDoubleArrowRightIcon />
//     </ListItemIcon>
//     <ListItemText primary="Error Analysis" />
//   </ListItem>
//   <ListItem>
//     <ListItemIcon>
//       <KeyboardDoubleArrowRightIcon />
//     </ListItemIcon>
//     <ListItemText primary="Real-time Monitoring" />
//   </ListItem>
// </List>
//             {/* <Box mr={10}>
// <img
//   src="/assets/images/onboarding1.png"
//   //   width={201}
//   //   height={200}
// />
//             </Box> */}
//           </Stack>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default DashboardReports;




const DashboardReports = () => {




  return (
    <div>


      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Box alignItems={"center"} justifyContent={"center"} display={"flex"}>
            <ImageResponssive>
              <img src="/assets/gifs/reports.png" />
            </ImageResponssive>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2 }}>
            {/* <Typography variant="subtitle1" mb={2} color={"#1A73E9"}>
            DITEC  
            </Typography> */}
            
            <Typography variant="h3" mb={2} color={"#252525"}>
              Reports
            </Typography>
          </Box>
          <Typography variant="body1" textAlign={"justify"}>
            DITEC provides comprehensive reports to Sub-AUAs, offering
            valuable insights and data related to their operations and
            transactions. These reports aim to assist Sub-AUAs in
            understanding their Percentage of successful transactions, Total
            number of transactions processed within a specified period. making
            informed decisions, Graphical representation or statistical data
            showcasing transaction patterns and trends over time., and trends
            of Aadhaar authentication for the specific sub-AUA. While the
            exact content may vary depending on the system and requirements.
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Authentication Metrics" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Service-wise Breakdown" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Time-based Analysis" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Error Analysis" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Real-time Monitoring" />
            </ListItem>
          </List>

        </Grid>
      </Grid>

    </div>
  )
}

export default DashboardReports