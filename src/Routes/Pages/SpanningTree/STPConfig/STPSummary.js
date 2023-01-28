import React, { useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function STPSummary() {
  const { t } = useTranslation();

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.DefaultTable
          title={t('STPSummary')}
          navItems={['', '']}
          data={[
            ['STPStatus', 'Disable'],
            ['STPVersion', undefined],
            ['LocalBridge', undefined],
            ['RootBridge', undefined],
            ['ExternalPathCost', undefined],
            ['RegionRoot', undefined],
            ['InternalPathCost', undefined],
            ['DesignatedBridge', undefined],
            ['RootPort', undefined],
            ['LatestTCTime', undefined],
            ['TCCount', 0],
          ]}
        />
        <MultiPage.DefaultTable
          title={t('MSTPInstanceSummary')}
          navItems={['', '']}
          data={[
            [
              'InstanceID',
              <MultiPage.Select options={[1, 2, 3, 4, 5, 6, 7, 8]} />,
            ],
            ['InstanceStatus', 'Disable'],
            ['LocalBridge', undefined],
            ['RegionRoot', undefined],
            ['InternalPathCost', undefined],
            ['DesignatedBridge', undefined],
            ['RootPort', undefined],
            ['LatestTCTime', undefined],
            ['TCCount', undefined],
          ]}
        />
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
