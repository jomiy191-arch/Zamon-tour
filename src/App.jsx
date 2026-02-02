import React, { useState, useEffect } from "react";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Best from "./components/About/About";
import Make from "./components/Make/Make";
import About from "./components/About/About";
import Tours from "./components/Tours/Tours";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import "./App.css";

const App = () => {
  const [lang, setLang] = useState("uz");
  const [loading, setLoading] = useState(true);

  // Birinchi ochilganda loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 soniya
    return () => clearTimeout(timer);
  }, []);

  // Til o‘zgartirilganda loading
  const handleLangChange = (newLang) => {
    setLoading(true);
    setLang(newLang);
    setTimeout(() => setLoading(false), 800);
  };

  if (loading) {
    return (
      <div className="app-loader">
        <div className="dots-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header lang={lang} setLang={handleLangChange} />
      <Hero lang={lang} />
      <Best lang={lang} />
      <hr />
      <Make lang={lang} />
      <About lang={lang} />
      <Tours lang={lang} />
      <Slider lang={lang} />
      <Contact lang={lang} />
      <Cart lang={lang} />
      <Footer lang={lang} />
    </>
  );
};

export default App;
