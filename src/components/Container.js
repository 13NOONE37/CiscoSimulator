import React, { useContext } from 'react';
// import ContentContainer from './ContentContainer';
import AppContext from 'store/AppContext';
import { useTranslation } from 'react-i18next';

export default function Container() {
  const [loggedIn, setLoggedIn, config, setConfig] = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <main className="container">
      {/* <ContentContainer config={config} setConfig={setConfig} t={t} /> */}
    </main>
  );
}
