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
            <div className="imagecarrousel">
              <img className ="imagen" src={imagecanada}/>
              <h3 className="tituloCarrousel">Canada</h3>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imageeuropa} />
            <h3 className="tituloCarrousel">France</h3>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagelosroques} />
            <h3 className="tituloCarrousel">Venezuela</h3>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagesantorini} />
            <h3 className="tituloCarrousel">Greece</h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="containerimage">
          <div className="imagecarrousel">
            <img className="imagen" src={imagecabohaitiano}/>
            <h3 className="tituloCarrousel">Haiti</h3>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagedubai} />
            <h3 className="tituloCarrousel">United Arab Emirates</h3>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagesidney} />
            <h3 className="tituloCarrousel">Australia</h3>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagemurallachina} />
            <h3 className="tituloCarrousel">China</h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="containerimage">
          <div className="imagecarrousel">
            <img className="imagen" src={imageushuaia} />
            <h3 className="tituloCarrousel">Argentina</h3>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagesaltoangel} />
            <h3 className="tituloCarrousel">Venezuela</h3>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagelluvizna} />
            <h3 className="tituloCarrousel">Argentina</h3>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagenewyork} />
            <h3 className="tituloCarrousel">U.S.A</h3>
            </div>

          </div>
        </SwiperSlide>


      </Swiper>
    </>
  );
}
