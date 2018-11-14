import { IModuleContext } from "./IModuleContext";

export interface IReactronServiceContext<TOptions = any> extends IModuleContext {
    options: TOptions;
}