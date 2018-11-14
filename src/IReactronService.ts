import { IReactronServiceContext } from "./IReactronServiceContext";

export interface IReactronService<TOptions = any> {
    new(): IReactronService<TOptions>;
    start(context: IReactronServiceContext): Promise<void>;
    stop?(): Promise<void>;
    setOptions?(options: TOptions): Promise<void>;
}