import {
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Outlet, useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getallsubaua } from "../../redux/reports/reportAction";

const subauaList = [
  {
    name: "Skill Development",
    image: "/assets/logos/skill-development.png",
    url: "/ditec/admin/subauadetails",
  },

  {
    name: "Civil Development",
    image: "/assets/logos/skill-development.png",
    url: "/ditec/admin/subauadetails",
  },
  // {
  //   name: "Sub-AUA 1",
  //   image: "/assets/logos/skill-development.png",
  //   url: "/ditec/admin/subauadetails",
  // },
  // {
  //   name: "Sub-AUA 2",
  //   image: "/assets/logos/skill-development.png",
  //   url: "/ditec/admin/subauadetails",
  // },
  // {
  //   name: "Sub-AUA 3",
  //   image: "/assets/logos/skill-development.png",
  //   url: "/ditec/admin/subauadetails",
  // },
  // {
  //   name: "Sub-AUA 4",
  //   image: "/assets/logos/skill-development.png",
  //   url: "/ditec/admin/subauadetails",
  // },
  // {
  //   name: "Sub-AUA 5",
  //   image: "/assets/logos/skill-development.png",
  //   url: "/ditec/admin/subauadetails",
  // },
];

const SubauaIndex = () => {
  const stateData = useSelector((state) => state.report);

  const dispatch = useDispatch();

  const { allsubaua } = stateData;

  useEffect(() => {
    dispatch(getallsubaua());
  }, []);

  console.log(allsubaua);

  const navigate = useNavigate();

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipped = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <IconButton onClick={() => navigate(-1)} aria-label="back">
          <ArrowBackIcon />
        </IconButton>
      </Stack>
      <Grid container spacing={3}>
        <Grid item sx={12} md={12}>
          <Typography fontFamily={"Verdana"} variant="h3">
            Sub AUA/KUA
          </Typography>
        </Grid>
      </Grid>

      {/* justifyContent={"center"}
            alignContent={"center"}
            display={"flex"} */}



      <Grid mt={2} container spacing={3}>
        {Array.isArray(allsubaua) &&
          allsubaua.length > 0 &&
          allsubaua.map((item, index) => (
            <Grid item direction={"column"} xs={6} sm={6} md={3}>
              {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertcal"> */}
              <Card
                sx={{
                  p: 2,
                  justifyContent: "center",
                  alignContent: "center",
                  display: "flex",
                  // bgcolor: "#407BFF",
                  // color: "white",
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", // Add shadow effect
                  "&:hover": {
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)", // Increase shadow on hover
                  },
                }}
                style={{ cursor: "pointer" }}
                // onClick={() => navigate(item.url)}
                // onClick={() =>

                //   navigate(`/ditec/admin/subauadetails/${item.id}`)
                // }

                onClick={() => {
                  console.log(
                    "Navigating to:",
                    `/ditec/admin/subauadetails/${item.agencyName}`
                  );
                  navigate(`/ditec/admin/subauadetails/${item.agencyName}`);
                }}

              //   onMouseEnter={handleFlipped}
              >
                <Stack
                  direction={"column"}
                  justifyContent={"center"}
                  alignContent={"center"}
                  display={"flex"}
                >
                  <Box
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                    key={index}
                  >
                    <img
                      src={"/assets/logos/today-transaction.png"}
                      height={120}
                      width={150}
                    />
                  </Box>
                  <CardContent>
                    {/* <Typography
                      fontFamily={"Verdana"}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {item.agencyName}
                    </Typography> */}


                    <Typography
                      fontFamily={"Verdana"}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {item.orgName}
                    </Typography>


                    <Typography
                      fontFamily={"Verdana"}
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{ color: "blue" }}
                    >
                      {item.planType}
                    </Typography>
                  </CardContent>
                </Stack>
              </Card>
              {/* <Card onMouseLeave={handleFlipped}>
                <Typography>test</Typography>
              </Card> */}
              {/* </ReactCardFlip> */}
            </Grid>
          ))}
      </Grid>

      <Outlet />
    </Container>
  );
};

export default SubauaIndex;
