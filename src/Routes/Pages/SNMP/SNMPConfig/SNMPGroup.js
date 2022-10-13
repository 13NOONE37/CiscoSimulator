import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function SNMPGroup() {
  const { t } = useTranslation();
  //!todo  workflow

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.Title>{t('GroupConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Group Name')}:</span>
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
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Security Model')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select options={['v1', 'v2']} />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t('Create')}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('Security Level')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select options={['noAuthNoPriv']} />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Clear')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('Read View')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select options={['viewDefault']} />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Write View')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select options={['None']} />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Notify View')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select options={['None']} />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          title={t('GroupTable')}
          isPortSelect={false}
          data={{
            names: [
              'Select',
              'Group Name',
              'Security Model',
              'Security Level',
              'Read View',
              'Write View',
              'Notify View',
              'Operation',
            ],
            fields: [],
            data: [],
          }}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('All')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Delete')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          A group should contain a read view, and the default read view is
          viewDefault
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
