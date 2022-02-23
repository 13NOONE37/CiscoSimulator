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
const ElementsLine = ({ children }) => {
  return <div className="elementsLine">{children}</div>;
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
const Input = ({ type, isSpecial }) => {
  return (
    <input
      type={type}
      className={isSpecial ? 'inputSpecial' : 'inputDefault'}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  isSpecial: PropTypes.bool,
};
Input.defaultProps = {
  type: 'text',
  isSpecial: true,
};
const DefaultTable = ({}) => {};
const EditableTable = ({}) => {};
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
