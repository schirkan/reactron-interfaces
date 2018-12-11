import { IBackendService } from './IBackendService';
import { ISystemSettings } from './ISystemSettings';

export interface IModuleContext {
    readonly backendService: IBackendService;
    readonly moduleStorage: ElectronStore;
    readonly moduleName: string;

    getService<TService = any>(serviceName: string, moduleName?: string): TService | undefined;
    getSettings(): Readonly<ISystemSettings>;
}
