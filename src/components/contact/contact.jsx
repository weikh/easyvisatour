import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { TbCirclePlus } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import {toast} from 'react-toastify'

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const sendMessage = (e) => {
    setLoading(true);
    e.preventDefault();
    const token = "7502554917:AAHm-8pBtm6ejWkZpnyKKzPxGiGdVqVESTs";
    const chatId = 1546796954;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const telephone = document.getElementById("telephone").value;
    const comments = document.getElementById("comments").value;
    const messageContent = `Ismi: ${name} \n Familiyasi: ${surname} \n Telefon raqami: ${telephone} \n Izohlar: ${comments}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chatId,
        text: messageContent,
      },
    })
      .then(() => {
        document.getElementById("form").reset();
        toast.success(t("success"));
      })
      .catch(() => {
        toast.error(t("error"));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 500, // Animatsiyaning davomiyligi
      easing: "ease", // Animatsiyaning tezlashuvi
      once: false, // Bir marta animatsiya qilish
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-[200px] pb-[100px]" id="contact">
      <div className="max-w-[1330px] mx-auto flex flex-wrap justify-between pt-[50px] px-4">
        {/* Chap blok */}
        <div className="max-w-[280px] w-full flex flex-col">
          <p className="text-[50px] text-white font-bold" data-aos="fade-right">
            {t("contact")}
          </p>
          <hr
            className="w-12 h-[5px] bg-[#ff0000] mt-[5px] border-none"
            data-aos="fade-right"
          />
          <p
            className="mt-[35px] mb-[10px] text-[18px] font-bold"
            data-aos="fade-right"
          >
            {t("for-contact")}
          </p>
          <a
            href="tel:+998 99 712 66 66"
            className="text-[16px] font-medium"
            data-aos="fade-right"
          >
            +998 99 712 66 66
          </a>
          <a
            href="tel:+998 97 483 99 99"
            className="text-[16px] font-medium"
            data-aos="fade-right"
          >
            +998 97 483 99 99
          </a>
          <p
            className="mt-[35px] mb-[10px] text-[18px] font-bold"
            data-aos="fade-right"
          >
            {t("social-media")}
          </p>
          <ul className="flex flex-col gap-4" data-aos="fade-right">
            <li className="flex items-center gap-2" data-aos="fade-right">
              <FaInstagram size={30} color={"#ff0000"} />
              <a href="https://www.instagram.com/easy.visa.uzb/?igsh=aXI4bG9mMm5sczZ3&utm_source=qr">
                easy.visa.uzb
              </a>
            </li>
            <li className="flex items-center gap-2" data-aos="fade-right">
              <RiTelegramLine size={30} color={"#ff0000"} />
              <div className="flex flex-col">
                <a href="https://t.me/Ataev_Bakhodir90">
                  t.me/Ataev_Bakhodir90
                </a>
                <a href="https://t.me/sevaraataeva1986">
                  t.me/sevaraataeva1986
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2" data-aos="fade-right">
              <TbCirclePlus size={30} color={"#ff0000"} />
              <a href="https://t.me/easyvizatourconsulting">{t("telegram")}</a>
            </li>
            <li className="flex items-center gap-2" data-aos="fade-right">
              <HiOutlineLocationMarker size={30} color={"#ff0000"} />
              <p>{t("location")}</p>
            </li>
          </ul>
        </div>

        {/* Xarita */}
        <div data-aos="zoom-in" className="max-w-[500px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3004.3921976654783!2d69.67350438784204!3d41.14779261121423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0YPQuy4g0JzRg9GB0YLQsNC60LjQu9C70LjQuiA1OSDRg9C7LiDQnNGD0YHRgtCw0LrQuNC70LvQuNC6IDU5LCAxMTAyMjYsINCa0YDQsNGB0L3QvtCz0L7RgNGB0LosINCi0LDRiNC60LXQvdGC0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwgIA!5e0!3m2!1sen!2s!4v1732194869902!5m2!1sen!2s"
            width="100%"
            height="550"
            title="Example saytning kontenti"
            loading="lazy"
            className="rounded-[12px]"
          ></iframe>
        </div>

        {/* O'ng blok */}
        <form
          id="form"
          className="flex flex-col gap-5 max-w-[350px] w-full"
          onSubmit={sendMessage}
        >
          <p className="text-[40px] font-bold" data-aos="fade-left">
            {t("request")}
          </p>
          <div className="flex flex-col gap-5 mt-4" data-aos="fade-left">
            <input
              type="text"
              id="name"
              placeholder={t("name")}
              className="py-[10px] pl-[20px] outline-none text-gray-600"
            />
            <input
              type="text"
              id="surname"
              placeholder={t("surname")}
              className="py-[10px] pl-[20px] outline-none text-gray-600"
            />
            <input
              type="text"
              id="telephone"
              placeholder={t("telephone")}
              className="py-[10px] pl-[20px] outline-none text-gray-600"
            />
            <textarea
              id="comments"
              cols="10"
              rows="10"
              placeholder={t("comments")}
              className="w-full max-h-[175px] py-[10px] pl-[20px] outline-none text-gray-600"
            ></textarea>
          </div>
          <button
            loading={loading}
            type="submit"
            className="py-[10px] text-white bg-[#ff0000] rounded-[8px] font-bold hover:bg-white hover:text-[#ff0000]"
          >
            {loading ? t('sending') : t("request")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
