import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import MultipleBarChart from "../../utils/chart/MultipleBarChart";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSubauaCount,
  getSubauaTodayTransactions,
  getSubauaTotalTransactions,
} from "../../redux/reports/reportAction";

const SubauaAuthentication = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stateData = useSelector((state) => state.report);

  const { subauatodayallcount, todaySubauaCount, subauaCount, totalSubauaCount } = stateData;

  console.log("subbbbbbbbbbbbbbbbb", totalSubauaCount);
  console.log("datsssssssssssss", totalSubauaCount?.data)

  const chartData = [
    {
      name: 'Demographic',
      data: totalSubauaCount?.data?.map(item => item.Demographic)
    },
    {
      name: 'Fingerprint',
      data: totalSubauaCount?.data?.map(item => item.Fingerprint)
    },
    {
      name: 'Iris',
      data: totalSubauaCount?.data?.map(item => item.Iris)
    }
  ];

  useEffect(() => {
    dispatch(getSubauaTotalTransactions());
    dispatch(getSubauaCount());
  }, []);

  return (
    <>
      <>
        <Container maxWidth={"lg"} sx={{ mt: 3 }}>
          <Stack direction={"row"} alignItems={"flex-start"}>
            <IconButton onClick={() => navigate(-1)} aria-label="back">
              <KeyboardBackspaceIcon />
            </IconButton>
          </Stack>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            <Grid item md={12} mt={2}>
              <Typography variant="h3" color={"#252525"} >
                Total Authentication Sub-AUA Transactions
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Divider flexItem />
            </Grid>
            <Grid item md={12}>
              <Stack direction={"row"} spacing={3} alignItems={"center"}>
                <Typography variant="subtitle1" sx={{ color: "#1A73E9" }}>
                  Sub AUA/KUA Total Transactions
                </Typography>
                <Card sx={{ p: 2, bgcolor: "DarkTurquoise" }}>
                  <Typography variant="subtitle1">
                    {subauaCount?.yearauthtotal}
                  </Typography>
                </Card>
              </Stack>
            </Grid>
            <Grid item md={12}>
              <Divider flexItem />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              {Object.keys(totalSubauaCount || {}).length !== 0 ? (
                <MultipleBarChart
                  title={"Sub-AUAs Total Transactions"}
                  chartData={chartData}
                  chartLabel={totalSubauaCount?.agencyname}
                />
              ) : (
                <Typography>Loading...</Typography>
              )}
            </Grid>
          </Grid>
        </Container>
      </>
    </>
  );
};

export default SubauaAuthentication;
