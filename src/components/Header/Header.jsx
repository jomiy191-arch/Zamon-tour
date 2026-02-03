// src/components/Header/Header.jsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";
import logo from "./Images/download.svg";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

const Header = ({ lang, setLang }) => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const onScroll = () => setShrink(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    setMenuOpen(false);
  };

  // Smooth scroll funktsiyasi
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`Header ${shrink ? "shrink" : ""}`} data-aos="fade-down">
      <div className="container">
        <div className="header__container">
          {/* Logo */}
          <div className="header__logo">
            <img className="Logo" src={logo} alt="Zamon Tour" />
          </div>

          {/* Hamburger */}
          <div className={`burger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navbar */}
          <nav className={`Header__nav ${menuOpen ? "open" : ""}`}>
            <ul className="Header__list">
              <li>
                <a href="#home" onClick={() => scrollToSection("home")}>
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#tours" onClick={() => scrollToSection("tours")}>
                  {t("nav.tours")}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection("contact")}>
                  {t("nav.contact")}
                </a>
              </li>
            </ul>

            {/* Right section: language + socials */}
            <div className="header__right">
              <div className="lang">
                <span
                  onClick={() => changeLanguage("uz")}
                  className={lang === "uz" ? "active" : ""}
                >
                  UZ
                </span>
                <span
                  onClick={() => changeLanguage("en")}
                  className={lang === "en" ? "active" : ""}
                >
                  EN
                </span>
                <span
                  onClick={() => changeLanguage("ru")}
                  className={lang === "ru" ? "active" : ""}
                >
                  RU
                </span>
              </div>

              <div className="socials">
                <a href="https://t.me/zamontour" target="_blank" rel="noopener noreferrer">
                  <FaTelegramPlane className="social-icon" />
                </a>
                <a href="https://instagram.com/zamontour" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
