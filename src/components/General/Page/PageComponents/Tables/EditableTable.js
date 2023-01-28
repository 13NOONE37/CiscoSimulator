import React, { useReducer } from 'react';
import './Tables.css';
import { useTranslation } from 'react-i18next';
import { Title, Button, Input, Select, MaskedInput } from '../../MultiPage';

export default function EditableTable({
  title,
  data,
  gridTemp,
  saveTable,
  isPortSelect,
  isLeftPortSelect,
  isAllSelect,
}) {
  const { t } = useTranslation();
  const [tableStates, setTableStates] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      currentPortValue: 1,
      checkedPorts: [false, false, false, false, false, false, false, false],
    },
  );
  const navItems = data.names;

  const handleChange = (e) => {
    setTableStates({
      [e.target.name]: e.target.value,
    });
  };
  const handleSelectPort = (index) => {
    let temp = tableStates.checkedPorts;
    temp[index] = !temp[index];

    setTableStates({
      checkedPorts: temp,
    });
  };
  const handleSelectAllPorts = () => {
    let temp = tableStates.checkedPorts;
    if (temp.includes(false)) {
      //here was tableStates.checkedPorts
      temp = temp.map((item) => {
        if (!item) item = true;
        return item;
      });
    } else {
      temp = temp.map((item) => (item = false));
    }
    setTableStates({
      checkedPorts: temp,
    });
  };
  const handleChangeValue = (e, editIndex) => {
    let temp = data;

    temp.data = temp.data.map((item, index) => {
      if (tableStates.checkedPorts[index]) {
        item[editIndex] = e.target.value;
      }
      return item;
    });

    saveTable(temp);
  };

  return (
    <div
      className="editableTable"
      style={{
        '--columnsCount': `${
          gridTemp
            ? gridTemp
            : `${isLeftPortSelect ? '65px' : ''} repeat(${navItems.length},1fr)`
        }`,
      }}
    >
      <Title className="rowToLeft">{title}</Title>

      {isPortSelect && (
        <div className="row portSelect">
          Port
          <Input
            inputProps={{
              type: 'number',
              min: 1,
              max: data.data.length | 8,
              value: tableStates.currentPortValue,
              name: 'currentPortValue',
              onChange: handleChange,
            }}
          />
          <Button
            action={() =>
              handleSelectPort(parseInt(tableStates.currentPortValue) - 1)
            }
          >
            {t('Select')}
          </Button>
        </div>
      )}
      <div className="row tableNav">
        {isLeftPortSelect && <span>{t('Select')}</span>}
        {navItems.map((item) => (
          <span>{t(item)}</span>
        ))}
      </div>
      {data.fields !== undefined && data.fields.length > 0 && (
        <div className="row">
          {isLeftPortSelect && isAllSelect && (
            <span>
              <input
                type="checkbox"
                onChange={handleSelectAllPorts}
                checked={!tableStates.checkedPorts.includes(false)}
              />
            </span>
          )}
          {data.fields.map((field, index) => (
            <span>
              {field.type === 'input' && (
                <Input
                  inputProps={{
                    ...field.options,
                    onChange: (e) => handleChangeValue(e, index),
                    style: { width: '100%' },
                  }}
                />
              )}
              {field.type === 'select' && (
                <Select
                  selectProps={{
                    onChange: (e) => handleChangeValue(e, index),
                  }}
                  options={field.options}
                />
              )}
              {field.type === 'inputmasked' && (
                <MaskedInput
                  changeCallback={(newValue) => {
                    let temp = data;

                    temp.data = temp.data.map((item, index2) => {
                      if (tableStates.checkedPorts[index2]) {
                        item[index] = newValue;
                      }
                      return item;
                    });

                    saveTable(temp);
                  }}
                />
              )}
            </span>
          ))}
        </div>
      )}

      {data.data.map((dataRow, dataIndex) => (
        <div className="row">
          {isLeftPortSelect && (
            <span>
              <input
                type="checkbox"
                checked={tableStates.checkedPorts[dataIndex]}
                onChange={() => handleSelectPort(dataIndex)}
              />
            </span>
          )}
          {dataRow.map((dataElement, elementIndex) => (
            <>
              {data.fields[elementIndex].type === 'inputmasked' ? (
                <span>{dataElement.join('.')}</span>
              ) : (
                <span>
                  {' '}
                  {typeof dataElement === 'object'
                    ? dataElement !== undefined
                      ? dataElement
                      : '---'
                    : t(dataElement !== undefined ? dataElement : '---')}{' '}
                </span>
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
}

EditableTable.defaultProps = {
  isPortSelect: true,
  isLeftPortSelect: true,
  isAllSelect: true,
  saveTable: () => {},
};
