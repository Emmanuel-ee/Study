import React from "react";
import { useTranslation } from "react-i18next";
import { i18n } from './translations/i18n';
import { useState } from 'react'

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
  return (
    <div>
      <div style={{ textAlign: language === "arab" ? "right" : "left" }}>
        <p>
          {t("welcome")}
        </p>
        <p>
          {t("date_format_one", { date: new Date() })}
        </p>
        <p>
          {t("date_format_two", { date: new Date() })}
        </p>
        <button value='arab' onClick={handleOnclick}>
          Arabic
        </button>
        <button value='en' onClick={handleOnclick}>
          English
        </button>
        <button value='es' onClick={handleOnclick}>
          Spanish
        </button>
        <button value='zh' onClick={handleOnclick}>
          Chinese
        </button>
      </div>
    </div>
  );
}

export default App;
