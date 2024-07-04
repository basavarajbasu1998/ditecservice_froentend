import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { content } from "../utils/CaroselCardContent";
import { useNavigate } from "react-router-dom";

const DashboardMultiCarosel = ({
  cardMedia,
  cardHeader,
  cardBody,
  navigation,
}) => {
  const navigate = useNavigate();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // Number of items to slide when scrolling
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2, // Number of items to slide when scrolling
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // Number of items to slide when scrolling
    },
  };

  return (
    <>
      <Box>
        <Carousel
          centerMode={false}
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
          autoPlaySpeed={500}
          keyBoardControl={true}
          // customTransition="1"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {/* {content.map((item) => ( */}
          <div>
            <Box sx={{ py: 5 }}>
              <Card sx={{ padding: 5, mr: 2 }}>
                <Grid container spacing={2}>
                  {/* <Grid item xs={12}> */}
                  <CardMedia
                    component="img"
                    height={160}
                    image={cardMedia}
                    alt="card"
                  />
                  {/* </Grid> */}
                  <CardContent>
                    {/* <Grid item xs={12}> */}
                    <Typography variant="h5">{cardHeader}</Typography>
                    {/* </Grid> */}
                    {/* <Grid item xs={12}> */}
                    <Typography variant="body1">{cardBody}</Typography>
                    {/* </Grid> */}
                  </CardContent>
                  {/* <Grid item xs={12}> */}
                  <CardActions>
                    <Button
                      fullWidth
                      sx={{ backgroundColor: "#14BDEE" }}
                      variant="contained"
                      onClick={() => navigate(navigation)}
                    >
                      Learn More →
                    </Button>
                  </CardActions>
                  {/* </Grid> */}
                </Grid>
              </Card>
            </Box>
          </div>
          {/* // ))} */}
        </Carousel>
      </Box>
    </>
  );
};

export default DashboardMultiCarosel;
