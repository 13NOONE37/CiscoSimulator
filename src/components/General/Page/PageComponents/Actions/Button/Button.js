import React from 'react';
import propTypes from 'prop-types';
import '../Actions.css';

export default function Button({ children, action, isSpecial, isBlank }) {
  return (
    <button
      onClick={action}
      className={
        isBlank ? 'blankButton' : isSpecial ? 'buttonSpecial' : 'buttonDefault'
      }
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  isSpecial: propTypes.bool,
  isBlank: propTypes.bool,
  action: propTypes.func,
};
Button.defaultProps = {
  isSpecial: false,
  isBlank: false,
  action: () => {},
};
