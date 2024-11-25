import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "./main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  travels1,
  travels2,
  travels3,
  travels4,
  travels5,
  travels6,
} from "../../assets/icons/icons";

const Travels = () => {
  const { t } = useTranslation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [travels1, travels2, travels3, travels4, travels5, travels6];
  useEffect(() => {
    AOS.init({
      duration: 500, // Animatsiyaning davomiyligi
      easing: "ease", // Animatsiyaning tezlashuvi
      once: false, // Bir marta animatsiya qilish
    });
  }, []);
  return (
    <div className="travels py-[25px] mx-auto mt-[50px]">
      <div
        className="max-w-[1330px] px-[15px] mx-auto mt-[50px] flex flex-col"
        data-aos="fade-right"
      >
        <p className="text-[50px] max-sm:text-[30px] text-white font-bold">{t("travels")}</p>
        <hr className="w-12 h-[5px] bg-[#ff0000] mt-[5px] border-none" />
      </div>
      <div
        className="max-w-full md:max-w-[1330px] px-4 md:px-[15px] mx-auto"
        data-aos="zoom-in"
      >
        {/* Main Slider */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={0}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="bg-transparent mt-[40px]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-full h-full object-cover"
                src={src}
                alt={`travel ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={4}
          slidesPerView={1}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          style={{
            height: "auto",
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] border-2 border-transparent hover:border-red-500 transition-opacity duration-300"
            >
              <img
                className="w-full max-h-[200px] object-cover"
                src={src}
                alt={`travel ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Travels;
