import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
export default function VLANConfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      VLANID: 1,
      name: '',
      VLANTable: config.VLANTable,
      checkedPorts: [],
      currentVLAN: null,
    },
  );
  const arrayToRanges = (arr) => {
    if (arr.length === 0) return '';
    arr.sort((a, b) => a - b);
    let ranges = [];
    let currentRanges = [arr[0], arr[0]];

    const pushRange = (el1, el2) => {
      if (el1 != el2) {
        ranges.push(`${el1}-${el2}`);
      } else {
        ranges.push(el1);
      }
    };
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === currentRanges[1] + 1) {
        currentRanges[1] = arr[i];
      } else {
        pushRange(currentRanges[0], currentRanges[1]);
        currentRanges = [arr[i], arr[i]];
      }
    }
    pushRange(currentRanges[0], currentRanges[1]);
    return ranges.join(', ');
  };
  const handleCreate = () => {
    if (!isNaN(localConfig.VLANID) && localConfig.name.length > 0) {
      let addVLAN = true;
      localConfig.VLANTable.map((vlan) => {
        if (vlan[0] === localConfig.VLANID) {
          addVLAN = false;
        }
      });
      if (addVLAN) {
        let temp = localConfig.VLANTable;
        temp.push([
          localConfig.VLANID,
          localConfig.name,
          [1, 2, 3, 4, 5, 6, 7, 8],
          [],
          [1, 1, 1, 1, 1, 1, 1, 1],
          [
            1,
            1,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
          ],
        ]);
        setLocalConfig({ ['VLANTable']: temp });
      } else {
        alert(t('There is VLAN with same ID'));
      }
    } else {
      alert(t('There are empty fields'));
    }
  };
  const handleDelete = (index) => {
    if (window.confirm(t('Are you sure you want to delete this VLAN?'))) {
      let temp = localConfig.VLANTable;
      temp.splice(index, 1);
      setLocalConfig({ currentVLAN: null });
      setLocalConfig({ checkedPorts: [] });
      setLocalConfig({ VLANTable: temp });
    }
  };

  const handleSelectPort = (index, e) => {
    let temp = [];
    if (e.target.checked === true) {
      temp[index] = !temp[index];
    }
    if (localConfig.currentVLAN === index) {
      setLocalConfig({ currentVLAN: null });
    } else {
      setLocalConfig({ currentVLAN: index });
    }
    setLocalConfig({
      checkedPorts: temp,
    });
  };

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('VLANCreate')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button action={handleCreate}>
              {t('Create')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('VLANID')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 2,
                max: 4094,
                value: localConfig.VLANID,
                onChange: (e) =>
                  setLocalConfig({
                    ['VLANID']: Math.max(
                      2,
                      Math.min(4094, parseInt(e.target.value)),
                    ),
                  }),
              }}
              afterText={'(2-4094)'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Name')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'text',
                maxLength: 16,
                value: localConfig.name,
                onChange: (e) => setLocalConfig({ ['name']: e.target.value }),
              }}
              afterText={t('(16 characters maximum)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <div
          className="editableTable"
          style={{ '--columnsCount': `65px 85px 1fr 1fr 1fr 85px` }}
        >
          <MultiPage.Title className="rowToLeft">
            {t('VLANTable')}
          </MultiPage.Title>

          <div className="row tableNav">
            <span>{t('Select')}</span>
            {[
              'VLANID',
              'Name',
              'UntaggedPorts',
              'TaggedPorts',
              'Operation',
            ].map((item) => (
              <span>{t(item)}</span>
            ))}
          </div>

          {localConfig.VLANTable.map((dataRow, dataIndex) => (
            <div className="row">
              <span>
                <input
                  type="checkbox"
                  checked={localConfig.checkedPorts[dataIndex]}
                  onChange={(e) => handleSelectPort(dataIndex, e)}
                />
              </span>
              <span>{dataRow[0]}</span>
              <span>{dataRow[1]}</span>
              <span>{arrayToRanges(dataRow[2])}</span>
              <span>{arrayToRanges(dataRow[3])}</span>
              <span>
                <MultiPage.Button
                  isBlank
                  action={() => handleDelete(dataIndex)}
                >
                  {t('Delete')}
                </MultiPage.Button>
              </span>
            </div>
          ))}
        </div>

        <div
          className="editableTable"
          style={{
            '--columnsCount': `100px repeat(8, 1fr)`,
          }}
        >
          <MultiPage.Title className="rowToLeft">
            {t('VLANMembership')}
          </MultiPage.Title>

          <div className="row tableNav">
            {['Port', 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <span>{t(item)}</span>
            ))}
          </div>

          <div className="row">
            <span>{t('Untagged')}</span>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((dataElement, dataElementIndex) => (
              <span>
                <MultiPage.Input
                  inputProps={{
                    type: 'radio',
                    name: `col-${dataElement}`,
                    checked:
                      localConfig.currentVLAN == null
                        ? false
                        : localConfig.VLANTable[
                            localConfig.currentVLAN
                          ][2].includes(dataElement),

                    onChange: () => {
                      if (localConfig.currentVLAN != null) {
                        let temp = localConfig.VLANTable;
                        temp[localConfig.currentVLAN][2] = temp[
                          localConfig.currentVLAN
                        ][2].filter((item) => item != dataElement);

                        temp[localConfig.currentVLAN][3] = temp[
                          localConfig.currentVLAN
                        ][3].filter((item) => item != dataElement);

                        temp[localConfig.currentVLAN][2].push(dataElement);

                        setLocalConfig({ VLANTable: temp });
                      }
                    },
                  }}
                />
              </span>
            ))}
          </div>
          <div className="row">
            <span>{t('Tagged')}</span>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((dataElement, dataElementIndex) => (
              <span>
                <MultiPage.Input
                  inputProps={{
                    type: 'radio',
                    name: `col-${dataElement}`,
                    checked:
                      localConfig.currentVLAN == null
                        ? false
                        : localConfig.VLANTable[
                            localConfig.currentVLAN
                          ][3].includes(dataElement),

                    onChange: () => {
                      if (localConfig.currentVLAN != null) {
                        let temp = localConfig.VLANTable;
                        temp[localConfig.currentVLAN][2] = temp[
                          localConfig.currentVLAN
                        ][2].filter((item) => item != dataElement);

                        temp[localConfig.currentVLAN][3] = temp[
                          localConfig.currentVLAN
                        ][3].filter((item) => item != dataElement);

                        temp[localConfig.currentVLAN][3].push(dataElement);

                        setLocalConfig({ VLANTable: temp });
                      }
                    },
                  }}
                />
              </span>
            ))}
          </div>
          <div className="row">
            <span>{t('NotMember')}</span>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((dataElement, dataElementIndex) => (
              <span>
                <MultiPage.Input
                  inputProps={{
                    type: 'radio',
                    name: `col-${dataElement}`,
                    checked:
                      localConfig.currentVLAN == null
                        ? true
                        : !localConfig.VLANTable[
                            localConfig.currentVLAN
                          ][3].includes(dataElement) &&
                          !localConfig.VLANTable[
                            localConfig.currentVLAN
                          ][2].includes(dataElement)
                        ? true
                        : false,
                    onChange: () => {
                      if (localConfig.currentVLAN != null) {
                        let temp = localConfig.VLANTable;
                        temp[localConfig.currentVLAN][2] = temp[
                          localConfig.currentVLAN
                        ][2].filter((item) => item != dataElement);

                        temp[localConfig.currentVLAN][3] = temp[
                          localConfig.currentVLAN
                        ][3].filter((item) => item != dataElement);

                        setLocalConfig({ VLANTable: temp });
                      }
                    },
                  }}
                />
              </span>
            ))}
          </div>

          <div className="row">
            <span>{t('PVID')}</span>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((dataElement, dataElementIndex) => (
              <span>
                <MultiPage.Select
                  selectProps={{
                    value:
                      localConfig.currentVLAN != null &&
                      localConfig.VLANTable[localConfig.currentVLAN][4][
                        dataElementIndex
                      ],
                    onChange: (e) => {
                      // console.log(localConfig.currentVLAN);
                      if (localConfig.currentVLAN != null) {
                        let temp = localConfig.VLANTable;
                        temp[localConfig.currentVLAN][4][dataElementIndex] =
                          e.target.value;
                        setLocalConfig({ VLANTable: temp });
                      }
                    },
                  }}
                  options={localConfig.VLANTable.map((item) => item[0])}
                />
              </span>
            ))}
          </div>
          <div className="row">
            <span>{t('LAG')}</span>
            {[
              1,
              1,
              undefined,
              undefined,
              undefined,
              undefined,
              undefined,
              undefined,
            ].map((dataElement) => (
              <span>{dataElement ? dataElement : '---'}</span>
            ))}
          </div>
        </div>

        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() => {
              MultiPage.handleApplyToConfig(config, localConfig, 'VLANTable');
            }}
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
