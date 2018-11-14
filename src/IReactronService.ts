import { IReactronServiceContext } from "./IReactronServiceContext";

export interface IReactronService<TOptions = any> {
    start(context: IReactronServiceContext): Promise<void>;
    stop?(): Promise<void>;
    setOptions?(options: TOptions): Promise<void>;
}