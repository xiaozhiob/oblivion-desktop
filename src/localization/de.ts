import { Language } from './type';

const deutsch: Language = {
    global: {},
    status: {
        connecting: 'Verbinde ...',
        connected: 'Verbunden',
        connected_confirm: 'Verbunden',
        disconnecting: 'Trenne ...',
        disconnected: 'Getrennt',
        ip_check: 'IP wird geprüft ...'
    },
    home: {
        title_warp_based: 'Warp',
        drawer_settings_warp: 'Warp-Einstellungen',
        drawer_settings_routing_rules: 'Routing-Regeln',
        drawer_settings_app: 'App-Einstellungen',
        drawer_settings_scanner: 'Scannereinstellungen',
        drawer_settings_network: 'Netzwerkeinstellungen',
        drawer_log: 'Protokoll',
        drawer_update: 'Update',
        drawer_update_label: 'Neues Update',
        drawer_speed_test: 'Geschwindigkeitstest',
        drawer_about: 'Über',
        drawer_lang: 'Sprache ändern'
    },
    toast: {
        ip_check_please_wait:
            'Bitte warten Sie einige Sekunden, um die Prüfung erneut zu versuchen!',
        ir_location:
            'Cloudflare hat eine Verbindung zu einer IP mit einem iranischen Standort hergestellt, die sich von Ihrer tatsächlichen IP unterscheidet. Sie können damit die Filterung umgehen, jedoch keine Sanktionen. Mach dir keine Sorge! Sie können den Speicherort in den Einstellungen mit der Option „Gool“ oder „Psiphon“ ändern.',
        btn_submit: 'Verstanden',
        copied: 'Kopiert!',
        cleared: 'Das Protokoll wurde gelöscht!',
        please_wait: 'Bitte warten ...',
        offline: 'Sie sind offline!',
        settings_changed:
            'Das Anwenden der Einstellungen erfordert ein erneutes herstellen der Verbindung.'
    },
    settings: {
        title: 'Warp-Einstellungen',
        more: 'Mehr Einstellungen',
        method_warp: 'Warp',
        method_warp_desc: 'Warp aktivieren',
        method_gool: 'Gool',
        method_gool_desc: 'WarpInWarp aktivieren',
        method_psiphon: 'Psiphon',
        method_psiphon_desc: 'Psiphon aktivieren',
        method_psiphon_location: 'Land',
        method_psiphon_location_auto: 'Automatisch',
        method_psiphon_location_desc: 'Gewünschte Länder-IP auswählen',
        endpoint: 'Endpunkt',
        endpoint_desc: 'Combination of IP or domain name, along with port',
        license: 'Lizenz',
        license_desc: 'Wenn Sie eine Lizenz haben (jede Lizenz ist 2x)',
        option: 'Anwendungseinstellungen',
        network: 'Netzwerkeinstellungen',
        proxy_mode: 'Konfiguration',
        proxy_mode_desc: 'Proxy-Einstellungen festlegen',
        port: 'Proxy-Port',
        port_desc: 'Proxy-Port der Anwendungs festlegen',
        share_vpn: 'Freigeben (LAN)',
        share_vpn_desc: 'Proxy im Netzwerk freigeben',
        dns: 'DNS ändern',
        dns_desc: 'Google Public DNS verwenden',
        ip_data: 'IP Check',
        ip_data_desc: 'IP & Standort nach herstellen der Verbindung anzeigen',
        dark_mode: 'Dunkler Modus',
        dark_mode_desc: 'Anzeigemodus der Anwendung angeben',
        lang: 'Sprache',
        lang_desc: 'Sprache der Anwendungsoberfläche ändern',
        open_login: 'Mit Windows starten',
        open_login_desc: 'Beim Systemstart öffnen',
        system_tray: 'System Tray',
        system_tray_desc: 'Not placing the program icon in the taskbar',
        restore: 'Wiederherstellen',
        restore_desc: 'Einstellungen auf Standard zurücksetzen',
        scanner: 'Scannereinstellungen',
        scanner_alert: 'Der Scanner ist aktiviert, wenn Sie die Standard-Endpunktadresse verwenden',
        scanner_ip_type: 'Endpunkttyp',
        scanner_ip_type_auto: 'Automatisch',
        scanner_ip_type_desc: 'IP des Endpunkts automatisch finden',
        scanner_rtt: 'Intervall',
        scanner_rtt_default: 'Standard',
        scanner_rtt_desc: 'RTT-Limit des Scanners',
        scanner_reserved: 'Reserviert',
        scanner_reserved_desc: 'Reservierten Wireguard-Wert überschreiben',
        routing_rules: 'Schwarze Liste',
        routing_rules_desc: 'Verhindern Sie, dass Datenverkehr durch Warp geleitet wird',
        routing_rules_disabled: 'Deaktiviert',
        routing_rules_items: 'Elemente'
    },
    tabs: {
        home: 'Verbinden',
        warp: 'Warp',
        network: 'Netzwerk',
        scanner: 'Scanner',
        app: 'App'
    },
    modal: {
        endpoint_title: 'Endpunkt',
        license_title: 'Lizenz',
        license_desc:
            'Für die Ausführung des Programms ist nicht unbedingt eine Warp-Lizenz erforderlich. Wenn Sie möchten, können Sie Ihre Lizenz hier eingeben.',
        port_title: 'Proxy-Port',
        restore_title: 'Standardeinstellungen wiederherstellen',
        restore_desc:
            'Durch die Bestätigung des Vorgangs werden alle Programmeinstellungen auf den Standard zurückgesetzt und Ihre Verbindung wird getrennt.',
        routing_rules_sample: 'Beispiel',
        endpoint_default: 'Standard',
        endpoint_suggested: 'empfohlen',
        confirm: 'Ich bestätige',
        update: 'Update',
        cancel: 'Abbrechen'
    },
    log: {
        title: 'Protokoll',
        desc: 'Wenn vom Programm ein Protokoll erstellt wird, wird es hier angezeigt.',
        error_invalid_license: 'Die eingegebene Lizenz ist ungültig.',
        error_too_many_connected: 'Das Lizenzlimit wurde erreicht.',
        error_access_denied:
            'Der Pfad wurde nicht gefunden. Starten Sie das Programm mit „Als Administrator ausführen“.',
        error_failed_set_endpoint:
            'Das Festlegen des Endpunkts ist fehlgeschlagen. Standardendpunkt verwenden.',
        error_warp_identity: 'Identity in Cloudflare hat einen Fehler festgestellt.',
        error_script_failed: 'Im Skript ist ein Fehler aufgetreten. Versuchen Sie es erneut.',
        error_object_null: 'Bei der Anwendung ist ein Fehler aufgetreten. Versuchen Sie es erneut.',
        error_port:
            'Der Port wird von einer anderen Anwendung verwendet. Wählen Sie in den Anwendungseinstellungen einen anderen Port aus.'
    },
    about: {
        title: 'Über',
        desc: 'Dieses Programm ist eine inoffizielle, aber zuverlässige Version der Oblivion-App für Windows, Linux und Mac.\nDas Oblivion Desktop-Programm ist der Benutzeroberfläche der von Youssef Ghobadi entwickelten Originalversion nachempfunden. Es wurde für den Zweck des freien Zugangs zum Internet geschrieben und erstellt.\nEine Namensänderung oder kommerzielle Nutzung ist nicht gestattet.',
        slogan: 'Internet, für alle oder niemanden!'
    }
};
export default deutsch;
