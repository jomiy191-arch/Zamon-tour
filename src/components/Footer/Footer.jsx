import React from 'react';
import Cta from './Images/batarbol.jpg';
import './Footer.css';

const translations = {
  uz: {
    heading: "Sayohat qilmoqchimisiz?",
    description: "Tugmani bosib band qilishingiz mumkin",
    button: "Hozir Band Qiling",
    copyright: "Mualliflik huquqi © 2026 Zamon Business Tour."
  },
  en: {
    heading: "Are You Looking To Travel?",
    description: "Make a reservation by clicking the button",
    button: "Book Yours Now",
    copyright: "Copyright © 2026 Zamon Business Tour."
  },
  ru: {
    heading: "Хотите путешествовать?",
    description: "Забронируйте, нажав на кнопку",
    button: "Забронировать сейчас",
    copyright: "Авторское право © 2026 Zamon Business Tour."
  }
};

const Footer = ({ lang }) => {
    const t = translations[lang] || translations['en'];

    return (
        <>
            {/* Hero section */}
            <div 
                className="footer-hero"
                style={{ backgroundImage: `url(${Cta})` }}
            >
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-text">
                            <h1>{t.heading}</h1>
                            <p>{t.description}</p>
                        </div>
                        <a href="#reservation-form">
                            <button className="footer-btn">{t.button}</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom section */}
            <div className="footer-bottom">
                <div className="footer-container">
                    <p>{t.copyright}</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
