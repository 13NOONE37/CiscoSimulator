import React from 'react';
import './Row.css';

export default function Row({ children, style }) {
  return (
    <div className="elementsRow" style={style}>
      {children}
    </div>
  );
}
