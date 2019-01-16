import { IFieldDefinition } from "./IObjectDefinition";

export interface IInputComponentProps<TValue = any> {
    definition: IFieldDefinition;
    uniqueId: string;
    value: TValue;
    valueChange: (definition: IFieldDefinition, newValue: TValue) => void;
}