import React, { useState } from 'react';
import 'css/System/ActivePorts.css';

export default function ActivePorts() {
  const [portStatus, setportStatus] = useState([
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <div className="portStatusBox">
      {portStatus.map((item, index) => (
        <span className={` ${item && 'activePort'}`}>
          {index + 1}
          <i className="fas fa-ethernet"></i>
        </span>
      ))}
    </div>
  );
}
