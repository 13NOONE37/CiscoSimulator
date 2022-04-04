import React from 'react';
import propTypes from 'prop-types';
import '../Actions.css';

export default function Input({ isSpecial, afterText, inputProps }) {
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
}
Input.propTypes = {
  isSpecial: propTypes.bool,
  inputProps: propTypes.object,
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
