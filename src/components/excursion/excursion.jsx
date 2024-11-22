import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { logo } from "../../assets/icons/icons";
import { excursion1, excursion2, excursion3 } from "../../assets/video/video";
import AOS from "aos";
import "aos/dist/aos.css";

const Excursion = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 500, // Animatsiyaning davomiyligi
      easing: "ease", // Animatsiyaning tezlashuvi
      once: false, // Bir marta animatsiya qilish
    });
  }, []);
  return (
    <div className="max-w-[1330px] px-[15px] mx-auto mt-[50px] flex flex-col" id="excursion">
      <div data-aos="fade-right">
        <p className="text-[50px] font-bold">{t("excursion")}</p>
        <hr className="w-12 h-[5px] bg-[#ff0000] mt-[5px]" />
      </div>
      <div className="flex flex-wrap justify-around gap-10 mt-4">
        <div className="w-[300px] h-[408px] shadow-2xl flex justify-center items-center rounded-2xl relative">
          <video controls className="w-[292px] h-[400px] rounded-2xl object-cover">
            <source src={excursion1} type="video/mp4" />
          </video>
          <img
            src={logo}
            className="w-[100px] h-[58px] absolute -top-4 -left-4"
            alt="logo"
          />
        </div>
        <div className="w-[300px] h-[408px] shadow-2xl flex justify-center items-center rounded-2xl relative">
          <video controls className="w-[292px] h-[400px] rounded-2xl object-cover">
            <source src={excursion2} type="video/mp4" />
          </video>
          <img
            src={logo}
            className="w-[100px] h-[58px] absolute -top-4 -left-4"
            alt="logo"
          />
        </div>
        <div className="w-[300px] h-[408px] shadow-2xl flex justify-center items-center rounded-2xl relative">
          <video controls className="w-[292px] h-[400px] rounded-2xl object-cover">
            <source src={excursion3} type="video/mp4" />
          </video>
          <img
            src={logo}
            className="w-[100px] h-[58px] absolute -top-4 -left-4"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Excursion;
