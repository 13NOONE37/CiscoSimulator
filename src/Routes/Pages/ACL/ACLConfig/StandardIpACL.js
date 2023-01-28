import React, { useRef, useState, useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';
export default function StandardIPACL() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      SIP: false,
      DIP: false,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('CreateStandard-IPRule')}</MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ACLID')}:</span>
            <MultiPage.Select options={['Standard-IPACL']} />
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
                value: localConfig.SIP,
                onChange: () => setLocalConfig({ ['SIP']: !localConfig.SIP }),
              }}
              afterText={'S-IP'}
            />
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <MultiPage.Input
                inputProps={{ type: 'text', disabled: !localConfig.SIP }}
              />
              <MultiPage.SubElementsLine FirstColumnWidth={50}>
                <span>{t('Mask')}:</span>
                <MultiPage.Input
                  inputProps={{ type: 'text', disabled: !localConfig.SIP }}
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
                value: localConfig.DIP,
                onChange: () => setLocalConfig({ ['DIP']: !localConfig.DIP }),
              }}
              afterText={'D-IP'}
            />
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <MultiPage.Input
                inputProps={{ type: 'text', disabled: !localConfig.DIP }}
              />

              <MultiPage.SubElementsLine FirstColumnWidth={50}>
                <span>{t('Mask')}:</span>
                <MultiPage.Input
                  inputProps={{ type: 'text', disabled: !localConfig.DIP }}
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
