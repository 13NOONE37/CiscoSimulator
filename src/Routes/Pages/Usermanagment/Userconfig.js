import React, { useState } from 'react';
import handleGlobalChange from 'utils/handleGlobalChange';

export default function Userconfig({ t, config }) {
  const [username, setusername] = useState('');
  const [password1, setpassword1] = useState('');
  const [password2, setpassword2] = useState('');
  const [permission, setpermission] = useState('Guest');
  const [editUser, seteditUser] = useState([]);

  const handleClear = () => {
    setusername('');
    setpassword1('');
    setpassword2('');
    setpermission('Guest');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((password1.length > 0) | (username.length > 0)) {
      let addUser = true;
      config.users.map((item) => {
        if (item.username == username) {
          addUser = false;
          alert(`User already exist`);
        }
      });
      if (password1 != password2) {
        addUser = false;
        alert(`Password don't match`);
      }

      if (addUser) {
        config.users.push({ username, password: password1, permission });
        setusername('');
        setpassword1('');
        setpassword2('');
        setpermission('Guest');
      }
    }
  };
  const handleDelete = () => {
    console.log(
      editUser,
      config.users,
      config.users.filter((item) => !editUser.includes(item.name)),
    );
  };
  const handleSelectUser = (item) => {
    console.log(item);
    if (editUser.includes(item.name)) {
      seteditUser(editUser.filter((us) => us != item.name));
    } else {
      editUser.push(item.name);
    }
    console.log(editUser);
  };
  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('Info_UserInfo')}</div>
        <form onSubmit={handleSubmit} className="tplinkFormBase1">
          <span>
            {t('UserName')}:
            <input
              className="basicInput"
              type="text"
              maxLength={16}
              value={username}
              onChange={(e) => handleGlobalChange(e, setusername)}
              required
            />
          </span>
          <span>
            {t('AccessLevel')}:
            <select
              className="basicInput"
              onChange={(e) => handleGlobalChange(e, setpermission)}
              defaultValue={permission}
            >
              <option value="Guest">{t('Guest')}</option>
              <option value="Admin">{t('Admin')}</option>
            </select>
            <input type="submit" className="moveRight" value={t('Create')} />
          </span>
          <span>
            {t('Password')}:
            <input
              className="basicInput"
              type="password"
              maxLength={31}
              value={password1}
              onChange={(e) => handleGlobalChange(e, setpassword1)}
              required
            />
            <input
              type="button"
              className="moveRight"
              value={t('Clear')}
              onClick={handleClear}
            />
          </span>
          <span>
            {t('ConfirmPassword')}:
            <input
              className="basicInput"
              type="password"
              maxLength={31}
              value={password2}
              onChange={(e) => handleGlobalChange(e, setpassword2)}
              required
            />
          </span>
        </form>
        <div className="tplinkBoxBase1">
          <div className="InfoTable">
            <div className="row InfoTableTitle">{t('Usertable')}</div>
            <div className="rowUser rowUserSpecial tableNav ">
              <span>{t('select')}</span>
              <span>{t('userID')}</span>
              <span>{t('Username')}</span>
              <span>{t('AccessLevel')}</span>
              <span>{t('operation')}</span>
            </div>
            {config.users.map((item, index) => (
              <div className="rowUser rowUserSpecial" key={index}>
                <span>
                  <input
                    type="checkbox"
                    name="user"
                    onClick={() => handleSelectUser(item)}
                  />
                </span>
                <span>{index + 1}</span>
                <span>{item.username}</span>
                <span>{item.permission}</span>
                <span>
                  <button>{t('Edit')}</button>
                </span>
              </div>
            ))}
          </div>
          <div className="buttonsRow">
            <button className="basicInput actionButton" onClick={handleDelete}>
              {t('Delete')}
            </button>
            <button className="basicInput actionButton">{t('Help')}</button>
          </div>
        </div>
        <div className="note">
          The user name should not be more than 16 characters using digits,
          English letters and underlines only and password should not be more
          than 31 characters
        </div>
      </div>
    </article>
  );
}
