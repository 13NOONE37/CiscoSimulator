import React, { useState } from 'react';

export default function PortMirror({ t, config }) {
  const [mirrorGroupList, setmirrorGroupList] = useState(config.mirrorList);

  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTable mirrorTable">
          <div className="row InfoTableTitle">{t('MirrorGroupList')}</div>
          <div className="rowUser tableNav">
            <span>{t('Group')}</span>
            <span>{t('Mirroring')}</span>
            <span>{t('Mode')}</span>
            <span>{t('Mirrored Port')}</span>
            <span>{t('Operation')}</span>
          </div>
          {mirrorGroupList.map((item, index) => (
            <div className="rowUser" key={index}>
              <span>{item.group}</span>
              <span>{item.mirroring}</span>
              <span className="devideSquare">
                {t('Ingress')}
                <span className="devider"></span>
                {t('Egress')}
              </span>
              <span className="devideSquare">
                {item.mirroredPortIngress.length > 0
                  ? item.mirroredPortIngress
                  : '---'}
                <span className="devider"></span>
                {item.mirroredPortEgress.length > 0
                  ? item.mirroredPortEgress
                  : '---'}
              </span>
              <span>
                <button className="buttonClear">{t('Edit')}</button>
              </span>
            </div>
          ))}
        </div>
        <div class="buttonsRow">
          <button class="basicInput actionButton">Help</button>
        </div>
      </div>
      <div className="note"></div>
    </article>
  );
}
