import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "../CSS/Contest.css";
import box from "../assests/box-code.png";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import puzzle from "../assests/apps.png";
import Math from "../assests/help.png"

// install Swiper modules
SwiperCore.use([Pagination]);
function Contest() {
  return (
    <div>
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
          <div className="code">
            <img src={box} alt="box" />
            <p>Coding</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="code">
            <img src={puzzle} alt="box" />
            <p>Puzzle</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="code">
            <img src={Math} alt="box" />
            <p>Math</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="code">
            <img src={box} alt="box" />
            <p>Coding</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="code">
            <img src={puzzle} alt="box" />
            <p>Puzzle</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="code">
            <img src={Math} alt="box" />
            <p>Math</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="code">
            <img src={box} alt="box" />
            <p>Coding</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="code">
            <img src={puzzle} alt="box" />
            <p>Puzzle</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="code">
            <img src={Math} alt="box" />
            <p>Math</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="code">
            <img src={box} alt="box" />
            <p>Coding</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Contest;
