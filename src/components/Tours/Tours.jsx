// Tours.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGlobe, FaUser } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

import Dubay from "./images/dubai2.jpg";
import Count from "./images/country.jpg";
import Istanbul from "./images/istanbul3.jpg";
import Sharm from "./images/sharm2.jpg";

import "./Tours.css";

const Tours = ({ lang = "uz" }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  const texts = {
    uz: {
      sectionTitle: "Hozir Bizning Mamlakatlardan Biriga Tashrif Buyuring",
      sectionDesc:
        "Har bir shahardagi eng yaxshi takliflarni kashf eting, siz uchun maxsus tayyorlangan. Tejamkorlik olamiga sho'ng'ing va tengsiz tajribalarni rohatlaning.",
      button: "Ko'proq bilish",
      learnMore: "Batafsil o'rganish",
    },
    en: {
      sectionTitle: "Visit One Of Our Countries Now",
      sectionDesc:
        "Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.",
      button: "Learn More",
      learnMore: "Learn More",
    },
    ru: {
      sectionTitle: "Посетите одну из наших стран прямо сейчас",
      sectionDesc:
        "Откройте для себя лучшие предложения в каждом городе, специально подготовленные для вас. Погрузитесь в мир экономии и наслаждайтесь непревзойденными впечатлениями.",
      button: "Узнать больше",
      learnMore: "Подробнее",
    },
  };

  const tours = [
    {
      img: Dubay,
      title: { uz: "Dubai", en: "Dubai", ru: "Дубай" },
      text: { uz: "Dubai haqida qisqacha", en: "Short description of Dubai", ru: "Краткое описание Дубая" },
      textLong: {
        uz: "Dubayning diqqatga sazovor joylari, madaniyati va turlar haqida batafsil.",
        en: "Long description about Dubai's attractions, culture and tours.",
        ru: "Подробное описание достопримечательностей, культуры и туров Дубая.",
      },
      people: "2M People",
      area: "41.290 km²",
      price: "$1.100.200",
    },
    {
      img: Count,
      title: { uz: "Country", en: "Country", ru: "Страна" },
      text: { uz: "Mamlakat haqida qisqacha", en: "Short description of Country", ru: "Краткое описание страны" },
      textLong: {
        uz: "Mamlakatning diqqatga sazovor joylari, madaniyati va turlari haqida batafsil.",
        en: "Long description about Country's attractions, culture and tours.",
        ru: "Подробное описание достопримечательностей, культуры и туров страны.",
      },
      people: "5M People",
      area: "275.400 km²",
      price: "$946.000",
    },
    {
      img: Sharm,
      title: { uz: "Sharm El Sheikh", en: "Sharm El Sheikh", ru: "Шарм-эль-Шейх" },
      text: { uz: "Sharm haqida qisqacha", en: "Short description of Sharm", ru: "Краткое описание Шарма" },
      textLong: {
        uz: "Sharmning diqqatga sazovor joylari, madaniyati va turlari haqida batafsil.",
        en: "Long description about Sharm's attractions, culture and tours.",
        ru: "Подробное описание достопримечательностей, культуры и туров Шарма.",
      },
      people: "3M People",
      area: "551.500 km²",
      price: "$425.600",
    },
    {
      img: Istanbul,
      title: { uz: "Istanbul", en: "Istanbul", ru: "Стамбул" },
      text: { uz: "Istanbul haqida qisqacha", en: "Short description of Istanbul", ru: "Краткое описание Стамбула" },
      textLong: {
        uz: "Istanbulning diqqatga sazovor joylari, madaniyati va turlari haqida batafsil.",
        en: "Long description about Istanbul's attractions, culture and tours.",
        ru: "Подробное описание достопримечательностей, культуры и туров Стамбула.",
      },
      people: "15M People",
      area: "551.500 km²",
      price: "$425.600",
    },
  ];

  return (
    <main className="tours-section">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <h1>{texts[lang].sectionTitle}</h1>
          <p>{texts[lang].sectionDesc}</p>
        </div>

        <div className="tours-list">
          {tours.map((item, index) => (
            <div key={index} className="tour-card" data-aos="zoom-in">
              <div className="tour-image">
                <img src={item.img} alt={item.title[lang]} />
              </div>

              <div className="tour-content">
                <div className="tour-title">
                  <h2>{item.title[lang]}</h2>
                  <p>{item.text[lang]}</p>
                </div>

                <p className="tour-textLong">{item.textLong[lang]}</p>

                <button className="tour-button">{texts[lang].button}</button>

                <div className="tour-meta">
                  <div className="meta-item">
                    <FaUser /> {item.people}
                  </div>
                  <div className="meta-item">
                    <FaGlobe /> {item.area}
                  </div>
                  <div className="meta-item">
                    <IoHomeSharp /> {item.price}
                  </div>
                </div>

                <a href="#" className="tour-link">
                  {texts[lang].learnMore} <GoArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Tours;
