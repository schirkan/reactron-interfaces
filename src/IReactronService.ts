export interface IReactronService<TOptions = any> {
    start(): Promise<void>;
    stop?(): Promise<void>;
    setOptions?(options: TOptions): Promise<void>;
    getOptions?(): Readonly<TOptions>;
}