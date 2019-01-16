import { IObjectDefinition } from "./IObjectDefinition";
import { IReactronService } from "./IReactronService";
import { IReactronServiceContext } from "./IReactronServiceContext";
export interface IReactronServiceDefinition<TOptions = any> extends IObjectDefinition {
    service: new (context: IReactronServiceContext) => IReactronService<TOptions>;
}
