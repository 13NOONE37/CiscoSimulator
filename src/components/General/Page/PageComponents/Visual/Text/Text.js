import React from 'react';
import './Text.css';
export default function Text({ children, style }) {
  return (
    <span className="textSpan" style={style}>
      {children}
    </span>
  );
}
