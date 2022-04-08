import React from 'react';
import propTypes from 'prop-types';
import '../Actions.css';

export default function Select({ isSpecial, options, selectProps }) {
  return (
    <div className="alignVerticaly">
      <select
        className={isSpecial ? 'inputSpecial' : 'inputDefault'}
        {...selectProps}
      >
        {options.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
Select.propTypes = {
  isSpecial: propTypes.bool,
  options: propTypes.array,
};
Select.defaultProps = {
  isSpecial: true,
  options: [],
};
