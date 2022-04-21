const defaultConfig = {
  ip: [192, 168, 8, 40],
  mask: [255, 255, 255, 0],
  gateway: [null, null, null, null],
  mac: 'E8-DE-27-B0-AA-AB',
  timeSource: 'Manual',
  currentDate: 0,
  currentTime: '00:00:00',
  timeZone: '',
  firstNTP: [null, null, null, null],
  secoundNTP: [null, null, null, null],
  updateRate: 0,
  firmware: '1.0.0 Build 20140126 Rel.34563',
  hardware: 'TL-SG2008 1.0',
  deviceName: 'TL-SG2008',
  systemContact: 'www.tp-link.com',
  deviceLocation: 'SHENZEN',
  dstStatus: 'Enable',
  dstSource: 'PredefinedMode',
  predefinedMode: 'Europe',
  dstDateModeOffset: undefined,
  dstDateModeStart: undefined,
  dstDateModeEnd: undefined,
  dstRecurringModeStart: undefined,
  dstRecurringModeEnd: undefined,
  dstRecurringModeOffset: undefined,
  addressMode: 'Static IP',
  managmentVlan: '1',
  users: [
    { username: 'admin', password: 'admin', permission: 'Admin' },
    {
      username: 'Jarek',
      password: 'admin',
      permission: 'Guest',
    },
  ],

  //SSH-START
  sshStatus: 'Disable',
  protocolv2SSH: 'Disable',
  protocolv1SSH: 'Disable',
  idleTimeoutSSH: undefined,
  maxConnectSSH: undefined,
  encryptionAlgorithmSSH: [
    'AES128-CBC',
    'AES192-CBC',
    'AES256-CBC',
    'Blowfish-CBC',
    'Cast128-CBC',
    '3DES-CBC',
  ],
  dataIntegrityAlgorithmSSH: ['HMAC-SHA1', 'HMAC-MD5'],
  keyTypeSSH: '',
  //SSH-END

  //Telnet-START
  telnetStatus: 'Enable',
  //Telnet-END

  //HTTP-START
  httpStatus: 'Enable',
  sessionTimeoutHTTP: '30',
  numberControlHTTP: 'Disable',
  adminNumberHTTP: undefined,
  guestNumberHTTP: undefined,
  //HTTP-END

  //HTTPS-START
  httpsStatus: 'Enable',
  sslVersionHTTPS: 'Enable',
  tlsVersionHTTPS: 'Enable',
  cipherSuite1HTTPS: 'Enable',
  cipherSuite2HTTPS: 'Enable',
  cipherSuite3HTTPS: 'Enable',
  cipherSuite4HTTPS: 'Enable',
  sessionTimeoutHTTPS: '30',
  numberControlHTTPS: undefined,
  adminNumberHTTPS: undefined,
  guestNumberHTTPS: undefined,
  //HTTPS-END

  portConfig: {
    names: [
      'Port',
      'Description',
      'Status',
      'SpeedAndDuplex',
      'FlowControl',
      'LAG',
    ],
    fields: [
      { type: 'disable' },
      { type: 'input', options: { type: 'text' } },
      { type: 'select', options: ['Enable', 'Disable'] },
      { type: 'select', options: ['Auto', '10MHD'] },
      { type: 'select', options: ['Enable', 'Disable'] },
      { type: 'disable' },
    ],
    data: [
      ['1', '', 'Enable', 'Auto', 'Disable', 'LAG1'],
      ['2', '', 'Enable', 'Auto', 'Disable', 'LAG1'],
      ['3', '', 'Enable', 'Auto', 'Disable', undefined],
      ['4', '', 'Enable', 'Auto', 'Disable', undefined],
      ['5', '', 'Enable', 'Auto', 'Disable', undefined],
      ['6', '', 'Enable', 'Auto', 'Disable', undefined],
      ['7', '', 'Enable', 'Auto', 'Disable', undefined],
      ['8', '', 'Enable', 'Auto', 'Disable', undefined],
    ],
  },
  mirrorList: [
    {
      group: 1,
      mirroring: 0,
      mirroredPortIngress: [],
      mirroredPortEgress: [],
    },
    {
      group: 2,
      mirroring: 0,
      mirroredPortIngress: [],
      mirroredPortEgress: [],
    },
    {
      group: 3,
      mirroring: 0,
      mirroredPortIngress: [],
      mirroredPortEgress: [],
    },
    {
      group: 4,
      mirroring: 0,
      mirroredPortIngress: [],
      mirroredPortEgress: [],
    },
  ],
  portSecurity: {
    names: ['Port', 'Max Learned MAC', 'Learned Num', 'Learn Mode', 'Status'],
    fields: [
      { type: 'disable' },
      { type: 'input', options: { type: 'number', max: 64, min: 0 } },
      { type: 'disable' },
      { type: 'select', options: ['Dynamic', 'Static'] },
      { type: 'select', options: ['Enable', 'Disable'] },
    ],
    data: [
      ['1', 64, '0', 'Dynamic', 'Disable'],
      ['2', 64, '0', 'Dynamic', 'Disable'],
      ['3', 64, '0', 'Dynamic', 'Disable'],
      ['4', 64, '0', 'Dynamic', 'Disable'],
      ['5', 64, '0', 'Dynamic', 'Disable'],
      ['6', 64, '0', 'Dynamic', 'Disable'],
      ['7', 64, '0', 'Dynamic', 'Disable'],
      ['8', 64, '0', 'Dynamic', 'Disable'],
    ],
  },
  portIsolationConfig: [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, true, false, false, false, false],
  ],
  //LOOPBACK DETECTION-START
  loopbackDetectionStatus: 'Enable',
  detectionIntervalLoopback: 2,
  automaticRecoveryTimeLoopback: 60,
  webRefreshStatusLoopback: 'Disable',
  webRefreshIntervalLoopback: 3,
  portLoopback: {
    names: [
      'Port',
      'Status',
      'OperationMode',
      'RecoveryMode',
      'LoopStatus',
      'BlockStatus',
      'LAG',
    ],
    fields: [
      { type: 'disabled' },
      { type: 'select', options: ['Enable', 'Disable'] },
      { type: 'select', options: ['Alert', 'Port Based'] },
      { type: 'select', options: ['Auto'] },
      { type: 'disable' },
      { type: 'disable' },
      { type: 'disable' },
    ],
    data: [
      ['1', 'Disable', 'PortBased', 'Auto', '---', '---', 'LAG1'],
      ['2', 'Disable', 'PortBased', 'Auto', '---', '---', 'LAG1'],
      ['3', 'Enable', 'PortBased', 'Auto', '---', '---', '---'],
      ['4', 'Enable', 'PortBased', 'Auto', '---', '---', '---'],
      ['5', 'Enable', 'PortBased', 'Auto', '---', '---', '---'],
      ['6', 'Enable', 'PortBased', 'Auto', '---', '---', '---'],
      ['7', 'Enable', 'PortBased', 'Auto', '---', '---', '---'],
      ['8', 'Enable', 'PortBased', 'Auto', '---', '---', '---'],
    ],
  },
  //LOOPBACK DETECTION-END

  //LAG-START
  hashAlgorithmLAG: 'SRC MAC+DST MAC',
  lagTable: [['LAG1', 'Active LACP', '1,2']],

  //LAG-END

  //LACP-START
  lacpPriority: 32768,
  lacpConfig: {
    names: [
      'Port',
      'Admin Key',
      'PortPriority(0-65535)',
      'Mode',
      'Status',
      'LAG',
    ],
    fields: [
      { type: 'disable' },
      { type: 'input', options: { type: 'text' } },
      { type: 'input', options: { type: 'number', min: 0, max: 65535 } },
      { type: 'select', options: ['Active', 'Passive'] },
      { type: 'select', options: ['Enable', 'Disable'] },
      { type: 'disable' },
    ],
    data: [
      ['1', '1', 32768, 'Active', 'Enable', 'LAG1'],
      ['2', '1', 32768, 'Active', 'Enable', 'LAG1'],
      ['3', '1', 32768, 'Passive', 'Disable', undefined],
      ['4', '1', 32768, 'Passive', 'Disable', undefined],
      ['5', '1', 32768, 'Passive', 'Disable', undefined],
      ['6', '1', 32768, 'Passive', 'Disable', undefined],
      ['7', '1', 32768, 'Passive', 'Disable', undefined],
      ['8', '1', 32768, 'Passive', 'Disable', undefined],
    ],
  },
  //LACP-END

  //LOG-Start
  logTable: {
    names: ['Index', 'Time', 'Module', 'Severity', 'Content'],
    fields: [
      { type: 'disable' },
      { type: 'disable' },
      { type: 'select', options: ['All Module', 'LAG', 'Link', 'User'] },

      {
        type: 'select',
        options: [
          'level_0',
          'level_1',
          'level_2',
          'level_3',
          'level_4',
          'level_5',
          'level_6',
          'level_7',
        ],
      },
      { type: 'disable' },
    ],
    data: [
      [
        1,
        '2022-12-10 20:25:46',
        'User',
        'level_3',
        'login the web by admin on web(192.168.0.10',
      ],
      [
        2,
        '2022-12-10 20:35:46',
        'LAG',
        'level_6',
        'port 1, changed state to up',
      ],
    ],
  },
  remoteLogTable: {
    names: ['Index', 'HostIP', 'UDPPort', 'Severity', 'Status'],
    fields: [
      { type: 'disable' },
      { type: 'inputmasked', options: { type: 'ip' } },
      { type: 'disable' },
      {
        type: 'select',
        options: [
          'level_0',
          'level_1',
          'level_2',
          'level_3',
          'level_4',
          'level_5',
          'level_6',
          'level_7',
        ],
      },
      { type: 'select', options: ['Enable', 'Disable'] },
    ],
    data: [
      ['1', [0, 0, 0, 0], 514, 'level_6', 'Disable'],
      ['2', [0, 0, 0, 0], 514, 'level_6', 'Disable'],
      ['3', [0, 0, 0, 0], 514, 'level_6', 'Disable'],
      ['4', [0, 0, 0, 0], 514, 'level_6', 'Disable'],
    ],
  },
  localLogTable: {
    names: ['Channel', 'Severity', 'Status'],
    fields: [
      { type: 'disable' },
      {
        type: 'select',
        options: [
          'level_0',
          'level_1',
          'level_2',
          'level_3',
          'level_4',
          'level_5',
          'level_6',
          'level_7',
        ],
      },
      { type: 'select', options: ['Enable', 'Disable'] },
    ],
    data: [
      ['Log Buffer', 'level_6', 'Enable'],
      ['Log File', 'level_2', 'Disable'],
    ],
  },
  //LOG-End
};

export default defaultConfig;
