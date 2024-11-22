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
        <p className="text-[50px] text-white font-bold">{t("travels")}</p>
        <hr className="w-12 h-[5px] bg-[#ff0000] mt-[5px] border-none" />
      </div>
      <div className="max-w-[1330px] px-[15px] mx-auto" data-aos="zoom-in">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={0}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 bg-transparent mt-[40px]"
        >
          <SwiperSlide>
            <img className="w-full h-full" src={travels1} alt="travels1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={travels2} alt="travels2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={travels3} alt="travels3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={travels4} alt="travels4" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={travels5} alt="travels5" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={travels6} alt="travels" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={4}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          slideActiveClass="active-slide"
          style={{
            height: "258px",
          }}
        >
          {[travels1, travels2, travels3, travels4, travels5, travels6].map(
            (src, index) => (
              <SwiperSlide
                key={index}
                className="max-w-[258px] max-h-[258px] opacity-1 active-slide:opacity-40 active-slide:border-2 active-slide:border-red-500"
              >
                <img
                  className="w-full h-full object-cover"
                  src={src}
                  alt={`travel ${index + 1}`}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Travels;
