// Make.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Make.css";

// Rasmlar
import Img1 from "./Images/china.jpg";
import Img2 from "./Images/hongkong.jpg";
import Img3 from "./Images/schengen.jpg";
import Img4 from "./Images/usa.jpg";
import Img5 from "./Images/uk.jpg";

// Ikonalar
import { FaUserFriends, FaMapMarkerAlt, FaHotel, FaPlane, FaCheckCircle, FaArrowRight } from "react-icons/fa";

// Card ma’lumotlari
const cards = [
  { id: 1, title: { uz: "Xitoy", en: "China", ru: "Китай" }, people: 234, image: Img1 },
  { id: 2, title: { uz: "Gonkong", en: "Hong Kong", ru: "Гонконг" }, people: 345, image: Img2 },
  { id: 3, title: { uz: "Shengen", en: "Schengen", ru: "Шенген" }, people: 345, image: Img3 },
  { id: 4, title: { uz: "AQSh", en: "USA", ru: "США" }, people: 210, image: Img4 },
  { id: 5, title: { uz: "Buyuk Britaniya", en: "UK", ru: "Великобритания" }, people: 400, image: Img5 },
];

// Deal ma’lumotlari
const dealList = [
  { icon: <FaHotel />, text: { uz: "5 kunlik sayohat > Mehmonxona kiritilgan", en: "5 Days Trip > Hotel Included", ru: "5 дней поездки > Отель включен" } },
  { icon: <FaPlane />, text: { uz: "Samolyot chiptasi kiritilgan", en: "Airplane Ticket Included", ru: "Авиабилет включен" } },
  { icon: <FaCheckCircle />, text: { uz: "Har kun sayohat joylari", en: "Daily Places Visit", ru: "Ежедневные экскурсии" } },
];

// Komponent
const Make = ({ lang }) => {
  return (
    <section className="make-section" id="tours">
      {/* Header */}
      <div className="make-header">
        <h2>
          {lang === "uz" ? "Visa support" : lang === "en" ? "Visa support" : "Поддержка визы"}
        </h2>
        <p>
          {lang === "uz"
            ? "Tinch sayohat uchun vizalar bo‘yicha mutaxassislarimiz yordam beradi. Biz sizga qulay va to‘liq yo‘l-yo‘riq taqdim etamiz."
            : lang === "en"
            ? "Experience stress-free travel with our expert visa support. We provide seamless assistance and comprehensive guidance, ensuring a smooth journey."
            : "Наши эксперты по визам обеспечат вам беззаботное путешествие. Мы предоставляем полное руководство и помощь."}
        </p>
      </div>

      {/* Swiper Slider */}
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
              <div
                className={`make-card ${isActive ? "active" : ""}`}
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="card-overlay" />

                <div className="card-content">
                  <h3 className="card-title">
                    <FaMapMarkerAlt className="title-icon" /> {card.title[lang]}
                  </h3>

                  <div className="card-stats">
                    <FaUserFriends /> {card.people}{" "}
                    {lang === "uz" ? "odam" : lang === "en" ? "people" : "человек"}
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
                      {lang === "uz" ? "Bron qilish" : lang === "en" ? "Reserve" : "Забронировать"}{" "}
                      <FaArrowRight className="btn-icon" />
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

export default Make;
