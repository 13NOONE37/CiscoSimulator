import React from 'react';
import propTypes from 'prop-types';
import '../Actions.css';

export default function Button({
  children,
  action,
  isSpecial,
  isBlank,
  disabled,
}) {
  return (
    <button
      onClick={action}
      className={
        isBlank ? 'blankButton' : isSpecial ? 'buttonSpecial' : 'buttonDefault'
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  isSpecial: propTypes.bool,
  isBlank: propTypes.bool,
  disabled: propTypes.bool,
  action: propTypes.func,
};
Button.defaultProps = {
  isSpecial: false,
  isBlank: false,
  disabled: false,
  action: () => {},
};
