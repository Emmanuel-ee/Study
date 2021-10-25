import React from "react";
import { useTranslation } from "react-i18next";
import { i18n } from './i18n';
import { useState } from 'react'

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  const [username, setUsername] = useState('')
  const usernameRef = React.createRef()

  const languageClick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
  const clickbutton = () => setUsername()
  return (
    <div>
      <div style={{ textAlign: language === "arab" ? "right" : "left" }}>
        <label>  {t("languageSelectMsg")} </label>
        <select onChange={languageClick}>
          <option value="en">ENGLISH</option>
          <option value="es">SPANISH</option>
          <option value="zh">CHINESE</option>
          <option value="arab">ARABIC</option>
        </select>
        <br />
        <label>{t("usernameMsg")}</label>
        <input type="text" name="username" ref={usernameRef} />
        <br />
        <button onClick={clickbutton}>{t('clickMsg')}</button>
        <br />
        {username === '' ? <div></div> : <div>{t('welcomeMsg')} {username}</div>}
      </div>
    </div>
  );
}

export default App;
