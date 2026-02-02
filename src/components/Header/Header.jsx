import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";
import logo from "./Images/Download.svg";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

const Header = ({ lang, setLang }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const onScroll = () => setShrink(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  const texts = {
    uz: { home: "Bosh sahifa", about: "Biz haqimizda", tours: "Sayohatlar", contact: "Aloqa" },
    en: { home: "Home", about: "About", tours: "Tours", contact: "Contacts" },
    ru: { home: "Главная", about: "О нас", tours: "Туры", contact: "Контакты" },
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`Header ${shrink ? "shrink" : ""}`} data-aos="fade-down">
      <div className="container">
        <div className="header__container">
          <div className="header__logo">
            <img className="Logo" src={logo} alt="Zamon Tour" />
          </div>

          <div className={`burger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`Header__nav ${menuOpen ? "open" : ""}`}>
            <ul className="Header__list">
              <li><a href="#home" onClick={() => setMenuOpen(false)}>{texts[lang].home}</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>{texts[lang].about}</a></li>
              <li><a href="#tours" onClick={() => setMenuOpen(false)}>{texts[lang].tours}</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>{texts[lang].contact}</a></li>
            </ul>

            <div className="header__right">
              <div className="lang">
                <span onClick={() => setLang("uz")} className={lang === "uz" ? "active" : ""}>UZ</span>
                <span onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>EN</span>
                <span onClick={() => setLang("ru")} className={lang === "ru" ? "active" : ""}>RU</span>
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
