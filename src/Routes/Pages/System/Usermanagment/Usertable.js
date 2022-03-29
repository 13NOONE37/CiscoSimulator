import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function Usertable() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.DefaultTable
          title={t('UserTable')}
          navItems={[t('UserID'), t('Username'), t('AccessLevel')]}
          gridTemp={'150px 150px 1fr'}
          data={config.users.map((item, index) => [
            index + 1,
            item.username,
            item.permission,
          ])}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
