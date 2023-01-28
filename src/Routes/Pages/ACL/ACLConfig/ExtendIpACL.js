import React, { useRef, useState, useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';
export default function ExtendIpACL() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      SIP: false,
      DIP: false,
      SPORT: false,
      DPORT: false,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('CreateExtend-IP Rule')}</MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ACL ID')}:</span>
            <MultiPage.Select
              options={[
                'Extend-IP ACL',
                'ACL 80',
                'ACL 15',
                'ACL 20',
                'ACL 35',
                'ACL 46',
              ]}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('RuleID')}:</span>
            <MultiPage.Input inputProps={{ type: 'text' }} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Operation')}:</span>
            <MultiPage.Select options={['Permit', 'Deny']} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.Input
              inputProps={{
                type: 'checkbox',
                value: localConfig.SIP,
                onChange: () => setLocalConfig({ ['SIP']: !localConfig.SIP }),
              }}
              afterText={'S-IP'}
            />
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <MultiPage.Input
                inputProps={{ type: 'text', disabled: !localConfig.SIP }}
              />
              <MultiPage.SubElementsLine FirstColumnWidth={50}>
                <span>{t('Mask')}:</span>
                <MultiPage.Input
                  inputProps={{ type: 'text', disabled: !localConfig.SIP }}
                />
              </MultiPage.SubElementsLine>
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.Input
              inputProps={{
                type: 'checkbox',
                value: localConfig.DIP,
                onChange: () => setLocalConfig({ ['DIP']: !localConfig.DIP }),
              }}
              afterText={'D-IP'}
            />
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <MultiPage.Input
                inputProps={{ type: 'text', disabled: !localConfig.DIP }}
              />
              <MultiPage.SubElementsLine FirstColumnWidth={50}>
                <span>{t('Mask')}:</span>
                <MultiPage.Input
                  inputProps={{ type: 'text', disabled: !localConfig.DIP }}
                />
              </MultiPage.SubElementsLine>
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('IPProtocol')}:</span>
            <MultiPage.Select
              options={[
                'All',
                '1 ICMP',
                '2 IGMP',
                '3',
                '4 IPinIP',
                '5',
                '6 TCP',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17 UDP',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23',
                '24',
                '25',
                '26',
                '27',
                '28',
                '29',
                '30',
                '31',
                '32',
                '33',
                '34',
                '35',
                '36',
                '37',
                '38',
                '39',
                '40',
                '41',
                '42',
                '43',
                '44',
                '45',
                '46',
                '47 GRE',
                '48',
                '49',
                '50',
                '51',
                '52',
                '53',
                '54',
                '55',
                '56',
                '57',
                '58',
                '59',
                '60',
                '61',
                '62',
                '63',
                '64',
                '65',
                '66',
                '67',
                '68',
                '69',
                '70',
                '71',
                '72',
                '73',
                '74',
                '75',
                '76',
                '77',
                '78',
                '79',
                '80',
                '81',
                '82',
                '83',
                '84',
                '85',
                '86',
                '87',
                '88',
                '89 OSPF',
                '90',
                '91',
                '92',
                '93',
                '94',
                '95',
                '96',
                '97',
                '98',
                '99',
                '100',
                '101',
                '102',
                '103',
                '104',
                '105',
                '106',
                '107',
                '108',
                '109',
                '110',
                '111',
                '112',
                '113',
                '114',
                '115',
                '116',
                '117',
                '118',
                '119',
                '120',
                '121',
                '122',
                '123',
                '124',
                '125',
                '126',
                '127',
                '128',
                '129',
                '130',
                '131',
                '132',
                '133',
                '134',
                '135',
                '136',
                '137',
                '138',
                '139',
                '140',
                '141',
                '142',
                '143',
                '144',
                '145',
                '146',
                '147',
                '148',
                '149',
                '150',
                '151',
                '152',
                '153',
                '154',
                '155',
                '156',
                '157',
                '158',
                '159',
                '160',
                '161',
                '162',
                '163',
                '164',
                '165',
                '166',
                '167',
                '168',
                '169',
                '170',
                '171',
                '172',
                '173',
                '174',
                '175',
                '176',
                '177',
                '178',
                '179',
                '180',
                '181',
                '182',
                '183',
                '184',
                '185',
                '186',
                '187',
                '188',
                '189',
                '190',
                '191',
                '192',
                '193',
                '194',
                '195',
                '196',
                '197',
                '198',
                '199',
                '200',
                '201',
                '202',
                '203',
                '204',
                '205',
                '206',
                '207',
                '208',
                '209',
                '210',
                '211',
                '212',
                '213',
                '214',
                '215',
                '216',
                '217',
                '218',
                '219',
                '220',
                '221',
                '222',
                '223',
                '224',
                '225',
                '226',
                '227',
                '228',
                '229',
                '230',
                '231',
                '232',
                '233',
                '234',
                '235',
                '236',
                '237',
                '238',
                '239',
                '240',
                '241',
                '242',
                '243',
                '244',
                '245',
                '246',
                '247',
                '248',
                '249',
                '250',
                '251',
                '252',
                '253',
                '254',
                '255',
              ]}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.Input
              inputProps={{
                type: 'checkbox',
                value: localConfig.SPORT,
                onChange: () =>
                  setLocalConfig({ ['SPORT']: !localConfig.SPORT }),
              }}
              afterText={'S-Port'}
            />
            <MultiPage.Input
              inputProps={{ type: 'text', disabled: !localConfig.SPORT }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.Input
              inputProps={{
                type: 'checkbox',
                value: localConfig.DPORT,
                onChange: () =>
                  setLocalConfig({ ['DPORT']: !localConfig.DPORT }),
              }}
              afterText={'D-Port'}
            />
            <MultiPage.Input
              inputProps={{ type: 'text', disabled: !localConfig.DPORT }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Create')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>

        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
