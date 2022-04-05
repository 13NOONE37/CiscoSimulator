import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function PortIsolation() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [currentPort, setcurrentPort] = useState(1);
  const [forwardPortChecked, setforwardPortChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [forceUpdate, setforceUpdate] = useState(1);

  const handleSelectMainPort = (e) => {
    const value = parseInt(e.target.value);
    setcurrentPort(value);
    setforwardPortChecked(config.portIsolationConfig[value - 1]);
  };
  const handleSelectPort = (index) => {
    setforwardPortChecked(
      forwardPortChecked.map((item, num) => {
        if (index === num) {
          item = !item;
        }
        return item;
      }),
    );
  };
  const handleSelectAllPorts = () => {
    let temp = forwardPortChecked;
    if (forwardPortChecked.includes(false)) {
      temp = temp.map((item) => {
        if (!item) item = true;
        return item;
      });
    } else {
      temp = temp.map((item) => (item = false));
    }
    setforwardPortChecked(temp);
  };
  const handleApply = () => {
    config.portIsolationConfig[currentPort - 1] = forwardPortChecked;
    setforceUpdate(forceUpdate + 1);
  };
  const getForwardList = (list) => {
    //#TODO: better ranges
    for (let i = 0; i < 8; i++) {
      console.log(list[i]);
    }
    return `${list
      .map((item, index) => {
        if (item) return `${index + 1}`;
      })
      .join(' ')}`;
  };

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Select
          onChangeCallback={handleSelectMainPort}
          options={[1, 2, 3, 4, 5, 6, 7, 8]}
        />
        <MultiPage.ElementsLine>
          <MultiPage.Text>{t('ForwardPortlist')}:</MultiPage.Text>
          <MultiPage.Row style={{ gap: '25px' }}>
            {forceUpdate &&
              forwardPortChecked.map((item, index) => (
                <MultiPage.Input
                  inputProps={{
                    type: 'checkbox',
                    checked: item,
                    onChange: () => handleSelectPort(index),
                  }}
                  afterText={`${index + 1}${index < 2 ? '(LAG1)' : ''}`}
                />
              ))}
          </MultiPage.Row>
        </MultiPage.ElementsLine>
        <MultiPage.ButtonsRow>
          <MultiPage.Button action={handleSelectAllPorts} isSpecial>
            {t('All')}
          </MultiPage.Button>
          <MultiPage.Button action={handleApply} isSpecial>
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
      </MultiPage.Section>
      <MultiPage.Section>
        <MultiPage.DefaultTable
          title={t('PortIsolationList')}
          navItems={[t('Port'), t('ForwardPortList')]}
          data={[
            ...config.portIsolationConfig.map((item, index) => [
              index + 1,
              getForwardList(item),
            ]),
          ]}
        />
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
