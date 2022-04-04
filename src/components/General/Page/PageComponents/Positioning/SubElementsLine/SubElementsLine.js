import propTypes from 'prop-types';
import React from 'react';
import './SubElementsLine.css';

export default function SubElementsLine({ children, FirstColumnWidth }) {
  return (
    <div
      className="subElementsLine"
      style={{ gridTemplateColumns: `${FirstColumnWidth}px 1fr` }}
    >
      {children}
    </div>
  );
}
SubElementsLine.propTypes = {
  FirstColumnWidth: propTypes.number,
};
SubElementsLine.defaultProps = {
  FirstColumnWidth: 120,
};
