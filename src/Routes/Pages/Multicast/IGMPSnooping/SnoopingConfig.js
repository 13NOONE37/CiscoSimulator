import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function SnoopingConfig() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      IGMPSnooping: config.IGMPSnooping,
      IGMPUnkownMulticast: config.IGMPUnkownMulticast,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('GlobalConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('IGMPSnooping')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'IGMPSnooping',
                  value: 'Enable',
                  checked: localConfig.IGMPSnooping === 'Enable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['IGMPSnooping']: e.target.value,
                    }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'IGMPSnooping',
                  value: 'Disable',
                  checked: localConfig.IGMPSnooping === 'Disable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['IGMPSnooping']: e.target.value,
                    }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() => {
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'IGMPSnooping',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'IGMPUnkownMulticast',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('UnkownMulticast')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'IGMPUnkownMulticast',
                  value: 'Forward',
                  checked: localConfig.IGMPUnkownMulticast === 'Forward',
                  onChange: (e) =>
                    setLocalConfig({
                      ['IGMPUnkownMulticast']: e.target.value,
                    }),
                }}
                afterText={t('Forward')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'IGMPUnkownMulticast',
                  value: 'Discard',
                  checked: localConfig.IGMPUnkownMulticast === 'Discard',
                  onChange: (e) =>
                    setLocalConfig({
                      ['IGMPUnkownMulticast']: e.target.value,
                    }),
                }}
                afterText={t('Discard')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          title={t('IGMPSnoopingStatus')}
          gridTemp={`120px 1fr`}
          navItems={['Description', 'Member']}
          data={[
            ['EnabledPort', ''],
            ['EnabledVLAN', ''],
          ]}
        />

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note41')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
