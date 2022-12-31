import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as MultiPage from 'components/General/Page/MultiPage';
import AppContext from 'store/AppContext';

export default function FirmwareUpgrade() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={700}>
        <MultiPage.Title>{t('FirmwareUpgrade')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.Text>{t('FirmwareUpgradeText')}</MultiPage.Text>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t('Upgrade')}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('FirmwareFile')}:</span>
            <input type="file" />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('FirmwareVersion')}:</span>
            <span>{config.firmware}</span>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('HardwareVersion')}:</span>
            <span>{config.hardware}</span>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Note>
          {t('Note6_1')}
          <br />
          {t('Note6_2')}
          <br />
          {t('Note6_3')}
          <br />
          {t('Note6_4')}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
