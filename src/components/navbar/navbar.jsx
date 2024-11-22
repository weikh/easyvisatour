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
      {/* Navbar - fixed, tepada qotib qolishi uchun */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-[1330px] px-[15px] py-2 h-[80px] mx-auto flex justify-between max-lg:px-2">
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
              <a href="#about" className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                {t("about")}
              </a>
              <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
            </li>
            <li className="cursor-pointer group inline-block relative">
              <a href="#countries" className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                {t("countries")}
              </a>
              <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
            </li>
            <li className="cursor-pointer group inline-block relative">
              <a href="#services" className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                {t("services")}
              </a>
              <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
            </li>
            <li className="cursor-pointer group inline-block relative">
              <a href="#excursion" className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                {t("ourWorks")}
              </a>
              <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
            </li>
            <li className="cursor-pointer group inline-block relative">
              <a href='#contact' className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                {t("contact")}
              </a>
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

      {/* Asosiy kontentga margin-top berish, navbarning bo'sh joyini qoplash uchun */}
      <div className="pt-[80px]">
        {/* Bu yerda asosiy kontent */}
      </div>

      {/* Drawer (Side Panel) */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-64 p-6 h-full shadow-lg transition-all transform ease-in-out duration-300">
            <button
              onClick={closeDrawer}
              className="absolute top-4 right-6 text-black text-xl"
            >
              <AiOutlineClose color="red" size={24}/>
            </button>
            <ul className="flex flex-col items-center gap-[30px] text-sm text-[#333] font-bold uppercase">
              <li className="cursor-pointer group inline-block relative">
                <a href="#about" className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                  {t("about")}
                </a>
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
              </li>
              <li className="cursor-pointer group inline-block relative">
                <a href="#countries" className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                  {t("countries")}
                </a>
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
              </li>
              <li className="cursor-pointer group inline-block relative">
                <a href="#services" className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                  {t("services")}
                </a>
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
              </li>
              <li className="cursor-pointer group inline-block relative">
                <a href="#excursion" className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                  {t("ourWorks")}
                </a>
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left"></span>
              </li>
              <li className="cursor-pointer group inline-block relative">
                <a href="#contact" className="text-black group-hover:text-red-500 transition-colors duration-[500ms]">
                  {t("contact")}
                </a>
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
