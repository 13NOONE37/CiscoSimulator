import React, { useState, useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import AppContext from 'store/AppContext';

export default function AddressTable() {
  //here will global config
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      ...MultiPage.deepCopy(config.addressTableConfig),
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={600}>
        <MultiPage.Title>hello</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() =>
                MultiPage.handleApplyToConfig(
                  config.addressTableConfig,
                  localConfig,
                  'firstEdit',
                )
              }
            >
              Apply
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>Type szczur marcin: </span>
            <MultiPage.Input
              inputProps={{
                placeholder: 'test',
                value: localConfig.firstEdit,
                onChange: (e) =>
                  setLocalConfig({ ['firstEdit']: e.target.value }),
              }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() => {
              console.table(localConfig);
              console.table(config.addressTableConfig);
            }}
          >
            Apply
          </MultiPage.Button>
          <MultiPage.Button isSpecial>Delete</MultiPage.Button>
          <MultiPage.Button isSpecial>Bind</MultiPage.Button>
          <MultiPage.Button isSpecial>Help</MultiPage.Button>
        </MultiPage.ButtonsRow>
      </MultiPage.Section>
      <MultiPage.Section width={750}>
        <MultiPage.Title>Sample Table</MultiPage.Title>
        <MultiPage.EditableTable
          title={'hello Marcin'}
          data={localConfig.table}
          saveTable={(data) => setLocalConfig({ ['table']: data })}
          gridTemp={'65px 65px repeat(4,1fr) 65px'}
        />
        <MultiPage.Button
          action={() =>
            MultiPage.handleApplyToConfig(
              config.addressTableConfig,
              localConfig,
              'table',
            )
          }
        >
          Apply this data
        </MultiPage.Button>
        <MultiPage.MaskedInput />
        <MultiPage.DefaultTable
          navItems={['a', 'b', 'c', 'd', 'e', 'f']}
          data={localConfig.table.data}
        />
        <MultiPage.Note>
          The maximum of the displayed entries is 100 by default, please click
          the Search btton to get the complete address entries.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
