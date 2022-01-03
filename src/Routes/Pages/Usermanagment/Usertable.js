import React from 'react';
import 'css/System/InfoTable.css';

export default function Usertable({ t, config }) {
  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTable">
          <div className="row InfoTableTitle">{t('Usertable')}</div>
          <div className="rowUser tableNav">
            <span>{t('userID')}</span>
            <span>{t('Username')}</span>
            <span>{t('AccessLevel')}</span>
          </div>
          {config.users.map((item, index) => (
            <div className="rowUser" key={index}>
              <span>{index + 1}</span>
              <span>{item.username}</span>
              <span>{item.permission}</span>
            </div>
          ))}
        </div>
        <button className="basicInput bottomButton">{t('Refresh')}</button>
      </div>
    </article>
  );
}
