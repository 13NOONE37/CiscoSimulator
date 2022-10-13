import React, { useState } from "react";
import Logo from "resources/Images/Logo.png";
import { useTranslation } from "react-i18next";

import "css/Header.css";

export default function Header() {
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <header className='pageHeader'>
      <img src={Logo} />

      <div className='langBox'>
        <i className='fas fa-language'></i>
        <select className='langSelect' onChange={handleChange}>
          <option value='en'>{t("English")}</option>
          <option value='pl'>{t("Polish")}</option>
        </select>
      </div>
    </header>
  );
}
