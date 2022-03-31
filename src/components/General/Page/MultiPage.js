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

const deepCopy = (object) => JSON.parse(JSON.stringify(object));
const handleApplyToConfig = (conf, localConf, name) => {
  conf[name] = localConf[name];
};

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
      {children && <strong>{t('Note')}:</strong>}
      <br />
      {children}
    </div>
  );
};

const Button = ({ children, action, isSpecial, isBlank }) => {
  const { t } = useContext(WizardContext);
  return (
    <button
      onClick={action}
      className={
        isBlank ? 'blankButton' : isSpecial ? 'buttonSpecial' : 'buttonDefault'
      }
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
  isBlank: false,
};

const ButtonsRow = ({ children }) => {
  return <div className="buttonsRow">{children}</div>;
};
const Row = ({ children, style }) => {
  return (
    <div className="elementsRow" style={style}>
      {children}
    </div>
  );
};
const Text = ({ children, style }) => {
  return (
    <span className="textSpan" style={style}>
      {children}
    </span>
  );
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
  const randomId = `input_
    ${Math.round((new Date().getTime() * Math.random() * 100) / 100)}
  `;
  return (
    <div className="alignVerticaly">
      <input
        {...inputProps}
        id={randomId}
        className={isSpecial ? 'inputSpecial' : 'inputDefault'}
      />
      {afterText.length > 0 && <label htmlFor={randomId}>{afterText}</label>}
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
const MaskedInput = ({ isSpecial, changeCallback, value, isDisabled }) => {
  const inputsRef = useRef(null);
  const [address, setAddress] = useState(value || [null, null, null, null]);
  const [currentFocus, setcurrentFocus] = useState(0);
  const handleFocusNext = () => {
    let newFocus = currentFocus === 3 ? 0 : currentFocus + 1;
    inputsRef.current.children[newFocus].focus();
    setcurrentFocus(newFocus);
  };
  const handleKeyDown = (e, index) => {
    if (e.key === ' ') return handleFocusNext();
    if (e.key === '.') {
      e.preventDefault();
      e.stopPropagation();
      return handleFocusNext();
    }
    if (e.key === ',') {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  };
  const handleChange = (e, index) => {
    const validateValue = (value) => {
      if (value.length > 3) return 255;
      return parseInt(Math.max(0, Math.min(255, parseInt(e.target.value))), 10);
    };
    let value = validateValue(e.target.value);

    //Apply value
    let newAddress = [...address];
    newAddress[index] = value;
    setAddress(newAddress);
    changeCallback(newAddress);
    if (e.target.value.length == 3) handleFocusNext();
  };
  return (
    <div
      className={`fakeInput inputSpecial ${isDisabled && 'disabledInput'}`}
      ref={inputsRef}
    >
      {address &&
        address.map((octet, index) => (
          <>
            <input
              type="number"
              value={octet}
              onFocus={(e) => setcurrentFocus(index)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              disabled={isDisabled}
            />
            {index < 3 && '.'}
          </>
        ))}
    </div>
  );
};

const Select = ({ isSpecial, options, onChangeCallback, selectProps }) => {
  return (
    <div className="alignVerticaly">
      <select
        className={isSpecial ? 'inputSpecial' : 'inputDefault'}
        onChange={onChangeCallback}
        {...selectProps}
      >
        {options.map((item) => (
          <option value={item}>{item}</option>
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
      <Title className="rowToLeft">{t(title)}</Title>

      <div className="row tableNav">
        {navItems.map((item) => (
          <span>{t(item)}</span>
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
