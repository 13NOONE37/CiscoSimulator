import React, { useRef, useState, useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';
export default function MACACL() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      SMAC: false,
      DMAC: false,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('CreateMACRule')}</MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ACLID')}:</span>
            <MultiPage.Select
              options={[
                'MAC ACL',
                'ACL 80',
                'ACL 15',
                'ACL 20',
                'ACL 35',
                'ACL 46',
              ]}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('RuleID')}:</span>
            <MultiPage.Input inputProps={{ type: 'text' }} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Operation')}:</span>
            <MultiPage.Select options={['Permit', 'Deny']} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.Input
              inputProps={{
                type: 'checkbox',
                value: localConfig.SMAC,
                onChange: () => setLocalConfig({ ['SMAC']: !localConfig.SMAC }),
              }}
              afterText={'S-MAC'}
            />
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <MultiPage.Input
                inputProps={{ type: 'text', disabled: !localConfig.SMAC }}
              />
              <MultiPage.SubElementsLine FirstColumnWidth={50}>
                <span>{t('Mask')}:</span>
                <MultiPage.Input
                  inputProps={{ type: 'text', disabled: !localConfig.SMAC }}
                />
              </MultiPage.SubElementsLine>
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.Input
              inputProps={{
                type: 'checkbox',
                value: localConfig.DMAC,
                onChange: () => setLocalConfig({ ['DMAC']: !localConfig.DMAC }),
              }}
              afterText={'D-MAC'}
            />
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <MultiPage.Input
                inputProps={{ type: 'text', disabled: !localConfig.DMAC }}
              />
              <MultiPage.SubElementsLine FirstColumnWidth={50}>
                <span>{t('Mask')}:</span>
                <MultiPage.Input
                  inputProps={{ type: 'text', disabled: !localConfig.DMAC }}
                />
              </MultiPage.SubElementsLine>
            </MultiPage.SubElementsLine>
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
