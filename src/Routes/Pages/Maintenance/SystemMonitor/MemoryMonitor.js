import React from 'react';
import { useTranslation } from 'react-i18next';
import * as MultiPage from 'components/General/Page/MultiPage';
import { ReactComponent as Chart } from './Chart.svg';
import './Chart.css';

export default function MemoryMonitor() {
  const { t } = useTranslation();

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.Title>{t('MemoryMonitor')}</MultiPage.Title>
        <div className="chartBox">
          <span>{t('RunTime')}:</span>
          <Chart />
          <div className="chartInfo">
            <span>{t('CurrentUtilization')}</span>
            <span>{t('MAXUtilization')}</span>
            <span>{t('MINUtilization')}</span>
            <span>{t('AverageUtilization')}</span>
          </div>
          <div className="chartInfo">
            <span>0%</span>
            <span>0%</span>
            <span>0%</span>
            <span>0%</span>
          </div>
        </div>
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Monitor')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Start')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
