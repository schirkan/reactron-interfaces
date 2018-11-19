export interface ISystemSettingsAutoRefresh {
    from: number;
    to: number;
    interval: number;
}

export interface ISystemSettings {
    lang: string;
    location: string;
    timezone: string;
    startupPath: string;
    autorefresh: ISystemSettingsAutoRefresh[];
}