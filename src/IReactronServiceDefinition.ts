import { IObjectDefinition } from "./IObjectDefinition";
import { IReactronService } from "./IReactronService";

export interface IReactronServiceDefinition extends IObjectDefinition {
    service: IReactronService;
}