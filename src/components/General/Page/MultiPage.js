import React, { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import './MultiPage.css';

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
const ElementsLine = ({ children, isWihoutButton }) => {
  return (
    <div className={`elementsLine ${isWihoutButton && 'elementsLineNoButton'}`}>
      {children}
    </div>
  );
};

const SubElementsLine = ({ children, FirstColumnWidth }) => {
  return (
    <div
      className="subElementLine"
      style={{ gridTemplateColumns: `${FirstColumnWidth}% 1fr` }}
    >
      {children}
    </div>
  );
};
SubElementsLine.propTypes = {
  FirstColumnWidth: PropTypes.number,
};
SubElementsLine.defaultProps = {
  FirstColumnWidth: 25,
};
const Input = ({ isSpecial, afterText, inputProps }) => {
  return (
    <div className="alignVerticaly">
      <input
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
const DefaultTable = ({}) => {
  return <div>Table</div>;
};
const EditableTable = ({}) => {
  // return (
  //   <div className="InfoTable portTable">
  //     <Title content="Usertable" addClass="row" />
  //     <div className="rowUser portSelect">
  //       <span>
  //         Port
  //         <input
  //           className="basicInput"
  //           type="number"
  //           min={1}
  //           max={8}
  //           value={currentSelect}
  //           onChange={(e) =>
  //             setcurrentSelect(Math.max(1, Math.min(e.target.valueAsNumber, 8)))
  //           }
  //         />
  //         <button className="buttonPointer" onClick={handleSelectOne}>
  //           {t('Select')}
  //         </button>
  //       </span>
  //     </div>
  //     <div className="rowUser tableNav">
  //       <span>{t('Select')}</span>
  //       <span>{t('Port')}</span>
  //       <span>{t('Description')}</span>
  //       <span>{t('Status')}</span>
  //       <span>{t('SpeedAndDuplex')}</span>
  //       <span>{t('FlowControl')}</span>
  //       <span>{t('LAG')}</span>
  //     </div>
  //     <div className="rowUser controlRow">
  //       <span>
  //         <input type="checkbox" onChange={handleSelectAllPorts} />
  //       </span>
  //       <span></span>
  //       <span>
  //         <input
  //           className="basicInput"
  //           type="text"
  //           maxLength={16}
  //           onChange={handleChangeDescription}
  //         />
  //       </span>
  //       <span>
  //         <select
  //           className="basicInput"
  //           onChange={(e) => handleChange(e, 'status')}
  //         >
  //           <option>Enable</option>
  //           <option>Disable</option>
  //         </select>
  //       </span>
  //       <span>
  //         <select
  //           className="basicInput"
  //           onChange={(e) => handleChange(e, 'speed')}
  //         >
  //           <option>Auto</option>
  //           <option>10MHD</option>
  //         </select>
  //       </span>
  //       <span>
  //         <select
  //           className="basicInput"
  //           onChange={(e) => handleChange(e, 'flow')}
  //         >
  //           <option>Enable</option>
  //           <option>Disable</option>
  //         </select>
  //       </span>
  //       <span></span>
  //     </div>
  //     {portConf.map((item, index) => (
  //       <div className="rowUser" key={index}>
  //         <span>
  //           <input
  //             type="checkbox"
  //             checked={portChecked[index]}
  //             onChange={() => handleSelectPort(index)}
  //           />
  //         </span>
  //         <span>{index + 1}</span>
  //         <span>{item.description}</span>
  //         <span>{item.status}</span>
  //         <span>{item.speed}</span>
  //         <span>{item.flow}</span>
  //         <span>{item.lag}</span>
  //       </div>
  //     ))}
  //   </div>
  // );
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
