const defaultConfig = {
  ip: '192.168.0.40',
  mask: '255.255.255.0',
  gateway: '',
  mac: 'E8-DE-27-B0-AA-AB',
  timeSource: 'Manual',
  currentTime: 0,
  timeZone: '',
  firstNTP: '',
  secoundNTP: '',
  updateRate: 0,
  firmware: '1.0.0 Build 20140126 Rel.34563',
  hardware: 'TL-SG2008 1.0',
  deviceName: 'TL-SG2008',
  systemContact: 'www.tp-link.com',
  deviceLocation: 'SHENZEN',
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
  telnetEnabled: 'disabled',
  sshEnabled: 'disabled',
  v2Enabled: 'disabled',
  v1Enabled: 'disabled',
  idleTimeout: undefined,
  maxConnect: undefined,
  encryptionAlgorithm: [
    'AES128-CBC',
    'AES192-CBC',
    'AES256-CBC',
    'Blowfish-CBC',
    'Cast128-CBC',
    '3DES-CBC',
  ],
  dataIntegrityAlgorithm: ['HMAC-SHA1', 'HMAC-MD5'],
  keyType: '',
  httpEnabled: 'disabled',
  sessionTimeoutHTTP: '30',
  numberControlHTTP: undefined,
  adminNumberHTTP: undefined,
  guestNumberHTTP: undefined,
  httpsEnabled: 'enabled',
  sslVersionHTTPS: 'enabled',
  tlsVersionHTTPS: 'enabled',
  cipherSuite1HTTPS: 'enabled',
  cipherSuite2HTTPS: 'enabled',
  cipherSuite3HTTPS: 'enabled',
  cipherSuite4HTTPS: 'enabled',
  sessionTimeoutHTTPS: '30',
  numberControlHTTPS: undefined,
  adminNumberHTTPS: undefined,
  guestNumberHTTPS: undefined,
  portConfig: [
    {
      description: '',
      status: 'Enable',
      speed: 'Auto',
      flow: 'Disable',
      lag: 'LAG1',
    },
    {
      description: '',
      status: 'Enable',
      speed: 'Auto',
      flow: 'Disable',
      lag: 'LAG1',
    },
    {
      description: '',
      status: 'Enable',
      speed: 'Auto',
      flow: 'Disable',
      lag: '---',
    },
    {
      description: '',
      status: 'Enable',
      speed: 'Auto',
      flow: 'Disable',
      lag: '---',
    },
    {
      description: '',
      status: 'Enable',
      speed: 'Auto',
      flow: 'Disable',
      lag: '---',
    },
    {
      description: '',
      status: 'Enable',
      speed: 'Auto',
      flow: 'Disable',
      lag: '---',
    },
    {
      description: '',
      status: 'Enable',
      speed: 'Auto',
      flow: 'Disable',
      lag: '---',
    },
    {
      description: '',
      status: 'Enable',
      speed: 'Auto',
      flow: 'Disable',
      lag: '---',
    },
  ],
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
  portSecurityConfig: [
    {
      maxLearnedMAC: 64,
      learnedNum: 0,
      learnMode: 'Dynamic',
      status: 'Disable',
    },
    {
      maxLearnedMAC: 64,
      learnedNum: 0,
      learnMode: 'Dynamic',
      status: 'Disable',
    },
    {
      maxLearnedMAC: 64,
      learnedNum: 0,
      learnMode: 'Dynamic',
      status: 'Disable',
    },
    {
      maxLearnedMAC: 64,
      learnedNum: 0,
      learnMode: 'Dynamic',
      status: 'Disable',
    },
    {
      maxLearnedMAC: 64,
      learnedNum: 0,
      learnMode: 'Dynamic',
      status: 'Disable',
    },
    {
      maxLearnedMAC: 64,
      learnedNum: 0,
      learnMode: 'Dynamic',
      status: 'Disable',
    },
    {
      maxLearnedMAC: 64,
      learnedNum: 0,
      learnMode: 'Dynamic',
      status: 'Disable',
    },
    {
      maxLearnedMAC: 64,
      learnedNum: 0,
      learnMode: 'Dynamic',
      status: 'Disable',
    },
  ],
  portIsolationConfig: [
    { forwardList: [false, false, false, false, false, false, false, false] },
    { forwardList: [false, false, false, false, false, false, false, false] },
    { forwardList: [false, false, false, false, false, false, false, false] },
    { forwardList: [false, false, false, false, false, false, false, false] },
    { forwardList: [false, false, false, false, false, false, false, false] },
    { forwardList: [false, false, false, false, false, false, false, false] },
    { forwardList: [false, false, false, false, false, false, false, false] },
    { forwardList: [false, false, false, true, false, false, false, false] },
  ],
};

export default defaultConfig;
