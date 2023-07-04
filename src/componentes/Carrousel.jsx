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
import imageiguazu from "../images/iguazu.jpeg"
import imagenewyork from "../images/new york.jpeg"
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>

    <h1 className="tituloPopular">POPULAR MYTINERARY</h1>

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
              <h1 className="tituloCarrousel">Toronto</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imageeuropa} />
            <h1 className="tituloCarrousel">Paris</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagelosroques} />
            <h1 className="tituloCarrousel">Bolivar</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagesantorini} />
            <h1 className="tituloCarrousel">Santorini</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="containerimage">
          <div className="imagecarrousel">
            <img className="imagen" src={imagecabohaitiano}/>
            <h1 className="tituloCarrousel">Cap-Haitien</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagedubai} />
            <h1 className="tituloCarrousel">Dubaï</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagesidney} />
            <h1 className="tituloCarrousel">Sydney</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagemurallachina} />
            <h1 className="tituloCarrousel">Bohai Sea</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="containerimage">
          <div className="imagecarrousel">
            <img className="imagen" src={imageushuaia} />
            <h1 className="tituloCarrousel">Ushuaia</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imagesaltoangel} />
            <h1 className="tituloCarrousel">National Park Canaima</h1>
            </div>
            <div className="imagecarrousel">
            <img className="imagen" src={imageiguazu} />
            <h1 className="tituloCarrousel">Puerto Iguazú</h1>
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
