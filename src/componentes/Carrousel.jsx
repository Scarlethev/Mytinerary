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
import imagedubai from "../images/dubai.jpg"
import imagesidney from "../images/sidney.jpeg"
import imagemurallachina from "../images/muralla china.jpeg"
import imageushuaia from "../images/ushuaia.jpg"
import imagesaltoangel from "../images/salto angel.jpeg"
import imagelluvizna from "../images/llovizna.jpeg"
import imagenewyork from "../images/new york.jpeg"
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
            <img className="imagecarrousel" src={imagedubai}/>
            <img className="imagecarrousel" src={imagesidney}/> 
            <img className="imagecarrousel" src={imagemurallachina}/>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="containerimage"> 
        <img className="imagecarrousel" src={imageushuaia}/>
        <img className="imagecarrousel" src={imagesaltoangel}/>
        <img className="imagecarrousel" src={imagelluvizna}/>
        <img className="imagecarrousel" src={imagenewyork}/> 
            
        </div>
        </SwiperSlide>

        
      </Swiper>
    </>
  );
}
