import { IFieldDefinition } from "./IObjectDefinition";
export interface IInputComponentProps {
    definition: IFieldDefinition;
    uniqueId: string;
    value: any;
    valueChange: (definition: IFieldDefinition, newValue: any) => void;
}
