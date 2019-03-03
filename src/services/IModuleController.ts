import {IReactronService} from '../IReactronService';
import {IModuleRepositoryItem} from '../IModuleRepositoryItem';
import {ICommandResult} from '../ICommandResult';

export interface IModuleController extends IReactronService {
    getAll(): Promise<IModuleRepositoryItem[]>;
    add(repository: string): Promise<ICommandResult[]>;
    remove(moduleName: string): Promise<ICommandResult[]>;
    update(moduleName: string): Promise<ICommandResult[]>;
    updateAll(): Promise<ICommandResult[]>;
    checkUpdates(): Promise<ICommandResult[]>;
}
