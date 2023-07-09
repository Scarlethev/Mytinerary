import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/Carrousel.css";
import imageeuropa from "../images/europa 1.jpg"
// import imagelosroques from "../images/Los-Roques-1.jpg"
// import imagesantorini from "../images/santorini.jpg"
// import imagecabohaitiano from "../images/cabohaitiano.jpg"
import imagedubai from "../images/dubai.jpg"
import imagesidney from "../images/sidney.jpeg"
// import imageushuaia from "../images/ushuaia.jpg"
// import imagesaltoangel from "../images/salto angel.jpeg"
// import imageiguazu from "../images/iguazu.jpeg"
import imagenewyork from "../images/new york.jpeg"
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
    
  return (
    <>
    <div className="tituloCarrouselh1">
    <h1 className="tituloPopularOne"><strong>POPULAR</strong>MYTINERARY</h1>
    </div>
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
              <img src="https://firebasestorage.googleapis.com/v0/b/mytinerary-a0fb5.appspot.com/o/Madrid.jpg?alt=media&token=12a5602b-4006-436d-85af-900bfa841394"/>
              <h1 className="tituloCarrousel">Madrid</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imageeuropa} />
            <h1 className="tituloCarrousel">Paris</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src="https://firebasestorage.googleapis.com/v0/b/mytinerary-a0fb5.appspot.com/o/Londres.jpg?alt=media&token=11781d4e-782a-4fce-94bd-549db436a026"/> 
            <h1 className="tituloCarrousel">London</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagedubai} />
            <h1 className="tituloCarrousel">Dubaï</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="containerimage">
          <div className="imagecarrousel">
            <img className="imagen" src="https://firebasestorage.googleapis.com/v0/b/mytinerary-a0fb5.appspot.com/o/Roma.jpg?alt=media&token=c9b8b652-193d-4b77-a372-9e693faba691"/>
            <h1 className="tituloCarrousel">Rome</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src="https://firebasestorage.googleapis.com/v0/b/mytinerary-a0fb5.appspot.com/o/Barcelona.jpg?alt=media&token=ca11ecac-b61a-4c60-9c86-2ff66f13f3dd"/>
            <h1 className="tituloCarrousel">Barcelona</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagesidney} />
            <h1 className="tituloCarrousel">Sydney</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src="https://firebasestorage.googleapis.com/v0/b/mytinerary-a0fb5.appspot.com/o/Amsterdam.jpg?alt=media&token=e4f246e1-4d52-4b8a-8262-97a167aa8a92" />
            <h1 className="tituloCarrousel">Amsterdam</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="containerimage">
          <div className="imagecarrousel">
            <img className="imagen" src="https://firebasestorage.googleapis.com/v0/b/mytinerary-a0fb5.appspot.com/o/Berlin.jpg?alt=media&token=02bb117d-f92d-4fa5-a8d6-204448dc751f" />
            <h1 className="tituloCarrousel">Berlin</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src="https://firebasestorage.googleapis.com/v0/b/mytinerary-a0fb5.appspot.com/o/Munich.jpg?alt=media&token=a3cee382-c133-45a8-889d-2f3dc72a0d63" />
            <h1 className="tituloCarrousel">Munich</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src="https://firebasestorage.googleapis.com/v0/b/mytinerary-a0fb5.appspot.com/o/Viena.jpg?alt=media&token=500a3e85-25c3-45f9-afec-edfe686d21ae" /> 
            <h1 className="tituloCarrousel">Viena</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagenewyork} />
            <h1 className="tituloCarrousel">New York</h1>
            </div>

          </div>
        </SwiperSlide>


      </Swiper>
    </>
  );
}
