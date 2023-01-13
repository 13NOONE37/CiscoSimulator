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

        PortConfig: 'Port config',
        Description: 'Description',
        SpeedAndDuplex: 'Speed and duplex',
        FlowControl: 'Flow control',

        PortIsolation: 'Port isolation',
        PortIsolationList: 'Port isolation list',
        ForwardPortList: 'Forward port list',

        PortSecurity: 'Port security',
        'Max Learned MAC': 'Max learned MAC',
        'Learned Num': 'Learned num',
        'Learn Mode': 'Learn mode',
        Status: 'Status',

        LoopbackDetection: 'Loopback detection',
        LoopbackDetectionStatus: 'Loopback detection status',
        DetectionInterval: 'Detection interval',
        AutomaticRecoveryTime: 'Automatic recovery time',
        WebRefreshStatus: 'Web refresh status',
        WebRefreshInterval: 'Web refresh interval',
        'seconds(1-1000)': 'seconds(1-1000)',
        'detection times(1-100)': 'detection times(1-100)',
        'sec(3-100)': 'sec(3-100)',
        OperationMode: 'Operation mode',
        RecoveryMode: 'Recovery mode',
        LoopStatus: 'Loop status',
        BlockStatus: 'Block status',
        ManualRecover: 'Manual recovery',

        PortMirror: 'Port mirror',
        Group: 'Group',
        Mirroring: 'Mirroring',
        Mode: 'Mode',
        MirroredPort: 'Mirrored port',
        MirrorGroup: 'Mirror group',
        MirroringPort: 'Mirroring port',
        Ingress: 'Ingress',
        Egress: 'Egress',

        LAGTable: 'LAG table',
        HashAlgorithm: 'Hash algorithm',
        GroupNumber: 'Group number',
        Member: 'Member',
        'No trunk exists': 'No trunk exists',
        LAGConfig: 'LAG config',
        StaticLAG: 'Static LAG',
        LACPConfig: 'LACP config',
        MemberPort: 'Member port',
        LACPConfig: 'LACP config',
        SystemPriority: 'System priority',
        'Admin Key': 'Admin key',
        PortPriority: 'Port priority',

        TrafficSummary: 'Traffic summary',
        AutoRefresh: 'Auto refresh',
        RefreshRate: 'Refresh rate',
        'sec(3-300)': 'sec(3-300)',
        'Packets Rx': 'Packets Rx',
        'Packets Tx': 'Packets Tx',
        'Octets Rx': 'Octets Rx',
        'Octets Rx': 'Octets Tx',
        Statistics: 'Statistics',
        TrafficStatistics: 'Traffic statistics',
        'Broadcast	0': 'Broadcast	0',
        'Multicast	0': 'Multicast	0',
        'Unicast	0': 'Unicast	0',
        'Alignment Errors	0': 'Alignment Errors	0',
        'UndersizePkts	0': 'UndersizePkts	0',
        'Pkts64Octets	0': 'Pkts64Octets	0',
        'Pkts65to127Octets	0': 'Pkts65to127Octets	0',
        'Pkts128to255Octets	0': 'Pkts128to255Octets	0',
        'Pkts256to511Octets	0': 'Pkts256to511Octets	0',
        'Pkts512to1023Octets	0': 'Pkts512to1023Octets	0',
        'PktsOver1023Octets	0': 'PktsOver1023Octets	0',
        AddressTable: 'Address table',
        SearchOption: 'Search option',
        Search: 'Search',
        Type: 'Type',
        AgingStatus: 'Aging status',
        Static: 'Static',
        Dynamic: 'Dynamic',
        Filtering: 'Filtering',
        StaticAddress: 'Static address',
        StaticAddressTable: 'Static address table',
        CreateStaticAddress: 'Create static address',
        DynamicAddress: 'Dynamic address',
        DynamicAddressTable: 'Dynamic address table',
        FilteringAddress: 'Filtering address',
        FilteringAddressTable: 'Filtering address table',
        CreateFilteringAddress: 'Create filtering address',
        AgingConfig: 'Aging config',
        AgingTime: 'Aging time',
        'sec (10-630, default: 300)': 'sec (10-630, default: 300)',
        All: 'All',
        'MAC Address': 'MAC address',
        AutoAging: 'Auto aging',
        Bind: 'Bind',

        CPUMonitor: 'CPU monitor',
        RunTime: 'Run time',
        Monitor: 'Monitor',
        CurrentUtilization: 'Current utilization',
        MAXUtilization: 'Max utilization',
        MINUtilization: 'Min utilization',
        AverageUtilization: 'Average utilization',
        MemoryMonitor: 'Memory monitor',
        LogTable: 'Log table',
        LocalLog: 'Local log',
        RemoteLog: 'Remote log',
        BackkupLog: 'Backup log',
        Time: 'Time',
        Module: 'Module',
        Severity: 'Severity',
        Content: 'Content',
        Refresh: 'Refresh',
        Channel: 'Channel',
        LogHost: 'Log host',
        HostIP: 'Host IP',
        UDPPort: 'UDP port',
        BackupLogText: 'Click the button here to backup the log file',
        BackupLog: 'Backup log',

        CableTest: 'Cable test',
        Loopback: 'Loopback',
        Length: 'Length',
        Error: 'Error',
        Test: 'Test',
        Pair: 'Pair',
        'Pair-A': 'Pair-A',
        'Pair-B': 'Pair-B',
        'Pair-C': 'Pair-C',
        'Pair-D': 'Pair-D',
        LoopbackType: 'Loopback type',
        Internal: 'Internal',
        External: 'External',
        LoopbackPort: 'Loopback port',
        LoopbackResult: 'Loopback result',
        PingConfig: 'Ping config',
        DestinationIP: 'Destination IP',
        PingTimes: 'Ping times',
        DataSize: 'Data size',
        Interval: 'Interval',
        Ping: 'Ping',
        PingResult: 'Ping result',
        'byte(1-1024)': 'byte(1-1024)',
        'milisec(100-1000)': 'milisec(100-1000)',
        TracertResult: 'Tracert result',
        Tracert: 'Tracert',
        TracertConfig: 'Tracert config',
        MaxHop: 'Max hop',
        'hop(1-30)': 'hop(1-30)',

        HistoryControl: 'History control',
        HistoryControlTable: 'History control table',
        Owner: 'Owner',
        'Interval(sec)': 'Interval(sec)',
        EventConfig: 'Event config',
        AlarmConfig: 'Alarm config',
        AlarmTable: 'Alarm table',
        Variable: 'Variable',
        'Sample Type': 'Sample type',
        'Rising Threshold': 'Rising threshold',
        'Rising Event': 'Rising event',
        'Falling Threshold': 'Falling threshold',
        'Falling Event': 'Falling event',
        'Alarm Type': 'Alarm type',

        DropEvents: 'DropEvents',
        RecBytes: 'RecBytes',
        RecPackets: 'RecPackets',
        BPackets: 'BPackets',
        MPackets: 'MPackets',
        'CRC&Align ERR': 'CRC&Align ERR',
        Undersize: 'Undersize',
        Oversize: 'versize',
        Fragments: 'Fragments',
        Jabbers: 'Jabbers',
        Collisions: 'Collisions',

        'Incorrect IP address': 'Incorrect IP address',
        'There are empty fields': 'There are empty fields',
        NotificationConfig: 'Notification config',
        SecurityModel: 'Security model',
        SecurityLevel: 'Security level',
        NotificationTable: 'Notification table',
        timeout: 'Timeout',
        retry: 'Retry',
        User: 'User',
        Trap: 'Trap',
        Inform: 'Inform',

        SNMPCommunity: 'SNMP community',
        CommunityConfig: 'Commmunity config',
        CommunityName: 'Community Name',
        Access: 'Access',
        MIBView: 'MIB view',
        CommunityTable: 'Community table',
        'read-only': 'read-only',
        'read-write': 'read-write',

        LocalEngine: 'Local engine',
        'Default ID': 'Default ID',
        RemoteEngine: 'Remote engine',
        'Remote Engine ID': 'Remote engine ID',
        'Local Engine ID': 'Local engine ID',
        '(0 or 10-64 Hex)': '(0 lub 10-64 Hex)',
        SNMPView: 'SNMP view',
        SNMPGroup: 'SNMP group',
        ViewType: 'View type',
        ViewName: 'View name',
        ViewConfig: 'View config',
        MIBObjectID: 'MIB object ID',
        GroupName: 'Group name',
        ReadView: 'Read view',
        WriteView: 'Write view',
        NotifyView: 'Notify view',
        '(16 characters maximum)': '(16 characters maximum)',
        '(61 characters maximum)': '(61 characters maximum)',
        GroupConfig: 'Group config',

        UserConfig: 'User config',
        UserType: 'User type',
        'Group Name': 'Group name',
        AuthMode: 'Auth mode',
        PrivacyMode: 'Privacy mode',
        'Auth Password': 'Auth password',
        'Privacy Password': 'Privacy password',
        None: 'None',
        SNMPUser: 'SNMP users',

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
        Note10: 'The Port Description should not be more than 16 characters.',
        Note11:
          'The maximum number of MAC addresses learned from individual port can be set to 64.',
        Note12: `Recovery mode is just useful to process not in Alrt process mode. Loopback Detection must coordinate with storm control.`,
        Note13: `1. The LAG created by LACP can't be deleted.`,
        Note14_1: `1. LAG* denotes the Link Aggregation Group which the port belngs to.`,
        Note14_2: `2. It's not suggested to set 100M and 1000M ports in the same LAG. 3.`,
        Note14_3: `3. The LAG created by LACP can't be modified.`,
        Note15_1: `1. To avoid any broadcast storm when LACP takes effect, you are suggested to enable Spanning Tree function.`,
        Note15_2: `2. LACP function can't be enabled for the port already in a static link aggregation group.`,
        Note15_3: `3. The value of admin key can't be the same with the group number of any static link aggregation group in used and vice versa.`,
        Note16_1: `Total MAC Address`,
        Note16_2: `The maximum of the displayed entries is 100 by default, please click the Search button to get the complete address entries.`,
        Note17_1: `1. There are 8 severity levels marked with values 0-7. The samller value has the higher priority.`,
        Note17_2: `2. This page displays logs in the log buffer and at most 512 logs are displayed.`,
        Note18_1: `1.Local log includes 2 channels: log buffer and log file.`,
        Note18_2: `2. There are 8 severity levels marked with values 0-7. The samller value has the higher priority.`,
        Note19_1: `1.Up to 4 log hosts are supported.`,
        Note19_2: `2.There are 8 severnity levels marked with values 07. The smaller value has the higher priority.`,
        Note20: `It will take a long time to backup the config file. Please wait without any operation.`,

        Note21: `The default MIB view of community is viewDefault.`,
        Note22: `The total hexadecimal characters of Engine ID should be even.`,
        Note23: `A group should contain a read view, and the default read view is viewDefault`,
        Note24: `The security mode land security level of the user should be the same
        with that of its group.`,
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

        PortConfig: 'Konfiguracja portów',
        Description: 'Opis',
        SpeedAndDuplex: 'Prędkość i dupleks',
        FlowControl: 'Kontrola przepływu',

        PortIsolation: 'Izolacja portów',
        PortIsolationList: 'Tabela izolacji portów',
        ForwardPortList: 'Dozwolone porty',

        PortSecurity: 'Bezpieczeństwo portów',
        'Max Learned MAC': 'Maksymalna liczba nauczonych adresów MAC',
        'Learned Num': 'Nauczone',
        'Learn Mode': 'Tryb uczenia',

        LoopbackDetection: 'Wykrywanie pętli zwrotnej',
        LoopbackDetectionStatus: 'Status wykrywania pętli zwrotnej',
        DetectionInterval: 'Interwał wykrywania',
        AutomaticRecoveryTime: 'Automatyczny czas odzyskiwania',
        WebRefreshStatus: 'Status odświeżenia',
        WebRefreshInterval: 'Interwał odświeżania',
        'seconds(1-1000)': 'sekundy(1-1000)',
        'detection times(1-100)': 'czasy wykrywania(1-100)',
        'sec(3-100)': 'sekundy(3-100)',
        OperationMode: 'Tryb pracy',
        RecoveryMode: 'Tryb odzyskiwania',
        LoopStatus: 'Status pętli',
        BlockStatus: 'Stan bloku',
        ManualRecover: 'Ręczne odzyskiwanie',

        PortMirror: 'Lustro portu',
        Group: 'Grupa',
        Mirroring: 'Lustrowanie',
        Mode: 'Tryb',
        MirroredPort: 'Port lustrzany',
        MirrorGroup: 'Grupa lustrzana',
        MirroringPort: 'Port lustrujący',
        Ingress: 'Przyjście',
        Egress: 'Wyjście',

        LAGTable: 'Tabela LAG',
        HashAlgorithm: 'Algorytm hashowania',
        GroupNumber: 'Numer grupy',
        Member: 'Członek',
        'No trunk exists': 'Brak połączeń trunk',
        LAGConfig: 'Konfiguracja LAG',
        StaticLAG: 'LAG statyczny',
        LACPConfig: 'Konfiguracja LACP',
        MemberPort: 'Port członka',
        LACPConfig: 'Konfiguracja LACP',
        SystemPriority: 'Priorytet systemu',
        'Admin Key': 'Klucz admina',
        PortPriority: 'Priorytet portu',

        TrafficSummary: 'Podsumowanie ruchu',
        AutoRefresh: 'Automatyczne odświeżanie',
        RefreshRate: 'Częstotliwość odświeżania',
        'sec(3-300)': 'sekundy(3-300)',
        'Packets Rx': 'Pakiety odebrane',
        'Packets Tx': 'Pakiety wysłane',
        'Octets Rx': 'Bajty odebrane',
        'Octets Rx': 'Bajty wysłane',
        Statistics: 'Statystyki',
        TrafficStatistics: 'Statystyki ruchu',
        'Broadcast 0': 'Rozgłoszenie 0',
        'Multicast 0': 'Multicast 0',
        'Unicast 0': 'Unicast 0',
        'Alignment Errors 0': 'Błędy wyrównania 0',
        'UndersizePkts 0': 'Zbyt małe pakiety 0',
        'Pkts64Octets 0': 'Pakiety o długości 64 bajtów 0',
        'Pkts65to127Octets 0': 'Pakiety o długości 65-127 bajtów 0',
        'Pkts128to255Octets 0': 'Pakiety o długości 128-255 bajtów 0',
        'Pkts256to511Octets 0': 'Pakiety o długości 256-511 bajtów 0',
        'Pkts512to1023Octets 0': 'Pakiety o długości 512-1023 bajtów 0',
        'PktsOver1023Octets 0': 'Pakiety o długości powyżej 1023 bajtów 0',
        AddressTable: 'Tabela adresów',
        SearchOption: 'Opcje wyszukiwania',
        Search: 'Szukaj',
        Type: 'Typ',
        AgingStatus: 'Status starzenia',
        Static: 'Stały',
        Dynamic: 'Dynamiczny',
        Filtering: 'Filtrowanie',
        StaticAddress: 'Stały adres',
        StaticAddressTable: 'Tabela stałych adresów',
        CreateStaticAddress: 'Utwórz stały adres',
        DynamicAddress: 'Dynamiczny adres',
        DynamicAddressTable: 'Tabela dynamicznych adresów',
        FilteringAddress: 'Adres filtrowania',
        FilteringAddressTable: 'Tabela adresów filtrowania',
        CreateFilteringAddress: 'Utwórz adres filtrowania',
        AgingConfig: 'Konfiguracja starzenia',
        AgingTime: 'Czas starzenia',
        'sec (10-630, default: 300)': 'sekundy (10-630, domyślnie: 300)',
        All: 'Wszystko',
        'MAC Address': 'Adres MAC',
        Aging: 'Starzenie',
        'no-Aging': 'Brak starzenia',
        AutoAging: 'Automatyczne starzenie',
        Bind: 'Bind',
        Guest: 'Gość',

        CPUMonitor: 'Monitor CPU',
        RunTime: 'Czas działania',
        Monitor: 'Monitor',
        CurrentUtilization: 'Aktualne wykorzystanie',
        MAXUtilization: 'Maksymalne wykorzystanie',
        MINUtilization: 'Minimalne wykorzystanie',
        AverageUtilization: 'Średnie wykorzystanie',
        MemoryMonitor: 'Monitor pamięci',
        LogTable: 'Tabela dziennika',
        LocalLog: 'Lokalny dziennik',
        RemoteLog: 'Zdalny dziennik',
        BackkupLog: 'Kopia zapasowa dziennika',
        Time: 'Czas',
        Module: 'Moduł',
        Severity: 'Waga',
        Content: 'Zawartość',
        Refresh: 'Odśwież',
        Channel: 'Kanał',
        LogHost: 'Host dziennika',
        HostIP: 'Adres IP hosta',
        UDPPort: 'Port UDP',
        BackupLogText:
          'Kliknij tutaj, aby wykonać kopię zapasową pliku dziennika',
        BackupLog: 'Wykonaj kopię zapasową',
        CableTest: 'Test kabla',
        Loopback: 'Pętla zwrotna',
        Length: 'Długość',
        Error: 'Błąd',
        Test: 'Test',
        Pair: 'Para',
        'Pair-A': 'Para-A',
        'Pair-B': 'Para-B',
        'Pair-C': 'Para-C',
        'Pair-D': 'Para-D',
        LoopbackType: 'Typ pętli zwrotnej',
        Internal: 'Wewnętrzny',
        External: 'Zewnętrzny',
        LoopbackPort: 'Port pętli zwrotnej',
        LoopbackResult: 'Wynik pętli zwrotnej',
        PingConfig: 'Konfiguracja ping',
        DestinationIP: 'Docelowy adres IP',
        PingTimes: 'Liczba pingów',
        DataSize: 'Rozmiar danych',
        Interval: 'Interwał',
        Ping: 'Ping',
        PingResult: 'Wynik pingowania',
        'byte(1-1024)': 'bajt(1-1024)',
        'milisec(100-1000)': 'milisek(100-1000)',
        TracertResult: 'Wynik tracerouta',
        Tracert: 'Tracert',
        TracertConfig: 'Konfiguracja tracerouta',
        MaxHop: 'Maksymalna liczba skoków',
        'hop(1-30)': 'skoki(1-30)',

        HistoryControl: 'Kontrola historii',
        HistoryControlTable: 'Tabela kontroli historii',
        Owner: 'Właściciel',
        'Interval(sec)': 'Interwał(sec)',
        EventConfig: 'Konfiguracja zdarzeń',
        AlarmConfig: 'Konfiguracja alarmów',
        AlarmTable: 'Tabela alarmów',
        Variable: 'Zmienna',
        'Sample Type': 'Typ próbki',
        'Rising Threshold': 'Próg narastający',
        'Rising Event': 'Zdarzenie narastające',
        'Falling Threshold': 'Próg opadający',
        'Falling Event': 'Zdarzenie opadające',
        'Alarm Type': 'Typ alarmu',

        DropEvents: 'Zdarzenia drop',
        RecBytes: 'Przyjęte bajty',
        RecPackets: 'Przyjęte pakiety',
        BPackets: 'B pakiety',
        MPackets: 'M pakiety',
        'CRC&Align ERR': 'Błąd CRC & Align',
        Undersize: 'Pakiety poniżej minimalnej wielkości',
        Oversize: 'Pakiety powyżej maksymalnej wielkości',
        Fragments: 'Fragmenty',
        Jabbers: 'Jabbers',
        Collisions: 'Kolizje',
        'Incorrect IP address': 'Niepoprawny adres IP',
        'There are empty fields': 'Są puste pola',
        NotificationConfig: 'Konfiguracja powiadomień',
        SecurityModel: 'Model bezpieczeństwa',
        SecurityLevel: 'Poziom bezpieczeństwa',
        NotificationTable: 'Tabela powiadomień',
        timeout: 'Limit czasowy',
        retry: 'Powtórzenie',
        User: 'Użytkownik',
        Trap: 'Pułapka',
        Inform: 'Informacja',
        SNMPCommunity: 'Wspólnota SNMP',
        CommunityConfig: 'Konfiguracja wspólnoty',
        CommunityName: 'Nazwa wspólnoty',
        Access: 'Dostęp',
        MIBView: 'Widok MIB',
        CommunityTable: 'Tabela wspólnoty',
        'read-only': 'tylko do odczytu',
        'read-write': 'odczyt/zapis',

        Include: 'Uwzględnij',
        Exclude: 'Wyklucz',

        LocalEngine: 'Silnik lokalny',
        'Default ID': 'ID domyślne',
        RemoteEngine: 'Silnik zdalny',
        'Remote Engine ID': 'ID silnika zdalnego',
        'Local Engine ID': 'ID silnika lokalnego',
        '(0 or 10-64 Hex)': '(0 lub 10-64 Hex)',
        SNMPView: 'Widok SNMP',
        SNMPGroup: 'Grupa SNMP',
        ViewType: 'Typ widoku',
        ViewName: 'Nazwa widoku',
        ViewConfig: 'Konfiguracja widoku',
        MIBObjectID: 'ID obiektu MIB',
        GroupName: 'Nazwa grupy',
        ReadView: 'Widok do odczytu',
        WriteView: 'Widok do zapisu',
        NotifyView: 'Widok powiadomień',
        '(16 characters maximum)': '(maksymalnie 16 znaków)',
        '(61 characters maximum)': '(maksymalnie 61 znaków)',
        GroupConfig: 'Konfiguracja grupy',
        UserConfig: 'Konfiguracja użytkownika',
        UserType: 'Typ użytkownika',
        'Group Name': 'Nazwa grupy',
        AuthMode: 'Tryb uwierzytelniania',
        PrivacyMode: 'Tryb prywatności',
        'Auth Password': 'Hasło uwierzytelniające',
        'Privacy Password': 'Hasło prywatności',
        None: 'Brak',
        SNMPUser: 'Użytkownicy SNMP',

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
        Note10: 'Opis portu nie powinien mieć więcej niż 16 znaków.',
        Note11:
          'Maksymalna liczba nauczonych adresów MAC z pojedynczego portu może być ustawiona na 64.',
        Note12: `Tryb Recovery jest przydatny tylko dla procesów nie będących w trybie Alrt process. Wykrywanie pętli zwrotnej musi być skoordynowane z storm control.`,
        Note13: `1. LAG utworzony przez LACP nie może być usunięty.`,
        Note14_1: `1. LAG * oznacza grupę łączenia łączy (Link Aggregation Group), do której należy port.`,
        Note14_2: `2. Nie zaleca się ustawiania portów 100M i 1000M w tej samej grupie łączenia łączy.`,
        Note14_3: `3. LAG utworzony przez LACP nie może być modyfikowany.`,
        Note15_1: `1. Aby uniknąć burzy transmisji (broadcast storm) podczas aktywacji LACP, zaleca się włączenie funkcji drzewa rozprzestrzeniania (Spanning Tree).`,
        Note15_2: `2. Funkcja LACP nie może być włączona dla portu już w grupie łączenia łączy statycznej.`,
        Note15_3: `3. Wartość klucza admin nie może być taka sama jak numer grupy dowolnej grupy łączenia łączy statycznej używanej i odwrotnie.`,
        Note16_1: `Liczba wyświetlanych adresów MAC:`,
        Note16_2: `Maksymalna ilość wyświetlanych wpisów to domyślnie 100, proszę kliknąć przycisk Szukaj, aby uzyskać pełne wpisy adresowe.`,
        Note17_1:
          '1. Istnieje 8 poziomów wagi oznaczonych wartościami 0-7. Im niższa wartość, tym wyższy priorytet.',
        Note17_2:
          '2. Ta strona wyświetla dzienniki w buforze dziennika i co najwyżej 512 dzienników jest wyświetlanych.',
        Note18_1:
          '1.Lokalny dziennik zawiera 2 kanały: bufor dziennika i plik dziennika.',
        Note18_2:
          '2. Istnieje 8 poziomów wagi oznaczonych wartościami 0-7. Im niższa wartość, tym wyższy priorytet.',
        Note19_1: '1.Obsługiwane są do 4 hostów dziennika.',
        Note19_2:
          '2.Istnieje 8 poziomów wagi oznaczonych wartościami 07. Im niższa wartość, tym wyższy priorytet.',
        Note20:
          'Wykonanie kopii zapasowej pliku dziennika może zająć dużo czasu. Prosimy o cierpliwość i brak jakichkolwiek działań.',
        Note21: `Domyślnym widokiem MIB dla wspólnoty jest viewDefault.`,
        Note22: `Suma znaków szesnastkowych Engine ID powinna być parzysta.`,
        Note23: `Grupa powinna zawierać widok do odczytu, a domyślny widok do odczytu to viewDefault`,
        Note24: `Tryb bezpieczeństwa i poziom bezpieczeństwa użytkownika powinny być takie same z poziomem bezpieczeństwa jego grupy.`,
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
