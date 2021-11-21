import React, { useContext, useState } from 'react';
import AppContext from 'store/AppContext';
import 'css/Auth.css';
import Loading from 'components/Loading';
import { useTranslation } from 'react-i18next';

export default function Auth() {
  const { t } = useTranslation();
  const [loggedIn, setLoggedIn, config, setConfig] = useContext(AppContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setisError] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const handleChangeValue = (e, setValue) => {
    setisError(false);
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);

    setTimeout(() => {
      if (username.length > 0 && password.length > 0) {
        if (username == 'admin' && password == 'admin') {
          setLoggedIn(true);
        } else {
          setisError(true);
        }
        setisLoading(false);
      }
    }, 200);
  };

  return (
    <div className="authPage" onSubmit={handleSubmit}>
      <form>
        {isError && <span className="error">{t('LoginError')}</span>}
        <span>
          <i className="fas fa-user"></i>
          <input
            className="authInput"
            placeholder={t('Username')}
            type="text"
            value={username}
            required
            onChange={(e) => {
              handleChangeValue(e, setUsername);
            }}
          />
        </span>
        <span>
          <i className="fas fa-key"></i>
          <input
            className="authInput"
            placeholder={t('Password')}
            type="password"
            value={password}
            required
            onChange={(e) => {
              handleChangeValue(e, setPassword);
            }}
          />
        </span>

        <button type="submit" className="authSubmit">
          {isLoading ? <Loading size={6} /> : t('Login')}
        </button>
      </form>
    </div>
  );
}
