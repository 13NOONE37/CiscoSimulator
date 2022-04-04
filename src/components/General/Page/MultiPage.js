import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import './MultiPage.css';
import Note from './PageComponents/Visual/Note/Note';
import Title from './PageComponents/Visual/Title/Title';
import ElementsLine from './PageComponents/Positioning/ElementsLine/ElementsLine';
import SubElementsLine from './PageComponents/Positioning/SubElementsLine/SubElementsLine';
import ButtonsRow from './PageComponents/Positioning/ButtonsRow/ButtonsRow';
import Row from './PageComponents/Positioning/Row/Row';
import Input from './PageComponents/Actions/Input/Input';
import Button from './PageComponents/Actions/Button/Button';
import MaskedInput from './PageComponents/Actions/MaskedInput/MaskedInput';
import Select from './PageComponents/Actions/Select/Select';

const deepCopy = (object) => JSON.parse(JSON.stringify(object));
const handleApplyToConfig = (conf, localConf, name) => {
  conf[name] = localConf[name];
};

const WizardContext = createContext({
  t: undefined,
});

const Text = ({ children, style }) => {
  return (
    <span className="textSpan" style={style}>
      {children}
    </span>
  );
};

const DefaultTable = ({ data, navItems, gridTemp, title }) => {
  const { t } = useContext(WizardContext);
  return (
    <div
      className="editableTable"
      style={{
        '--columnsCount': `${
          gridTemp ? gridTemp : `repeat(${navItems.length},1fr)`
        }`,
      }}
    >
      <Title className="rowToLeft">{title}</Title>

      <div className="row tableNav">
        {navItems.map((item) => (
          <span>{item}</span>
        ))}
      </div>

      {data.map((dataRow, dataIndex) => (
        <div className="row">
          {dataRow.map((dataElement) => (
            <span>{dataElement ? t(dataElement) : '---'}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

const EditableTable = ({ title, data, gridTemp, saveTable, isPortSelect }) => {
  const { t } = useContext(WizardContext);
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
          gridTemp ? gridTemp : `65px repeat(${navItems.length},1fr)`
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
              max: 8,
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
        <span>{t('Select')}</span>
        {navItems.map((item) => (
          <span>{t(item)}</span>
        ))}
      </div>
      {data.fields !== undefined && (
        <div className="row">
          <span>
            <input
              type="checkbox"
              onChange={handleSelectAllPorts}
              checked={!tableStates.checkedPorts.includes(false)}
            />
          </span>
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
                  options={field.options}
                  onChangeCallback={(e) => handleChangeValue(e, index)}
                />
              )}
            </span>
          ))}
        </div>
      )}

      {data.data.map((dataRow, dataIndex) => (
        <div className="row">
          <span>
            <input
              type="checkbox"
              checked={tableStates.checkedPorts[dataIndex]}
              onChange={() => handleSelectPort(dataIndex)}
            />
          </span>
          {dataRow.map((dataElement) => (
            <span>{dataElement ? dataElement : '---'}</span>
          ))}
        </div>
      ))}
    </div>
  );
};
EditableTable.propTypes = {
  isPortSelect: PropTypes.bool,
};
EditableTable.defaultProps = {
  isPortSelect: true,
};
const Section = ({ children, width }) => {
  return (
    <div className="pageSection" style={{ width: `${width}px` }}>
      {children}
    </div>
  );
};
Section.propTypes = {
  width: PropTypes.number,
};
Section.defaultProps = {
  width: 600,
};

const Wizard = ({ children }) => {
  const { t } = useTranslation();

  return (
    <WizardContext.Provider value={{ t }}>
      <article className="pageBox">{children}</article>
    </WizardContext.Provider>
  );
};

export {
  Wizard,
  Section,
  Title,
  Note,
  Button,
  ButtonsRow,
  ElementsLine,
  SubElementsLine,
  Row,
  Text,
  Input,
  Select,
  MaskedInput,
  DefaultTable,
  EditableTable,
  deepCopy,
  handleApplyToConfig,
};
