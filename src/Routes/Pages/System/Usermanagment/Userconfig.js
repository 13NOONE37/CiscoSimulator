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
      permission: 'Guest',
    },
  );
  const [username, setusername] = useState('');
  const [password1, setpassword1] = useState('');
  const [password2, setpassword2] = useState('');
  const [permission, setpermission] = useState('Guest');

  const [tempUsersToDelete, settempUsersToDelete] = useState(config.users);
  const [tempUsers, settempUsers] = useState(config.users);

  const handleClear = () => {
    setusername('');
    setpassword1('');
    setpassword2('');
    setpermission('Guest');
    setcurrentEdit(undefined);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentEdit == undefined) {
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
    } else {
      if (password1.length > 0 || username.length > 0) {
        let applyUser = true;
        config.users.map((item) => {
          if (item != currentEdit && item.username == username) {
            applyUser = false;
            alert(`User already exist`);
          }
        });
        if (password1 != password2) {
          applyUser = false;
          alert(`Password don't match`);
        }

        if (applyUser) {
          console.log(username, password1, permission);
          config.users.map((item) => {
            if (item === currentEdit) {
              item.username = username;
              item.password = password1;
              item.permission = permission;
            }
          });
          setusername('');
          setpassword1('');
          setpassword2('');
          setpermission('Guest');
        }
      }
    }
  };

  const usersRef = useRef(null);
  const handleDelete = () => {
    [].forEach.call(usersRef.current.children, (item) => {
      if (item.getAttribute('id') === 'userRow') {
        item.children[0].children[0].checked = false;
      }
    });
    settempUsers(tempUsersToDelete);
    config.users = tempUsersToDelete;
    settempUsersToDelete(config.users);
  };
  const handleSelectUser = (item) => {
    if (tempUsersToDelete.includes(item)) {
      settempUsersToDelete(tempUsersToDelete.filter((us) => us != item));
    } else {
      const temp = tempUsersToDelete;
      temp.push(item);
      settempUsersToDelete(temp);
    }
  };
  const [currentEdit, setcurrentEdit] = useState(undefined);
  const handleEdit = (item) => {
    setcurrentEdit(item);
    setusername(item.username);
    setpassword1(item.password);
    setpassword2(item.password);
    setpermission(item.permission);
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
            <MultiPage.Button>{t('Create')}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={160}>
            <span>{t('AccessLevel')}:</span>
            <MultiPage.Select
              options={['Guest', 'Admin']}
              selectProps={{
                value: localConfig.permisson,
                onChange: (e) =>
                  setLocalConfig({ ['permission']: e.target.value }),
              }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Clear')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={160}>
            <span>{t('Password')}:</span>
            <MultiPage.Input
              inputProps={{
                value: localConfig.password1,
                onChange: (e) =>
                  setLocalConfig({ ['password1']: e.target.value }),
              }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={160}>
            <span>{t('ConfirmPassword')}:</span>
            <MultiPage.Input
              inputProps={{
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
            names: ['UserID', 'UserName', 'AccessLevel', 'Operation'],
            fields: undefined,
            data: config.users.map((user) => [
              ...Object.values(user),
              <MultiPage.Button isBlank>Edit</MultiPage.Button>,
            ]),
          }}
          isPortSelect={false}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Delete')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          The user name should not be more than 16 characters using digits,
          English letters and underlines only and password should not be more
          than 31 characters
        </MultiPage.Note>
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
