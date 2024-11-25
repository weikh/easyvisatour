import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { logo } from "../../assets/icons/icons";
import { client1, client2, client3 } from "../../assets/video/video";
import AOS from "aos";
import "aos/dist/aos.css";

const ClientReviews = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 500, // Animatsiyaning davomiyligi
      easing: "ease", // Animatsiyaning tezlashuvi
      once: false, // Bir marta animatsiya qilish
    });
  }, []);
  return (
    <div className="max-w-[1330px] px-[15px] mx-auto mt-[50px] flex flex-col">
      <div data-aos="fade-right">
        <p className="text-[30px] sm:text-[50px] font-bold">{t("clientReviews")}</p>
        <hr className="w-12 h-[5px] bg-[#ff0000] mt-[5px]" />
      </div>
      <div className="flex flex-wrap justify-around gap-10 mt-4">
        <div className="w-[300px] h-[408px] shadow-2xl flex justify-center items-center rounded-2xl relative">
          <video controls className="w-full h-[400px] rounded-2xl object-cover" >
            <source src={client1} type="video/mp4" />
          </video>
          <img
            src={logo}
            className="w-[100px] h-[58px] absolute -top-4 -left-4"
            alt="logo"
          />
        </div>
        <div className="w-[300px] h-[408px] shadow-2xl flex justify-center items-center rounded-2xl relative">
          <video controls className="w-[292px] h-[400px] rounded-2xl object-cover">
            <source src={client2} type="video/mp4" />
          </video>
          <img
            src={logo}
            className="w-[100px] h-[58px] absolute -top-4 -left-4"
            alt="logo"
          />
        </div>
        <div className="w-[300px] h-[408px] shadow-2xl flex justify-center items-center rounded-2xl relative">
          <video controls className="w-[292px] h-[400px] rounded-2xl object-cover">
            <source src={client3} type="video/mp4" />
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

export default ClientReviews;
