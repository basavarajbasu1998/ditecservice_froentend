import React, { useEffect } from "react";
import { subauaData } from "../redux/admin/adminActions";
import { loadState } from "../helper/SessionStorage";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const Profile = () => {
  const stateData = useSelector((state) => state.admin);

  const { auaData } = stateData;
  console.log(auaData);
  const dispatch = useDispatch();

  const retrievedValue = loadState("subauaid", "Default Value");
  console.log(retrievedValue);

  useEffect(() => {
    const data = {
      subAuaId: retrievedValue,
    };
    dispatch(subauaData(data));
  }, []);
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">Profile</Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Card>
              <CardHeader
                sx={{ bgcolor: "#1B5886", color: "white" }}
                title="Basic Informtaion"
              />
              <Divider />
              <CardContent>
                <Stack direction={"column"} spacing={2}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    display={"flex"}
                  >
                    <Typography variant="subtitle1">
                      Organisation Name
                    </Typography>
                    <Typography variant="body1">
                      {auaData.organisationName}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    display={"flex"}
                  >
                    <Typography variant="subtitle1">
                      Business Application Name
                    </Typography>
                    <Typography variant="body1">
                      {auaData.businessApplicationName}
                    </Typography>
                  </Stack>
                  <Divider />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                sx={{ bgcolor: "#1B5886", color: "white" }}
                title="Management Point of Contact"
              />
              <Divider />
              <CardContent>
                <Stack direction={"column"} spacing={2}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    display={"flex"}
                  >
                    <Typography variant="subtitle1">Contact Name</Typography>
                    <Typography variant="body1">
                      {auaData.managementName}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    display={"flex"}
                  >
                    <Typography variant="subtitle1">Designation</Typography>
                    <Typography variant="body1">
                      {auaData.managementDesignationName}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    display={"flex"}
                  >
                    <Typography variant="subtitle1">Mobile Number</Typography>
                    <Typography variant="body1">
                      {auaData.managementMobilenumber}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    display={"flex"}
                  >
                    <Typography variant="subtitle1">Email</Typography>
                    <Typography variant="body1">
                      {auaData.managementEmail}
                    </Typography>
                  </Stack>
                  <Divider />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                sx={{ bgcolor: "#1B5886", color: "white" }}
                title="Technical Point of Contact"
              />
              <Divider />
              <CardContent>
                <Stack direction={"column"} spacing={2}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    display={"flex"}
                  >
                    <Typography variant="subtitle1">Contact Name</Typography>
                    <Typography variant="body1">
                      {auaData.technicalName}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    display={"flex"}
                  >
                    <Typography variant="subtitle1">Designation</Typography>
                    <Typography variant="body1">
                      {auaData.technicalDesignationName}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    display={"flex"}
                  >
                    <Typography variant="subtitle1">Mobile Number</Typography>
                    <Typography variant="body1">
                      {auaData.technicalMobilenumber}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    display={"flex"}
                  >
                    <Typography variant="subtitle1">Email</Typography>
                    <Typography variant="body1">
                      {auaData.technicalEmail}
                    </Typography>
                  </Stack>
                  <Divider />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
