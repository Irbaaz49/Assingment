import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import hello from "../assests/Group 24.png";
import g26 from "../assests/Group 26.png";
import g28 from "../assests/Group 28.png";
import g29 from "../assests/Group 29.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../CSS/styles.css"

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Middle() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          "640": {
            slidesPerView: 2,
            spaceBetween: 20
          },
          "768": {
            slidesPerView: 4,
            spaceBetween: 40
          },
          "1024": {
            slidesPerView: 5,
            spaceBetween: 50
          }
        }}
        className="mySwiper"
      >
        <SwiperSlide className="slm">
          <div className="hello">
            <div>
            <div className="grid-container">
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={g28} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
        </div>
              <p>Supernova</p>
              <p  id="child">A live online Contests + Workshops for kids.</p>
            </div>
        
          </div>
        </SwiperSlide>
        <SwiperSlide  className="slm">
          <div className="hello">
            <div>
            <div className="grid-container">
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={g28} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
        </div>
              <p>Supernova</p>
              <p  id="child">A live online Contests + Workshops for kids.</p>
            </div>
        
          </div>
        </SwiperSlide>
        <SwiperSlide  className="slm">
          <div className="hello">
            <div>
            <div className="grid-container">
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={g28} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
        </div>
              <p>Supernova</p>
              <p  id="child">A live online Contests + Workshops for kids.</p>
            </div>
        
          </div>
        </SwiperSlide>
        <SwiperSlide  className="slm">
          <div className="hello">
            <div>
            <div className="grid-container">
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={g28} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
        </div>
              <p>Supernova</p>
              <p  id="child">A live online Contests + Workshops for kids.</p>
            </div>
        
          </div>
        </SwiperSlide>
        <SwiperSlide  className="slm">
          <div className="hello">
            <div>
            <div className="grid-container">
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={g28} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
        </div>
              <p>Supernova</p>
              <p  id="child">A live online Contests + Workshops for kids.</p>
            </div>
        
          </div>
        </SwiperSlide>
        <SwiperSlide  className="slm">
          <div className="hello">
            <div>
            <div className="grid-container">
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={g28} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
        </div>
              <p>Supernova</p>
              <p  id="child">A live online Contests + Workshops for kids.</p>
            </div>
        
          </div>
        </SwiperSlide>
        <SwiperSlide  className="slm">
          <div className="hello">
            <div>
            <div className="grid-container">
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={g28} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
        </div>
              <p>Supernova</p>
              <p  id="child">A live online Contests + Workshops for kids.</p>
            </div>
        
          </div>
        </SwiperSlide>
        <SwiperSlide  className="slm">
          <div className="hello">
            <div>
            <div className="grid-container">
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={g28} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
        </div>
              <p>Supernova</p>
              <p  id="child">A live online Contests + Workshops for kids.</p>
            </div>
        
          </div>
        </SwiperSlide>
        <SwiperSlide  className="slm">
          <div className="hello">
            <div>
            <div className="grid-container">
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={g28} alt="hello" /></div>
          <div className="grid-item"><img src={g29} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
          <div className="grid-item"><img src={g26} alt="hello" /></div>
          <div className="grid-item"><img src={hello} alt="hello" /></div>
        </div>
              <p>Supernova</p>
              <p  id="child">A live online Contests + Workshops for kids.</p>
            </div>
        
          </div>
        </SwiperSlide>
        
       
        
      </Swiper>
    </>
  );
}
