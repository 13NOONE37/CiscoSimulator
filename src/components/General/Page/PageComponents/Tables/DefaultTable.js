import React from 'react';
import './Tables.css';
import propTypes from 'prop-types';
import { Title } from '../../MultiPage';
import { useTranslation } from 'react-i18next';

export default function DefaultTable({ data, navItems, gridTemp, title }) {
  const { t } = useTranslation();

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
      {navItems.join('').length > 0 && (
        <div className="row tableNav">
          {navItems.map((item) => (
            <span>{t(item)}</span>
          ))}
        </div>
      )}

      {data.map((dataRow, dataIndex) => (
        <div className="row">
          {dataRow.map((dataElement) => (
            <span>
              {typeof dataElement === 'object'
                ? dataElement !== undefined
                  ? dataElement
                  : '---'
                : t(dataElement !== undefined ? dataElement : '---')}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

DefaultTable.propTypes = {
  data: propTypes.array,
  navitems: propTypes.array,
};
DefaultTable.defaultProps = {
  data: [],
  navItems: [],
};
