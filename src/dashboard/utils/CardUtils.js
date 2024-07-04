import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CardUtils = ({
  cardMedia,
  cardHeader,
  cardBody,
  navigation,
  mb,
  showData,
}) => {
  const navigate = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      centerMode: true,
      centerSlidePercentage: 33.33, // Adjust the percentage as needed
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
      centerMode: true,
      centerSlidePercentage: 50,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      centerMode: true,
      centerSlidePercentage: 100,
      partialVisibilityGutter: 10,
    },
  };
  return (
    <>
      <Carousel
        centerMode={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={500}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {showData.map((item, index) => (
          <Box key={index} sx={{ py: 4 }}>
            <Card sx={{ padding: 5, mx: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.cardMedia}
                    alt="green iguana"
                  />
                </Grid>
                <CardContent>
                  <Grid item xs={12}>
                    <Typography variant="h5">{item.cardHeader}</Typography>
                  </Grid>
                  <Grid item xs={12} mb={item.mb ? item.mb : 0}>
                    <Typography
                      sx={{
                        textAlign: "justify",
                      }}
                      variant="body1"
                    >
                      {item.cardBody}
                    </Typography>
                  </Grid>
                </CardContent>
                <Grid item xs={12}>
                  <CardActions>
                    <Button
                      fullWidth
                      sx={{ backgroundColor: "#14BDEE" }}
                      variant="contained"
                      onClick={() => navigate(item.navigation)}
                    >
                      Read More →
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          </Box>
        ))}
      </Carousel>
    </>
  );
};

export default CardUtils;
