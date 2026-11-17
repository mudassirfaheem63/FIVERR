
import React from "react";
import "./Slide.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Slide = ({ children, slidesToShow = 1, arrowsScroll = 1 }) => {
  return (
    <div className="slide">
      <div className="container">
        <Swiper
          modules={[Navigation]}
          slidesPerView={slidesToShow}
          slidesPerGroup={arrowsScroll}
          navigation
          spaceBetween={20}
        >
          {React.Children.map(children, (child, index) => (
            <SwiperSlide key={index}>
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
