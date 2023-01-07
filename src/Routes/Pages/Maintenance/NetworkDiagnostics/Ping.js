import React, { useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function Ping() {
  const { t } = useTranslation();
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      ip: [null, null, null, null],
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('PingConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('DestinationIP')}:</span>
            <MultiPage.MaskedInput
              value={localConfig.ip}
              changeCallback={(data) => setLocalConfig({ ['ip']: data })}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Ping')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('PingTimes')}:</span>
            <MultiPage.Input
              inputProps={{ type: 'number', min: 1, max: 10, defaultValue: 4 }}
              afterText={t('(1-10)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('DataSize')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 1,
                max: 1024,
                defaultValue: 64,
              }}
              afterText={t('byte(1-1024)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Interval')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 100,
                max: 1000,
                defaultValue: 100,
              }}
              afterText={t('milisec(100-1000)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Title>{t('PingResult')}</MultiPage.Title>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
