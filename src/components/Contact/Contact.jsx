import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Head from "./Images/Metro.jpg";
import { FaPhoneFlip, FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import "./Contact.css";

const translations = {
  uz: {
    subtitle: "Eng qulay taklifni shu yerda bron qiling",
    title: "Buyurtma Berish",
    button: "Xabar Yuborish",
    phoneTitle: "Telefon orqali bog‘lanish",
    emailTitle: "Email orqali yozing",
    addressTitle: "Ofisimizga tashrif",
    addressText: "15/25, Chilonzor-9, Toshkent shahri",
  },
  en: {
    subtitle: "Book Your Preferred Deal Here",
    title: "Make Your Reservation",
    button: "Send Message",
    phoneTitle: "Make a Phone Call",
    emailTitle: "Contact Us via Email",
    addressTitle: "Visit Our Offices",
    addressText: "15/25, Chilanzar-9, Tashkent city",
  },
  ru: {
    subtitle: "Забронируйте выгодное предложение здесь",
    title: "Сделать бронирование",
    button: "Отправить сообщение",
    phoneTitle: "Позвоните нам",
    emailTitle: "Напишите нам на почту",
    addressTitle: "Посетите наш офис",
    addressText: "15/25, Чиланзар-9, город Ташкент",
  },
};

const Contact = ({ lang = "uz" }) => {
  const t = translations[lang];

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section id="contacts" className="contact-section" >
      {/* HERO */}
      <div
        className="contact-hero"
        style={{ backgroundImage: `url(${Head})` }}
        id="contact-hero" 
      >
        <div className="contact-overlay" id="contact" />

        <div className="contact-hero-content" data-aos="zoom-in">
          <span className="contact-subtitle">{t.subtitle}</span>
          <h1 className="contact-title">{t.title}</h1>
          <button className="contact-btn">{t.button}</button>
        </div>
      </div>

      {/* CARDS */}
      <div className="contact-cards-wrapper">
        <ContactCard
          icon={<FaPhoneFlip />}
          title={t.phoneTitle}
          text="+998 99 299 99 96"
          link="tel:+998992999996"
          aos="zoom-in-up"
        />

        <ContactCard
          icon={<MdMarkEmailUnread />}
          title={t.emailTitle}
          text="zamonbiznestour@mail.ru"
          link="mailto:zamonbiznestour@mail.ru"
          aos="zoom-in-up"
        />

        <ContactCard
          icon={<FaLocationDot />}
          title={t.addressTitle}
          text={t.addressText}
          link="#"
          aos="zoom-in-up"
        />
      </div>
    </section>
  );
};

const ContactCard = ({ icon, title, text, link, aos }) => (
  <a href={link} className="contact-card" data-aos={aos}>
    <div className="contact-card-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{text}</p>
  </a>
);

export default Contact;
