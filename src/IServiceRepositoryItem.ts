import { IReactronService } from "./IReactronService";
import { IReactronServiceDefinition } from "./IReactronServiceDefinition";
import { IReactronServiceContext } from "./IReactronServiceContext";

export interface IServiceRepositoryItem extends IReactronServiceDefinition {
    moduleName: string;
    instance: IReactronService;
    context: IReactronServiceContext;
    state: 'starting' | 'running' | 'stopped' | 'error';
    log: string[];
}