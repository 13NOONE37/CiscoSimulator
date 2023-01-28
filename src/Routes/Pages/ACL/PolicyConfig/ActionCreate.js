import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function ActionCreate() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('CreateAction')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('SelectPolicy')}:</span>
            <MultiPage.Select options={['SelectPolicy']} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('SelectACL')}:</span>
            <MultiPage.Select
              options={[
                'SelectACL',
                'ACL 80',
                'ACL 15',
                'ACL 20',
                'ACL 35',
                'ACL 46',
              ]}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Create')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>

        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
