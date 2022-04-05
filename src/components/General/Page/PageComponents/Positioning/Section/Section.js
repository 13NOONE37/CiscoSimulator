import propTypes from 'prop-types';
import React from 'react';
import './Section.css';

export default function Section({ children, width }) {
  return (
    <div className="pageSection" style={{ width: `${width}px` }}>
      {children}
    </div>
  );
}
Section.propTypes = {
  width: propTypes.number,
};
Section.defaultProps = {
  width: 600,
};
