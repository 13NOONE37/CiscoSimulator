import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
export default function AddressTable() {
  const myData = {
    names: [
      'Port',
      'Description',
      'Status',
      'SpeedAndDuplex',
      'FlowControl',
      'LAG',
    ],
    fields: [
      { type: 'disable' },
      { type: 'text' },
      { type: 'select', options: ['Enable', 'Disable'] },
      { type: 'select', options: ['Auto', '10MHD'] },
      { type: 'select', options: ['Enable', 'Disable'] },
      { type: 'disable' },
    ],
    data: [
      ['1', 'Szczur bartol_=>|1', 'Disable', 'Auto', 'Enable', 'LAG1'],
      ['2', 'Szczur bartol_=>|2', 'Enable', 'Auto', 'Disable', 'LAG1'],
      ['3', 'Szczur bartol_=>|3', 'Disable', 'Auto', 'Enable', undefined],
      ['4', 'Szczur bartol_=>|4', 'Enable', 'Auto', 'Disable', undefined],
      ['5', 'Szczur bartol_=>|5', 'Disable', 'Auto', 'Enable', undefined],
      ['6', 'Szczur bartol_=>|6', 'Enable', 'Auto', 'Disable', undefined],
      ['7', 'Szczur bartol_=>|7', 'Enable', 'Auto', 'Disable', 'LAG1'],
      ['8', 'Szczur bartol_=>|8', 'Enable', 'Auto', 'Disable', 'LAG1'],
    ],
  };
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={600}>
        <MultiPage.Title>hello</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>Apply</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>Type szczur marcin: </span>
            <MultiPage.Input inputProps={{ placeholder: 'test' }} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine
        // actionButton={() => <MultiPage.Button>Apply</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>Type rat value</span>
            <MultiPage.Input afterText="VLAN ID: 1-4094" />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>Apply</MultiPage.Button>
          <MultiPage.Button isSpecial>Delete</MultiPage.Button>
          <MultiPage.Button isSpecial>Bind</MultiPage.Button>
          <MultiPage.Button isSpecial>Help</MultiPage.Button>
        </MultiPage.ButtonsRow>
      </MultiPage.Section>
      <MultiPage.Section width={750}>
        <MultiPage.Title>Sample Table</MultiPage.Title>
        <MultiPage.EditableTable
          ourData={myData}
          gridTemp={'65px 65px repeat(4,1fr) 65px'}
        />
        <MultiPage.DefaultTable
          ourData={myData.data}
          gridTemp={'65px 65px repeat(4,1fr) 65px'}
        />
      </MultiPage.Section>
      <MultiPage.Note>
        The maximum of the displayed entries is 100 by default, please click the
        Search btton to get the complete address entries.
      </MultiPage.Note>
    </MultiPage.Wizard>
  );
}
