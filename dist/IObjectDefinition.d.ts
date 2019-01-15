import { IInputComponentProps } from "./IInputComponentProps";
declare type IOptionDefinitionValueType = 'object' | 'number' | 'boolean' | 'string' | 'style' | 'webComponent' | 'password';
declare type IInput = {
    module: string;
    component: string;
} | ((props: IInputComponentProps) => any) | (new (props: IInputComponentProps) => any);
export interface IOptionDefinitionValue {
    value: any;
    text: string;
}
export interface IFieldDefinition extends IObjectDefinition {
    valueType: IOptionDefinitionValueType;
    defaultValue?: any;
    minValue?: number;
    maxValue?: number;
    stepSize?: number;
    values?: IOptionDefinitionValue[];
    isArray?: boolean;
    textRows?: number;
    inputControl?: IInput;
    inputForm?: IInput;
}
export interface IObjectDefinition {
    name: string;
    displayName: string;
    description?: string;
    fields?: IFieldDefinition[];
}
export {};
