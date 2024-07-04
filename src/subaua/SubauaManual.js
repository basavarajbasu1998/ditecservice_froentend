import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Button,
  Card,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { useNavigate } from "react-router-dom";
import { environmentalURL } from "../environmentalURL";

const SubauaManual = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Typography mb={3} variant="h4">
          Onboarding Manual
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Card sx={{ p: 3 }}>
              <Stack direction={"column"} spacing={2}>
                {/* <Typography variant="h5">Onboarding Manual</Typography> */}
                <Typography variant="body1">
                  Sub-AUA onboarding manual is designed to provide an overview
                  of the process and requirements for becoming a Sub-AUA. Before
                  becoming a Sub-AUA, Please read this manual carefully to
                  understand the steps involved in joining our network.
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper elevation={3}>
              <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>S.No</TableCell>
                      <TableCell>Document Name</TableCell>
                      <TableCell>Document</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell width={50} component="th" scope="row">
                        1
                      </TableCell>
                      <TableCell component="th" scope="row">
                        Onboarding Manual
                      </TableCell>
                      <TableCell>
                        <Link
                          sx={{ cursor: "pointer" }}
                          href={`${environmentalURL}/getdocumentfile/onboardingmanual`}
                        >
                          Onboarding Manual.pdf
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
        <Stack mt={2} direction={"row"} justifyContent={"flex-end"}>
          <Button
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            onClick={() => navigate("/ditec/subaua/certificatedownload")}
          >
            Next
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default SubauaManual;
