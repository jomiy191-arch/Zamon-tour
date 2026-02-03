import React, { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { initI18n } from "./i18n";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Bets from "./components/Bets/Bets";
import Make from "./components/Make/Make";
import Tours from "./components/Tours/Tours";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";

import Footer from "./components/Footer/Footer";

import { ThreeDots } from "react-loader-spinner"; // <-- ThreeDots import
import "./App.css";

function App() {
  const [lang, setLang] = useState("uz");
  const [ready, setReady] = useState(false);
  const [showLoading, setShowLoading] = useState(true); // 3 soniya loader


  useEffect(() => {
    initI18n()
      .then(() => setReady(true))
      .catch(console.error);

    // 3 soniya loading
    const timer = setTimeout(() => setShowLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (ready) i18n.changeLanguage(lang);
  }, [lang, ready]);

  if (!ready || showLoading)
    return (
      <div className="loading-container">
        <ThreeDots
          color="#1b8f7c"
          height={80}
          width={80}
          ariaLabel="loading"
        />
        <p className="loading-text">Zamontour.uz</p>
      </div>
    );
    

  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Header lang={lang} setLang={setLang} />
        <Hero />
        <About />
        <Bets lang={lang} />
        <Make lang={lang} />
        <Tours lang={lang} />
        <Cart lang={lang} />
        <Contact lang={lang} />
        <Footer lang={lang} />
      </div>
    </I18nextProvider>
  );
}

export default App;
