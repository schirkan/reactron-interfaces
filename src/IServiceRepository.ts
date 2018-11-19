import { IServiceRepositoryItem } from "./IServiceRepositoryItem";

export interface IServiceRepository {
    get(moduleName: string, serviceName: string): IServiceRepositoryItem | undefined;
    getAll(): IServiceRepositoryItem[];
}
