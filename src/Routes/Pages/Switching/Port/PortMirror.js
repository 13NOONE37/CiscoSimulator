import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';
export default function PortMirror() {
  //#TODO: workflow
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const localPortMirror = [
    ...config.mirrorList.map((item) => [
      item.group,
      item.mirroring,
      <MultiPage.DevidedColumn data={[item[2]]} />,
      <MultiPage.DevidedColumn data={[item[3]]} />,
      <MultiPage.Button isBlank>{t('Edit')}</MultiPage.Button>,
    ]),
  ];
  console.log(localPortMirror);
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.DefaultTable
          title={t('MirrorGroupList')}
          gridTemp={'repeat(3, 75px) 1fr 75px'}
          navItems={[
            t('Group'),
            t('Mirroring'),
            t('Mode'),
            t('MirroredPort'),
            t('Operation'),
          ]}
          data={localPortMirror}
        />
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  
  );
}
