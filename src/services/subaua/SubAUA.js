import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  styled,
  keyframes,
  ListItemIcon,

} from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const ImageAnimation = styled("div")(({ theme }) => ({
  animation: `${bounceAnimation} 4s infinite`, // Adjust the duration and iteration count as needed
}));
const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px); // Adjust the value for the desired up-down movement
  }
  100% {
    transform: translateY(0);
  }
`;


const ImageResponssive = styled("div")(({ theme }) => ({
  width: 530,
  [theme.breakpoints.down("xl")]: {
    width: 500,
  },
  [theme.breakpoints.down("md")]: {
    width: 450,
  },
  [theme.breakpoints.down("sm")]: {
    width: 400,
  },
}));

const SubAUA = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title> DITEC | Sub-AUA </title>
      </Helmet>
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid
          container
          spacing={3}
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
        >

          <Grid
            item
            sm={12}
            md={5}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            <Box sx={{ p: 2 }}>
              <Stack direction={"column"}>
                <Typography variant="h3" color={"#14BDEE"} sx={{ fontFamily: "WF Visual Sans, sans-serif;", color: "#000", mb: 3 }}>
                  Request For Sub-AUA/KUA
                </Typography>
                <Typography variant="body1" textAlign={"justify"} sx={{ fontFamily: "Inter, sans-serif", color: "#595858" }}>
                  Agencies that access Aadhaar authentication through an existing
                  AUA. (Under this project it is envisaged that all the State
                  Government Departmental Schemes would on-board themselves as
                  Sub-AUAs and avail Aadhaar Authentication services).
                </Typography>
                <Box textAlign={"left"}>
                  <Button
                    sx={{
                      mt: 4,
                      borderRadius: "45px",
                      boxShadow: "none", // Remove shadow
                      // marginRight: "0px",
                      // lineHeight: "40px"

                      "&.MuiButton-root": {
                        borderRadius: "25px",
                        padding: "10px 30px"
                      }

                    }}
                    variant="contained"
                    onClick={() => navigate("/ditec/register")}

                  >
                    Request For Sub-AUA
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid
            item
            sm={12}
            md={7}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            justify="space-between"
            spacing={4}
          >
            <Box borderRadius={10}>
              <img
                src="/assets/images/subAuaOnboarding.png"
                width={630}
                height={350}
              />
            </Box>
          </Grid>
          <Grid mt={10} item xs={12} direction="row"
            justifyContent="center"
            alignItems="center">
            <Typography mb={2} variant="h3" sx={{ fontFamily: "WF Visual Sans, sans-serif;", color: "#252525", }}>
              Sub-AUA Onboarding Process
            </Typography>
            <Divider flexItem />
          </Grid>

          <Grid item xs={12} direction="row"
            justifyContent="center"
            alignItems="center" >
            <Typography variant="h6" sx={{ marginBottom: "16px", color: "#0183ff" }}>
              To onboard as Sub-AUA under DITEC, Department/Organization under
              Government of India may undergo the following Steps
            </Typography>
            <Typography variant="body1" component="div" textAlign="justify" sx={{ fontFamily: "Inter, sans-serif", color: "#595858" }}>

              <ul>

                <Stack direction={"row"} spacing={2}>
                  <ListItemIcon>
                    <KeyboardDoubleArrowRightIcon />
                  </ListItemIcon>
                  <Typography>
                    Department/Organization who wants to become a Sub-AUA needs to
                    find out under which Section of Aadhaar Act, 2016 (as amended)
                    they are going avail the Authentication service.
                  </Typography>
                </Stack>
                <Typography>
                  <Stack direction={"row"} spacing={2}>
                    <ListItemIcon>
                      <KeyboardDoubleArrowRightIcon />
                    </ListItemIcon>
                    <Typography>
                      Aadhaar authentication services may be allowed to an entity if
                      its purpose for such authentication is in conformity with
                      following sections of the Aadhaar Act, 2016 (as amended):
                    </Typography>
                  </Stack>
                  <Grid container
                    spacing={3}
                    justifyContent={"center"}
                    alignItems={"center"}
                    display={"flex"}>
                    <Grid item sm={12} md={12} direction="row"
                      justifyContent="center"
                      alignItems="center">
                      <Box sx={{ p: 2 }}>
                        <ul >
                          <Stack direction={"row"} style={{ marginBottom: "5px" }}>
                            <ListItemIcon>
                              <FiberManualRecordIcon sx={{ fontSize: "15px" }} />
                            </ListItemIcon>
                            <Typography>
                              <span style={{ fontWeight: "bold" }}> Section 7 : </span> For providing any subsidy, benefit or service, if the expenditure is from the Consolidated Fund of India or Consolidated Fund of State. For this the expenditure has to be in the colour of subsidy and a specific notification is to be issued by the concerned Central Ministry (For Consolidated Fund of India related schemes) and by state Government (For Consolidated Fund of State related schemes).
                            </Typography>
                          </Stack>
                          <Stack direction={"row"} style={{ marginBottom: "5px" }}>
                            <ListItemIcon>
                              <FiberManualRecordIcon sx={{ fontSize: "15px" }} />
                            </ListItemIcon>
                            <Typography style={{ marginBottom: "20px" }}>
                              <span style={{ fontWeight: "bold" }}>Section 4(4)(b) (i) :</span> Permitted to offer Authentication Services under the provisions of any other Law made by Parliament
                            </Typography>
                          </Stack>

                          <Stack direction={"row"} style={{ marginBottom: "5px" }}>
                            <ListItemIcon>
                              <FiberManualRecordIcon sx={{ fontSize: "15px" }} />
                            </ListItemIcon>
                            <Typography style={{ marginBottom: "20px" }}>

                              <span style={{ fontWeight: "bold" }}>Section 4(4)(b)(ii) : </span> Seeking Authentication for such purpose, as the Central Government in consultation with the Authority, and in the Interest of State, may prescribe. In this context, MeitY has notified the Aadhaar Authentication for Good Governance (Social Welfare, Innovation, Knowledge) Rules, 2020 on 05.08.2020 under Section 4(4)(b)(ii) of the Aadhaar Act.
                            </Typography>
                          </Stack>

                          <Stack direction={"row"} style={{ marginBottom: "5px" }}>
                            <ListItemIcon>
                              <FiberManualRecordIcon sx={{ fontSize: "15px" }} />
                            </ListItemIcon>
                            <Typography style={{ marginBottom: "20px" }}>

                              <span style={{ fontWeight: "bold" }}> Section 4(7): </span> Mandatory authentication of an Aadhaar number holder for the provision of any service shall take place if such authentication is required by a law made by Parliament.

                            </Typography>
                          </Stack>
                        </ul>
                      </Box>
                    </Grid>

                  </Grid>

                </Typography>

              </ul>

            </Typography>

          </Grid>
          {/* <Grid item xs={12}>
            <Typography variant="body1" textAlign={"justify"}>
              Sub-AUA onboarding process talks about the pre-requisites/initial
              process steps to be fulfilled by the Government
              departments/agencies which are willing to avail the DITEC provided
              services. The agencies can enter an agreement with both DITEC and
              UIDAI to avail the DITEC provided services as per the UIDAI/DITEC
              specifications and guidelines.
            </Typography>
          </Grid> */}
          {/* <Grid item md={12}>
            <Card sx={{ p: 3, minHeight: 250, backgroundColor: "#EEF9FD" }}>
              <Stack direction={"column"}>
                <Stack
                  mb={1}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={3}
                >
                  <Typography variant="h4">UIDAI Guidelines </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  fontFamily={"inherit"}
                  textAlign={"justify"}
                  sx={{ p: 1 }}
                >
                  Central and State Government Ministries/Departments must
                  adhere to the Aadhaar Authentication for Good Governance
                  (Social Welfare, Innovation, Knowledge) Rules, 2020, when
                  submitting proposals to the Central Government. These
                  guidelines ensure that Aadhaar authentication is utilized
                  effectively for social welfare, innovation, and
                  knowledge-based initiatives. Departments should strictly
                  follow the specified rules to the submission process,
                  promoting efficient and secure utilization of Aadhaar
                  authentication in governance activities. (For Reference:
                  Link)&nbsp;
                  <a
                    href="https://www.meity.gov.in/writereaddata/files/application_form-guidelines_for_submission_of_proposals_for_use_of_aadhaar_authentication.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    13(6)/2018-EG-II(Vol-II)
                  </a>
                </Typography>

                <Typography
                  variant="body1"
                  fontFamily={"inherit"}
                  textAlign={"justify"}
                  sx={{ p: 1 }}
                >
                  State Governments, in accordance with the Aadhaar Act 2016 (as
                  amended by the Aadhaar and Other Laws (Amendment) Act, 2019),
                  must adhere to guidelines when utilizing Aadhaar under section
                  7. Specifically, these guidelines apply to schemes funded from
                  the Consolidated Fund of the State. The use of Aadhaar for
                  such schemes must align with the legal framework established
                  by the amended acts, ensuring compliance and safeguarding the
                  privacy and rights of individuals. This ensures a systematic
                  and lawful integration of Aadhaar in state-funded initiatives,
                  promoting effective and responsible use for the benefit of the
                  public.
                  {""}
                  (For Reference: Link)&nbsp;
                  <a href="https://uidai.gov.in/images/UIDAI_Circular_Guidelines_on_use_of_Aadhaar_section_7_of_the_Aadhaar_Act_2016_by_the_State_Governments_25Nov_19.pdf">
                    NO. 1 -1l2019-UlDAl (DBT)
                  </a>
                </Typography>
              </Stack>
            </Card>
          </Grid> */}
          <Grid item md={12}>
            <Card sx={{ p: 3, minHeight: 250 }}>
              <Stack direction={"row"} spacing={2}>
                <img
                  src="/assets/images/determine.png"
                  alt="Image description"
                  style={{ height: "70px", width: "70px" }}
                />
                <Stack
                  mb={1}
                  // direction={"column"}
                  // alignItems={"center"}
                  spacing={1}
                >


                  <Typography variant="h6" sx={{ color: "#0183ff", }}>Determine the Need</Typography>
                  <Typography
                    variant="body1"
                    fontFamily={"inherit"}
                    textAlign={"justify"}
                    sx={{ fontFamily: "Inter, sans-serif", color: "#595858" }}
                  >
                    If the purpose of the Aadhar Authentication falls under
                    Section 7 of the Aadhar Act 2016, notification from the
                    Department/Organization should be published as per the
                    attached UIDAI circular section 7.
                  </Typography>
                  <Typography
                    variant="body1"
                    fontFamily={"inherit"}
                    textAlign={"justify"}
                    sx={{ fontFamily: "Inter, sans-serif", color: "#595858" }}
                  >
                    If the purpose of the Aadhar Authentication falls under
                    Section 4(4)(b)(ii), Department/organisation should take prior
                    approval from Ministry of Electronics and Information
                    Technology (MEIT) to use Authentication services along with
                    published Gazette notification as per the attached UIDAI
                    circular 4(4)(b)(ii).
                  </Typography>
                </Stack>

              </Stack>
            </Card>
          </Grid>

          <Grid item md={12}>
            <Card sx={{ p: 2, minHeight: 250 }}>

              <Stack
                mb={1}
                direction={"row"}
                // alignItems={"center"}
                spacing={3}
                sx={{ p: 2 }}
              >

                <img
                  src="/assets/images/subauaint.png"
                  alt="Image description"
                  style={{ height: "55px", width: "60px" }}
                />
                <Stack direction={"column"}>

                  <Typography variant="h6" sx={{ color: "#0183ff", }}>
                    Sub-AUA/KUA Instructions
                  </Typography>

                  <Typography
                    variant="body1"
                    fontFamily={"inherit"}
                    textAlign={"justify"}
                    sx={{ fontFamily: "Inter, sans-serif", color: "#595858" }}
                  >
                    To become a Sub-AUA/KUA, please follow the below
                    instructions and fill the attached forms:
                    <ol>
                      <li style={{ marginBottom: "20px" }}>
                        Kindly fill the attached request form to appoint
                        Sub-AUA/KUA with duly signed and stamped by authorized
                        signatory.
                      </li>
                      <li style={{ marginBottom: "20px" }}>
                        Kindly fill the attached Sub-AUA/KUA application form.
                        Every page of Sub-AUA/KUA application has to be duly
                        signed and stamped by authorized signatory. Complete
                        details of MPOC & TPOC (including: Name, Designation,
                        Mobile No, Official/Govt. Email ID) has to be provided in
                        the Sub-AUA/KUA application form.
                      </li>
                      <li style={{ marginBottom: "20px" }}>
                        Kindly fill the attached Joint undertaking letter between
                        DITEC & Sub-AUA/KUA. Post fill-up all the
                        above-mentioned documents need to Send to DIRECTORATE OF
                        INFORMATION TECHNOLOGY, ELECTRONICS AND COMMUNICATIONS
                        (DITEC) via Email at{" "}
                        <a href="mailto:a-rezzaque@assam.gov.in">
                          a-rezzaque@assam.gov.in
                        </a>{" "}
                        or submit the documents at{" "}
                        <a href="https://aua.assam.gov.in/ditec/subaua">
                          https://aua.assam.gov.in/ditec/subaua
                        </a>
                        . Physical copies of forms should be sent to below
                        mentioned address along with Published Gazette
                        Notification if an entity is notified under:
                        <ul>
                          <li>Section 4(4)(b)(i)</li>
                          <li>Section 4(4)(b)(ii)</li>
                          <li>Section 4(7)</li>
                          <li>Section 7</li>
                        </ul>
                      </li>

                      <p style={{ fontFamily: "Inter, sans-serif", color: "#595858" }}>
                        <strong>Address : </strong>
                        DIRECTORATE OF INFORMATION TECHNOLOGY, ELECTRONICS AND
                        COMMUNICATIONS (DITEC), Assam Secretariat, Behind CM
                        Block, Dispur, Assam-781006, Contact no. 9957926630
                      </p>

                      <li>
                        DITEC will Scrutiny the request form, application form and
                        joint undertaking letter to appoint Sub-AUA/KUA and
                        shall send to UIDAI Authority for Sub-AUA/KUA
                        Approval. Application must be routed from TPOC/MPOC of
                        AUA/KUA to UIDAI.
                      </li>
                    </ol>
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>

          <Grid item md={12}>
            <Card sx={{ p: 2, minHeight: 150 }}>
              <Stack direction={"row"} spacing={2}>
                <img
                  src="/assets/images/tech.png"
                  alt="Image description"
                  style={{
                    height: "55px", width: "60px"

                  }}
                />
                <Stack
                  mb={1}
                  direction={"column"}
                  // alignItems={"center"}
                  spacing={1}
                >


                  <Typography variant="h6" sx={{ color: "#0183ff", }}>Technical Integration</Typography>

                  <Typography
                    variant="body1"
                    fontFamily={"inherit"}
                    textAlign={"justify"}
                    sx={{ fontFamily: "Inter, sans-serif", color: "#595858" }}
                  >
                    The AUA(DITEC) will provide you with APIs (Application
                    Programming Interfaces) or SDKs (Software Development Kits) to
                    integrate the authentication functionality into your website.
                    Follow the integration guidelines provided by the AUA to
                    ensure secure and seamless integration
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>

          <Grid item md={12}>
            <Card sx={{ p: 2, minHeight: 150 }}>
              <Stack direction={"row"} spacing={2}>


                <img
                  src="/assets/images/doc.png"
                  alt="Image description"
                  style={{ height: "55px", width: "60px" }}
                />
                <Stack
                  mb={1}
                  direction={"column"}
                  // alignItems={"center"}
                  spacing={1}
                >

                  <Typography variant="h6" sx={{ color: "#0183ff", }}>
                    Documentation and Agreement
                  </Typography>

                  <Typography
                    variant="body1"
                    fontFamily={"inherit"}
                    textAlign={"justify"}
                    sx={{ fontFamily: "Inter, sans-serif", color: "#595858" }}
                  >
                    Prepare and submit all the required documents, including the
                    completed application forms, legal agreements, and any
                    additional information requested by the AUA. Ensure that you
                    have a clear understanding of the terms and conditions
                    associated with becoming a sub-AUA.
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>

          <Grid item md={12}>
            <Card sx={{ p: 2, minHeight: 180 }}>
              <Stack direction={"row"} spacing={2} sx={{ p: 1 }}>
                <img
                  src="/assets/images/payments.png"
                  alt="Image description"
                  style={{ height: "55px", width: "60px" }}
                />
                <Stack
                  mb={1}
                  direction={"column"}
                  alignItems={"column"}
                  spacing={1}
                >
                  <Typography variant="h6" sx={{ color: "#0183ff", }}>Payments</Typography>

                  <Typography
                    variant="body1"
                    fontFamily={"inherit"}
                    textAlign={"justify"}
                    sx={{ fontFamily: "Inter, sans-serif", color: "#595858" }}
                  >
                    Sub-AUA/KUA Agency Fee, payment terms are as described in
                    attached agreement and registered sub-AUA agency should pay
                    the payments on time as per the agreed terms and conditions.
                    If the sub-AUA/KUA agency not going to pay the payments to
                    UIDAI/AUA for the availed services as per the agreed timelines
                    the services would be disabled.
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>

          <Grid item md={12}>
            <Card sx={{ p: 2, minHeight: 180 }}>
              <Stack direction={"row"} spacing={2}>


                <img
                  src="/assets/images/securty.png"
                  alt="Image description"
                  style={{ height: "55px", width: "60px" }}
                />

                <Stack
                  mb={1}
                  direction={"column"}
                  // alignItems={"center"}
                  spacing={2}
                >

                  <Typography variant="h6" sx={{ color: "#0183ff", }}>
                    Physical Verification & Security Audit
                  </Typography>

                  <Typography
                    variant="body1"
                    fontFamily={"inherit"}
                    textAlign={"justify"}
                    sx={{ fontFamily: "Inter, sans-serif", color: "#595858" }}
                  >
                    DITEC will visit the Sub-AUA/KUA location to verify the
                    network infrastructure. Sub-AUA/KUA should ensure the
                    complete solution (Hardware/ Software/ Network Connectivity)
                    is secured and should get the security audited by CERT-In
                    empanelled auditor STQC Certified auditors/UIDAI approved
                    auditors before deployment. The cost of such audit shall be
                    borne by the Sub-AUA/KUA.
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>

          <Grid item md={12}>
            <Card sx={{ p: 2, minHeight: 150 }}>
              <Stack direction={"row"} spacing={2}>
                <img
                  src="/assets/images/golive.png"
                  alt="Image description"
                  style={{ height: "60px", width: "60px" }}
                />
                <Stack
                  // mb={1}
                  direction={"column"}
                  // alignItems={"center"}
                  spacing={1}
                >

                  <Typography variant="h6" sx={{ color: "#0183ff", }}>Go Live</Typography>

                  <Typography
                    variant="body1"
                    fontFamily={"inherit"}
                    textAlign={"justify"}
                    sx={{ fontFamily: "Inter, sans-serif", color: "#595858" }}
                  >
                    After completing the onboarding process, receive the necessary
                    credentials and access permissions from the AUA to enable
                    Aadhaar authentication on your website. Update your website's
                    user interface and workflows to incorporate the Aadhaar
                    authentication functionality.
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>
          {/* <Grid item md={6}>
            <Card sx={{ p: 3, minHeight: 250 }}>
              <Stack direction={"column"}>
                <Stack
                  mb={1}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={3}
                >
                  <Avatar sx={{ height: 60, width: 60, bgcolor: "ButtonFace" }}>
                    <img
                      src="/assets/images/Determine the Need_.png"
                      alt="Image description"
                      style={{ height: 30, width: 30 }}
                    />
                  </Avatar>
                  <Typography variant="h6">Determine the Need</Typography>
                </Stack>
                <Typography
                  variant="body1"
                  fontFamily={"inherit"}
                  textAlign={"justify"}
                >
                  Assess the requirement for Aadhaar authentication on your
                  website and identify the specific services or functionalities
                  that necessitate Aadhaar-based verification.
                </Typography>
              </Stack>
            </Card>
          </Grid> */}
          {/* <Grid item md={6}>
            <Card sx={{ p: 3, minHeight: 250 }}>
              <Stack direction={"column"}>
                <Stack
                  mb={1}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={3}
                >
                  <Avatar sx={{ height: 60, width: 60, bgcolor: "ButtonFace" }}>
                    <img
                      src="/assets/images/Identify an AUA_.png"
                      alt="Image description"
                      style={{ height: 30, width: 30 }}
                    />
                  </Avatar>
                  <Typography variant="h6">Identify an AUA</Typography>
                </Stack>
                <Typography
                  variant="body1"
                  fontFamily={"inherit"}
                  textAlign={"justify"}
                >
                  Find an AUA that aligns with your organization's requirements
                  and has the authorization to perform Aadhaar authentication.
                  You can explore authorized banks, government departments, or
                  private organizations that act as AUAs
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card sx={{ p: 3, minHeight: 250 }}>
              <Stack direction={"column"}>
                <Stack
                  mb={1}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={3}
                >
                  <Avatar sx={{ height: 60, width: 60, bgcolor: "ButtonFace" }}>
                    <img
                      src="/assets/images/Contact the AUA_.png"
                      alt="Image description"
                      style={{ height: 30, width: 30 }}
                    />
                  </Avatar>
                  <Typography variant="h6">Contact the AUA</Typography>
                </Stack>
                <Typography
                  variant="body1"
                  fontFamily={"inherit"}
                  textAlign={"justify"}
                >
                  Reach out to the selected AUA and express your interest in
                  becoming a sub-AUA for Aadhaar authentication. Obtain their
                  contact information and details of the onboarding process
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card sx={{ p: 3, minHeight: 250 }}>
              <Stack direction={"column"}>
                <Stack
                  mb={1}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={3}
                >
                  <Avatar sx={{ height: 60, width: 60, bgcolor: "ButtonFace" }}>
                    <img
                      src="/assets/images/Understand Requirements_.png"
                      alt="Image description"
                      style={{ height: 30, width: 30 }}
                    />
                  </Avatar>
                  <Typography variant="h6">Understand Requirements</Typography>
                </Stack>
                <Typography
                  variant="body1"
                  fontFamily={"inherit"}
                  textAlign={"justify"}
                >
                  Request the AUA to provide you with the necessary
                  documentation, guidelines, and technical specifications
                  required for sub-AUA onboarding. This may include legal
                  agreements, technical integration requirements, and compliance
                  guidelines.
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card sx={{ p: 3, minHeight: 250 }}>
              <Stack direction={"column"}>
                <Stack
                  mb={1}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={3}
                >
                  <Avatar sx={{ height: 60, width: 60, bgcolor: "ButtonFace" }}>
                    <img
                      src="/assets/images/Compliance and Legal Obligations_.png"
                      alt="Image description"
                      style={{ height: 30, width: 30 }}
                    />
                  </Avatar>
                  <Typography variant="h6">
                    Compliance and Legal Obligations
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  fontFamily={"inherit"}
                  textAlign={"justify"}
                >
                  Ensure that your website meets the compliance requirements set
                  forth by the AUA and UIDAI. This may involve adherence to
                  privacy policies, data protection measures, and auditability
                  of Aadhaar authentication transactions.
                </Typography>
              </Stack>
            </Card>
          </Grid>

          <Grid item md={6}>
            <Card sx={{ p: 3, minHeight: 250 }}>
              <Stack direction={"column"}>
                <Stack
                  mb={1}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={3}
                >
                  <Avatar sx={{ height: 60, width: 60, bgcolor: "ButtonFace" }}>
                    <img
                      src="/assets/images/Technical Integration_.png"
                      alt="Image description"
                      style={{ height: 30, width: 30 }}
                    />
                  </Avatar>
                  <Typography variant="h6">Technical Integration</Typography>
                </Stack>
                <Typography
                  variant="body1"
                  fontFamily={"inherit"}
                  textAlign={"justify"}
                >
                  Familiarize yourself with the technical integration aspects
                  for Aadhaar authentication. The AUA(DITEC) will provide you
                  with APIs (Application Programming Interfaces) or SDKs
                  (Software Development Kits) to integrate the authentication
                  functionality into your website. Follow the integration
                  guidelines provided by the AUA to ensure secure and seamless
                  integration
                </Typography>
              </Stack>
            </Card>
          </Grid>

          <Grid item md={6}>
            <Card sx={{ p: 3, minHeight: 250 }}>
              <Stack direction={"column"}>
                <Stack
                  mb={1}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={3}
                >
                  <Avatar sx={{ height: 60, width: 60, bgcolor: "ButtonFace" }}>
                    <img
                      src="/assets/images/Testing and Certification_.png"
                      alt="Image description"
                      style={{ height: 30, width: 30 }}
                    />
                  </Avatar>
                  <Typography variant="h6">
                    Testing and Certification
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  fontFamily={"inherit"}
                  textAlign={"justify"}
                >
                  Test the integration of Aadhaar authentication within your
                  website thoroughly. The AUA may require you to perform testing
                  against their test environment and provide sample transactions
                  for verification. Once the testing is complete, obtain the
                  necessary certifications or approvals from the AUA to go live.
                </Typography>
              </Stack>
            </Card>
          </Grid>

          <Grid item md={6}>
            <Card sx={{ p: 3, minHeight: 250 }}>
              <Stack direction={"column"}>
                <Stack
                  mb={1}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={3}
                >
                  <Avatar sx={{ height: 60, width: 60, bgcolor: "ButtonFace" }}>
                    <img
                      src="/assets/images/Documentation and Agreement_.png"
                      alt="Image description"
                      style={{ height: 30, width: 30 }}
                    />
                  </Avatar>
                  <Typography variant="h6">
                    Documentation and Agreement
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  fontFamily={"inherit"}
                  textAlign={"justify"}
                >
                  Prepare and submit all the required documents, including the
                  completed application forms, legal agreements, and any
                  additional information requested by the AUA. Ensure that you
                  have a clear understanding of the terms and conditions
                  associated with becoming a sub-AUA
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card sx={{ p: 3, minHeight: 250 }}>
              <Stack direction={"column"}>
                <Stack
                  mb={1}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={3}
                >
                  <Avatar sx={{ height: 60, width: 60, bgcolor: "ButtonFace" }}>
                    <img
                      src="/assets/images/Security Measures_.png"
                      alt="Image description"
                      style={{ height: 30, width: 30 }}
                    />
                  </Avatar>
                  <Typography variant="h6">Security Measures</Typography>
                </Stack>
                <Typography
                  variant="body1"
                  fontFamily={"inherit"}
                  textAlign={"justify"}
                >
                  Implement the necessary security measures to protect
                  Aadhaar-related data on your website. Follow UIDAI's
                  guidelines for data encryption, storage, and access controls
                  to maintain the confidentiality and integrity of user
                  information.
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card sx={{ p: 3, minHeight: 250 }}>
              <Stack direction={"column"}>
                <Stack
                  mb={1}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={3}
                >
                  <Avatar sx={{ height: 60, width: 60, bgcolor: "ButtonFace" }}>
                    <img
                      src="/assets/images/Go Live_.png"
                      alt="Image description"
                      style={{ height: 30, width: 30 }}
                    />
                  </Avatar>
                  <Typography variant="h6">Go Live</Typography>
                </Stack>
                <Typography
                  variant="body1"
                  fontFamily={"inherit"}
                  textAlign={"justify"}
                >
                  After completing the onboarding process, receive the necessary
                  credentials and access permissions from the AUA to enable
                  Aadhaar authentication on your website. Update your website's
                  user interface and workflows to incorporate the Aadhaar
                  authentication functionality.
                </Typography>
              </Stack>
            </Card>
          </Grid> */}
        </Grid >
      </Container >
    </>
  );
};

export default SubAUA;
