import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // i18next
import { FaUser, FaGlobe, FaHome } from "react-icons/fa";
import "./Hero.css";
import img1 from "./Images/rasm1.jpg";
import img2 from "./Images/rasm2.jpg";
import img3 from "./Images/rasm3.jpg";
import img4 from "./Images/rasm4.jpg";

// Har bir hero obyekti uchun faqat image va key saqlanadi
const heroData = [
  { image: img1, key: "dubai", population: "3.33 M", territory: "4,114 KM²", avgPrice: "$1,200,000" },
  { image: img2, key: "sharm", population: "73 K", territory: "500 KM²", avgPrice: "$850,000" },
  { image: img3, key: "istanbul", population: "15.5 M", territory: "5,343 KM²", avgPrice: "$1,050,000" },
  { image: img4, key: "antalya", population: "8.66 M", territory: "41,290 KM²", avgPrice: "$1,100,200" },
];

const Hero = () => {
  const { t } = useTranslation(); // i18next hook
  const [current, setCurrent] = useState(0);

  // Hero slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentHero = heroData[current];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${currentHero.image})` }}
      id="home"
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="subtitle">{t(`hero.${currentHero.key}.subtitle`)}</p>
        <h1>{t(`hero.${currentHero.key}.city`)}</h1>

        <button className="hero-btn" onClick={() => scrollToSection("bets")}>
          {t(`hero.${currentHero.key}.buttonGo`)}
        </button>
      </div>

      <div className="hero-info">
        <div className="info-item">
          <FaUser className="info-icon" />
          <div>
            <span>{t("hero.population")}:</span>
            <strong>{currentHero.population}</strong>
          </div>
        </div>

        <div className="info-item">
          <FaGlobe className="info-icon" />
          <div>
            <span>{t("hero.territory")}:</span>
            <strong>{currentHero.territory}</strong>
          </div>
        </div>

        <div className="info-item">
          <FaHome className="info-icon" />
          <div>
            <span>{t("hero.avgPrice")}:</span>
            <strong>{currentHero.avgPrice}</strong>
          </div>
        </div>

        <button className="explore-btn" onClick={() => scrollToSection("bets")}>
          {t(`hero.${currentHero.key}.buttonExplore`)}
        </button>
      </div>
    </section>
  );
};

export default Hero;
