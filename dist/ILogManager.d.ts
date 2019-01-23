import { ILogEntry, Severity } from './ILogEntry';
export interface ILogManager {
    writeLog(source: string, severity: Severity, message: string, data?: any): void;
    writeLog(log: Pick<ILogEntry, Exclude<keyof ILogEntry, 'timestamp'>>): void;
    readLog(source?: string): ILogEntry[];
}
