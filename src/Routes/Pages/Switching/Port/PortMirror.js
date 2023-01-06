import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';
export default function PortMirror() {
  //#TODO: workflow
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [showEditPage, setShowEditPage] = useState(false);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      portMirrorTable: MultiPage.deepCopy(config.portMirrorTable),
    },
  );

  const localPortMirror = [
    ...config.mirrorList.map((item) => [
      item.group,
      item.mirroring,
      <MultiPage.DevidedColumn data={[item[2]]} />,
      <MultiPage.DevidedColumn data={[item[3]]} />,
      <MultiPage.Button isBlank action={() => setShowEditPage(true)}>
        {t('Edit')}
      </MultiPage.Button>,
    ]),
  ];
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        {showEditPage ? (
          <>
            <MultiPage.Title>{t('MirrorGroup')}</MultiPage.Title>
            <MultiPage.ElementsLine>
              <MultiPage.SubElementsLine>
                {t('Number')}:
                <MultiPage.Select options={[1, 2, 3, 4, 5, 6, 7, 8]} />
              </MultiPage.SubElementsLine>
            </MultiPage.ElementsLine>
            <MultiPage.Title>{t('MirroringPort')}</MultiPage.Title>
            <MultiPage.ElementsLine
              actionButton={() => (
                <MultiPage.Button>{t('Apply')}</MultiPage.Button>
              )}
            >
              <MultiPage.SubElementsLine>
                {t('MirroringPort')}:
                <MultiPage.Select
                  options={['Disable', 1, 2, 3, 4, 5, 6, 7, 8]}
                />
              </MultiPage.SubElementsLine>
            </MultiPage.ElementsLine>
            <MultiPage.EditableTable
              title={t('MirroredPort')}
              data={localConfig.portMirrorTable}
              saveTable={(data) =>
                setLocalConfig({ ['portMirrorTable']: data })
              }
            />
            <MultiPage.ButtonsRow>
              <MultiPage.Button isSpecial>{t('Apply')}</MultiPage.Button>
              <MultiPage.Button isSpecial action={() => setShowEditPage(false)}>
                {t('Return')}
              </MultiPage.Button>
              <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
            </MultiPage.ButtonsRow>
          </>
        ) : (
          <>
            <MultiPage.DefaultTable
              title={t('MirrorGroupList')}
              gridTemp={'repeat(3, 75px) 1fr 75px'}
              navItems={[
                t('Group'),
                t('Mirroring'),
                t('Mode'),
                t('MirroredPort'),
                t('Operation'),
              ]}
              data={localPortMirror}
            />
          </>
        )}
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
