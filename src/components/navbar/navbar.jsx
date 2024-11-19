import React from "react";
import { useTranslation } from "react-i18next";
import { logo } from "../../assets/icons/icons";
import "./main.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const languages = localStorage.getItem("i18nextLng");
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <div className="h-[10px] bg-[#121212]"></div>
      <div className="max-w-[1330px] px-[15px] py-2 h-[80px] border border-black mx-auto flex justify-between backg">
        <ul className="flex items-center">
          <li>
            <img className="w-[100px] h-[58.14px]" src={logo} alt="logo" />
          </li>
        </ul>
        <ul className="flex items-center gap-[30px] text-sm text-[#333] font-bold uppercase max-lg:hidden">
          <li className="cursor-pointer group inline-block relative">
            <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
              {t("about")}
            </span>
            <span class="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
          </li>
          <li className="cursor-pointer group inline-block relative">
            <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
              {t("countries")}
            </span>
            <span class="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
          </li>
          <li className="cursor-pointer group inline-block relative">
            <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
              {t("services")}
            </span>
            <span class="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
          </li>
          <li className="cursor-pointer group inline-block relative">
            <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
              {t("ourWorks")}
            </span>
            <span class="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
          </li>
          <li className="cursor-pointer group inline-block relative">
            <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
              {t("contact")}
            </span>
            <span class="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
          </li>
          <li>
            <select
              className="bg-black text-white w-[42.4px] h-[23.2px] cursor-pointer"
              onChange={handleChange}
              value={languages}
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </li>
        </ul>
        <ul className="flex items-center lg:hidden">
          <li>gap</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
