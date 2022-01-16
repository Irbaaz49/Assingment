import React from "react";
import Content from "../assests/cont.png";
import "../CSS/Section.css"
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import math from "../assests/math.png"


// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);
function Section() {
  return (
    <div>
      <h2>Contests this Week</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          "640": {
            slidesPerView: 3,
            spaceBetween: 10
          },
          "768": {
            slidesPerView: 4,
            spaceBetween: 20
          },
          "1024": {
            slidesPerView: 5,
            spaceBetween: 25
          }
        }}
        className="mySwiper"
      ><SwiperSlide>
<div className="wrap">
      <div className="image">
        <img src={Content} alt="m"  />
      </div>
      <div className="bottom">
      
      <div> <p>The Sudoku Show</p>
        <p>12th dec, 6:00 - 7:00pm</p>
        </div> 
        <div>
        <a href="#landing" target={"_blank"}>Register</a>
        </div>
      </div>
      </div>
      </SwiperSlide >
      <SwiperSlide >
<div className="wrap">
      <div className="image">
        <img src={math} alt="m"  />
      </div>
      <div className="bottom">
      
      <div> <p>The Speed Test</p>
        <p>12th dec, 6:00 - 7:00pm</p>
        </div> 
        <div>
        <a href="#">Register</a>
        </div>
      </div>
      </div>
      </SwiperSlide >
      
      <SwiperSlide >
<div className="wrap">
      <div className="image">
        <img src={Content} alt="m" alt="m" />
      </div>
      <div className="bottom">
      
      <div> <p>The Sudoku Show</p>
        <p>12th dec, 6:00 - 7:00pm</p>
        </div> 
        <div>
        <a href="#">Register</a>
        </div>
      </div>
      </div>
      </SwiperSlide >
      <SwiperSlide >
<div className="wrap">
      <div className="image">
        <img src={math} alt="m"  />
      </div>
      <div className="bottom">
      
      <div> <p>The Speed test</p>
        <p>12th dec, 6:00 - 7:00pm</p>
        </div> 
        <div>
        <a href="#">Register</a>
        </div>
      </div>
      </div>
      </SwiperSlide >
      <SwiperSlide >
<div className="wrap">
      <div className="image">
        <img src={Content} alt="m"  />
      </div>
      <div className="bottom">
      
      <div> <p>The Sudoku Show</p>
        <p>12th dec, 6:00 - 7:00pm</p>
        </div> 
        <div>
        <a href="#">Register</a>
        </div>
      </div>
      </div>
      </SwiperSlide >
      <SwiperSlide >
<div className="wrap">
      <div className="image">
        <img src={math} alt="m"  />
      </div>
      <div className="bottom">
      
      <div> <p>The Speed Test</p>
        <p>12th dec, 6:00 - 7:00pm</p>
        </div> 
        <div>
        <a href="#">Register</a>
        </div>
      </div>
      </div>
      </SwiperSlide >
      <SwiperSlide >
<div className="wrap">
      <div className="image">
        <img src={Content} alt="m"  />
      </div>
      <div className="bottom">
      
      <div> <p>The Sudoku Show</p>
        <p>12th dec, 6:00 - 7:00pm</p>
        </div> 
        <div>
        <a href="#">Register</a>
        </div>
      </div>
      </div>
      </SwiperSlide >
      <SwiperSlide >
<div className="wrap">
      <div className="image">
        <img src={Content} alt="m"  />
      </div>
      <div className="bottom">
      
      <div> <p>The Sudoku Show</p>
        <p>12th dec, 6:00 - 7:00pm</p>
        </div> 
        <div>
        <a href="#">Register</a>
        </div>
      </div>
      </div>
      </SwiperSlide >

      <SwiperSlide >
<div className="wrap">
      <div className="image">
        <img src={math} alt="m"  />
      </div>
      <div className="bottom">
      
      <div> <p>The Speed Test</p>
        <p>12th dec, 6:00 - 7:00pm</p>
        </div> 
        <div>
        <a href="#">Register</a>
        </div>
      </div>
      </div>
      </SwiperSlide >

      <SwiperSlide >
<div className="wrap">
      <div className="image">
        <img src={Content} alt="m"  />
      </div>
      <div className="bottom">
      
      <div> <p>The Sudoku Show</p>
        <p>12th dec, 6:00 - 7:00pm</p>
        </div> 
        <div>
        <a href="#">Register</a>
        </div>
      </div>
      </div>
      </SwiperSlide >

      <SwiperSlide >
<div className="wrap">
      <div className="image">
        <img src={math} alt="m"  />
      </div>
      <div className="bottom">
      
      <div> <p>The Speed Test</p>
        <p>12th dec, 6:00 - 7:00pm</p>
        </div> 
        <div>
        <a href="#">Register</a>
        </div>
      </div>
      </div>
      </SwiperSlide >
      </Swiper>
     
        
      
    </div>
  );
}

export default Section;
