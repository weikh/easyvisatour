import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./homeSlider.css";
import { useTranslation } from "react-i18next";

export default function HomeSlider() {
  const { t } = useTranslation();
  return (
    <>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="swiper_wrap">
          <div className="container">
            <span>{t("banner1")}</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper_wrap1">
          <div className="container">
            <span>{t("banner2")}</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper_wrap2">
          <div className="container">
            <span>{t("banner3")}</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
