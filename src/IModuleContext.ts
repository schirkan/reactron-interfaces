import { IBackendService } from './IBackendService';
import { ISystemSettings } from './ISystemSettings';
import { ElectronStore } from './ElectronStore';
import { IReactronServices } from './IReactronServices';

export interface IModuleContext {
    readonly backendService: IBackendService;
    readonly moduleStorage: ElectronStore;
    readonly moduleName: string;
    readonly settings: Readonly<ISystemSettings>;
    readonly services: IReactronServices;
}
