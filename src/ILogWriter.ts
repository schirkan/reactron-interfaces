export interface ILogWriter {
    error(message: string, data?: any): void;
    warning(message: string, data?: any): void;
    info(message: string, data?: any): void;
    debug(message: string, data?: any): void;
}
