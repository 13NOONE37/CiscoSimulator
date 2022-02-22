import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import './MultiPage.css';

const { t } = useTranslation();

const Title = ({ children, className }) => {
  const classes = ['BasicTitle', addClass].join(' ');
  return <h1 className={classes}>{t(content)}</h1>;
};
const Note = ({ children }) => {
  return (
    <div className="note">
      <strong>{t('Note')}:</strong>
      {children}
    </div>
  );
};

const Button = ({ children, action }) => {
  return <button onClick={action}>{children}</button>;
};
Button.propTypes = {
  action: PropTypes.func,
};
Button.defaultProps = {
  action: () => {},
};
const ButtonsRow = ({ children }) => {
  return <div className="buttonsRow">{children}</div>;
};

const Page = ({ children, width }) => {
  return (
    <div className="pageSection" style={{ width: `${width}px` }}>
      {children}
    </div>
  );
};
const Wizard = ({ children }) => {
  return <article className="pageBox">{children}</article>;
};

export default { Wizard };
