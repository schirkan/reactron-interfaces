import { IFieldDefinition } from "./IObjectDefinition";

export interface IInputComponentProps {
    definition: IFieldDefinition;
    value: any;
    valueChange: (definition: IFieldDefinition, newValue: any) => void;
}