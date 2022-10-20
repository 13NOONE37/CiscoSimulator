import React, { useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';

import * as MultiPage from 'components/General/Page/MultiPage';

export default function RadiusServer() {
  const { t } = useTranslation();

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('AuthenticationConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Primary IP')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.MaskedInput
                // isDisabled={localConfig.addressMode !== 'Static IP'}
                // value={localConfig.ip}
                // changeCallback={(data) => setLocalConfig({ ['ip']: data })}
                afterText={t('(Format: 192.168.0.1)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Secoundary IP')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.MaskedInput
                // isDisabled={localConfig.addressMode !== 'Static IP'}
                // value={localConfig.ip}
                // changeCallback={(data) => setLocalConfig({ ['ip']: data })}
                afterText={t('(Format: 192.168.0.1)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Apply')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('Auth Port')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'number',
                  min: 1,
                  max: 65535,
                }}
                afterText={t('(1-65535)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.Input
            inputProps={{ type: 'checkbox' }}
            afterText={`${t('AuthKey')}:`}
          />
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('AuthKey')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'text',
                }}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>

      <MultiPage.Section>
        <MultiPage.Title>{t('AccountingConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Accounting')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Primary IP')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.MaskedInput
                // isDisabled={localConfig.addressMode !== 'Static IP'}
                // value={localConfig.ip}
                // changeCallback={(data) => setLocalConfig({ ['ip']: data })}
                afterText={t('(Format: 192.168.0.1)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Apply')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('Secoundary IP')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.MaskedInput
                // isDisabled={localConfig.addressMode !== 'Static IP'}
                // value={localConfig.ip}
                // changeCallback={(data) => setLocalConfig({ ['ip']: data })}
                afterText={t('(Format: 192.168.0.1)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('Accounting Port')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'number',
                  min: 1,
                  max: 65535,
                }}
                afterText={t('(1-65535)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.Input
            inputProps={{ type: 'checkbox' }}
            afterText={`${t('KeyModify')}:`}
          />
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('AccountingKey')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'text',
                }}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
