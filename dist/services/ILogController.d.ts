import { IReactronService } from '../IReactronService';
import { ILogEntry } from '../ILogEntry';
export interface ILogController extends IReactronService {
    getLogEntries(source?: string): Promise<ILogEntry[]>;
}
