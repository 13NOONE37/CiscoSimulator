import React from 'react';
import './DevidedColumn.css';
export default function DevidedColumn({ data }) {
  return (
    <div className="DevidedColumn">
      <span>{data[0] || '---'}</span>
      <span>{data[1] || '---'}</span>
    </div>
  );
}
