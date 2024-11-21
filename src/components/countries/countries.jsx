import React, { useEffect } from "react";
import {
  countries1,
  countries2,
  countries3,
  countries4,
  countries5,
  countries6,
  countries7,
  countries8,
  countries9,
  flag1,
  flag2,
  flag3,
  flag4,
  flag5,
  flag6,
  flag7,
  flag8,
  flag9,
} from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Countries = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animatsiyaning davomiyligi
      easing: "ease", // Animatsiyaning tezlashuvi
      once: false, // Bir marta animatsiya qilish
    });
  }, []);
  const { t } = useTranslation();
  return (
    <div className="max-w-[1330px] px-[15px] mx-auto mt-[50px] flex flex-col">
      <div data-aos="fade-right">
        <p className="text-[50px] font-bold">{t("countries")}</p>
        <hr className="w-12 h-[5px] bg-[#ff0000] mt-[5px]" />
      </div>
      <div className="flex flex-wrap justify-between gap-10 mt-[40px]">

        <div
          data-aos="zoom-in"
          className="flex flex-col max-w-[350px]"
        >
          <div className="overflow-hidden rounded-t-[32px]">
            <img
              src={countries1}
              className="w-[350px] h-[196.75px] transition-transform duration-300 ease-in-out hover:scale-125"
              alt="countries1"
            />
          </div>
          <div className="h-[82px] flex justify-center relative items-center text-[22px] font-bold uppercase border-b-4 border-[#ff0000]">
            <p>{t("shengen")}</p>
            <img
              className="w-[74px] h-[49px] rounded-[16px] absolute right-1 shadow-2xl"
              src={flag1}
              alt="flag1"
            />
          </div>
        </div>

        <div data-aos="zoom-in" className="flex flex-col max-w-[350px]">
          <div className="overflow-hidden rounded-t-[32px]">
            <img
              src={countries2}
              className="w-[350px] h-[196.75px] transition-transform duration-300 ease-in-out hover:scale-125"
              alt="countries2"
            />
          </div>
          <div className="h-[82px] flex justify-center relative items-center text-[22px] font-bold uppercase border-b-4 border-[#ff0000]">
            <p>{t("canada")}</p>
            <img
              className="w-[74px] h-[49px] rounded-[16px] absolute right-1 shadow-2xl"
              src={flag2}
              alt="flag2"
            />
          </div>
        </div>

        <div data-aos="zoom-in" className="flex flex-col max-w-[350px]">
          <div className="overflow-hidden rounded-t-[32px]">
            <img
              src={countries3}
              className="w-[350px] h-[196.75px] transition-transform duration-300 ease-in-out hover:scale-125"
              alt="countries3"
            />
          </div>
          <div className="h-[82px] flex justify-center relative items-center text-[22px] font-bold uppercase border-b-4 border-[#ff0000]">
            <p>{t("usa")}</p>
            <img
              className="w-[74px] h-[49px] rounded-[16px] absolute right-1 shadow-2xl"
              src={flag3}
              alt="flag3"
            />
          </div>
        </div>

        <div data-aos="zoom-in" className="flex flex-col max-w-[350px]">
          <div className="overflow-hidden rounded-t-[32px]">
            <img
              src={countries4}
              className="w-[350px] h-[196.75px] transition-transform duration-300 ease-in-out hover:scale-125"
              alt="countries4"
            />
          </div>
          <div className="h-[82px] flex justify-center relative items-center text-[22px] font-bold uppercase border-b-4 border-[#ff0000]">
            <p>{t("uk")}</p>
            <img
              className="w-[74px] h-[49px] rounded-[16px] absolute right-1 shadow-2xl"
              src={flag4}
              alt="flag4"
            />
          </div>
        </div>

        <div data-aos="zoom-in" className="flex flex-col max-w-[350px]">
          <div className="overflow-hidden rounded-t-[32px]">
            <img
              src={countries5}
              className="w-[350px] h-[196.75px] transition-transform duration-300 ease-in-out hover:scale-125"
              alt="countries5"
            />
          </div>
          <div className="h-[82px] flex justify-center relative items-center text-[22px] font-bold uppercase border-b-4 border-[#ff0000]">
            <p>{t("australia")}</p>
            <img
              className="w-[74px] h-[49px] rounded-[16px] absolute right-1 shadow-2xl"
              src={flag5}
              alt="flag5"
            />
          </div>
        </div>

        <div data-aos="zoom-in" className="flex flex-col max-w-[350px]">
          <div className="overflow-hidden rounded-t-[32px]">
            <img
              src={countries6}
              className="w-[350px] h-[196.75px] transition-transform duration-300 ease-in-out hover:scale-125"
              alt="countries6"
            />
          </div>
          <div className="h-[82px] flex justify-center relative items-center text-[22px] font-bold uppercase border-b-4 border-[#ff0000]">
            <p>{t("new-zealand")}</p>
            <img
              className="w-[74px] h-[49px] rounded-[16px] absolute right-1 shadow-2xl"
              src={flag6}
              alt="flag6"
            />
          </div>
        </div>

        <div data-aos="zoom-in" className="flex flex-col max-w-[350px]">
          <div className="overflow-hidden rounded-t-[32px]">
            <img
              src={countries7}
              className="w-[350px] h-[196.75px] transition-transform duration-300 ease-in-out hover:scale-125"
              alt="countries7"
            />
          </div>
          <div className="h-[82px] flex justify-center relative items-center text-[22px] font-bold uppercase border-b-4 border-[#ff0000]">
            <p>{t("japan")}</p>
            <img
              className="w-[74px] h-[49px] rounded-[16px] absolute right-1 shadow-2xl"
              src={flag7}
              alt="flag7"
            />
          </div>
        </div>

        <div data-aos="zoom-in" className="flex flex-col max-w-[350px]">
          <div className="overflow-hidden rounded-t-[32px]">
            <img
              src={countries8}
              className="w-[350px] h-[196.75px] transition-transform duration-300 ease-in-out hover:scale-125"
              alt="countries8"
            />
          </div>
          <div className="h-[82px] flex justify-center relative items-center text-[22px] font-bold uppercase border-b-4 border-[#ff0000]">
            <p>{t("korea")}</p>
            <img
              className="w-[74px] h-[49px] rounded-[16px] absolute right-1 shadow-2xl"
              src={flag8}
              alt="flag8"
            />
          </div>
        </div>

        <div data-aos="zoom-in" className="flex flex-col max-w-[350px]">
          <div className="overflow-hidden rounded-t-[32px]">
            <img
              src={countries9}
              className="w-[350px] h-[196.75px] transition-transform duration-300 ease-in-out hover:scale-125"
              alt="countries9"
            />
          </div>
          <div className="h-[82px] flex justify-center relative items-center text-[22px] font-bold uppercase border-b-4 border-[#ff0000]">
            <p>{t("latin-america")}</p>
            <img
              className="w-[74px] h-[49px] rounded-[16px] absolute right-1 shadow-2xl"
              src={flag9}
              alt="flag9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
