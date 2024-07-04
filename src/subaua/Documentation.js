import {
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Documentation = () => {
  return (
    <>
      <Container maxWidth={"xl"}>
        <Typography mb={3} variant="h4">
          Thin-Client
        </Typography>
        <Card sx={{ p: 4 }}>
          <Grid container spacing={3}>
            <Grid item md={4}>
              <Stack direction={"column"} spacing={3}>
                <Typography variant="h4">Java</Typography>
                <Button variant="contained">Download</Button>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack direction={"column"} spacing={3}>
                <Typography variant="h4">PHP</Typography>
                <Button variant="contained">Download</Button>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack direction={"column"} spacing={3}>
                <Typography variant="h4">.Net</Typography>
                <Button variant="contained">Download</Button>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default Documentation;
