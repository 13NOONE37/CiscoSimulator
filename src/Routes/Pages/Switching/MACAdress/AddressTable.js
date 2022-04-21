import React, { useState, useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import AppContext from 'store/AppContext';

export default function AddressTable() {
  //here will global config
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {},
  );

  return <MultiPage.Wizard></MultiPage.Wizard>;
}
