import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function AccessControl() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const handleApply = () => {};
  //#TODO: saving to config and mask inputs
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('AccessControlConfig')}</MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ControlMode')}:</span>
            <MultiPage.Select options={['Disable', 'Enable']} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('AccessInterface')}:</span>
            <MultiPage.Row>
              {['SNMP', 'Telnet', 'SSH', 'HTTP', 'HTTPS', 'Ping', 'All'].map(
                (protocol) => (
                  <MultiPage.Input
                    inputProps={{ type: 'checkbox' }}
                    afterText={protocol}
                  />
                ),
              )}
            </MultiPage.Row>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={300}>
            <MultiPage.SubElementsLine>
              <span>{t('IPAddress')}:</span>
              <MultiPage.MaskedInput />
            </MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine FirstColumnWidth={50}>
              <span>{t('Mask')}:</span>
              <MultiPage.MaskedInput />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('MACAddress')}:</span>
            <MultiPage.Input afterText="(Format 00-00-00-00-00-01)" />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <span>{t('Port')}:</span>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.Row
            style={{
              border: '1px solid var(--tplink-grey2',
              justifyContent: 'space-between',
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <MultiPage.Input
                inputProps={{ type: 'checkbox' }}
                afterText={`${num}`}
              />
            ))}
          </MultiPage.Row>
        </MultiPage.ElementsLine>
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Apply')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
