import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Cart.css";

const translations = {
  uz: {
    title: "Rezervatsiyangizni amalga oshiring",
    subtitle: "Ushbu forma orqali",
    name: "Ismingiz",
    phone: "Telefon raqamingiz",
    guests: "Mehmonlar soni",
    date: "Kelish sanasi",
    destination: "Manzilni tanlang",
    visa: "Viza qo‘llab-quvvatlashni tanlang",
    button: "Rezervatsiyani amalga oshiring",
    destinations: ["Antalya", "Dubay", "Istanbul", "Sharm El Sheikh"],
    visas: ["Mamlakat", "Turistik viza", "Biznes viza", "Viza kerak emas"],
  },
  en: {
    title: "Make Your Reservation",
    subtitle: "Through This Form",
    name: "Your Name",
    phone: "Your Phone Number",
    guests: "Number Of Guests",
    date: "Check In Date",
    destination: "Choose Your Destination",
    visa: "Choose Your Visa Support",
    button: "Make Your Reservation Now",
    destinations: ["Antalya", "Dubai", "Istanbul", "Sharm El Sheikh"],
    visas: ["Country", "Tourist Visa", "Business Visa", "No Visa Needed"],
  },
  ru: {
    title: "Сделайте вашу бронь",
    subtitle: "Через эту форму",
    name: "Ваше имя",
    phone: "Ваш номер телефона",
    guests: "Количество гостей",
    date: "Дата прибытия",
    destination: "Выберите направление",
    visa: "Выберите поддержку визы",
    button: "Сделать бронь",
    destinations: ["Анталья", "Дубай", "Стамбул", "Шарм Эль-Шейх"],
    visas: ["Страна", "Туристическая виза", "Бизнес виза", "Виза не требуется"],
  }
};

const Cart = ({ lang }) => {
  const t = translations[lang] || translations["en"];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    destination: t.destinations[0],
    visa: t.visas[0],
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const botToken = "YOUR_BOT_TOKEN"; // ⚠️ Frontendda ishlatish xavfsiz emas
    const chatId = "YOUR_CHAT_ID";

    const message = `
📝 New Reservation:
Name: ${formData.name}
Phone: ${formData.phone}
Guests: ${formData.guests}
Check-in: ${formData.date}
Destination: ${formData.destination}
Visa: ${formData.visa}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      message
    )}`;

    try {
      const res = await fetch(url);
      if (res.ok) {
        alert("Reservation sent successfully!");
        setFormData({
          name: "",
          phone: "",
          guests: "",
          date: "",
          destination: t.destinations[0],
          visa: t.visas[0],
        });
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    }

    setLoading(false);
  };

  return (
    <section className="cart-section">
      <div className="cart-map-container" data-aos="zoom-in">
        <iframe
          title="Our Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.227713445256!2d69.2810!3d41.3210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzE0LjAiTiA2OcKwMTYnMjkuNiJF!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="cart-container" data-aos="fade-up">
        <h2 className="cart-title" data-aos="fade-up" data-aos-delay="100">{t.title}</h2>
        <p className="cart-subtitle" data-aos="fade-up" data-aos-delay="200">{t.subtitle}</p>

        <form className="cart-form" onSubmit={handleSubmit}>
          <div className="cart-field" data-aos="zoom-in" data-aos-delay="100">
            <input type="text" name="name" placeholder={t.name} value={formData.name} onChange={handleChange} required />
            <label>{t.name}</label>
          </div>

          <div className="cart-field" data-aos="zoom-in" data-aos-delay="200">
            <input type="tel" name="phone" placeholder={t.phone} value={formData.phone} onChange={handleChange} required />
            <label>{t.phone}</label>
          </div>

          <div className="cart-field" data-aos="zoom-in" data-aos-delay="300">
            <input type="number" name="guests" placeholder={t.guests} value={formData.guests} onChange={handleChange} required />
            <label>{t.guests}</label>
          </div>

          <div className="cart-field" data-aos="zoom-in" data-aos-delay="400">
            <input type="date" name="date" placeholder={t.date} value={formData.date} onChange={handleChange} required />
            <label>{t.date}</label>
          </div>

          <div className="cart-field-full" data-aos="zoom-in" data-aos-delay="500">
            <select name="destination" value={formData.destination} onChange={handleChange}>
              {t.destinations.map((d) => <option key={d}>{d}</option>)}
            </select>
            <label>{t.destination}</label>
          </div>

          <div className="cart-field-full" data-aos="zoom-in" data-aos-delay="600">
            <select name="visa" value={formData.visa} onChange={handleChange}>
              {t.visas.map((v) => <option key={v}>{v}</option>)}
            </select>
            <label>{t.visa}</label>
          </div>

          <button type="submit" className="cart-btn" disabled={loading} data-aos="zoom-in" data-aos-delay="700">
            {loading ? "Sending..." : t.button}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Cart;
