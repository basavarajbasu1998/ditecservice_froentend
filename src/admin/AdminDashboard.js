import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import CardComponent from "../utils/CardComponent";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  getSubauaCount,
  getSubauaTodayTransactions,
  getauatodaydonutcharts,
  getkuatodaybarchartsubauadata,
  getkuatodaydonutcharts,
} from "../redux/reports/reportAction";
import MultipleBarChart from "../utils/chart/MultipleBarChart";
import PieChart from "../utils/chart/PieChart";

const AdminDashboard = () => {
  const stateData = useSelector((state) => state.report);

  // const {
  //   subauaCount,
  //   todaySubauaCount,
  //   todayekycSubauaCount,
  //   auatodaydonutcharts,
  //   kuatodaydonutcharts,
  // } = stateData;

  const {
    subauaCount = {},
    todaySubauaCount = {},
    todayekycSubauaCount = {},
    auatodaydonutcharts = {},
    kuatodaydonutcharts = {}
  } = stateData || {};


  console.log("today subaua count", todayekycSubauaCount);

  console.log("today aua count", auatodaydonutcharts);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const request = {
      subAuaId: "admin",
    };
    dispatch(getSubauaCount());
    dispatch(getSubauaTodayTransactions(request));
    dispatch(getauatodaydonutcharts(request));
    dispatch(getkuatodaydonutcharts(request));
    dispatch(getkuatodaybarchartsubauadata(request));
  }, []);

  const subAUAClick = () => {
    navigate("/ditec/admin/subaua");
  };
  const cumulativeClick = () => {
    navigate("/ditec/admin/cumulative");
  };

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={4}>
            <CardComponent
              // total={6}
              total={subauaCount?.subaua}
              header={"Sub AUAs/KUAs"}
              icon={
                <img
                  src="/assets/logos/subaua1.png"
                  height={50}
                  width={50}
                ></img>
              }
              // avatarBackround={"black"}
              onClick={subAUAClick}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <CardComponent
              total={subauaCount?.todayauthtotal}
              header={"Today's Transactions"}
              icon={
                <img
                  src="/assets/logos/today-transaction.png"
                  height={50}
                  width={50}
                ></img>
              }
            />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <CardComponent
              total={subauaCount?.yearauthtotal}
              header={"Total Transactions"}
              icon={
                <img
                  src="/assets/logos/total-transactions.png"
                  height={50}
                  width={50}
                ></img>
              }
              onClick={cumulativeClick}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            {auatodaydonutcharts && Object.keys(auatodaydonutcharts).length !== 0 && (
              <PieChart
                chartData={auatodaydonutcharts?.authcount}
                height={300}
                chartLabel={auatodaydonutcharts?.authnames}
                title={"Today Authentication Transactions"}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            {todaySubauaCount && Array.isArray(todaySubauaCount.data) && Array.isArray(todaySubauaCount.agencyname) && (
              <MultipleBarChart
                title={"Sub-AUAs Today's Authentication Transactions"}
                chartData={todaySubauaCount.data}
                chartLabel={todaySubauaCount.agencyname}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            {kuatodaydonutcharts && Object.keys(kuatodaydonutcharts).length != 0 && (
              <PieChart
                height={300}
                chartData={kuatodaydonutcharts?.ekyccount}
                chartLabel={kuatodaydonutcharts?.ekycnames}
                title={"Today e-KYC Transactions"}
              />
            )}
          </Grid>

          <Grid item xs={12} sm={12} md={8}>
            {todayekycSubauaCount && Object.keys(todayekycSubauaCount).length != 0 && (
              <MultipleBarChart
                title={"Sub-AUAs Today's e-KYC Transactions"}
                chartData={todayekycSubauaCount?.data}
                chartLabel={todayekycSubauaCount?.agencyname}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AdminDashboard;
