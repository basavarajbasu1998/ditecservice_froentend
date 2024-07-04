import { Box, Card, Hidden, Stack, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";

const CardComponent = ({
  bgcolor,
  total,
  header,
  icon,
  avatarBackround,
  onClick,
  ekycFp,
  ekycIr,
  ekycOTP,
  authdemo,
  authFp,
  authIr,
}) => {
  console.log("iris", ekycIr);
  return (
    <>
      <Card
        style={onClick ? { cursor: "pointer" } : { cursor: "default" }}
        sx={{
          py: 3,

          backgroundColor: bgcolor,

          "&:hover": onClick
            ? {
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)", // Increase shadow on hover
              }
            : null,
          minWidth: 100,
          maxWidth: 400,
        }}
        onClick={onClick ? () => onClick() : null}
      >
        {" "}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          mx={4}
          alignItems={icon ? "center" : null}
          //   spacing={}
        >
          <Stack
            direction={"column"}
            justifyContent={"center"}
            // alignItems={"center"}
          >
            {/* <Avatar sx={{ bgcolor: bgcolor }}>
            
          </Avatar> */}
            <Typography color={"#1B5886"} mt={2} variant="h6">
              {header}
            </Typography>

            <Typography mt={2} variant="h4">
              <CountUp end={total} separator="," duration={2} />
            </Typography>
          </Stack>
          <Hidden xsDown>
            <Box>{icon}</Box>
          </Hidden>

          {(authFp || ekycFp) && (
            <Stack
              direction={"row"}
              alignItems={"self-end"}
              display={"flex"}
              justifyContent={"flex-end"}
              spacing={2}
            >
              {authdemo != undefined && (
                <Box>
                  <Typography color={"#1B5886"} variant="subtitle2">
                    Demographic
                  </Typography>
                  <Typography variant="subtitle1">{authdemo}</Typography>
                </Box>
              )}
              {authFp != undefined && (
                <Box>
                  <Typography color={"#1B5886"} variant="subtitle2">
                    FP
                  </Typography>
                  <Typography variant="subtitle1">{authFp}</Typography>
                </Box>
              )}
              {authIr != undefined && (
                <Box>
                  <Typography color={"#1B5886"} variant="subtitle2">
                    IRIS
                  </Typography>
                  <Typography variant="subtitle1">{authIr}</Typography>
                </Box>
              )}
              {ekycOTP != undefined && (
                <Box>
                  <Typography color={"#1B5886"} variant="subtitle2">
                    OTP
                  </Typography>
                  <Typography variant="subtitle1">{ekycOTP}</Typography>
                </Box>
              )}
              {ekycFp != undefined && (
                <Box>
                  <Typography color={"#1B5886"} variant="subtitle2">
                    FP
                  </Typography>
                  <Typography variant="subtitle1">{ekycFp}</Typography>
                </Box>
              )}
              {ekycIr != undefined && (
                <Box>
                  <Typography color={"#1B5886"} variant="subtitle2">
                    IRIS
                  </Typography>
                  <Typography variant="subtitle1">{ekycIr}</Typography>
                </Box>
              )}
            </Stack>
          )}
        </Stack>
      </Card>
    </>
  );
};

export default CardComponent;
