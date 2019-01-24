import { IModuleContext } from './IModuleContext';
import { Router } from 'express';
import { ILogWriter } from './ILogWriter';
export interface IReactronServiceContext extends IModuleContext {
    readonly serviceName: string;
    readonly moduleApiRouter: Router;
    readonly log: ILogWriter;
}
