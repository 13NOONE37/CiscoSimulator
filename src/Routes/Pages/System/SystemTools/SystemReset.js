import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

import defaultConfig from 'store/defaultConfig';

export default function SystemReset() {
  const { t } = useTranslation();
  const { setConfig } = useContext(AppContext);

  const handleReset = () => setConfig({ ...defaultConfig });
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={700}>
        <MultiPage.Title>{t('SystemReset')}</MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.Text>Reset:</MultiPage.Text>
            <div style={{ width: '60px' }}>
              <MultiPage.Button isSpecial action={handleReset}>
                {t('Reset')}
              </MultiPage.Button>
            </div>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Note>
          The System Reset option will restore the configuration to default and
          your current settings will be lost.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
