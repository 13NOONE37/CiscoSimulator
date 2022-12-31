import React, { useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function SSHConfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      sshStatus: config.sshStatus,
      protocolv1SSH: config.protocolv1SSH,
      protocolv2SSH: config.protocolv2SSH,
      idleTimeoutSSH: config.idleTimeoutSSH,
      maxConnectSSH: config.maxConnectSSH,
      encryptionAlgorithmSSH: config.encryptionAlgorithmSSH,
      dataIntegrityAlgorithmSSH: config.dataIntegrityAlgorithmSSH,
      keyTypeSSH: config.keyTypeSSH,
    },
  );

  const handleEncryptionChange = (e) => {
    const index = localConfig.encryptionAlgorithmSSH.indexOf(e.target.value);
    if (index != -1) {
      setLocalConfig({
        ['encryptionAlgorithmSSH']: localConfig.encryptionAlgorithmSSH.filter(
          (item) => item != e.target.value,
        ),
      });
    } else {
      const temp = localConfig.encryptionAlgorithmSSH;
      temp.push(e.target.value);
      setLocalConfig({
        ['encryptionAlgorithmSSH']: temp,
      });
    }
  };
  const handleIntegrityChange = (e) => {
    const index = localConfig.dataIntegrityAlgorithmSSH.indexOf(e.target.value);
    if (index != -1) {
      setLocalConfig({
        ['dataIntegrityAlgorithmSSH']:
          localConfig.dataIntegrityAlgorithmSSH.filter(
            (item) => item != e.target.value,
          ),
      });
    } else {
      const temp = localConfig.dataIntegrityAlgorithmSSH;
      temp.push(e.target.value);
      setLocalConfig({ ['dataIntegrityAlgorithmSSH']: temp });
    }
  };
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('GlobalConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>SSH:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'ssh',
                  defaultChecked: localConfig.sshStatus === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['sshStatus']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'ssh',
                  defaultChecked: localConfig.sshStatus === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['sshStatus']: e.target.value }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ProtocolV1')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'sshv1',
                  defaultChecked: localConfig.protocolv1SSH === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['protocolv1SSH']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'sshv1',
                  defaultChecked: localConfig.protocolv1SSH === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['protocolv1SSH']: e.target.value }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ProtocolV2')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'sshv2',
                  defaultChecked: localConfig.protocolv2SSH === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['protocolv2SSH']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'sshv2',
                  defaultChecked: localConfig.protocolv2SSH === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['protocolv2SSH']: e.target.value }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() => {
                MultiPage.handleApplyToConfig(config, localConfig, 'sshStatus');
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'protocolv1SSH',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'protocolv2SSH',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'idleTimeoutSSH',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'maxConnectSSH',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('IdleTimeout')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 1,
                max: 120,
                value: localConfig.idleTimeoutSSH,
                onChange: (e) =>
                  setLocalConfig({ ['idleTimeoutSSH']: e.target.value }),
              }}
              afterText="sec(1-120)"
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('MaxConnect')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 1,
                max: 5,
                value: localConfig.maxConnectSSH,
                onChange: (e) =>
                  setLocalConfig({ ['maxConnectSSH']: e.target.value }),
              }}
              afterText="(1-5)"
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>

      <MultiPage.Section>
        <MultiPage.Title>{t('EncryptionAlgorithm')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() =>
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'encryptionAlgorithmSSH',
                )
              }
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.Row>
            {['AES128-CBC', 'AES192-CBC', 'AES256-CBC'].map((item, index) => (
              <MultiPage.Input
                inputProps={{
                  type: 'checkbox',
                  value: item,
                  defaultChecked:
                    localConfig.encryptionAlgorithmSSH.indexOf(item) != -1,

                  onChange: handleEncryptionChange,
                }}
                afterText={item}
              />
            ))}
          </MultiPage.Row>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.Row>
            {['Blowfish-CBC', 'Cast128-CBC', '3DES-CBC'].map((item, index) => (
              <MultiPage.Input
                inputProps={{
                  type: 'checkbox',
                  value: item,
                  defaultChecked:
                    localConfig.encryptionAlgorithmSSH.indexOf(item) != -1,

                  onChange: handleEncryptionChange,
                }}
                afterText={item}
              />
            ))}
          </MultiPage.Row>
        </MultiPage.ElementsLine>
      </MultiPage.Section>

      <MultiPage.Section>
        <MultiPage.Title>{t('DataIntegrityAlgorithm')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() =>
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'dataIntegrityAlgorithmSSH',
                )
              }
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <MultiPage.Input
              inputProps={{
                type: 'checkbox',
                value: 'HMAC-SHA1',
                onChange: handleIntegrityChange,
                defaultChecked:
                  localConfig.dataIntegrityAlgorithmSSH.indexOf('HMAC-SHA1') !=
                  -1,
              }}
              afterText="HMAC-SHA1"
            />
            <MultiPage.Input
              inputProps={{
                type: 'checkbox',
                value: 'HMAC-MD5',
                onChange: handleIntegrityChange,
                defaultChecked:
                  localConfig.dataIntegrityAlgorithmSSH.indexOf('HMAC-MD5') !=
                  -1,
              }}
              afterText="HMAC-MD5"
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>

      <MultiPage.Section>
        <MultiPage.Title>{t('KeyDownload')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t('Download')}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('KeyType')}:</span>
            <MultiPage.Select options={['SSH-2 RSA/DSA', 'SSH-1 RSA']} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('KeyType')}:</span>
            <input type="file" />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Note>
          {t('Note9_1')}
          <br />
          {t('Note9_2')}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
