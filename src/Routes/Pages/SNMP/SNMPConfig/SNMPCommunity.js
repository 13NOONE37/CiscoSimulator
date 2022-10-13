import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function SNMPCommunity() {
  const { t } = useTranslation();
  //!todo  workflow

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('CommunityConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Community Name')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'text',
                  max: 16,
                }}
                afterText={t('(16 characters maximum)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t('Create')}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('Access')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select options={['read-only', 'read-write']} />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Clear')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('MIB View')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select options={['viewDefault']} />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          isPortSelect={false}
          title={t('CommunitywTable')}
          data={{
            names: ['CommunityName', 'Access', 'MIBView', 'Operation'],
            fields: [],
            data: [],
          }}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('All')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Delete')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
