import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { cyan, indigo } from "@mui/material/colors";
import { Helmet } from "react-helmet-async";

const ContactCard = ({ icon, header, details1, details2, details3, mb }) => {
  return (
    <>
      <Helmet>
        <title> DITEC | Contacts </title>
      </Helmet>
      <Card
        sx={{
          p: 2,
          py: 4,
          px: 3,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          minHeight: 400,
        }}
      >
        <Stack
          direction={"column"}
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
        >
          <Stack>
            <Box>
              <Avatar sx={{ bgcolor: indigo[500], height: 100, width: 100 }}>
                {icon}
              </Avatar>
            </Box>
          </Stack>
          <Typography variant="h5">{header}</Typography>
          <Stack
            // spacing={1}
            justifyContent={"flex-start"}
            // alignItems={"center"}
            // display={"flex"}
          >
            <Typography
              mb={header === "MAIL ADDRESS" ? 6 : 0}
              color={"MidnightBlue"}
              fontFamily={"Book Antiqua"}
              variant="body1"
            >
              {details1}
            </Typography>
            <Typography
              mb={header === "CUSTOMER SERVICE" ? 9 : 0}
              color={"MidnightBlue"}
              fontFamily={"Book Antiqua"}
              variant="body1"
            >
              {details2}
            </Typography>
            <Typography
              color={"MidnightBlue"}
              fontFamily={"Book Antiqua"}
              variant="body1"
            >
              {details3}
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </>
  );
};

export default ContactCard;
