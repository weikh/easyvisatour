import React from "react";
import { about, logo } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1330px] px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row justify-between items-center">
      {/* Matn qismi */}
      <div className="w-full lg:w-1/2 max-w-[570px] text-center lg:text-left">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-8 lg:mt-0">{t("about")}</p>
        <hr className="w-12 h-[5px] bg-[#ff0000] mx-auto lg:mx-0 mt-2" />
        <div className="flex flex-col gap-6 mt-6">
          <p className="text-base sm:text-lg font-medium">{t("about-text1")}</p>
          <p className="text-base sm:text-lg font-medium">{t("about-text2")}</p>
          <p className="text-base sm:text-lg font-medium">{t("about-text3")}</p>
        </div>
        <hr className="w-full lg:w-[508px] h-[2px] bg-[#ff0000] mt-10" />
      </div>

      {/* Tasvir qismi */}
      <div className="w-full lg:w-1/2 max-w-[600px] mt-8 lg:mt-0 relative">
        <img
          src={about}
          className="w-full h-auto rounded-2xl"
          alt="img"
        />
        <img
          src={logo}
          className="absolute -bottom-12 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-[200px] sm:w-[250px] h-auto"
          alt="Company brand logo"
        />
      </div>
    </div>
  );
};

export default About;
