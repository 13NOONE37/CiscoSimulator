import React from 'react';
import './Tables.css';
import propTypes from 'prop-types';
import { Title } from '../../MultiPage';

export default function DefaultTable({ data, navItems, gridTemp, title }) {
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
            <span>{dataElement !== undefined ? dataElement : '---'}</span>
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
