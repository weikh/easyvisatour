import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./main.css";
import { RiSecurePaymentLine } from "react-icons/ri";
import { time, support, convenience } from "../../assets/icons/icons";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const Priorities = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 500, // Animatsiyaning davomiyligi
      easing: "ease", // Animatsiyaning tezlashuvi
      once: false, // Bir marta animatsiya qilish
    });
  }, []);
  return (
    <>
      <div className="priorities-bg h-[780px] relative flex-col mt-[70px] pt-[15px]">
        {/* Header section */}
        <div
          className="flex flex-col items-center mt-[50px] z-[10]"
          data-aos="fade-right"
        >
          <p className="text-[50px] font-bold text-white">{t("tourism")}</p>
          <hr className="w-12 h-[5px] bg-[#ff0000]" />
        </div>

        {/* Description */}
        <div className="max-w-[980px] text-center mx-auto z-[10]" data-aos="zoom-in">
          <p className="text-[17px] font-bold mt-[10px] text-white">
            {t("tourism-text")}
          </p>
        </div>

        {/* Priorities section */}
        <div className="h-[177.5px] flex max-w-[1330px] w-full mt-[100px] px-[15px] justify-between mx-auto text-lg font-bold z-[10]">
          <div className="text-center text-white" data-aos="zoom-in">
            <img src={time} className="w-[135px] h-[135px]" alt="time" />
            <p className="mt-[20px]">{t("time")}</p>
          </div>
          <div className="text-center text-white" data-aos="zoom-in">
            <RiSecurePaymentLine size={135} color={"white"} />
            <p className="mt-[20px]">{t("reliability")}</p>
          </div>
          <div className="text-center text-white" data-aos="zoom-in">
            <img src={support} className="w-[135px] h-[135px]" alt="support" />
            <p className="mt-[20px]">{t("support")}</p>
          </div>
          <div className="text-center text-white" data-aos="zoom-in">
            <img
              src={convenience}
              className="w-[135px] h-[135px]"
              alt="convenience"
            />
            <p className="mt-[20px]">{t("convenience")}</p>
          </div>
        </div>
        <div className="absolute visa-bg max-w-[970px] z-[20] -bottom-[20%] left-[50%] translate-x-[-50%] w-full min-h-[150px] rounded-[20px]">
          <div className="flex flex-col items-center mt-[50px] z-[10]" data-aos="fade-up">
            <p className="text-[50px] font-bold text-white">{t("number")}</p>
            <hr className="w-12 h-[5px] bg-[#ff0000]" />
          </div>
          <div className="flex justify-around items-center h-[194px]">
            <div className="flex flex-col items-center" data-aos="fade-up">
              <p className="font-bold text-[100px] text-white">
                <CountUp end={7320} duration={3} />
              </p>
              <p className="text-white uppercase font-bold">{t("visas")}</p>
            </div>
            <div className="flex flex-col items-center" data-aos="fade-up">
              <p className="font-bold text-[100px] text-white">
                <CountUp end={7257} duration={3} />
              </p>
              <p className="text-white uppercase font-bold">{t("trips")}</p>
            </div>
            <div className="flex flex-col items-center" data-aos="fade-up">
              <p className="font-bold text-[100px] text-white">
                <CountUp end={7250} duration={3} />
              </p>
              <p className="text-white uppercase font-bold">{t("clients")}</p>
            </div>
          </div>
          <hr className="w-full h-[3px] absolute -bottom-[50px] bg-[#ff0000]" />
        </div>
      </div>
    </>
  );
};

export default Priorities;
