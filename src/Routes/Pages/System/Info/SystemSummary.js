import React, { useContext } from 'react';
import ActivePorts from 'components/System/ActivePorts';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function SystemSummary() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <ActivePorts />
        <MultiPage.DefaultTable
          data={[
            [t('SystemDescription'), '8-Port Gigabit Smart Switch'],
            [t('DeviceName'), config.deviceName],
            [t('DeviceLocation'), config.deviceLocation],
            [t('SystemContact'), config.systemContact],
            [t('HardwareVersion'), config.hardware],
            [t('FirmwareVersion'), config.firmware],
            [t('IPAddress'), config.ip.join('.')],
            [t('SubnetMask'), config.mask.join('.')],
            [t('DefaultGateway'), config.gateway.join('.')],
            [t('MACAddress'), config.mac],
            [t('SystemTime'), `${config.currentDate}  ${config.currentTime}`],
          ]}
          navItems={['', '']}
          title={t('SystemInfo')}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note></MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
