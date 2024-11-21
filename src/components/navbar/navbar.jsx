import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { logo } from "../../assets/icons/icons";
import "./main.css";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const languages = localStorage.getItem("i18nextLng");
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  // Drawer ni boshqarish uchun state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Drawerni ochish va yopish funksiyalari
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <div className="h-[10px] bg-[#121212] max-lg:hidden"></div>
      <div className="max-w-[1330px] px-[15px] py-2 h-[80px] border border-black mx-auto flex justify-between backg  max-lg:px-2">
        <ul className="flex items-center">
          <li>
            <img className="w-[100px] h-[58.14px]" src={logo} alt="logo" />
          </li>
        </ul>
        <ul className="lg:hidden flex gap-2 items-center">
          <li>+99899 712 66 66</li>
          <li>
            {/* Drawer Trigger - Tugma */}
            <button onClick={openDrawer} className="p-2 flex font-semibold flex-col gap-1">
              <span className="w-5 h-[2px] bg-[#ff0000]"></span>
              <span className="w-5 h-[1px] bg-[#ff0000]"></span>
              <span className="w-5 h-[2px] bg-[#ff0000]"></span>
            </button>
          </li>
        </ul>
        <ul className="flex items-center gap-[30px] text-sm text-[#333] font-bold uppercase max-lg:hidden">
          <li className="cursor-pointer group inline-block relative">
            <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
              {t("about")}
            </span>
            <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
          </li>
          <li className="cursor-pointer group inline-block relative">
            <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
              {t("countries")}
            </span>
            <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
          </li>
          <li className="cursor-pointer group inline-block relative">
            <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
              {t("services")}
            </span>
            <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
          </li>
          <li className="cursor-pointer group inline-block relative">
            <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
              {t("ourWorks")}
            </span>
            <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
          </li>
          <li className="cursor-pointer group inline-block relative">
            <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
              {t("contact")}
            </span>
            <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
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
      </div>

      {/* Drawer (Side Panel) */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-64 p-6 h-full shadow-lg transition-all transform ease-in-out duration-300">
            <button
              onClick={closeDrawer}
              className="absolute top-4 right-6 text-black text-xl max-lg:p-0"
            >
              <AiOutlineClose color="red" size={24}/>
            </button>
            <ul className="flex flex-col items-center gap-[30px] text-sm text-[#333] font-bold uppercase">
              <li className="cursor-pointer group inline-block relative">
                <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                  {t("about")}
                </span>
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
              </li>
              <li className="cursor-pointer group inline-block relative">
                <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                  {t("countries")}
                </span>
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
              </li>
              <li className="cursor-pointer group inline-block relative">
                <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                  {t("services")}
                </span>
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
              </li>
              <li className="cursor-pointer group inline-block relative">
                <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                  {t("ourWorks")}
                </span>
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
              </li>
              <li className="cursor-pointer group inline-block relative">
                <span className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                  {t("contact")}
                </span>
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
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
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
