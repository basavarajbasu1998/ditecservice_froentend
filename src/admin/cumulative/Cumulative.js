import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CardComponent from "../../utils/CardComponent";

import AdUnitsIcon from "@mui/icons-material/AdUnits";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PieChart from "../../utils/chart/PieChart";
import MultipleBarChart from "../../utils/chart/MultipleBarChart";
import MultipleLineChart from "../../utils/chart/MultipleLineChart";
import { useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HorizandalBarChart from "../../utils/chart/HorizandalBarChart";
import { useDispatch, useSelector } from "react-redux";
import {
  getauamonthlychartdata,
  getauayeardonutcharts,
  getkuamonthlychartdata,
  getkuayeardonutcharts,
  getyearwisesubauacarddata,
} from "../../redux/reports/reportAction";

const Cumulative = () => {
  const navigate = useNavigate();

  const stateData = useSelector((state) => state.report);

  const {
    yearSubauaCount,
    monthlyauthcount,
    monthlyekyccount,
    auayeardonutcharts,
    kuayeardonutcharts,
  } = stateData;

  console.log("classsssssssssssssss", yearSubauaCount);

  console.log(" AUTH monthlycount", monthlyauthcount);
  console.log(" EKYC monthlyekyccount", monthlyekyccount);
  console.log("AUA auayeardonutcharts", auayeardonutcharts);
  console.log(" KUA kuayeardonutcharts", kuayeardonutcharts)


  const dispatch = useDispatch();

  useEffect(() => {
    const request = {
      subAuaId: "admin",
    };
    dispatch(getyearwisesubauacarddata(request));
    dispatch(getauamonthlychartdata(request));
    dispatch(getkuamonthlychartdata(request));
    dispatch(getauayeardonutcharts(request));
    dispatch(getkuayeardonutcharts(request));
  }, []);

  const subAUAClick = () => {
    navigate("/ditec/admin/subaua");
  };

  return (
    <>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <IconButton onClick={() => navigate(-1)} aria-label="back">
            <ArrowBackIcon />
          </IconButton>
        </Stack>
        <Typography my={2} variant="h5">
          Yearly Wise Transactions
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={4}>
            <CardComponent
              // total={456756}
              total={yearSubauaCount?.yearwisetotal}
              header={"Total Transactions"}
            // icon={<AccountTreeIcon sx={{ height: 30, width: 30 }} />}
            // avatarBackround={
            //   "linear-gradient(to right, #F08080, #A70CFF)! important"
            // }
            />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <CardComponent
              // total={76757}
              total={yearSubauaCount?.yearwiseauthtotal}
              header={"Authentication"}
              authdemo={yearSubauaCount?.authdemo}
              authFp={yearSubauaCount?.authbio}
              authIr={yearSubauaCount?.authiris}

            // icon={<AdUnitsIcon sx={{ height: 30, width: 30 }} />}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <CardComponent
              // total={23353}
              total={yearSubauaCount?.yearwiseekyctotal}
              header={"e-KYC"}
              ekycFp={yearSubauaCount?.ekycbio}
              ekycIr={yearSubauaCount?.ekyciris}
              ekycOTP={yearSubauaCount?.ekycotp}
            // icon={<FingerprintIcon sx={{ height: 30, width: 30 }} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            {auayeardonutcharts && Object.keys(auayeardonutcharts).length != 0 && (
              <PieChart
                height={500}
                chartData={auayeardonutcharts?.authcount}
                chartLabel={auayeardonutcharts?.authnames}
                title={"Yearly Authentication Transactions"}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            {monthlyauthcount && Object.keys(monthlyauthcount).length != 0 && (
              <MultipleLineChart
                title={"Monthly Authentication Transactions"}
                // chartLabels={[
                //   "2022-05-01",
                //   "2022-06-01",
                //   "2022-07-01",
                //   "2022-08-01",
                //   "2022-09-01",
                //   "2022-10-01",
                //   "2022-11-01",
                //   "2022-12-01",
                //   "2023-01-01",
                //   "2023-02-01",
                //   "2023-03-01",
                //   "2023-04-01",
                //   "2023-05-01",
                // ]}

                chartLabels={monthlyauthcount?.authdates}
                chartData={[
                  {
                    name: "Demographic",
                    type: "bar",
                    data: monthlyauthcount?.authdemographic,
                  },
                  // {
                  //   name: "OTP",
                  //   type: "area",
                  //   data: monthlyauthcount?.authdemographic,
                  // },
                  {
                    name: "FingerPrint",
                    type: "line",
                    data: monthlyauthcount?.authfingerprint,
                  },
                  {
                    name: "Iris",
                    type: "area",
                    data: monthlyauthcount?.authiris,
                  },
                ]}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            {kuayeardonutcharts && Object.keys(kuayeardonutcharts).length != 0 && (
              <PieChart
                height={300}
                // chartData={kuayeardonutcharts?.authcount}
                chartData={kuayeardonutcharts?.ekyccount}
                chartLabel={kuayeardonutcharts?.ekycnames}
                title={"Yearly e-KYC Transactions"}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            {monthlyekyccount && Object.keys(monthlyekyccount).length != 0 && (
              <MultipleLineChart
                title={"Monthly e-KYC Authentication Transaction"}
                // chartLabels={[
                //   "2022-05-01",
                //   "2022-06-01",
                //   "2022-07-01",
                //   "2022-08-01",
                //   "2022-09-01",
                //   "2022-10-01",
                //   "2022-11-01",
                //   "2022-12-01",
                //   "2023-01-01",
                //   "2023-02-01",
                //   "2023-03-01",
                //   "2023-04-01",
                //   "2023-05-01",
                // ]}

                chartLabels={monthlyekyccount?.ekycdates}
                chartData={[
                  {
                    name: "OTP",
                    type: "bar",
                    // data: [
                    //   876, 234, 512, 690, 412, 187, 932, 546, 301, 322, 981,
                    //   708, 413,
                    // ],
                    data: monthlyekyccount?.ekycdemographic,
                  },
                  {
                    name: "FingerPrint",
                    type: "area",
                    // data: [
                    //   123, 567, 890, 456, 789, 234, 678, 901, 345, 678, 234,
                    //   567, 890,
                    // ],
                    data: monthlyekyccount?.ekycfingerprint,
                  },
                  {
                    name: "Iris",
                    type: "line",
                    // data: [
                    //   910, 293, 384, 845, 601, 222, 432, 651, 178, 789, 456,
                    //   987, 345,
                    // ],
                    data: monthlyekyccount?.ekyciris,
                  },
                ]}
              />
            )}
          </Grid>
          {/* <Grid item xs={12} sm={12} md={12}>
            <MultipleLineChart
              title={"Yearly Transactions"}
              chartLabels={[
                "2023-05-13",
                "2023-05-14",
                "2023-05-15",
                "2023-05-16",
                "2023-05-17",
                "2023-05-18",
                "2023-05-19",
                "2023-05-20",
                "2023-05-21",
                "2023-05-22",
                "2023-05-23",
                "2023-05-24",
                "2023-05-25",
                "2023-05-26",
                "2023-05-27",
                "2023-05-28",
                "2023-05-29",
                "2023-05-30",
                "2023-05-31",
                "2023-06-01",
                "2023-06-02",
                "2023-06-03",
                "2023-06-04",
              ]}
              chartData={[
                {
                  name: "OTP",
                  type: "column",
                  fill: "solid",
                  data: [
                    12, 43, 23, 76, 57, 34, 32, 12, 14, 33, 76, 21, 76, 25, 34,
                    21, 56, 54, 89, 32, 11, 47, 43,
                  ],
                },
                {
                  name: "Bio-Metric",
                  type: "area",
                  fill: "gradient",
                  data: [
                    12,
                    43,
                    56,
                    76,
                    87,
                    34,
                    56,
                    86,
                    55,
                    43,
                    34,
                    67,
                    ,
                    32,
                    87,
                    99,
                    88,
                    21,
                    44,
                    56,
                    34,
                    56,
                    66,
                    32,
                  ],
                },
                {
                  name: "E-KYC",
                  type: "line",
                  fill: "solid",
                  data: [
                    12, 43, 56, 76, 87, 34, 56, 86, 55, 43, 34, 45, 67, 87, 99,
                    88, 21, 44, 56, 34, 56, 66, 76,
                  ],
                },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
};

export default Cumulative;
