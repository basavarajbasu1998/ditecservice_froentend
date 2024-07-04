import React from "react";

import { Card, Container, Grid, Link, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { environmentalURL } from "../../environmentalURL";
import NavigationContol from "../utils/NavigationContol";

/*-------------- Start Download all the douments ---------------------- */

const CertificateDownload = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        {/* Heading for the page, informing users about downloading documents. */}
        <Typography mb={3} variant="h4">
          Download Documents
        </Typography>

        {/* A grid container to organize the content in a grid layout. */}
        <Grid container spacing={3}>
          {/* A grid item that holds a Card component with text content. */}
          <Grid item md={12}>
            <Card sx={{ p: 3 }}>
              <Stack direction={"column"} spacing={2}>
                <Typography variant="h5">Requisite Documents</Typography>
                <Typography variant="body1">
                  Please download the requisite documents from the
                  below-mentioned links. It is important that you carefully read
                  and review all the documents before proceeding with the
                  onboarding process. Once you have thoroughly gone through the
                  documents, kindly upload them in the designated upload portal
                  area. This will help us ensure a smooth and efficient
                  onboarding experience for you as a Sub-AUA within our Aadhaar
                  authentication framework.
                </Typography>
              </Stack>
            </Card>
          </Grid>
          {/* Grid item with information about "Sub-AUA - DITEC." */}
          <Grid item xs={12}>
            <Typography variant="h5">Sub-AUA - DITEC</Typography>
          </Grid>
          {/* Grid item with a Table containing document information. */}
          <Grid item xs={12}>
            <Paper elevation={3}>
              <TableContainer component={Paper}>
                <Table
                  // sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table"
                >
                  {/* Table Head and Table Row Start form here  */}
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
                      {/* Table Cell Starting here, If you want to add any other document u have to add here  */}
                      <TableCell width={60} component="th" scope="row">
                        1
                      </TableCell>
                      <TableCell component="th" scope="row">
                        Sub-AUA application Form
                      </TableCell>
                      <TableCell>
                        <Link
                          sx={{ cursor: "pointer" }}
                          href={`${environmentalURL}/auth/getdocumentfile/subauaapplication`}
                        >
                          <Stack direction={"row"} spacing={1}>
                            <Typography color={"red"}>
                              <img
                                src="/assets/logos/pdficon.png"
                                height={20}
                                width={15}
                              />
                            </Typography>
                            <Typography variant="body2">
                              Sub-AUA application Form.pdf
                            </Typography>
                          </Stack>
                        </Link>
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {/* Table Cell Starting here, If you want to add any other document u have to add here  */}
                      <TableCell width={60} component="th" scope="row">
                        2
                      </TableCell>
                      <TableCell component="th" scope="row">
                        Sub-KUA application Form
                      </TableCell>
                      <TableCell>
                        <Link
                          sx={{ cursor: "pointer" }}
                          href={`${environmentalURL}/auth/getdocumentfile/subkuaapplication`}
                        >
                          <Stack direction={"row"} spacing={1}>
                            <Typography color={"red"}>
                              <img
                                src="/assets/logos/pdficon.png"
                                height={20}
                                width={15}
                              />
                            </Typography>
                            <Typography variant="body2">
                              Sub-KUA application Form.pdf
                            </Typography>
                          </Stack>
                        </Link>
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell width={60} component="th" scope="row">
                        3
                      </TableCell>
                      <TableCell component="th" scope="row">
                        Sub-AUA MOU
                      </TableCell>
                      <TableCell>
                        <Link
                          sx={{ cursor: "pointer" }}
                          href={`${environmentalURL}/auth/getdocumentfile/subAUAMou`}
                        >
                          <Stack direction={"row"} spacing={1}>
                            <Typography color={"red"}>
                              <img
                                src="/assets/logos/pdficon.png"
                                height={20}
                                width={15}
                              />
                            </Typography>
                            <Typography variant="body2">
                              Sub-AUA MOU.pdf
                            </Typography>
                          </Stack>
                        </Link>
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell width={60} component="th" scope="row">
                        4
                      </TableCell>
                      <TableCell component="th" scope="row">
                        Sub-AUA Agreement Form
                      </TableCell>
                      <TableCell>
                        <Link
                          sx={{ cursor: "pointer" }}
                          href={`${environmentalURL}/auth/getdocumentfile/subAUAaggrement`}
                        >
                          <Stack direction={"row"} spacing={1}>
                            <Typography color={"red"}>
                              <img
                                src="/assets/logos/pdficon.png"
                                height={20}
                                width={15}
                              />
                            </Typography>
                            <Typography variant="body2">
                              Sub-AUA Agreement Form.pdf
                            </Typography>
                          </Stack>
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell width={60} component="th" scope="row">
                        5
                      </TableCell>
                      <TableCell component="th" scope="row">
                        Enquiry Form
                      </TableCell>
                      <TableCell>
                        <Link
                          sx={{ cursor: "pointer" }}
                          href={`${environmentalURL}/auth/getdocumentfile/enquiryForm`}
                        >
                          <Stack direction={"row"} spacing={1}>
                            <Typography color={"red"}>
                              <img
                                src="/assets/logos/pdficon.png"
                                height={20}
                                width={15}
                              />
                            </Typography>
                            <Typography variant="body2">
                              Enquiry Form.pdf
                            </Typography>
                          </Stack>
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5">User Manual & Circulars</Typography>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3}>
              <TableContainer component={Paper}>
                <Table
                  // sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table"
                >
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
                      <TableCell width={60} component="th" scope="row">
                        1
                      </TableCell>
                      <TableCell component="th" scope="row">
                        UIDAI Circular of Aadhaar under section 4 of the Aadhaar
                        Act 2016 18Aug2020
                      </TableCell>
                      <TableCell>
                        <Link
                          sx={{ cursor: "pointer" }}
                          // onClick={uidai1Circular}
                          href={`${environmentalURL}/auth/getdocumentfile/uidai1Circular`}
                        >
                          <Stack direction={"row"} spacing={1}>
                            <Typography color={"red"}>
                              <img
                                src="/assets/logos/pdficon.png"
                                height={20}
                                width={15}
                              />
                            </Typography>
                            <Typography variant="body2">
                              UIDAI Circular of Aadhaar under section 4 of the
                              Aadhaar Act 2016 18Aug2020.pdf
                            </Typography>
                          </Stack>
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell width={60} component="th" scope="row">
                        2
                      </TableCell>
                      <TableCell component="th" scope="row">
                        UIDAI Circular of Aadhaar under section 7 of the Aadhaar
                        Act 2016 25Nov2019
                      </TableCell>
                      <TableCell>
                        <Link
                          sx={{ cursor: "pointer" }}
                          href={`${environmentalURL}/auth/getdocumentfile/uidai2Circular`}
                        >
                          <Stack direction={"row"} spacing={1}>
                            <Typography color={"red"}>
                              <img
                                src="/assets/logos/pdficon.png"
                                height={20}
                                width={15}
                              />
                            </Typography>
                            <Typography variant="body2">
                              UIDAI Circular of Aadhaar under section 7 of the
                              Aadhaar Act 2016 25Nov2019.pdf
                            </Typography>
                          </Stack>
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell width={60} component="th" scope="row">
                        3
                      </TableCell>
                      <TableCell component="th" scope="row">
                        User Manual
                      </TableCell>
                      <TableCell>
                        <Link
                          sx={{ cursor: "pointer" }}
                          href={`${environmentalURL}/auth/getdocumentfile/userManual`}
                        >
                          <Stack direction={"row"} spacing={1}>
                            <Typography color={"red"}>
                              <img
                                src="/assets/logos/pdficon.png"
                                height={20}
                                width={15}
                              />
                            </Typography>
                            <Typography variant="body2">
                              User Manual.pdf
                            </Typography>
                          </Stack>
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5">Sub-AUA - DITEC - UIDAI</Typography>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3}>
              <TableContainer component={Paper}>
                <Table
                  // sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table"
                >
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
                        AUA - Sub-AUA Joint Undertaking form
                      </TableCell>
                      <TableCell>
                        <Link
                          sx={{ cursor: "pointer" }}
                          // onClick={subAUAjoinUndertaking}
                          href={`${environmentalURL}/auth/getdocumentfile/subAUAjoinUndertaking`}
                        >
                          <Stack direction={"row"} spacing={1}>
                            <Typography color={"red"}>
                              <img
                                src="/assets/logos/pdficon.png"
                                height={20}
                                width={15}
                              />
                            </Typography>
                            <Typography variant="body2">
                              AUA - Sub-AUA Joint Undertaking form.pdf
                            </Typography>
                          </Stack>
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell width={60} component="th" scope="row">
                        2
                      </TableCell>
                      <TableCell component="th" scope="row">
                        Request Form
                      </TableCell>
                      <TableCell>
                        <Link
                          sx={{ cursor: "pointer" }}
                          //  onClick={requestForm}
                          href={`${environmentalURL}/auth/getdocumentfile/requestForm`}
                        >
                          <Stack direction={"row"} spacing={1}>
                            <Typography color={"red"}>
                              <img
                                src="/assets/logos/pdficon.png"
                                height={20}
                                width={15}
                              />
                            </Typography>
                            <Typography variant="body2">
                              Request Form.pdf
                            </Typography>
                          </Stack>
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell width={60} component="th" scope="row">
                        3
                      </TableCell>
                      <TableCell component="th" scope="row">
                        Application Form
                      </TableCell>
                      <TableCell>
                        <Link
                          sx={{ cursor: "pointer" }}
                          // onClick={applicationForm}
                          href={`${environmentalURL}/auth/getdocumentfile/applicationForm`}
                        >
                          <Stack direction={"row"} spacing={1}>
                            <Typography color={"red"}>
                              <img
                                src="/assets/logos/pdficon.png"
                                height={20}
                                width={15}
                              />
                            </Typography>
                            <Typography variant="body2">
                              Application Form.pdf
                            </Typography>
                          </Stack>
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
        {/* <Stack mt={2} direction={"row"} justifyContent={"flex-end"}>
          <Button
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            onClick={() => navigate("/ditec/subaua/certificateupload")}
          >
            Next
          </Button>
        </Stack> */}
        <NavigationContol
          path={"/ditec/subaua/certificateupload"}
          disabled={false}
        />
      </Container>
    </>
  );
};

export default CertificateDownload;
