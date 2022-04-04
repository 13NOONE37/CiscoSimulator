import React from 'react';
import './ElementsLine.css';

export default function ElementsLine({ children, actionButton }) {
  return (
    <div
      className={`elementsLine ${
        !actionButton ? 'elementsLineNoButton' : null
      }`}
    >
      {children}
      {actionButton && actionButton()}
    </div>
  );
}
