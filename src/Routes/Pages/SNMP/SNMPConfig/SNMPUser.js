import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function SNMPUser() {
  const { t } = useTranslation();
  //!todo  workflow

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={800}>
        <MultiPage.Title>{t('UserConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('User Name')}:</span>
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
            <MultiPage.SubElementsLine>
              <span>{t('User Type')}:</span>
              <MultiPage.Select options={['Local User']} />
            </MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <span style={{ marginLeft: '100px' }}>{t('Group Name')}:</span>

              <MultiPage.Select options={['    ']} />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine>
              <span>{t('Security Model')}:</span>
              <MultiPage.Select options={['v1', 'v2', 'v3']} />
            </MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <span style={{ marginLeft: '100px' }}>
                {t('Security Level')}:
              </span>

              <MultiPage.Select options={['noAuthNoPriv']} />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine>
              <span>{t('Auth Mode')}:</span>
              <MultiPage.Select options={['None']} />
            </MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <span style={{ marginLeft: '100px' }}>{t('Auth Password')}:</span>
              <MultiPage.Input
                inputProps={{ type: 'password' }}
                afterText={t('(16 characters maximum)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine>
              <span>{t('Privacy Mode')}:</span>
              <MultiPage.Select options={['None']} />
            </MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <span style={{ marginLeft: '100px' }}>
                {t('Privacy Password')}:
              </span>
              <MultiPage.Input
                inputProps={{ type: 'password' }}
                afterText={t('(16 characters maximum)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Create')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Clear')}</MultiPage.Button>
        </MultiPage.ButtonsRow>

        <MultiPage.EditableTable
          title={t('GroupTable')}
          isPortSelect={false}
          data={{
            names: [
              'Select',
              'User Name',
              'User Type',
              'Group name',
              'Security Model',
              'Security Level',
              'Auth Mode',
              'Privacy Mode',
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
          The security mode land security level of the user should be the same
          with that of its group.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
