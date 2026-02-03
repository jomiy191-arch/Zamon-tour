import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import Afr from "./Images/railway.jpg";
import Air from "./Images/airplane.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const toursData = [
  { image: Afr, key: "tour1" },
  { image: Air, key: "tour2" }
];

const About = () => {
  const { t } = useTranslation(); // i18next hook

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <aside id="about" className="about-section">
      <div className="about-container">
        <div className="about-header" data-aos="fade-up">
          <h1>{t("about.headerTitle")}</h1>
          <p>{t("about.headerDesc")}</p>
        </div>

        <div className="about-tours-list">
          {toursData.map((tour, index) => (
            <div key={index} className="about-tour-item" data-aos="fade-up">
              <div className="about-tour-image">
                <img src={tour.image} alt={t(`about.${tour.key}Title`)} />
              </div>
              <div className="about-tour-content">
                <div className="about-tour-top">
                  <span>
                    <h1>{t(`about.${tour.key}Title`)}</h1>
                    <p>{t(`about.${tour.key}Desc`)}</p>
                  </span>
                  <button className="about-btn">{t("about.btn")}</button>
                </div>
                <p>{t(`about.${tour.key}Extra`)}</p>
              </div>
              {index === 0 && <hr />} {/* faqat birinchi turdan keyin chiziq */}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default About;
