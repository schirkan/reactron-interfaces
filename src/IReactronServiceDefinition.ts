import { IObjectDefinition } from "./IObjectDefinition";
import { IReactronService } from "./IReactronService";

export interface IReactronServiceDefinition<TOptions = any> extends IObjectDefinition {
    service: new () => IReactronService<TOptions>;
}