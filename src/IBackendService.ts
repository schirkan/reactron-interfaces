import { IBackendService } from './IBackendService';
import { IPubSub } from './IPubSub';
import { IBackendServiceConfig } from './IBackendServiceConfig';
import { IExpressApp } from './IExpressApp';
import { IElectronApp } from './IElectronApp';
import { ISettingsManager } from './ISettingsManager';
import { IServiceManager } from './IServiceManager';
import { IWebPageManager } from './IWebPageManager';
import { IWebComponentsManager } from './IWebComponentsManager';

export interface IBackendService {
    readonly config: IBackendServiceConfig;
    readonly topics: IPubSub;
    // readonly moduleRepository: IModuleRepository;
    // readonly serviceRepository: IServiceRepository;
    // readonly serviceOptionsRepository: IServiceOptionsRepository;
    readonly electronApp: IElectronApp;
    readonly expressApp: IExpressApp;
    // readonly moduleLoader: IModuleLoader;
    readonly serviceManager: IServiceManager;
    //readonly moduleManager: IModuleManager;
    readonly webPageManager: IWebPageManager;
    readonly webComponentsManager: IWebComponentsManager;
    readonly settings: ISettingsManager;

    exit(): void;
    restart(): void;
    reset(): Promise<void>;
}
