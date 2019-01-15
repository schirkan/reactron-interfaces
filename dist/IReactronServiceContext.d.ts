import { IModuleContext } from "./IModuleContext";
import { Router } from 'express';
export interface IReactronServiceContext extends IModuleContext {
    readonly moduleApiRouter: Router;
    getServiceAsync<TService = any>(serviceName: string, moduleName?: string): Promise<TService | undefined>;
}
