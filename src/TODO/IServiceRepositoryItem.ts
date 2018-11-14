import { IReactronService } from "../IReactronService";
import { IReactronServiceDefinition } from "../IReactronServiceDefinition";

export interface IServiceRepositoryItem extends IReactronServiceDefinition {
    moduleName: string;
    instance: IReactronService;
    state: 'starting' | 'running' | 'stopped' | 'error';
    log: string[];
}