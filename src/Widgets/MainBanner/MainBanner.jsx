import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "./MainBanner.css"; 


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


import banner0 from "../../assets/banner/kabum0.gif";
import banner1 from "../../assets/banner/kabum1.webp";
import banner2 from "../../assets/banner/kabum2.webp";
import banner3 from "../../assets/banner/kabum3.webp";
import banner4 from "../../assets/banner/kabum4.webp";
import banner5 from "../../assets/banner/kabum5.webp";
import banner6 from "../../assets/banner/kabum6.webp";
import banner7 from "../../assets/banner/kabum7.webp";
import banner8 from "../../assets/banner/kabum8.webp";
import banner9 from "../../assets/banner/kabum9.webp";
import banner10 from "../../assets/banner/kabum10.webp";

const banners = [
  {
    image: banner0,
    link: "https://www.kabum.com.br/ofertas/julhogamer",
    fullWidth: true,
    className: "special-fullwidth-slide"
  },
  {
    image: banner1,
    link: "https://www.kabum.com.br/promocao/PROPLAYER",
    
  },
  {
    image: banner2,
    link: "https://www.kabum.com.br/ofertas/ofertasdodia",
  },
  {
    image: banner3,
    link: "https://www.kabum.com.br/promocao/MAGALUTV",
  },
  {
    image: banner4,
    link: "https://www.kabum.com.br/pc-gamer-completo",
  },
  {
    image: banner5,
    link: "https://www.kabum.com.br/promocao/LANCAMENTOMENSAL",
  },
  {
    image: banner6,
    link: "https://www.kabum.com.br/promocao/JOGUEGTA",
  },
  {
    image: banner7,
    link: "https://www.kabum.com.br/hotsite/cupons",
  },
  {
    image: banner8,
    link: "https://www.kabum.com.br/promocao/SELECAOPANINI",
  },
  {
    image: banner9,
    link: "https://www.kabum.com.br/promocao/APPNINJA",
  },
  {
    image: banner10,
    link: "https://www.kabum.com.br/promocao/ADS_ACER1P_JUNHO_2026",
  }

];

function Carousel() {
  
  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={20}      
        slidesPerView={1}       
        breakpoints={{
          768: { slidesPerView: 2 } 
        }}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide 
          key={banner.id}
          className={banner.fullWidth ? 'special-fullwidth-slide' : ''}
            >
            <a href={banner.link}>
              <img src={banner.image} alt="Banner KaBuM" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

    
  


export default Carousel;
