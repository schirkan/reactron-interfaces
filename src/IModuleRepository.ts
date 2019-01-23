import { IModuleRepositoryItem } from './IModuleRepositoryItem';

export interface IModuleRepository {
    add(module: IModuleRepositoryItem): void;
    remove(moduleName: string): void;
    get(moduleName: string): IModuleRepositoryItem | undefined;
    getAll(): IModuleRepositoryItem[];
}