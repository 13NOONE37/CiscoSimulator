import React, { createContext, useContext, useState, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import './MultiPage.css';

const deepCopy = (object) => JSON.parse(JSON.stringify(object));

const WizardContext = createContext({
  t: undefined,
});
const Title = ({ children, className }) => {
  const { t } = useContext(WizardContext);
  const classes = ['BasicTitle', className].join(' ');
  return <h1 className={classes}>{t(children)}</h1>;
};
const Note = ({ children }) => {
  const { t } = useContext(WizardContext);
  return (
    <div className="note">
      <strong>{t('Note')}:</strong>
      <br />
      {t(children)}
    </div>
  );
};

const Button = ({ children, action, isSpecial }) => {
  const { t } = useContext(WizardContext);
  return (
    <button
      onClick={action}
      className={isSpecial ? 'buttonSpecial' : 'buttonDefault'}
    >
      {t(children)}
    </button>
  );
};
Button.propTypes = {
  action: PropTypes.func,
};
Button.defaultProps = {
  action: () => {},
  isSpecial: false,
};

const ButtonsRow = ({ children }) => {
  return <div className="buttonsRow">{children}</div>;
};
const ElementsLine = ({ children, actionButton }) => {
  return (
    <div
      className={`elementsLine ${
        !actionButton ? 'elementsLineNoButton' : null
      }`}
    >
      {children}
      {actionButton && actionButton()}
    </div>
  );
};

const SubElementsLine = ({ children, FirstColumnWidth }) => {
  return (
    <div
      className="subElementLine"
      style={{ gridTemplateColumns: `${FirstColumnWidth}px 1fr` }}
    >
      {children}
    </div>
  );
};
SubElementsLine.propTypes = {
  FirstColumnWidth: PropTypes.number,
};
SubElementsLine.defaultProps = {
  FirstColumnWidth: 120,
};
const Input = ({ isSpecial, afterText, inputProps }) => {
  const handleMask = (e) => {
    console.log(e.target.value, e.key);
    console.log(/^[0-9]+$/.test(e.target.value));
  };
  return (
    <div className="alignVerticaly">
      <input
        onKeyDown={handleMask}
        {...inputProps}
        className={isSpecial ? 'inputSpecial' : 'inputDefault'}
      />
      {afterText.length > 0 && <span>{afterText}</span>}
    </div>
  );
};
Input.propTypes = {
  isSpecial: PropTypes.bool,
  inputProps: PropTypes.object,
};
Input.defaultProps = {
  isSpecial: true,
  afterText: '',
  inputProps: {
    type: 'text',
    placeholder: 'Value',
    name: 'Text input',
    value: '',
    onChange: () => {},
  },
};
const Select = ({ isSpecial, options, onChangeCallback }) => {
  const { t } = useContext(WizardContext);
  return (
    <div className="alignVerticaly">
      <select
        className={isSpecial ? 'inputSpecial' : 'inputDefault'}
        onChange={onChangeCallback}
      >
        {options.map((item) => (
          <option>{t(item)}</option>
        ))}
      </select>
    </div>
  );
};
Select.propTypes = {
  isSpecial: PropTypes.bool,
  options: PropTypes.array,
  onChangeCallback: PropTypes.func,
};
Select.defaultProps = {
  isSpecial: true,
  options: [],
  onChangeCallback: () => {},
};

const DefaultTable = ({ ourData, navItems, gridTemp }) => {
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
      <Title className="rowToLeft">Usertable</Title>

      <div className="row tableNav">
        {navItems.map((item) => (
          <span>{t(item)}</span>
        ))}
      </div>

      {ourData.map((dataRow, dataIndex) => (
        <div className="row">
          {dataRow.map((dataElement) => (
            <span>{dataElement ? t(dataElement) : '---'}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

const EditableTable = ({ title, ourData, gridTemp }) => {
  const { t } = useContext(WizardContext);
  const [tableStates, setTableStates] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      currentPortValue: 1,
      checkedPorts: [false, false, false, false, false, false, false, false],
      ourData: ourData,
    },
  );
  const navItems = ourData.names;

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
    let temp = tableStates.ourData;

    temp.data = temp.data.map((item, index) => {
      if (tableStates.checkedPorts[index]) {
        item[editIndex] = e.target.value;
      }
      return item;
    });

    setTableStates({
      ourData: temp,
    });
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
      <Title className="rowToLeft">{t(title)}</Title>

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

      <div className="row tableNav">
        <span>{t('Select')}</span>
        {navItems.map((item) => (
          <span>{t(item)}</span>
        ))}
      </div>
      <div className="row">
        <span>
          <input
            type="checkbox"
            onChange={handleSelectAllPorts}
            checked={!tableStates.checkedPorts.includes(false)}
          />
        </span>
        {tableStates.ourData.fields.map((field, index) => (
          <span>
            {field.type === 'text' && (
              <Input
                inputProps={{
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
      {tableStates.ourData.data.map((dataRow, dataIndex) => (
        <div className="row">
          <span>
            <input
              type="checkbox"
              checked={tableStates.checkedPorts[dataIndex]}
              onChange={() => handleSelectPort(dataIndex)}
            />
          </span>
          {dataRow.map((dataElement) => (
            <span>{dataElement ? t(dataElement) : '---'}</span>
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
  Input,
  DefaultTable,
  EditableTable,
};
