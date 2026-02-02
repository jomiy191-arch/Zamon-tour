import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Bets.css";

import Img1 from "./Images/1rasm.jpg";
import Img2 from "./Images/2rasm.jpg";
import Img3 from "./Images/3rasm.jpg";
import Img4 from "./Images/4rasm.jpg";
import Img5 from "./Images/5rasm.jpg";
import Img6 from "./Images/6rasm.jpg";

import { FaUserFriends, FaMapMarkerAlt, FaHotel, FaPlane, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const cards = [
  { id: 1, title: { uz: "Angliya", en: "England", ru: "Англия" }, people: 234, image: Img1 },
  { id: 2, title: { uz: "Kanada", en: "Canada", ru: "Канада" }, people: 345, image: Img2 },
  { id: 3, title: { uz: "Yevropa Ittifoqi", en: "European Union", ru: "Европейский Союз" }, people: 345, image: Img3 },
  { id: 4, title: { uz: "Fransiya", en: "France", ru: "Франция" }, people: 210, image: Img4 },
  { id: 5, title: { uz: "Italiya", en: "Italy", ru: "Италия" }, people: 400, image: Img5 },
  { id: 6, title: { uz: "Ispaniya", en: "Spain", ru: "Испания" }, people: 320, image: Img6 },
];

const dealList = [
  { icon: <FaHotel />, text: { uz: "5 kunlik sayohat > Mehmonxona kiritilgan", en: "5 Days Trip > Hotel Included", ru: "5-дневная поездка > Отель включен" } },
  { icon: <FaPlane />, text: { uz: "Samolyot chiptasi kiritilgan", en: "Airplane Ticket Included", ru: "Авиабилет включен" } },
  { icon: <FaCheckCircle />, text: { uz: "Kunlik diqqatga sazovor joylarga tashrif", en: "Daily Places Visit", ru: "Ежедневные посещения мест" } },
];

const Bets = ({ lang }) => {
  return (
    <section className="bets-section">
      <div className="bets-header">
        <h2>{lang === "uz" ? "Eng Yaxshi Takliflar" : lang === "en" ? "Best Offers" : "Лучшие предложения"}</h2>
        <p>{lang === "uz" ? "Har bir shahar uchun maxsus tanlangan takliflar" : lang === "en" ? "Best offers selected for each city" : "Лучшие предложения для каждого города"}</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        centeredSlides
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            {({ isActive }) => (
              <div className={`bet-card ${isActive ? "active" : ""}`} style={{ backgroundImage: `url(${card.image})` }}>
                <div className="card-overlay" />
                <div className="card-content">
                  <h3 className="card-title">
                    <FaMapMarkerAlt className="title-icon" /> {card.title[lang]}
                  </h3>

                  <div className="card-stats">
                    <FaUserFriends /> {card.people} {lang === "uz" ? "odam" : lang === "en" ? "people" : "человек"}
                  </div>

                  <div className="deal-section">
                    {dealList.map((deal, i) => (
                      <div className="deal-item" key={i}>
                        <span className="deal-icon">{deal.icon}</span>
                        <span>{deal.text[lang]}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-footer">
                    <button className="reserve-btn">
                      {lang === "uz" ? "Rezervatsiya Qiling" : lang === "en" ? "Reserve" : "Забронировать"} <FaArrowRight className="btn-icon" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Bets;
