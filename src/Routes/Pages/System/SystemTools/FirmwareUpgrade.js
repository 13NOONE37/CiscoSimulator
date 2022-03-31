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
          <MultiPage.Text>
            You will get the new function after upgrading the firmware.
          </MultiPage.Text>
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
          1. Please select the proper software version matching with your
          hardware to upgrade.
          <br />
          2. To avoid damage, please don't turn off the device while upgrading.
          <br />
          3. After upgrading, the device will reboot automatically.
          <br />
          4. You are suggested to backup the configuration before upgrading.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
