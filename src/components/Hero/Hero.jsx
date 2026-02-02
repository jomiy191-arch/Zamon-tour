import React, { useState, useEffect } from "react";
import { FaUser, FaGlobe, FaHome } from "react-icons/fa";
import "./Hero.css";
import img1 from "./Images/rasm1.jpg";
import img2 from "./Images/rasm2.jpg";
import img3 from "./Images/rasm3.jpg";
import img4 from "./Images/rasm4.jpg";

const heroData = [
  {
    city: { uz: "Dubai", en: "Dubai", ru: "Дубай" },
    subtitle: { uz: "Go'zal shaharni kashf eting:", en: "Take a Glimpse Into The Beautiful City Of:", ru: "Откройте для себя красивый город:" },
    population: "3.33 M",
    territory: "4,114 KM²",
    avgPrice: "$1,200,000",
    buttonGo: { uz: "Borish", en: "Go There", ru: "Перейти" },
    buttonExplore: { uz: "Ko‘proq kashf etish", en: "Explore More", ru: "Узнать больше" },
    image: img1,
  },
  {
    city: { uz: "Sharm El Sheikh", en: "Sharm El Sheikh", ru: "Шарм Эль Шейх" },
    subtitle: { uz: "Quyoshli jannatni kashf eting:", en: "Explore the Sunny Paradise of:", ru: "Исследуйте солнечный рай:" },
    population: "73 K",
    territory: "500 KM²",
    avgPrice: "$850,000",
    buttonGo: { uz: "Borish", en: "Go There", ru: "Перейти" },
    buttonExplore: { uz: "Ko‘proq kashf etish", en: "Explore More", ru: "Узнать больше" },
    image: img2,
  },
  {
    city: { uz: "Istanbul", en: "Istanbul", ru: "Стамбул" },
    subtitle: { uz: "Turkiya qalbini kashf eting:", en: "Discover the Heart of Turkey in:", ru: "Откройте сердце Турции в:" },
    population: "15.5 M",
    territory: "5,343 KM²",
    avgPrice: "$1,050,000",
    buttonGo: { uz: "Borish", en: "Go There", ru: "Перейти" },
    buttonExplore: { uz: "Ko‘proq kashf etish", en: "Explore More", ru: "Узнать больше" },
    image: img3,
  },
  {
    city: { uz: "Antalya", en: "Antalya", ru: "Анталия" },
    subtitle: { uz: "Go'zal shaharni kashf eting:", en: "Take a Glimpse Into The Beautiful City Of:", ru: "Откройте для себя красивый город:" },
    population: "8.66 M",
    territory: "41,290 KM²",
    avgPrice: "$1,100,200",
    buttonGo: { uz: "Borish", en: "Go There", ru: "Перейти" },
    buttonExplore: { uz: "Ko‘proq kashf etish", en: "Explore More", ru: "Узнать больше" },
    image: img4,
  },
];

const Hero = ({ lang }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentHero = heroData[current];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${currentHero.image})` }}
      id="home"
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="subtitle">{currentHero.subtitle[lang]}</p>
        <h1>{currentHero.city[lang]}</h1>

        <button
          className="hero-btn"
          onClick={() => scrollToSection("bets")}
        >
          {currentHero.buttonGo[lang]}
        </button>
      </div>

      <div className="hero-info">
        <div className="info-item">
          <FaUser className="info-icon" />
          <div>
            <span>Population:</span>
            <strong>{currentHero.population}</strong>
          </div>
        </div>

        <div className="info-item">
          <FaGlobe className="info-icon" />
          <div>
            <span>Territory:</span>
            <strong>{currentHero.territory}</strong>
          </div>
        </div>

        <div className="info-item">
          <FaHome className="info-icon" />
          <div>
            <span>AVG Price:</span>
            <strong>{currentHero.avgPrice}</strong>
          </div>
        </div>

        <button
          className="explore-btn"
          onClick={() => scrollToSection("bets")}
        >
          {currentHero.buttonExplore[lang]}
        </button>
      </div>
    </section>
  );
};

export default Hero;
