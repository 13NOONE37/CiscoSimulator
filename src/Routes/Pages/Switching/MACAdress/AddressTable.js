import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
export default function AddressTable() {
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={650}>
        <MultiPage.Title>hello</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>Type szczur marcin: </span>
            <MultiPage.Input inputProps={{ placeholder: 'test' }} />
          </MultiPage.SubElementsLine>
          <MultiPage.Button>Apply</MultiPage.Button>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>Type rat value</span>
            <MultiPage.Input afterText="VLAN ID: 1-4094" />
          </MultiPage.SubElementsLine>
          <MultiPage.Button>Apply</MultiPage.Button>
        </MultiPage.ElementsLine>

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>Apply</MultiPage.Button>
          <MultiPage.Button isSpecial>Delete</MultiPage.Button>
          <MultiPage.Button isSpecial>Bind</MultiPage.Button>
          <MultiPage.Button isSpecial>Help</MultiPage.Button>
        </MultiPage.ButtonsRow>
      </MultiPage.Section>
      <MultiPage.Section>
        <MultiPage.Title>Sample Table</MultiPage.Title>
        <MultiPage.DefaultTable />
      </MultiPage.Section>
      <MultiPage.Note>
        The maximum of the displayed entries is 100 by default, please click the
        Search btton to get the complete address entries.
      </MultiPage.Note>
    </MultiPage.Wizard>
  );
}
