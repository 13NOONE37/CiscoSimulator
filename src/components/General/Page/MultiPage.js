import React, { createContext } from 'react';
import { useTranslation } from 'react-i18next';
import './MultiPage.css';
import Title from './PageComponents/Visual/Title/Title';
import Text from './PageComponents/Visual/Text/Text';
import Note from './PageComponents/Visual/Note/Note';
import ElementsLine from './PageComponents/Positioning/ElementsLine/ElementsLine';
import SubElementsLine from './PageComponents/Positioning/SubElementsLine/SubElementsLine';
import ButtonsRow from './PageComponents/Positioning/ButtonsRow/ButtonsRow';
import Row from './PageComponents/Positioning/Row/Row';
import Input from './PageComponents/Actions/Input/Input';
import Button from './PageComponents/Actions/Button/Button';
import MaskedInput from './PageComponents/Actions/MaskedInput/MaskedInput';
import Select from './PageComponents/Actions/Select/Select';
import DefaultTable from './PageComponents/Tables/DefaultTable';
import EditableTable from './PageComponents/Tables/EditableTable';
import Section from './PageComponents/Positioning/Section/Section';
import DevidedColumn from './PageComponents/Visual/DevidedColumn/DevidedColumn';

const deepCopy = (object) => JSON.parse(JSON.stringify(object));
const handleApplyToConfig = (conf, localConf, name) => {
  conf[name] = localConf[name];
};
function isValidMAC(str) {
  return /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(str.trim());
}

const WizardContext = createContext({
  t: undefined,
});

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
  DevidedColumn,
  isValidMAC,
};
