import React, { useRef, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import 'css/System/SystemIp.css';
import Note from 'components/General/Note/Note';

export default function SystemIp({ t, config }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    config.ip = currentIP;
    config.mask = currentSubnetMask;
    config.gateway = currentDefaultGateway;
    config.addressMode = currentAdressMode;
    config.managmentVlan = currentVlanManagment;
  };
  const handleChange = (e, setvalue) => {
    setvalue(e.currentTarget.value);
  };

  const [currentIP, setcurrentIP] = useState(config.ip || '');
  const [currentSubnetMask, setcurrentSubnetMask] = useState(config.mask || '');
  const [currentDefaultGateway, setcurrentDefaultGateway] = useState(
    config.gateway || '',
  );
  const [currentAdressMode, setcurrentAdressMode] = useState(
    config.addressMode || 'Static IP',
  );
  const [currentVlanManagment, setcurrentVlanManagment] = useState(
    config.managmentVlan || 1,
  );

  //TODO: Zrobić przycinanie zer wiodących w adresach IP

  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('SystemIP')}</div>
        <form onSubmit={handleSubmit} className="tplinkFormBase1">
          <span>
            {t('Info_MACAddress')}:
            <span className="spanText">{config.mac}</span>
          </span>
          <span>
            {t('Info_IPAdressMode')}
            <div className="radioForm">
              <label>
                <input
                  type="radio"
                  name="addresMode"
                  value="Static IP"
                  defaultChecked={currentAdressMode == 'Static IP'}
                  onChange={(e) => setcurrentAdressMode(e.currentTarget.name)}
                />
                Static IP
              </label>
              <label>
                <input
                  type="radio"
                  name="addresMode"
                  value="DHCP"
                  defaultChecked={currentAdressMode == 'DHCP'}
                  onChange={(e) => setcurrentAdressMode(e.currentTarget.name)}
                />
                DHCP
              </label>
              <label>
                <input
                  type="radio"
                  name="addresMode"
                  value="BOOTP"
                  defaultChecked={currentAdressMode == 'BOOTP'}
                  onChange={(e) => setcurrentAdressMode(e.currentTarget.name)}
                />
                BOOTP
              </label>
            </div>
          </span>
          <span style={{ gridTemplateColumns: 'repeat(4, auto)' }}>
            {t('Info_ManagmentValue')}:
            <input
              className="basicInput"
              type="number"
              min={1}
              max={4094}
              style={{ width: '50px' }}
              value={currentVlanManagment}
              onChange={(e) => handleChange(e, setcurrentVlanManagment)}
            />
            <span className="spanText">(VLAN ID: 1-4094)</span>
            <input
              type="submit"
              className="moveRight buttonPointer"
              value={'Apply'}
            />
          </span>

          <span>
            {t('Info_IPAddress')}:
            <ReactInputMask
              className="basicInput"
              mask="999.999.999.999"
              maskChar={' '}
              value={currentIP}
              onChange={(e) => handleChange(e, setcurrentIP)}
            ></ReactInputMask>
            <input type="submit" className="moveRight" value={t('Help')} />
          </span>
          <span>
            {t('Info_SubnetMask')}:
            <ReactInputMask
              className="basicInput"
              mask="999.999.999.999"
              maskChar={' '}
              value={currentSubnetMask}
              onChange={(e) => handleChange(e, setcurrentSubnetMask)}
            ></ReactInputMask>
          </span>
          <span>
            {t('Info_DefaultGateway')}:
            <ReactInputMask
              className="basicInput"
              mask="999.999.999.999"
              maskChar={' '}
              value={currentDefaultGateway}
              onChange={(e) => handleChange(e, setcurrentDefaultGateway)}
            ></ReactInputMask>
          </span>
        </form>
        <Note
          content={
            <>
              <br />
              Changing IP address to a different IP segment will interrupt the
              network communication, so please keep the new IP address in the
              same IP segment with the local network.
            </>
          }
        />
      </div>
    </article>
  );
}
