import { IModuleContext } from "./IModuleContext";

export interface IReactronServiceContext<TOptions = any> extends IModuleContext {
    options: TOptions;
    
    // get service async while starting application
    getServiceAsync<TService = any>(serviceName: string, moduleName?: string): Promise<TService | undefined>;
}