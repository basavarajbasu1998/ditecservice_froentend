import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

import AdUnitsIcon from "@mui/icons-material/AdUnits";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

import { useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CardComponent from "../utils/CardComponent";
import MultipleBarChart from "../utils/chart/MultipleBarChart";
import PieChart from "../utils/chart/PieChart";
import MultipleLineChart from "../utils/chart/MultipleLineChart";

const SubauaDashboard = () => {
  const navigate = useNavigate();

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
        >
          <IconButton onClick={() => navigate(-1)} aria-label="back">
            <ArrowBackIcon />
          </IconButton>
        </Stack>
        <Stack
          mb={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography my={2} variant="h5">
            Skill Develpment
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={3}>
            <CardComponent
              bgcolor={"#A58CFF"}
              total={456756}
              header={"Total Transactions"}
              icon={<AccountTreeIcon sx={{ height: 30, width: 30 }} />}
              // avatarBackround={
              //   "linear-gradient(to right, #F08080, #A70CFF)! important"
              // }
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <CardComponent
              bgcolor={"#0068F1"}
              total={76757}
              header={"OTP"}
              icon={<AdUnitsIcon sx={{ height: 30, width: 30 }} />}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <CardComponent
              bgcolor={"#00E396"}
              total={23353}
              header={"FingerPrint"}
              icon={<FingerprintIcon sx={{ height: 30, width: 30 }} />}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <CardComponent
              bgcolor={"#FEB019"}
              total={5476357}
              header={"e-KYC"}
              icon={<ListAltIcon sx={{ height: 30, width: 30 }} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            {/* <PieChart title={"Today Transaction"} /> */}
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            {/* <MultipleBarChart title={"Sub-AUA Transactions"} /> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SubauaDashboard;
