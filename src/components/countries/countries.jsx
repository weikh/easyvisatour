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

const countryData = [
  { id: 1, nameKey: "shengen", image: countries1, flag: flag1 },
  { id: 2, nameKey: "canada", image: countries2, flag: flag2 },
  { id: 3, nameKey: "usa", image: countries3, flag: flag3 },
  { id: 4, nameKey: "uk", image: countries4, flag: flag4 },
  { id: 5, nameKey: "australia", image: countries5, flag: flag5 },
  { id: 6, nameKey: "new-zealand", image: countries6, flag: flag6 },
  { id: 7, nameKey: "japan", image: countries7, flag: flag7 },
  { id: 8, nameKey: "korea", image: countries8, flag: flag8 },
  { id: 9, nameKey: "latin-america", image: countries9, flag: flag9 },
];

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
    <div className="max-w-[1330px] px-[15px] mx-auto pt-[80px] flex flex-col" id="countries">
      <div data-aos="fade-right">
        <p className="text-[40px] sm:text-[50px] font-bold">{t("countries")}</p>
        <hr className="w-12 h-[5px] bg-[#ff0000] mt-[5px]" />
      </div>
      <div className="flex flex-wrap justify-between gap-10 mt-[40px] md:justify-around sm:justify-around">
        {countryData.map(({ id, nameKey, image, flag }) => (
          <div
            key={id}
            data-aos="zoom-in"
            className="flex flex-col w-full sm:w-[70%] md:w-[40%] lg:w-[30%]"
          >
            <div className="overflow-hidden rounded-t-[32px]">
              <img
                src={image}
                className="w-full h-[196.75px] transition-transform duration-300 ease-in-out hover:scale-125"
                alt={nameKey}
              />
            </div>
            <div className="h-[82px] flex justify-center relative items-center text-[22px] font-bold uppercase border-b-4 border-[#ff0000] max-md:text-[18px] max-sm:text-[16px]">
              <p>{t(nameKey)}</p>
              <img
                className="w-[74px] h-[49px] rounded-[16px] absolute right-1 shadow-2xl"
                src={flag}
                alt={`${nameKey}-flag`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
