import {
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "../../utils/BackButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NavigationContol from "../utils/NavigationContol";

const PaymentMechanism = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const routePage = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Container maxWidth={"xl"}>
        {/* <BackButton /> */}
        <Typography my={3} variant="h5">
          Payment Mechanism
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Card sx={{ p: 3 }}>
              <Stack direction={"column"} spacing={3}>
                {/* <Typography variant="h5">Payment Mechanism</Typography> */}
                <Typography variant="body1">
                  The payment for the services will be determined by the
                  Department of Information Technology and Electronics
                  Corporation (DITEC) based on the specific services you have
                  availed within the Aadhaar authentication framework. We will
                  engage in discussions with DITEC to finalize the most suitable
                  payment options
                </Typography>

                <Typography variant="h5">
                  Pricing of Aadhaar authentication transactions
                </Typography>
                <Typography color={"MidnightBlue"} variant="subtitle1">
                  UIDAI vide notification No.K-11022/632/2019/Auth-UIDAI (No. 1
                  of 2019) the pricing shall be applied as follows:
                </Typography>

                <Typography variant="body1">
                  a. Bach e-KYC transaction resulting in sharing of Aadhaar
                  number holder’s e-KYC information shall be charged @ Rs 20
                  (including taxes).
                </Typography>
                <Typography variant="body1">
                  b. Each e-KYC transaction with failure error code (i.e. with
                  no e-K'YC information) shall be charged @ Rs 1 (including
                  taxes).
                </Typography>
                <Typography variant="body1">
                  c. Yes/No authentication transaction shall be charged @ Rs 1
                  (including taxes) for all transactions irrespective of the Yes
                  or No response.
                </Typography>
                <Typography variant="body1">
                  d. Authentication transactions which failed due to AUA
                  specific error will not be charged to the requesting entities.
                  The details of error codes not to be charged are enclosed in
                  Annexure I.
                </Typography>
                <Typography variant="body1">
                  e. Biometric transactions failures (error Code 300) up to 20%
                  shall be waived off for charging. However, this limit is
                  subject to revision based on periodic review.
                </Typography>
                <Typography variant="body1">
                  f. Transactions where the response is not provided by AUA
                  within 10 seconds will not be charged.
                </Typography>
                <Typography variant="body1">
                  g. All disputes/ grievances related to billing of
                  authentication charges to be submitted before Deputy Director
                  (Authentication Division) along with relevant documents for
                  resolution/ redressal.
                </Typography>
              </Stack>
            </Card>
            {/* <Stack mt={2} direction={"row"} justifyContent={"flex-end"}>
              <Button
                endIcon={<ArrowForwardIcon />}
                variant="contained"
                onClick={() => navigate("/ditec/subaua/transactionmodel")}
              >
                Next
              </Button>
            </Stack> */}
            <NavigationContol
              path={"/ditec/subaua/transactionmodel"}
              disabled={false}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PaymentMechanism;
