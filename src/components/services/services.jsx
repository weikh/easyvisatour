import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 500, // Animatsiyaning davomiyligi
      easing: "ease", // Animatsiyaning tezlashuvi
      once: false, // Bir marta animatsiya qilish
    });
  }, []);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="max-w-[1330px] px-[15px] mx-auto pt-[250px] max-lg:mt-[50px]" id="services">
      <div data-aos="fade-right">
        <p className="text-[50px] font-bold">{t("services")}</p>
        <hr className="w-12 h-[5px] bg-[#ff0000] mt-[5px]" />
      </div>
      <div>
        <div className="flex flex-wrap gap-4 justify-around mt-[15px] max-w-[1300px] w-full text-[15px] leading-none">
          <div data-aos="zoom-in">
            <button
              className={`w-[200px] text-white py-3 px-4 rounded-lg focus:outline-none ${
                activeTab === 0
                  ? "bg-[#ff0000]"
                  : "text-white bg-black hover:opacity-50"
              }`}
              onClick={() => setActiveTab(0)}
            >
              {t("visa-consultations")}
            </button>
          </div>
          <div data-aos="zoom-in">
            <button
              className={`w-[200px] text-white py-3 px-4 rounded-lg focus:outline-none ${
                activeTab === 1
                  ? "bg-[#ff0000]"
                  : "text-white bg-black hover:opacity-50"
              }`}
              onClick={() => setActiveTab(1)}
            >
              {t("tourist-visas")}
            </button>
          </div>
          <div data-aos="zoom-in">
            <button
              className={`w-[200px] text-white py-3 px-4 rounded-lg focus:outline-none ${
                activeTab === 2
                  ? "bg-[#ff0000]"
                  : "text-white bg-black hover:opacity-50"
              }`}
              onClick={() => setActiveTab(2)}
            >
              {t("business-visas")}
            </button>
          </div>
          <div data-aos="zoom-in">
            <button
              className={`w-[200px] text-white py-3 px-4 rounded-lg focus:outline-none ${
                activeTab === 3
                  ? "bg-[#ff0000]"
                  : "text-white bg-black hover:opacity-50"
              }`}
              onClick={() => setActiveTab(3)}
            >
              {t("document-preparation")}
            </button>
          </div>
          <div data-aos="zoom-in">
            <button
              className={`w-[200px] text-white py-3 px-4 rounded-lg focus:outline-none ${
                activeTab === 4
                  ? "bg-[#ff0000]"
                  : "text-white bg-black hover:opacity-50"
              }`}
              onClick={() => setActiveTab(4)}
            >
              {t("tour-packages")}
            </button>
          </div>
          <div data-aos="zoom-in">
            <button
              className={`w-[200px] text-white py-3 px-4 rounded-lg focus:outline-none ${
                activeTab === 5
                  ? "bg-[#ff0000]"
                  : "text-white bg-black hover:opacity-50"
              }`}
              onClick={() => setActiveTab(5)}
            >
              {t("insurance")}
            </button>
          </div>
        </div>

        <div className="pl-[50px] mt-[15px] text-[18px]">
          <hr className="w-[5px] h-[50px] mt-[30px] mb-[15px] bg-[#ff0000]" />
          {activeTab === 0 && (
            <div>
              <p>{t("visa-consultations-text")}</p>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <p>{t("tourist-visas-text")}</p>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <p>{t("business-visas-text")}</p>
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <p>{t("document-preparation-text")}</p>
            </div>
          )}
          {activeTab === 4 && (
            <div>
              <p>{t("tour-packages-text")}</p>
            </div>
          )}
          {activeTab === 5 && (
            <div>
              <p>{t("insurance-text")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
