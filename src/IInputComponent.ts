import { IFieldDefinition } from "./IObjectDefinition";

export interface IInputComponentProps {
    definition: IFieldDefinition;
    value: any;
    valueChange: (newValue: any) => void;
}

export interface IInputComponent {
    new(props: IInputComponentProps): IInputComponent;
}