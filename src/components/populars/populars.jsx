import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  populars1,
  populars2,
  populars3,
  populars4,
  populars5,
  populars6,
  populars7,
} from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";

const Populars = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="max-w-[1330px] mx-auto" id="about">
        <div className="text-[50px] font-bold mt-[50px] flex flex-col">
          {t("populars")}
          <span className="w-12 h-[5px] bg-[#ff0000] border border-[#ff0000] mt-[5px]"></span>
        </div>
        <div className="mt-4">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={3}
            className="mySwiper w-full h-full"
          >
            <SwiperSlide className="flex justify-center">
              <div className="w-[250px] h-[220px]">
                <img src={populars1} className="rounded-lg mx-24 w-full h-full" alt="populars1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] h-[220px]">
                <img src={populars2} className="rounded-lg mx-24 w-full h-full" alt="populars2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] h-[220px]">
                <img src={populars3} className="rounded-lg mx-24 w-full h-full" alt="populars3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] h-[220px]">
                <img src={populars4} className="rounded-lg mx-24 w-full h-full" alt="populars4" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] h-[220px]">
                <img src={populars5} className="rounded-lg mx-24 w-full h-full" alt="populars5" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] h-[220px]">
                <img src={populars6} className="rounded-lg mx-24 w-full h-full" alt="populars6" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] h-[220px]">
                <img src={populars7} className="rounded-lg mx-24 w-full h-full" alt="populars7" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <hr className="w-[502px] h-[2px] bg-[#ff0000] mt-[100px]" />
      </div>
    </>
  );
};

export default Populars;
