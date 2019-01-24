import { ISystemSettings } from './ISystemSettings';
import { ElectronStore } from './ElectronStore';
import { IReactronServices } from './IReactronServices';
import { IPubSub } from './IPubSub';
export interface IModuleContext {
    readonly topics: IPubSub;
    readonly moduleStorage: ElectronStore;
    readonly moduleName: string;
    readonly settings: Readonly<ISystemSettings>;
    readonly services: IReactronServices;
    getService<TService = any>(serviceName: string, moduleName?: string): Promise<TService | undefined>;
}
