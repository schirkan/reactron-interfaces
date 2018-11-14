import { IReactronServiceContext } from "./IReactronServiceContext";

export interface IReactronService<TOptions = any> {
    start(context: IReactronServiceContext<TOptions>): Promise<void>;
    stop?(): Promise<void>;
    setOptions?(options: TOptions): Promise<void>;
}