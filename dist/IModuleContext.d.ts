import { ISystemSettings } from './ISystemSettings';
import { ElectronStore } from './ElectronStore';
import { IReactronServices } from './IReactronServices';
export interface IModuleContext {
    readonly moduleStorage: ElectronStore;
    readonly moduleName: string;
    readonly settings: Readonly<ISystemSettings>;
    readonly services: IReactronServices;
    getService<TService = any>(serviceName: string, moduleName?: string): Promise<TService | undefined>;
}
