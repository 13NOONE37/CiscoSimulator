import React, { useRef, useState, useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';
export default function Userconfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: '',
      password1: '',
      password2: '',
      passwordCompare: '',
      permission: 'Guest',
      isEditing: false,
    },
  );

  const [tempUsers, settempUsers] = useState(config.users);

  const handleClear = () => {
    setLocalConfig({ ['username']: '' });
    setLocalConfig({ ['password1']: '' });
    setLocalConfig({ ['password2']: '' });
    setLocalConfig({ ['passwordCompare']: '' });
    setLocalConfig({ ['permission']: 'Guest' });
    setLocalConfig({ ['isEditing']: false });
  };
  const handleEdit = ({ username, password, permission }, index) => {
    setLocalConfig({ ['username']: username });
    setLocalConfig({ ['passwordCompare']: password });
    setLocalConfig({ ['permission']: permission });
    setLocalConfig({ ['isEditing']: index + 1 });
  };

  const handleSubmit = () => {
    if (
      localConfig.username.length > 0 &&
      localConfig.password1.length > 0 &&
      localConfig.password2.length > 0
    ) {
      let addUser = true;
      config.users.map((item) => {
        if (item.username == localConfig.username) {
          addUser = false;
          alert(t('User already exist'));
        }
      });
      if (localConfig.password1 != localConfig.password2) {
        addUser = false;
        alert(t("Password don't match"));
      }
      if (addUser) {
        let temp = tempUsers;
        temp.push({
          username: localConfig.username,
          password: localConfig.password1,
          permission: localConfig.permission,
          checked: false,
        });
        console.log(temp);
        settempUsers(temp);
        // MultiPage.handleApplyToConfig(config, temp, 'users');
        handleClear();
      }
    }
  };
  const handleModify = () => {
    if (
      localConfig.username.length > 0 &&
      localConfig.password1.length > 0 &&
      localConfig.password2.length > 0
    ) {
      let addUser = true;
      if (
        tempUsers.filter(
          ({ username }, index) =>
            username == localConfig.username &&
            localConfig.isEditing - 1 != index,
        ).length > 0
      ) {
        addUser = false;
        alert(t('User already exist'));
      }

      if (localConfig.password1 != localConfig.passwordCompare) {
        addUser = false;
        alert(t('Old password is wrong'));
      }
      if (addUser) {
        let temp = tempUsers;
        temp[localConfig.isEditing - 1] = {
          username: localConfig.username,
          password: localConfig.password2,
          permission: localConfig.permission,
          checked: temp[localConfig.isEditing - 1]?.checked,
        };
        console.log(temp);
        settempUsers(temp);
        // MultiPage.handleApplyToConfig(config, temp, 'users');
        handleClear();
      }
    }
  };

  const handleDelete = () => {
    let temp = tempUsers;
    let isCorrect = true;
    temp = temp.filter((user) => !user.checked);

    if (temp.length == 0) {
      isCorrect = false;
      alert(t("You can't delete all users"));
    }

    if (isCorrect) {
      temp = temp.map((user) => {
        user.checked = false;
        return user;
      });
      settempUsers(temp);
    }
  };
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('UserInfo')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={160}>
            <span>{t('Username')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'text',
                value: localConfig.username,
                maxLength: 16,
                onChange: (e) =>
                  setLocalConfig({ ['username']: e.target.value }),
              }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={localConfig.isEditing ? handleModify : handleSubmit}
            >
              {localConfig.isEditing ? t('Modify') : t('Create')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={160}>
            <span>{t('AccessLevel')}:</span>
            <MultiPage.Select
              options={['Guest', 'Admin']}
              selectProps={{
                value: localConfig.permission,
                onChange: (e) =>
                  setLocalConfig({ ['permission']: e.target.value }),
              }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button action={handleClear}>
              {t('Clear')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={160}>
            <span>
              {localConfig.isEditing ? t('OldPassword') : t('Password')}:
            </span>
            <MultiPage.Input
              inputProps={{
                type: 'password',
                value: localConfig.password1,
                onChange: (e) =>
                  setLocalConfig({ ['password1']: e.target.value }),
              }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={160}>
            <span>
              {localConfig.isEditing ? t('NewPassword') : t('ConfirmPassword')}:
            </span>
            <MultiPage.Input
              inputProps={{
                type: 'password',
                value: localConfig.password2,
                onChange: (e) =>
                  setLocalConfig({ ['password2']: e.target.value }),
              }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>
      <MultiPage.Section>
        <MultiPage.EditableTable
          title={t('UserTable')}
          data={{
            names: ['Select', 'UserID', 'Username', 'AccessLevel', 'Operation'],
            fields: [
              { type: 'disabled' },
              { type: 'disabled' },
              { type: 'disabled' },
              { type: 'disabled' },
              { type: 'disabled' },
            ],
            data: tempUsers.map((user, index) => [
              <input
                type="checkbox"
                checked={user.checked}
                onChange={() => {
                  let temp = tempUsers;
                  temp[index].checked = !temp[index]?.checked;
                  settempUsers(temp);
                }}
              />,
              String(index + 1),
              user.username,
              user.permission,
              <MultiPage.Button isBlank action={() => handleEdit(user, index)}>
                {t('Edit')}
              </MultiPage.Button>,
            ]),
          }}
          isPortSelect={false}
          isAllSelect={false}
          isLeftPortSelect={false}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial action={handleDelete}>
            {t('Delete')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note3')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
    // <article>
    //   <div className="tplinkBoxBase1">
    //     <div className="InfoTableTitle">{t('Info_UserInfo')}</div>
    //     <form onSubmit={handleSubmit} className="tplinkFormBase1">
    //       <span>
    //         {t('Username')}:
    //         <input
    //           className="basicInput"
    //           type="text"
    //           maxLength={16}
    //           value={username}
    //           onChange={(e) => handleGlobalChange(e, setusername)}
    //           required
    //         />
    //       </span>
    //       <span>
    //         {t('AccessLevel')}:
    //         <select
    //           className="basicInput"
    //           onChange={(e) => handleGlobalChange(e, setpermission)}
    //           value={permission}
    //         >
    //           <option value="Guest">{t('Guest')}</option>
    //           <option value="Admin">{t('Admin')}</option>
    //         </select>
    //         <input
    //           type="submit"
    //           className="moveRight buttonPointer"
    //           value={currentEdit == undefined ? t('Create') : t('Apply')}
    //         />
    //       </span>
    //       <span>
    //         {t('Password')}:
    //         <input
    //           className="basicInput"
    //           type="password"
    //           maxLength={31}
    //           value={password1}
    //           onChange={(e) => handleGlobalChange(e, setpassword1)}
    //           required
    //         />
    //         <input
    //           type="button"
    //           className="moveRight buttonPointer"
    //           value={currentEdit == undefined ? t('Clear') : t('Cancel')}
    //           onClick={handleClear}
    //         />
    //       </span>
    //       <span>
    //         {t('ConfirmPassword')}:
    //         <input
    //           className="basicInput"
    //           type="password"
    //           maxLength={31}
    //           value={password2}
    //           onChange={(e) => handleGlobalChange(e, setpassword2)}
    //           required
    //         />
    //       </span>
    //     </form>
    //     <div className="tplinkBoxBase1">
    //       <div className="InfoTable" ref={usersRef}>
    //         <div className="row InfoTableTitle">{t('Usertable')}</div>
    //         <div className="rowUser rowUserSpecial tableNav ">
    //           <span>{t('Select')}</span>
    //           <span>{t('userID')}</span>
    //           <span>{t('Username')}</span>
    //           <span>{t('AccessLevel')}</span>
    //           <span>{t('Operation')}</span>
    //         </div>
    //         {tempUsers.map((item, index) => (
    //           <div className="rowUser rowUserSpecial" id="userRow" key={index}>
    //             <span>
    //               <input
    //                 type="checkbox"
    //                 name="user"
    //                 defaultChecked={false}
    //                 onChange={() => handleSelectUser(item)}
    //               />
    //             </span>
    //             <span>{index + 1}</span>
    //             <span>{item.username}</span>
    //             <span>{item.permission}</span>
    //             <span>
    //               <button
    //                 className="buttonClear"
    //                 onClick={() => handleEdit(item)}
    //               >
    //                 {t('Edit')}
    //               </button>
    //             </span>
    //           </div>
    //         ))}
    //       </div>
    //       <div className="buttonsRow">
    //         <button className="basicInput actionButton" onClick={handleDelete}>
    //           {t('Delete')}
    //         </button>
    //         <button className="basicInput actionButton buttonPointer">
    //           {t('Help')}
    //         </button>
    //       </div>
    //     </div>
    //     {/* <Note
    //       content={
    //         <>
    //           <br />
    //           The user name should not be more than 16 characters using digits,
    //           English letters and underlines only and password should not be
    //           more than 31 characters
    //         </>
    //       }
    //     /> */}
    //   </div>
    // </article>
  );
}
