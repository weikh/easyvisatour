import React from "react";
import { about, logo } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1330px] px-[15px] mx-auto flex justify-between">
      <div className="max-w-[570px]">
        <p className="text-[50px] font-bold mt-[50px]">{t("about")}</p>
        <hr className="w-12 h-[5px] bg-[#ff0000] mt-[5px]" />
        <div className="h-[324px] flex flex-col justify-between mt-[30px]">
          <p className="font-medium text-lg">{t("about-text1")}</p>
          <p className="font-medium text-lg">{t("about-text2")}</p>
          <p className="font-medium text-lg">{t("about-text3")}</p>
        </div>
        <hr className="w-[508px] h-[2px] bg-[#ff0000] mt-20" />
      </div>
      <div className="max-w-[600px] relative max-h-[600px]">
        <img src={about} className="w-full h-full rounded-[20px]" alt="about" />
        <img
          src={logo}
          className="absolute -bottom-[50px] -left-1 w-[250px] h-[145px]"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default About;
