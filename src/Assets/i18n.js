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
        ConfirmPassword: 'Confirm Password',
        Login: 'Login',
        LoginError: 'Username or password is wrong',
        Apply: 'Apply',
        Refresh: 'Refresh',
        Help: 'Help',
        Create: 'Create',
        Clear: 'Clear',
        Delete: 'Delete',
        Select: 'Select',
        Operation: 'Operation',
        Edit: 'Edit',
        userID: 'User ID',
        AccessLevel: 'Access Level',
        Enable: 'Enable',
        Disable: 'Disable',
        Note: 'Note',

        //Sidebar
        SideSystem: 'System',
        SideSwitching: 'Switching',
        SideVLAN: 'VLAN',
        SideSpaningTree: 'Spaning Tree',
        SideMulticast: 'Multicast',
        SideQoS: 'QoS',
        SideACL: 'ACL',
        SideSNMP: 'SNMP',
        NetworkSecurity: 'Network Security',
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
        SystemInfo: 'System Info',
        SystemDescription: 'System Description',
        DeviceName: 'Device Name',
        DeviceLocation: 'Device Location',
        SystemContact: 'System Contact',
        HardwareVersion: 'Hardware Version',
        FirmwareVersion: 'Firmware Version',
        IPAddress: 'IP Address',
        SubnetMask: 'Subnet Mask',
        DefaultGateway: 'Default Gateway',
        MACAddress: 'MAC Address',
        TimeConfig: 'Time Config',
        TimeZone: 'Time Zone',
        PrimaryServer: 'Primary Server',
        SecoundaryServer: 'Secoundary Server',
        UpdateRate: 'Update Rate',
        ChooseSSHKey: 'Choose the SSH public key file to download into switch.',
        KeyType: 'Key Type',

        'Current System Date': 'Current System Date',
        'Current Time Source': 'Current Time Source',
        TimeConfig: 'Time config',
        Manual: 'Manual',
        Date: 'Date',
        Time: 'Time',
        'Get Time from NTP Server': 'Get Time from NTP Server',
        'Time Zone': 'Time Zone',
        'Primary Server': 'Primary Server',
        'Secoundary Server': 'Secoundary Server',
        'Update Rate': 'Update Rate',
        'hour(s)': 'hour(s)',
        "Sync with PC's Clock": "Sync with PC's Clock",

        TimeInfo: 'Time info',
        'DST Config': 'DST Config',
        PredefinedMode: 'Predefined mode',
        Europe: 'Europe',
        'New Zealand': 'New Zealand',
        RecurringMode: 'Recurring mode',
        '(minutes)': '(minutes)',
        Offset: 'Offset',
        'End Time': 'End Time',
        'Start Time': 'Start Time',
        DateMode: 'Date mode',

        IPConfig: 'IP Config',
        IPAddressMode: 'IP address mode',
        'Static IP': 'Static IP',
        ManagmentVlan: 'Managment VLAN',

        UserTable: 'User table',
        UserID: 'User ID',
        Username: 'Username',
        AccessLevel: 'Access level',

        UserInfo: 'UserInfo',

        Modify: 'Modify',
        'User already exist': 'User already exist',
        "Password don't match": "Password don't match",
        "You can't delete all users": "You can't delete all users",
        'Are you sure? It will overwrite your current configuration':
          'Are you sure? It will overwrite your current configuration',

        ConfigRestore: 'Config restore',
        ConfigFile: 'Config file',
        RestoreConfig: 'Restore config',
        RestoreConfigText: `Restore the config from the saved config file Select a backup config
            file and click the Restore Config button, and then you can restore
            to the previous config.`,

        ConfigBackup: 'Config backup',
        BackupConfig: 'Backup config',
        BackupConfigText: `Backup System Config
        Click the Backup Config button to save the config to your
        computer.`,

        FirmwareUpgrade: 'Firmware upgrade',
        Upgrade: 'Upgrade',
        FirmwareFile: 'Firmware file',
        FirmwareUpgradeText:
          'You will get the new function after upgrading the firmware. ',

        SystemReboot: 'System reboot',
        Reboot: 'Reboot',
        SaveConfig: 'Save config',

        SystemReset: 'System reset',
        GlobalConfig: 'Global config',

        SSHConfig: 'SSH config',
        ProtocolV1: 'Protocol V1',
        ProtocolV2: 'Protocol V2',
        IdleTimeout: 'Idle timeout',
        MaxConnect: 'Max connect',
        'sec(1-120)': 'sec(1-120)',
        EncryptionAlgorithm: 'Encryption algorithm',
        DataIntegrityAlgorithm: 'Data integrity algorithm',
        KeyDownload: 'Key download',
        Download: 'Download',

        HTTPSConfig: 'HTTPS config',
        SSLVersion3: 'SSL version 3',
        TLSVersion1: 'TLS version 1',
        SessionConfig: 'Session config',
        SessionTimeout: 'Session timeout',
        'min(5-30)': 'min(5-30)',
        AccessUserNumber: 'Access user number',
        NumberControl: 'Number control',
        AdminNumber: 'Admin number',
        GuestNumber: 'Guest number',
        CertificateDownload: 'Certificate download',
        KeyFile: 'Key file',

        HTTPConfig: 'HTTP config',

        AccessControlConfig: 'Access control config',
        AccessControl: 'Access control',
        ControlMode: 'Control mode',
        AccessInterface: 'Access interface',
        Mask: 'Mask',

        Note1:
          'The Device Name, Location and Contact should not be more than 32',
        Note2:
          'Changing IP address to a different IP segment will interrupt the network communication, so please keep the new IP address in the same IP segment with the local network.',
        Note3:
          'The user name should not be more than 16 characters using digits, English letters and underlines only and password should not be more than 31 characters',
        Note4:
          'It will take a long time to restore the config file. Please wait wihout any operation.',
        Note5:
          'It will take a long time to backup the config file. Please wait without any operation.',
        Note6_1:
          '1. Please select the proper software version matching with your hardware to upgrade.',
        Note6_2:
          "2. To avoid damage, please don't turn off the device while upgrading.",
        Note6_3: '3. After upgrading, the device will reboot automatically.',
        Note6_4:
          '4. You are suggested to backup the configuration before upgrading.',
        Note7:
          "To avoid damage, please don't turn off the device while rebooting.",
        Note8:
          'The System Reset option will restore the configuration to default and your current settings will be lost.',
        Note9_1:
          '1. It will take a long time to download the key file. Please wait without any operation.',
        Note9_2:
          " 2. After the Key File is downloaded, the user's original key of the same type will be replaced. The wrong downloaded file will result in the SSH access to the switch via Password authentication.",
      },
    },
    pl: {
      translations: {
        //Main
        English: 'Angielski',
        Polish: 'Polski',
        Username: 'Nazwa użytkownika',
        Password: 'Hasło',
        ConfirmPassword: 'Potwierdź hasło',
        Login: 'Zaloguj',
        LoginError: 'Nazwa użytkownika lub hasło nie pasuje',
        Apply: 'Zatwierdź',
        Refresh: 'Odśwież',
        Help: 'Pomoc',
        Create: 'Utwórz',
        Clear: 'Wyczyść',
        Delete: 'Usuń',
        Select: 'Wybierz',
        Operation: 'Operacja',
        Edit: 'Edytuj',
        userID: 'ID użytkownika',
        AccessLevel: 'Poziom dostępu',
        Enable: 'Włączony',
        Disable: 'Wyłączony',
        Note: 'Uwagi',

        //Sidebar
        // SideSystem: 'System',
        // SideSwitching: 'Switching pl',
        // SideVLAN: 'VLAN',
        // SideSpaningTree: 'Spaning Tree pl',
        // SideMulticast: 'Multicast',
        // SideQoS: 'QoS',
        // SideACL: 'ACL',
        // SideSNMP: 'SNMP',
        // SideMaintenance: 'Utrzymanie',
        // SideSaveConfig: 'Zapisz konfiguracje',
        // SideLogout: 'Wyloguj',

        //Nav
        NotFound: 'Nie ma takiej strony!',
        SystemSummary: 'Informacje o systemie',
        DeviceDescription: 'Opis urządzenia',
        SystemTime: 'Czas',
        DaylightSavingTime: 'Czas letni',
        SystemIP: 'IP',

        //Table
        SystemInfo: 'Informacje o systemie',
        SystemDescription: 'Opis urządzenia',
        DeviceName: 'Nazwa urządzenia',
        DeviceLocation: 'Lokalizacja urządzenia',
        SystemContact: 'Kontakt',
        HardwareVersion: 'Wersja Hardware',
        FirmwareVersion: 'Wersja Firmware',
        IPAddress: 'Adres IP',
        SubnetMask: 'Maska podsieci',
        DefaultGateway: 'Brama domyślna',
        MACAddress: 'Adres MAC',
        TimeConfig: 'Konfiguracja czasu',
        TimeZone: 'Strefa czasowa',
        PrimaryServer: 'Pierwszy serwer',
        SecoundaryServer: 'Drugi serwer',
        UpdateRate: 'Częstotliowść aktualizacji',
        ChooseSSHKey:
          'Wybierz plik z kluczem publicznym SSH aby wgrać go do przełącznika.',
        KeyType: 'Typ klucza',

        'Current System Date': 'Aktualna data systemowa',
        'Current Time Source': 'Bieżące źródło czasu',
        TimeConfig: 'Konfiguracja czasu',
        Manual: 'Ręcznie',
        Date: 'Data',
        Time: 'Czas',
        'Get Time from NTP Server': 'Pobierz czas z serwera NTP',
        'Time Zone': 'Strefa czasowa',
        'Primary Server': 'Serwer główny',
        'Secoundary Server': 'Serwer alternatywny',
        'Update Rate': 'Interwał aktualizacji',
        'hour(s)': 'godziny',
        "Sync with PC's Clock": 'Synchronizacja z zegarem komputera',

        TimeInfo: 'Informacja o czasie',
        'DST Config': 'Konfiguracja czasu letniego',
        PredefinedMode: 'Tryb predefiniowany',
        Europe: 'Europa',
        'New Zealand': 'Nowa Zelandia',
        RecurringMode: 'Tryb cykliczny',
        '(minutes)': '(minuty)',
        Offset: 'Odstęp',
        'End Time': 'Czas zakończenia',
        'Start Time': 'Czas rozpoczecia',
        DateMode: 'Tryb daty',

        IPConfig: 'Konfiguracja IP',
        IPAddressMode: 'Przydzielanie adresu IP',
        'Static IP': 'Statyczne IP',
        ManagmentVlan: 'VLAN zarządzalny',

        UserTable: 'Tabela użytkowników',
        UserID: 'ID użytkownika',
        Username: 'Nazwa użytkownika',
        AccessLevel: 'Poziom dostępu',

        UserInfo: 'Użytkownicy',

        'User already exist': 'użytkownik o takiej nazwie istnieje',
        "Password don't match": 'Hasła nie są zgodne',
        "You can't delete all users":
          'Nie można usunąć wszystkich użytkowników',

        ConfigRestore: 'Przywracanie konfiiguracji',
        ConfigFile: 'Plik konfiguracji',
        RestoreConfig: 'Przywróć konfiguracje',
        RestoreConfigText: `Przywrócenie konfiguracji z zapisanego pliku konfiguracyjnego Wybierz zapasowy plik konfiguracyjny
        i kliknij przycisk Przywróć konfigurację, a następnie możesz przywrócić
        do poprzedniej konfiguracji.`,

        ConfigBackup: 'Kopia zapasowa konfiguracji',
        BackupConfig: 'Pobierz',
        BackupConfigText: `Kopia zapasowa konfiguracji systemu
        Kliknąć przycisk Pobierz, aby zapisać konfigurację na komputerze.
        komputerze.`,

        FirmwareUpgrade: 'Aktualizacja firmware',
        Upgrade: 'Uaktualnij',
        FirmwareFile: 'Plik z firmware',
        FirmwareUpgradeText:
          'Nowa funkcja pojawi się po aktualizacji firmware.',

        SystemReboot: 'Restart systemu',
        Reboot: 'Restart',
        SaveConfig: 'Zapisz konfiguracje',

        SystemReset: 'Reset systemu',
        GlobalConfig: 'Konfiguracja globalna',

        SSHConfig: 'Konfiguracja SSH',
        ProtocolV1: 'Protokół V1',
        ProtocolV2: 'Protokół V2',
        IdleTimeout: 'Czas oczekiwania',
        MaxConnect: 'Maksymalna liczba połączeń',
        'sec(1-120)': 'sekundy(1-120)',
        EncryptionAlgorithm: 'Algorytm szyfrujący',
        DataIntegrityAlgorithm: 'Algorytm zgodności danych',
        KeyDownload: 'Pobieranie klucza',
        Download: 'Pobierz',

        HTTPSConfig: 'Konfiguracja HTTPS',
        SSLVersion3: 'SSL wersja 3',
        TLSVersion1: 'TLS wersja 1',
        SessionConfig: 'Konfiguracja sesji',
        SessionTimeout: 'Limit czasu sesji',
        'min(5-30)': 'minuty(5-30)',
        AccessUserNumber: 'Numer dostępowy użytkownika',
        NumberControl: 'Numer kontrolny',
        AdminNumber: 'Numer admina',
        GuestNumber: 'Numer gościa',
        CertificateDownload: 'Pobieranie certyfikatu',
        KeyFile: 'Plik klucza',

        HTTPConfig: 'Konfiguracja HTTP',

        AccessControlConfig: 'Konfiguracja kontroli dostępu',
        AccessControl: 'Kontrola dostępu',
        ControlMode: 'Tryb kontroli',
        AccessInterface: 'Interfejs dostępu',
        Mask: 'Maska',

        Note1:
          'Nazwa urządzenia, Lokalizacja i Kontakt nie powinny mieć więcej niż 32 znaki.',
        Note2:
          'Zmiana adresu IP na adres nie należący do zakresu lokalnej sieci spowoduje przerwanie komunikacji sieciowej, dlatego należy pamiętać, aby nowy adres IP znajdował się w tym samym zakresie IP co sieć lokalna.',
        Note3:
          'Nazwa użytkownika nie powinna zawierać więcej niż 16 znaków z użyciem wyłącznie cyfr, angielskich liter i podkreśleń, a hasło nie powinno zawierać więcej niż 31 znaków.',
        Note4:
          'Przywrócenie pliku konfiguracyjnego zajmie dużo czasu.  Proszę czekać bez żadnych operacji.',
        Note5:
          'Wykonanie kopii zapasowej pliku konfiguracyjnego zajmie dużo czasu. Proszę czekać bez żadnych operacji.',
        Note6_1:
          '1. Proszę wybrać odpowiednią wersję oprogramowania pasującą do posiadanego sprzętu w celu aktualizacji.',
        Note6_2:
          '2. Aby uniknąć uszkodzenia, proszę nie wyłączać urządzenia podczas aktualizacji.',
        Note6_3:
          '3. Po aktualizacji urządzenie zostanie automatycznie zrestartowane.',
        Note6_4:
          '4. Sugeruje się wykonanie kopii zapasowej konfiguracji przed aktualizacją.',
        Note7:
          'Aby uniknąć uszkodzeń, proszę nie wyłączać urządzenia podczas restartu.',
        Note8:
          'Opcja Reset systemu przywróci konfigurację do wartości domyślnych, a bieżące ustawienia zostaną utracone.',
        Note9_1:
          '1. Pobranie pliku klucza zajmie dużo czasu. Proszę czekać bez wykonywania jakichkolwiek operacji.',
        Note9_2:
          '2. Po pobraniu pliku z kluczem, oryginalny klucz użytkownika tego samego typu zostanie zastąpiony. Nieprawidłowo pobrany plik spowoduje, że dostęp SSH do przełącznika będzie realizowany poprzez uwierzytelnianie za pomocą hasła.',
      },
    },
  },
  fallbackLng: 'en',
  debug: false,

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
