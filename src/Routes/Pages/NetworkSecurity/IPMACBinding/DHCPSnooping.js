import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function DHCPSnooping() {
  const { t } = useTranslation();

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('DHCPSnooping')}</MultiPage.Title>

        <MultiPage.Title>{t('Option82Config')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('DHCPSnooping')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('StartIPAddress')}:</span>
            <MultiPage.MaskedInput />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Scan')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('EndIPAddress')}:</span>
            <MultiPage.MaskedInput />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>VLAN ID:</span>
            <MultiPage.Input
              inputProps={{ type: 'number', min: 1, max: 4094 }}
              afterText={'(1-4094)'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          title={t('PortConfig')}
          data={{
            names: [
              'Port	',
              'Trusted Port',
              'MAC Verify	',
              'Flow Control',
              'Decline',
              'Protect',
              'LAG',
            ],
            fields: [
              { type: 'disabled' },
              { type: 'select', options: ['Disable', 'Enable'] },
              { type: 'select', options: ['Disable', 'Enable'] },
              { type: 'select', options: ['Disable', 5, 10, 15, 20, 25, 30] },
              { type: 'select', options: ['Disable', 'Enable'] },

              { type: 'disabled' },
            ],
            data: [],
          }}
        />

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Bind')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Delete')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
