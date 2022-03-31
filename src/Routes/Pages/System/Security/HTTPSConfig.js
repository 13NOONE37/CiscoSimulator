import React, { useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function HTTPSConfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      httpsStatus: config.httpsStatus,

      sslVersionHTTPS: config.sslVersionHTTPS,
      tlsVersionHTTPS: config.tlsVersionHTTPS,

      cipherSuite1HTTPS: config.cipherSuite1HTTPS,
      cipherSuite2HTTPS: config.cipherSuite2HTTPS,
      cipherSuite3HTTPS: config.cipherSuite3HTTPS,
      cipherSuite4HTTPS: config.cipherSuite4HTTPS,

      sessionTimeoutHTTPS: config.sessionTimeoutHTTPS,
      numberControlHTTPS: config.numberControlHTTPS,
      adminNumberHTTPS: config.adminNumberHTTPS,
      guestNumberHTTPS: config.guestNumberHTTPS,
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={650}>
        <MultiPage.Title>{t('GlobalConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() => {
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'httpsStatus',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'sslVersionHTTPS',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'tslVersionHTTPS',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={250}>
            <span>{t('HTTPS')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'HTTPStatus',
                  defaultChecked: localConfig.httpsStatus === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['httpsStatus']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'HTTPStatus',
                  defaultChecked: localConfig.httpsStatus === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['httpsStatus']: e.target.value }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={250}>
            <span>{t('SSLVersion3')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'SSLVersion',
                  defaultChecked: localConfig.sslVersionHTTPS === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['sslVersionHTTPS']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'SSLVersion',
                  defaultChecked: localConfig.sslVersionHTTPS === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['sslVersionHTTPS']: e.target.value }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={250}>
            <span>{t('HTTPS')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'TLSVersion',
                  defaultChecked: localConfig.tlsVersionHTTPS === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['tlsVersionHTTPS']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'TLSVersion',
                  defaultChecked: localConfig.tlsVersionHTTPS === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['tlsVersionHTTPS']: e.target.value }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>

      <MultiPage.Section width={650}>
        <MultiPage.Title>{t('CIPHERSUITE')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={250}>
            <span>RSA_WITH_RC4_128_MD5:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'cipher1',
                  defaultChecked: localConfig.cipherSuite1HTTPS === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['cipherSuite1HTTPS']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'cipher1',
                  defaultChecked: localConfig.cipherSuite1HTTPS === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['cipherSuite1HTTPS']: e.target.value }),
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
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'cipherSuite1HTTPS',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'cipherSuite2HTTPS',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'cipherSuite3HTTPS',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'cipherSuite4HTTPS',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={250}>
            <span>RSA_WITH_RC4_128_SHA:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'cipher2',
                  defaultChecked: localConfig.cipherSuite2HTTPS === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['cipherSuite2HTTPS']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'cipher2',
                  defaultChecked: localConfig.cipherSuite2HTTPS === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['cipherSuite2HTTPS']: e.target.value }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={250}>
            <span>RSA_WITH_DES_CBC_SHA:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'cipher3',
                  defaultChecked: localConfig.cipherSuite3HTTPS === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['cipherSuite3HTTPS']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'cipher3',
                  defaultChecked: localConfig.cipherSuite3HTTPS === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['cipherSuite3HTTPS']: e.target.value }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={250}>
            <span>RSA_WITH_3DES_EDE_CBC_SHA:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'cipher4',
                  defaultChecked: localConfig.cipherSuite4HTTPS === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['cipherSuite4HTTPS']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'cipher4',
                  defaultChecked: localConfig.cipherSuite4HTTPS === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['cipherSuite4HTTPS']: e.target.value }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>

      <MultiPage.Section width={650}>
        <MultiPage.Title>{t('SessionConfig')}</MultiPage.Title>

        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() => {
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'sessionTimeoutHTTPS',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={250}>
            <span>{t('SessionTimeout')}:</span>

            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 5,
                max: 30,
                value: localConfig.sessionTimeoutHTTPS,
                onChange: (e) =>
                  setLocalConfig({ ['sessionTimeoutHTTPS']: e.target.value }),
              }}
              afterText="min(5-30)"
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>
      <MultiPage.Section width={650}>
        <MultiPage.Title>{t('AccessUserNumber')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={250}>
            <span>{t('NumberControl')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'numberControlHTTPS',
                  defaultChecked: localConfig.numberControlHTTPS === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['numberControlHTTPS']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'numberControlHTTPS',
                  defaultChecked: localConfig.numberControlHTTPS === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['numberControlHTTPS']: e.target.value }),
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
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'numberControlHTTPS',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'adminNumberHTTPS',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'guestNumberHTTPS',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={250}>
            <span>{t('AdminNumber')}:</span>

            <MultiPage.Input
              inputProps={{
                disabled: localConfig.numberControlHTTPS === 'Disable',
                type: 'number',
                min: 1,
                max: 16,
                value: localConfig.adminNumberHTTPS,
                onChange: (e) =>
                  setLocalConfig({ ['adminNumberHTTPS']: e.target.value }),
              }}
              afterText="(1-16)"
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={250}>
            <span>{t('GuestNumber')}:</span>

            <MultiPage.Input
              inputProps={{
                disabled: localConfig.numberControlHTTPS === 'Disable',
                type: 'number',
                min: 0,
                max: 15,
                value: localConfig.guestNumberHTTPS,
                onChange: (e) =>
                  setLocalConfig({ ['guestNumberHTTPS']: e.target.value }),
              }}
              afterText="(0-16)"
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Note />
      </MultiPage.Section>
      <MultiPage.Section width={650}>
        <MultiPage.Title>{t('CertificateDownload')}</MultiPage.Title>

        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t('Download')}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={250}>
            <span>{t('CertificateDownload')}:</span>

            <input type="file" />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>
      <MultiPage.Section width={650}>
        <MultiPage.Title>{t('KeyDownload')}</MultiPage.Title>

        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t('Download')}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={250}>
            <span>{t('KeyFile')}:</span>

            <input type="file" />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
