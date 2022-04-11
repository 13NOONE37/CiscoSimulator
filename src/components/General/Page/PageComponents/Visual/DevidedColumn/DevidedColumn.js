import React from 'react';
import './DevidedColumn.css';
export default function DevidedColumn({ data }) {
  return (
    <div className="DevidedColumn">
      {data[0] || '---'}
      {data[1] || '---'}
    </div>
  );
}
