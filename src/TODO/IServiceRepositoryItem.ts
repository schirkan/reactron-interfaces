import { IReactronService } from "../IReactronService";
import { IServiceDefinition } from "../IServiceDefinition";

export interface IServiceRepositoryItem extends IServiceDefinition {
    moduleName: string;
    instance: IReactronService;
    state: 'starting' | 'running' | 'stopped' | 'error';
    log: string[];
}