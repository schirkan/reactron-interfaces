import { IModuleContext } from "./IModuleContext";
import { Router } from 'express';

export interface IReactronServiceContext extends IModuleContext {
    readonly moduleApiRouter: Router;
    
    // get service async while starting application
    getServiceAsync<TService = any>(serviceName: string, moduleName?: string): Promise<TService | undefined>;
}