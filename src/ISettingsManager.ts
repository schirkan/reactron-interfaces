import { ISystemSettings } from './ISystemSettings';

export interface ISettingsManager {
    get(): ISystemSettings;
    set(settings: ISystemSettings): void;
}