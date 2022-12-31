import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';

import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function DayglightSavingTime() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      dstStatus: config.dstStatus,
      dstSource: config.dstSource,
      predefinedMode: config.predefinedMode,
      dstDateModeOffset: config.dstDateModeOffset,
      dstDateModeStart: config.dstDateModeStart,
      dstDateModeEnd: config.dstDateModeEnd,
      dstRecurringModeStart: config.dstRecurringModeStart,
      dstRecurringModeEnd: config.dstRecurringModeEnd,
      dstRecurringModeOffset: config.dstRecurringModeOffset,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('DST Config')}</MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.Input
            inputProps={{
              type: 'radio',
              value: 'PredefinedMode',
              name: 'dstSource',
              onChange: (e) => {
                setLocalConfig({ ['dstSource']: e.target.value });
              },
              defaultChecked: localConfig.dstSource === 'PredefinedMode',
            }}
            afterText={t('PredefinedMode')}
          />
          <MultiPage.ElementsLine>
            <MultiPage.SubElementsLine FirstColumnWidth={300}>
              <MultiPage.SubElementsLine>
                <MultiPage.Input
                  inputProps={{
                    type: 'radio',
                    value: 'USA',
                    name: 'predifinedMode',
                    defaultChecked: localConfig.predefinedMode === 'USA',
                    onChange: (e) => {
                      setLocalConfig({ ['predefinedMode']: e.target.value });
                    },
                    disabled: localConfig.dstSource !== 'PredefinedMode',
                  }}
                  afterText="USA"
                />
                <MultiPage.Input
                  inputProps={{
                    type: 'radio',
                    value: 'Australia',
                    name: 'predifinedMode',
                    defaultChecked: localConfig.predefinedMode === 'Australia',

                    onChange: (e) => {
                      setLocalConfig({ ['predefinedMode']: e.target.value });
                    },
                    disabled: localConfig.dstSource !== 'PredefinedMode',
                  }}
                  afterText="Australia"
                />
              </MultiPage.SubElementsLine>
              <MultiPage.SubElementsLine>
                <MultiPage.Input
                  inputProps={{
                    type: 'radio',
                    value: 'Europe',
                    name: 'predifinedMode',
                    defaultChecked: localConfig.predefinedMode === 'Europe',

                    onChange: (e) => {
                      setLocalConfig({ ['predefinedMode']: e.target.value });
                    },
                    disabled: localConfig.dstSource !== 'PredefinedMode',
                  }}
                  afterText={t('Europe')}
                />
                <MultiPage.Input
                  inputProps={{
                    type: 'radio',
                    value: 'New Zealand',
                    name: 'predifinedMode',
                    defaultChecked:
                      localConfig.predefinedMode === 'New Zealand',

                    onChange: (e) => {
                      setLocalConfig({ ['predefinedMode']: e.target.value });
                    },
                    disabled: localConfig.dstSource !== 'PredefinedMode',
                  }}
                  afterText={t('New Zealand')}
                />
              </MultiPage.SubElementsLine>
            </MultiPage.SubElementsLine>
          </MultiPage.ElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.Input
            inputProps={{
              type: 'radio',
              value: 'RecurringMode',
              name: 'dstSource',
              onChange: (e) => {
                setLocalConfig({ ['dstSource']: e.target.value });
              },
              defaultChecked: localConfig.dstSource === 'RecurringMode',
            }}
            afterText={t('RecurringMode')}
          />
          <MultiPage.ElementsLine>
            <MultiPage.SubElementsLine>
              <span>{t('Offset')}:</span>
              <MultiPage.Input
                inputProps={{
                  type: 'number',
                  placeholder: '60',
                  value: localConfig.dstRecurringModeOffset,
                  onChange: (e) => {
                    setLocalConfig({
                      ['dstRecurringModeOffset']: e.target.value,
                    });
                  },
                  disabled: localConfig.dstSource !== 'RecurringMode',
                }}
                afterText={t('(minutes)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.ElementsLine>
          <MultiPage.ElementsLine>
            <MultiPage.SubElementsLine>
              <span>{t('End Time')}:</span>
              <MultiPage.Input
                inputProps={{
                  type: 'datetime-local',
                  value: localConfig.dstRecurringModeStart,

                  onChange: (e) => {
                    setLocalConfig({
                      ['dstRecurringModeStart']: e.target.value,
                    });
                  },
                  disabled: localConfig.dstSource !== 'RecurringMode',
                }}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.ElementsLine>
          <MultiPage.ElementsLine>
            <MultiPage.SubElementsLine>
              <span>{t('Start Time')}:</span>
              <MultiPage.Input
                inputProps={{
                  type: 'datetime-local',
                  value: localConfig.dstRecurringModeEnd,

                  onChange: (e) => {
                    setLocalConfig({
                      ['dstRecurringModeEnd']: e.target.value,
                    });
                  },
                  disabled: localConfig.dstSource !== 'RecurringMode',
                }}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.ElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.Input
            inputProps={{
              type: 'radio',
              value: 'DateMode',
              name: 'dstSource',
              onChange: (e) => {
                setLocalConfig({ ['dstSource']: e.target.value });
              },
              defaultChecked: localConfig.dstSource === 'DateMode',
            }}
            afterText={t('DateMode')}
          />
          <MultiPage.ElementsLine>
            <MultiPage.SubElementsLine>
              <span>{t('Offset')}:</span>
              <MultiPage.Input
                inputProps={{
                  type: 'number',
                  placeholder: '60',
                  value: localConfig.dstDateModeOffset,
                  onChange: (e) => {
                    setLocalConfig({ ['dstDateModeOffset']: e.target.value });
                  },
                  disabled: localConfig.dstSource !== 'DateMode',
                }}
                afterText={t('(minutes)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.ElementsLine>
          <MultiPage.ElementsLine>
            <MultiPage.SubElementsLine>
              <span>{t('End Time')}:</span>
              <MultiPage.Input
                inputProps={{
                  type: 'datetime-local',
                  value: localConfig.dstDateModeStart,

                  onChange: (e) => {
                    setLocalConfig({
                      ['dstDateModeStart']: e.target.value,
                    });
                  },
                  disabled: localConfig.dstSource !== 'DateMode',
                }}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.ElementsLine>
          <MultiPage.ElementsLine>
            <MultiPage.SubElementsLine>
              <span>{t('Start Time')}:</span>
              <MultiPage.Input
                inputProps={{
                  type: 'datetime-local',
                  value: localConfig.dstDateModeEnd,

                  onChange: (e) => {
                    setLocalConfig({
                      ['dstDateModeEnd']: e.target.value,
                    });
                  },
                  disabled: localConfig.dstSource !== 'DateMode',
                }}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.ElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() => {
              MultiPage.handleApplyToConfig(config, localConfig, 'dstStatus');
              MultiPage.handleApplyToConfig(config, localConfig, 'dstSource');
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'predefinedMode',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'dstDateModeOffset',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'dstDateModeStart',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'dstDateModeEnd',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'dstRecurringModeOffset',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'dstRecurringModeStart',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'dstRecurringModeEnd',
              );
            }}
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
    //
  );
}
