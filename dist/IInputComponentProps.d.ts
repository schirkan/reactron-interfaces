import { IFieldDefinition } from "./IObjectDefinition";
import { IReactronComponentContext } from "./IReactronComponentContext";
export interface IInputComponentProps<TValue = any> {
    context: IReactronComponentContext;
    definition: IFieldDefinition;
    uniqueId: string;
    value: TValue;
    valueChange: (definition: IFieldDefinition, newValue: TValue) => void;
}
