import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
export default function AddressTable() {
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={600}>
        <MultiPage.Title>hello</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>Type szczur marcin: </span>
            <MultiPage.Input type="text" />
          </MultiPage.SubElementsLine>
          <MultiPage.Button>Apply</MultiPage.Button>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={170}>
            <span>Info_ManagmentValue:</span>
            <div>
              <input
                class="basicInput"
                type="number"
                min="1"
                max="4094"
                value="1"
              />
              <span class="spanText">(VLAN ID: 1-4094)</span>
            </div>
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
      <MultiPage.Note>
        The maximum of the displayed entries is 100 by default, please click the
        Search btton to get the complete address entries.
      </MultiPage.Note>
    </MultiPage.Wizard>
  );
}
