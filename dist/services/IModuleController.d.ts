import { IReactronService } from '../IReactronService';
import { IModuleRepositoryItem } from '../IModuleRepositoryItem';
import { ICommandResult } from '../ICommandResult';
export interface IModuleController extends IReactronService {
    getModules(): Promise<IModuleRepositoryItem[]>;
    addModule(repository: string): Promise<ICommandResult[]>;
    deleteModule(moduleName: string): Promise<ICommandResult[]>;
    rebuildModule(moduleName: string): Promise<ICommandResult[]>;
    updateModule(moduleName: string): Promise<ICommandResult[]>;
    checkUpdates(): Promise<ICommandResult[]>;
}
