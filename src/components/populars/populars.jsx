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
      <div className="max-w-[1330px] mx-auto pt-[80px]" id="about">
        <div className="text-[50px] font-bold flex flex-col">
          {t("populars")}
          <span className="w-12 h-[5px] bg-[#ff0000] border border-[#ff0000] mt-[5px]"></span>
        </div>
        <div className="mt-4 max-h-[423px]">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={10}
            breakpoints={{
              // 1024px va undan katta ekranlar uchun
              1024: {
                slidesPerView: 3,
              },
              // 768px va undan katta ekranlar uchun
              768: {
                slidesPerView: 2,
              },
              // 640px dan kichik ekranlar uchun
              640: {
                slidesPerView: 1,
              },
            }}
            className="w-full flex items-center"
          >
            {/* SwiperSlide elementlari */}
            {[
              populars1,
              populars2,
              populars3,
              populars4,
              populars5,
              populars6,
              populars7,
            ].map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[200px] max-sm:w-[250px] sm:w-[350px] sm:h-[220px] lg:w-[300px] lg:h-[250px] mx-auto">
                  <img
                    src={image}
                    className="rounded-lg w-full h-full object-cover"
                    alt={`populars${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <hr className="max-w-[502px] h-[2px] bg-[#ff0000] mt-[100px]" />
      </div>
    </>
  );
};

export default Populars;
