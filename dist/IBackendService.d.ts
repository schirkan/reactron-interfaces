import { IPubSub } from './IPubSub';
import { IBackendServiceConfig } from './IBackendServiceConfig';
import { IExpressApp } from './IExpressApp';
import { IElectronApp } from './IElectronApp';
import { ISettingsManager } from './ISettingsManager';
import { IServiceManager } from './IServiceManager';
import { IWebPageManager } from './IWebPageManager';
import { IWebComponentsManager } from './IWebComponentsManager';
import { IModuleRepository } from './IModuleRepository';
import { IServiceRepository } from './IServiceRepository';
export interface IBackendService {
    readonly config: IBackendServiceConfig;
    readonly topics: IPubSub;
    readonly moduleRepository: IModuleRepository;
    readonly serviceRepository: IServiceRepository;
    readonly electronApp: IElectronApp;
    readonly expressApp: IExpressApp;
    readonly serviceManager: IServiceManager;
    readonly webPageManager: IWebPageManager;
    readonly webComponentsManager: IWebComponentsManager;
    readonly settings: ISettingsManager;
    exit(): void;
    restart(): void;
    reset(): Promise<void>;
}
