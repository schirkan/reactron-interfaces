import { IModuleContext } from './IModuleContext';
import { Router } from 'express';
import { ILogWriter } from './ILogWriter';

export interface IReactronServiceContext extends IModuleContext {
    readonly moduleApiRouter: Router;
    readonly log: ILogWriter;
    
    // get service async while starting application
    getServiceAsync<TService = any>(serviceName: string, moduleName?: string): Promise<TService | undefined>;
}