import React, { useState, useRef } from 'react';
import '../Actions.css';

export default function MaskedInput({ changeCallback, value, isDisabled }) {
  const inputsRef = useRef(null);
  const [address, setAddress] = useState(value || [null, null, null, null]);
  const [currentFocus, setcurrentFocus] = useState(0);
  const handleFocusNext = () => {
    let newFocus = currentFocus === 3 ? 0 : currentFocus + 1;
    inputsRef.current.children[newFocus].focus();
    setcurrentFocus(newFocus);
  };
  const handleKeyDown = (e, index) => {
    if (e.key === ' ') return handleFocusNext();
    if (e.key === '.') {
      e.preventDefault();
      e.stopPropagation();
      return handleFocusNext();
    }
    if (e.key === ',') {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  };
  const handleChange = (e, index) => {
    const validateValue = (value) => {
      if (value.length > 3) return 255;
      return parseInt(Math.max(0, Math.min(255, parseInt(e.target.value))), 10);
    };
    let value = validateValue(e.target.value);

    //Apply value
    let newAddress = [...address];
    newAddress[index] = value;
    setAddress(newAddress);
    changeCallback(newAddress);
    if (e.target.value.length == 3) handleFocusNext();
  };
  return (
    <div
      className={`fakeInput inputSpecial ${isDisabled && 'disabledInput'}`}
      ref={inputsRef}
    >
      {address &&
        address.map((octet, index) => (
          <>
            <input
              type="number"
              value={octet}
              onFocus={(e) => setcurrentFocus(index)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              disabled={isDisabled}
            />
            {index < 3 && '.'}
          </>
        ))}
    </div>
  );
}
