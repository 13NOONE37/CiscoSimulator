import React, { useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function HTTPConfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      httpStatus: config.httpStatus,
      sessionTimeoutHTTP: config.sessionTimeoutHTTP,
      numberControlHTTP: config.numberControlHTTP,
      adminNumberHTTP: config.adminNumberHTTP,
      guestNumberHTTP: config.guestNumberHTTP,
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('GlobalConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() =>
                MultiPage.handleApplyToConfig(config, localConfig, 'httpStatus')
              }
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t('HTTP')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'HTTPStatus',
                  defaultChecked: localConfig.httpStatus === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['httpStatus']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'HTTPStatus',
                  defaultChecked: localConfig.httpStatus === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['httpStatus']: e.target.value }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine
            FirstColumnWidth={150}
          ></MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>
      <MultiPage.Section>
        <MultiPage.Title>{t('SessionConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() =>
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'sessionTimeoutHTTP',
                )
              }
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t('SessionTimeout')}:</span>

            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 5,
                max: 30,
                value: localConfig.sessionTimeoutHTTP,
                onChange: (e) =>
                  setLocalConfig({ ['sessionTimeoutHTTP']: e.target.value }),
              }}
              afterText="min(5-30)"
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>
      <MultiPage.Section>
        <MultiPage.Title>{t('AccessUserNumber')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t('NumberControl')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'numberControlHTTP',
                  defaultChecked: localConfig.numberControlHTTP === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['numberControlHTTP']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'numberControlHTTP',
                  defaultChecked: localConfig.numberControlHTTP === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['numberControlHTTP']: e.target.value }),
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
                  'numberControlHTTP',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'adminNumberHTTP',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'guestNumberHTTP',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t('AdminNumber')}:</span>

            <MultiPage.Input
              inputProps={{
                disabled: localConfig.numberControlHTTP === 'Disable',
                type: 'number',
                min: 1,
                max: 16,
                value: localConfig.adminNumberHTTP,
                onChange: (e) =>
                  setLocalConfig({ ['adminNumberHTTP']: e.target.value }),
              }}
              afterText="(1-16)"
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t('GuestNumber')}:</span>

            <MultiPage.Input
              inputProps={{
                disabled: localConfig.numberControlHTTP === 'Disable',
                type: 'number',
                min: 0,
                max: 15,
                value: localConfig.guestNumberHTTP,
                onChange: (e) =>
                  setLocalConfig({ ['guestNumberHTTP']: e.target.value }),
              }}
              afterText="(0-16)"
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
