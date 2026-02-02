import React, { useEffect } from 'react';
import './About.css';
import Afr from "./Images/railway.jpg";
import Air from "./Images/airplane.jpg"; // <- typo tuzatildi
import AOS from 'aos';
import 'aos/dist/aos.css';

const translations = {
  uz: {
    headerTitle: "Sayohatlarimizni kashf eting",
    headerDesc: "Mutaxassis qo'llanmalarimiz va tanlangan tajribalarimiz bilan ajoyib sayohat manzillarini kashf qiling. Rejalashtirish stresssiz va unutilmas xotiralar bilan to‘la bo‘ladi.",
    tour1Title: "Afrika Safari Sarguzashtlari",
    tour1Desc: "Afrikaning eng ajoyib manzaralari bo‘ylab hayajonli safari safariga chiqing.",
    tour1Extra: "Yovvoyi tabiatni yaqinroq kuzatib, Afrikaning markazini o‘rganishda hashamatli mehmonxonalardan bahramand bo‘ling.",
    tour2Title: "Havo Sayohati Tajribasi",
    tour2Desc: "Dunyo bo‘ylab yangi ufqlarni kashf etishda qulaylik va uslubda uching.",
    tour2Extra: "Bizning havo sayohati paketlarimiz qulaylik, xavfsizlik va premium sayohat tajribasini kafolatlaydi.",
    btn: "Ko‘proq bilish"
  },
  en: {
    headerTitle: "Explore Our Tours",
    headerDesc: "Discover amazing travel destinations with our expert guides and curated experiences. Enjoy stress-free planning and unforgettable memories.",
    tour1Title: "African Safari Adventure",
    tour1Desc: "Embark on a thrilling safari journey across Africa's most breathtaking landscapes.",
    tour1Extra: "Experience wildlife up close and enjoy luxury lodges while exploring the heart of Africa.",
    tour2Title: "Air Travel Experience",
    tour2Desc: "Fly in comfort and style while discovering new horizons across the globe.",
    tour2Extra: "Our air travel packages ensure convenience, safety, and a premium travel experience.",
    btn: "Learn More"
  },
  ru: {
    headerTitle: "Исследуйте наши туры",
    headerDesc: "Откройте для себя удивительные туристические направления с нашими опытными гидами и тщательно подобранными впечатлениями. Наслаждайтесь планированием без стресса и незабываемыми воспоминаниями.",
    tour1Title: "Приключение в африканском сафари",
    tour1Desc: "Отправляйтесь в захватывающее сафари по самым впечатляющим ландшафтам Африки.",
    tour1Extra: "Наблюдайте за дикой природой и наслаждайтесь роскошными лоджами, исследуя сердце Африки.",
    tour2Title: "Опыт воздушных путешествий",
    tour2Desc: "Летайте с комфортом и стилем, открывая новые горизонты по всему миру.",
    tour2Extra: "Наши авиационные пакеты обеспечивают удобство, безопасность и премиальный опыт путешествия.",
    btn: "Узнать больше"
  }
};

const About = ({ lang }) => {
  const t = translations[lang];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <aside id="about" className="about-section">
      <div className="about-container">
        <div className="about-header" data-aos="fade-up">
          <h1>{t.headerTitle}</h1>
          <p>{t.headerDesc}</p>
        </div>

        <div className="about-tours-list">

          {/* Tour 1 */}
          <div className="about-tour-item" data-aos="fade-up">
            <div className="about-tour-image">
              <img src={Afr} alt={t.tour1Title} />
            </div>
            <div className="about-tour-content">
              <div className="about-tour-top">
                <span>
                  <h1>{t.tour1Title}</h1>
                  <p>{t.tour1Desc}</p>
                </span>
                <button className="about-btn">{t.btn}</button>
              </div>
              <p>{t.tour1Extra}</p>
            </div>
          </div>

          <hr />

          {/* Tour 2 */}
          <div className="about-tour-item" data-aos="fade-up">
            <div className="about-tour-image">
              <img src={Air} alt={t.tour2Title} />
            </div>
            <div className="about-tour-content">
              <div className="about-tour-top">
                <span>
                  <h1>{t.tour2Title}</h1>
                  <p>{t.tour2Desc}</p>
                </span>
                <button className="about-btn">{t.btn}</button>
              </div>
              <p>{t.tour2Extra}</p>
            </div>
          </div>

        </div>
      </div>
    </aside>
  );
};

export default About;
