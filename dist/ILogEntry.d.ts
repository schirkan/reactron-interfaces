export declare type Severity = 'error' | 'warning' | 'information' | 'debug';
export interface ILogEntry {
    timestamp: number;
    source: string;
    severity: Severity;
    message: string;
    data?: any;
}
