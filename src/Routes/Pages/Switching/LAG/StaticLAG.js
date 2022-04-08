import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function StaticLAG() {
  const { config } = useContext(AppContext);
  const { t } = useTranslation();
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      hashAlgorithmLAG: config.hashAlgorithmLAG,
      lagTable: config.lagTable,
    },
  );

  return <div>StaticLAG</div>;
}
