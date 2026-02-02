// Slider.jsx
import React, { useState } from "react";
import { GoScreenNormal } from "react-icons/go";
import "./Slider.css";

// Rasmlar
import Dubay from "./Images/dubai.jpg";
import Anta from "./Images/antalya.jpg";
import Istanbul from "./Images/istanbul.jpg";
import Sharm from "./Images/sharm.jpg";
import Paris from "./Images/best.jpg"


// Multilingual matnlar
const translationsData = {
  uz: {
    subtitle: "Eng yaxshi manzillarimiz",
    pages: "Eng mashhur sayohat joylarini kashf eting",
    titles: ["Dubay", "Antalya", "Istanbul", "Sharm El Sheikh", "Parij"],
    texts: [
      "Oltin shaharni kashf eting.",
      "Turkiya Rivierasida dam oling.",
      "Sharq va G‘arb uchrashadigan shahar.",
      "Qizil dengizga sho‘ng‘ing.",
      "Romantika va tarix birlashadi.",
    ],
  },
  en: {
    subtitle: "Our Best Destinations",
    pages: "Discover the most popular travel locations",
    titles: ["Dubai", "Antalya", "Istanbul", "Sharm El Sheikh", "Paris"],
    texts: [
      "Experience the city of gold.",
      "Relax on the Turkish Riviera.",
      "Where East meets West.",
      "Dive into the Red Sea.",
      "Romance and history combined.",
    ],
  },
  ru: {
    subtitle: "Наши лучшие направления",
    pages: "Откройте самые популярные туристические места",
    titles: ["Дубай", "Анталья", "Стамбул", "Шарм Эль-Шейх", "Париж"],
    texts: [
      "Откройте для себя город золота.",
      "Отдых на Турецкой Ривьере.",
      "Где Восток встречается с Западом.",
      "Погрузитесь в Красное море.",
      "Романтика и история вместе.",
    ],
  },
};

const Slider = ({ lang = "uz" }) => {
  const t = translationsData[lang] || translationsData.en;
  const [activeIndex, setActiveIndex] = useState(2);

  const slides = [
    { id: 0, img: Dubay, title: t.titles[0], text: t.texts[0] },
    { id: 1, img: Anta, title: t.titles[1], text: t.texts[1] },
    { id: 2, img: Istanbul, title: t.titles[2], text: t.texts[2] },
    { id: 3, img: Sharm, title: t.titles[3], text: t.texts[3] },
    { id: 4, img: Paris, title: t.titles[4], text: t.texts[4] },
  ];

  return (
    <section className="slider-section">
      <div className="slider-header text-center">
        <h2>{t.subtitle}</h2>
        <p>{t.pages}</p>
      </div>

      <div className="slider-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider-item ${activeIndex === index ? "active" : "inactive"}`}
            style={{ backgroundImage: `url(${slide.img})` }}
            onClick={() => setActiveIndex(index)}
          >
            <div className="slider-overlay">
              <div className={`slider-info ${activeIndex === index ? "active" : "inactive"}`}>
                <div className="slider-icon">
                  <GoScreenNormal className="text-white" />
                </div>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
