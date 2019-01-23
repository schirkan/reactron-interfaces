import { IReactronService } from './IReactronService';
import { ICommandResult } from './ICommandResult';

export interface IServiceManager {
    getAsync(moduleName: string, serviceName: string): Promise<IReactronService | undefined>;
    get(moduleName: string, serviceName: string): IReactronService | undefined;
    getOptions(moduleName: string, serviceName: string): any;
    setOptions(moduleName: string, serviceName: string, options: any): Promise<void>;
    startAllServices(): Promise<ICommandResult>;
    stopAllServices(): Promise<ICommandResult>;
}
