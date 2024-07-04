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
import Barchart from "../../utils/chart/Barchart";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSubauaCount, getSubauaTodayTotalTransactions } from "../../redux/reports/reportAction";
import { useEffect } from "react";
import { getDailyWiseCount } from "../../redux/dashboard/dashboardAction";
import MultipleBarChart from "../../utils/chart/MultipleBarChart";

const TotalAuthentication = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const stateData = useSelector((state) => state.report);
  const stateDataDashboard = useSelector((state) => state.dashboard);

  const { subauaCount, subauatodayallcount } = stateData;

  const { subAuaDailyCount } = stateDataDashboard;



  const chartData = [
    {
      name: 'Demographic',
      data: subauatodayallcount?.data?.map(item => item.Demographic)
    },
    {
      name: 'Fingerprint',
      data: subauatodayallcount?.data?.map(item => item.Fingerprint)
    },
    {
      name: 'Iris',
      data: subauatodayallcount?.data?.map(item => item.Iris)
    }
  ];

  console.log(subAuaDailyCount);

  useEffect(() => {
    dispatch(getSubauaCount());
    dispatch(getDailyWiseCount());
    dispatch(getSubauaTodayTotalTransactions())
  }, []);
  return (
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
            <Typography variant="h3" color={"#252525"}>
              Daily Authentication Transactions
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Divider flexItem />
          </Grid>
          <Grid item md={12}>
            <Stack
              direction={"row"}
              spacing={3}
              //   justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="subtitle1" sx={{color: "#1A73E9" }}>Today Transactions</Typography>
              <Card sx={{ p: 2, bgcolor: "DarkTurquoise" }}>
                <Typography variant="subtitle1">
                  {subauaCount?.todayauthtotal}
                </Typography>
              </Card>
            </Stack>
          </Grid>
          <Grid item md={12}>
            <Divider flexItem />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            {/* {Object.keys(subAuaDailyCount)?.length != 0 && (
              <Barchart
                title={"Day wise Total Transactions"}
                data={subAuaDailyCount?.dailycounts}
                dataLabls={subAuaDailyCount?.dailydate}
              />
            )} */}

            <Grid item xs={12} sm={12} md={12}>
              {Object.keys(subauatodayallcount || {}).length !== 0 ? (
                <MultipleBarChart
                  title="Sub-AUAs Total Transactions"
                  chartData={chartData}
                  chartLabel={subauatodayallcount?.agencyname}
                />
              ) : (
                <Typography>Loading...</Typography>
              )}

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TotalAuthentication;
