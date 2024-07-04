import React, { useEffect, useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container } from "@mui/material";
import { subauaTrackers } from "../../redux/subaua/subauaAction";
import { loadState } from "../../helper/SessionStorage";

const steps = [
  "Enquiry Form",
  "Registration",
  "Document Verification",
  "Onboarding",
  "Test Run Staging",
  "Go Live",
];

const ApplicationTracker = ({ showStsBar }) => {
  const dispatch = useDispatch();

  const retrievedValue = loadState("subauaid", "Default Value");
  console.log(retrievedValue);

  const stateData = useSelector((state) => state.subaua);

  const { tracker } = stateData;

  useEffect(() => {
    const data = {
      subAuaId: retrievedValue,
    };
    dispatch(subauaTrackers(data));
  }, []);

  return (
    <>
      {showStsBar && (
        <>
          <Container maxWidth="xl">
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={tracker?.applicationStatus} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Container>
        </>
      )}
    </>
  );
};

export default ApplicationTracker;
