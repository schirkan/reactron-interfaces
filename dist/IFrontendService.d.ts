import { IModuleController } from './services/IModuleController';
import { IAppController } from './services/IAppController';
import { ILogController } from './services/ILogController';
import { IServiceController } from './services/IServiceController';
import { IWebComponentController } from './services/IWebComponentController';
import { IWebPageController } from './services/IWebPageController';
export interface IFrontendService {
    clearCache(): void;
    readonly modules: IModuleController;
    readonly application: IAppController;
    readonly log: ILogController;
    readonly services: IServiceController;
    readonly components: IWebComponentController;
    readonly pages: IWebPageController;
}
