import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/Carrousel.css";
import imagecanada from "../images/canada 1.jpg"
import imageeuropa from "../images/europa 1.jpg"
import imagelosroques from "../images/Los-Roques-1.jpg"
import imagesantorini from "../images/santorini.jpg"
import imagecabohaitiano from "../images/cabohaitiano.jpg"
import imagecitadelle from "../images/citadelle.jpg"
import imagejamaica from "../images/jamaica.jpg"
import imagedubai from "../images/dubai.jpg"
import imagecostarica from "../images/costarica.jpg"
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
          <div className="containerimage"> 
            <img className="imagecarrousel" src={imagecanada}/>
            <img className="imagecarrousel"src={imageeuropa}/>
            <img className="imagecarrousel"src={imagelosroques}/>
            <img className="imagecarrousel" src={imagesantorini}/>
        </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="containerimage"> 
            <img className="imagecarrousel" src={imagecabohaitiano}/>
            <img className="imagecarrousel"src={imagecitadelle}/>
            <img className="imagecarrousel"src={imagejamaica}/>
            <img className="imagecarrousel" src={imagedubai}/>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="containerimage"> 
            <img className="imagecarrousel" src={imagecostarica}/>
            
        </div>
        </SwiperSlide>

        <SwiperSlide>Slide 6</SwiperSlide>
        
      </Swiper>
    </>
  );
}
