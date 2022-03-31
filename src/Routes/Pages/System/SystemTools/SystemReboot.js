import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function SystemReboot() {
  const { t } = useTranslation();
  const { setLoggedIn } = useContext(AppContext);

  const handleReboot = () => {
    setLoggedIn(false);
  };
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={700}>
        <MultiPage.Title>{t('SystemReboot')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.Text>{t('SaveConfig')}:</MultiPage.Text>
            <MultiPage.Input
              inputProps={{ type: 'checkbox', style: { marginLeft: '20px' } }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.Text>Reboot:</MultiPage.Text>
            <div style={{ width: '60px' }}>
              <MultiPage.Button isSpecial action={handleReboot}>
                {t('Reboot')}
              </MultiPage.Button>
            </div>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Note>
          To avoid damage, please don't turn off the device while rebooting.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
