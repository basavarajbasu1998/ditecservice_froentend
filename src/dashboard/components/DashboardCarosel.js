import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DashboardCarosel = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        owArrows={true}
        showThumbs={false}
      >
        <div>
          <img src="/assets/banner/banner1.png" />
        </div>
        <div>
          <img src="/assets/banner/banner2.png" />
        </div>
        <div>
          <img src="/assets/banner/banner3.png" />
        </div>
      </Carousel>
    </>
  );
};

export default DashboardCarosel;
