import React from "react";
import "../CSS/Events.css";
import rectangle39 from "../assests/Rectangle 39.png";
import rectangle40 from "../assests/Rectangle 40.png";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import box from "./box-code.png";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);
function Events() {
  return (
    <div>
      <h2> Upcoming Contests </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
      <div className="od">
       <a href="#" target={"_blank"}> <img src={rectangle39} alt="box" /></a>
        <p>Sudoko show</p>
      </div>  </SwiperSlide>
      <SwiperSlide>
      <div className="od">
        <img src={rectangle40} alt="box" />
        <p>Skyscraper show</p>
      </div> </SwiperSlide>
      <SwiperSlide>
      <div className="od">
        <img src={rectangle39} alt="box" />
        <p>Sudoko show</p>
      </div> </SwiperSlide>
      <SwiperSlide>
      <div className="od">
        <img src={rectangle40} alt="box" />
        <p>Skyscraper show</p>
      </div> </SwiperSlide>
      <SwiperSlide>
      <div className="od">
        <img src={rectangle39} alt="box" />
        <p>Sudoko show</p>
      </div> </SwiperSlide>
      <SwiperSlide>
      <div className="od">
        <img src={rectangle40} alt="box" />
        <p>Skyscraper show</p>
      </div> </SwiperSlide>
      </Swiper>
    
    </div>
  );
}

export default Events;
