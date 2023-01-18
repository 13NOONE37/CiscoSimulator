import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function ScheduleMode() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      QoSGlobalDiffSheduleMode: config.QoSGlobalDiffSheduleMode,
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('ScheduleModeConfig')}</MultiPage.Title>

        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() =>
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'QoSGlobalDiffSheduleMode',
                )
              }
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('ScheduleMode')}:</span>
            <MultiPage.Select
              selectProps={{
                value: localConfig.QoSGlobalDiffSheduleMode,
                onChange: (e) =>
                  setLocalConfig({
                    ['QoSGlobalDiffSheduleMode']: e.target.value,
                  }),
              }}
              options={['SP_mode', 'WRR-Mode', 'SP+WRR-Mode', 'Equ-Mode']}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine></MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
