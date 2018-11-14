import { IReactronServiceContext } from "./IReactronServiceContext";

export interface IReactronService<TOptions = any> {
    start(helper: IReactronServiceContext<TOptions>): Promise<void>;
    stop?(): Promise<void>;
    setOptions?(options: TOptions): Promise<void>;
}