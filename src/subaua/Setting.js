import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Setting = () => {
  return (
    <>
      <Container maxWidth={"xl"}>
        <Card sx={{ p: 4 }}>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Typography variant="h4">Api Key</Typography>
              <Typography variant="subtitle1">
                8jeybe7654hve76t3yug76e
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="h4">Secret Key</Typography>
              <Typography variant="subtitle1">8uji97y765t6t6ye65</Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="h4">Sub AUA ID</Typography>
              <Typography variant="subtitle1">676546758756846</Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default Setting;
