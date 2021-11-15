import i18n from 'i18next';

i18n.init({
  resources: {
    en: {
      translations: {
        //Main
        English: 'English',
        Polish: 'Polish',
        Username: 'Username',
        Password: 'Password',
        Login: 'Login',
        LoginError: 'Username or password is wrong',

        //Sidebar
        SideSystem: 'System',
        SideSwitching: 'Switching',
        SideVLAN: 'VLAN',
        SideSpaningTree: 'Spaning Tree',
        SideMulticast: 'Multicast',
        SideQoS: 'QoS',
        SideACL: 'ACL',
        SideSNMP: 'SNMP',
        SideMaintenance: 'Maintenance',
        SideSaveConfig: 'Save Config',
        SideLogout: 'Logout',

        //Nav
        NotFound: 'Not found!',
        SystemSummary: 'System Summary',
        DeviceDescription: 'Device Description',
        SystemTime: 'System Time',
        DaylightSavingTime: 'Daylight Saving Time',
        SystemIP: 'System IP',

        //Table
        Info_SystemInfo: 'System Info',
        Info_SystemDescription: 'System Description',
        Info_DeviceName: 'Device Name',
        Info_DeviceLocation: 'Device Location',
        Info_SystemContact: 'System Contact',
        Info_HardwareVersion: 'Hardware Version',
        Info_FirmwareVersion: 'Firmware Version',
        Info_IPAddress: 'IP Address',
        Info_SubnetMask: 'Subnet Mask',
        Info_DefaultGateway: 'Default Gateway',
        Info_MACAddress: 'MAC Address',
        Info_SystemTime: 'System Time',
      },
    },
    pl: {
      translations: {
        //Main
        English: 'Angielski',
        Polish: 'Polski',
        Username: 'Nazwa użytkownika',
        Password: 'Hasło',
        Login: 'Zaloguj',
        LoginError: 'Nazwa użytkownika lub hasło nie pasuje',

        //Sidebar
        SideSystem: 'System',
        SideSwitching: 'Switching pl',
        SideVLAN: 'VLAN',
        SideSpaningTree: 'Spaning Tree pl',
        SideMulticast: 'Multicast',
        SideQoS: 'QoS',
        SideACL: 'ACL',
        SideSNMP: 'SNMP',
        SideMaintenance: 'Maintenance',
        SideSaveConfig: 'Zapisz konfiguracje',
        SideLogout: 'Wyloguj',

        //Nav
        NotFound: 'Nie ma takiej strony!',
        SystemSummary: 'Informacje o systemie',
        DeviceDescription: 'Opis urządzenia',
        SystemTime: 'Czas',
        DaylightSavingTime: 'Czas letni',
        SystemIP: 'IP',

        //Table
        Info_SystemInfo: 'Informacje o systemie',
        Info_SystemDescription: 'Opis urządzenia',
        Info_DeviceName: 'Nazwa urządzenia',
        Info_DeviceLocation: 'Lokalizacja urządzenia',
        Info_SystemContact: 'Kontakt',
        Info_HardwareVersion: 'Wersja Hardware',
        Info_FirmwareVersion: 'Wersja Firmware',
        Info_IPAddress: 'Adres IP',
        Info_SubnetMask: 'Maska podsieci',
        Info_DefaultGateway: 'Brama domyślna',
        Info_MACAddress: 'Adres MAC',
        Info_SystemTime: 'Czas systemu',
      },
    },
  },
  fallbackLng: 'en',
  debug: true,

  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,

  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
});
export default i18n;
