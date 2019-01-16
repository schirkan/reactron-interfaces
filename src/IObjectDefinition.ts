import { IInputComponentProps } from "./IInputComponentProps";

type IOptionDefinitionValueType = 'object' | 'number' | 'boolean' | 'string' | 'style' | 'webComponent' | 'password';

type IInput<TValue> = { module: string, component: string } | ((props: IInputComponentProps<TValue>) => any) | (new (props: IInputComponentProps<TValue>) => any);

export interface IOptionDefinitionValue<TValue> {
    value: TValue;
    text: string;
}

export interface IFieldDefinition<TValue = any> extends IObjectDefinition<TValue> {
    valueType: IOptionDefinitionValueType;
    defaultValue?: TValue;
    minValue?: number;
    maxValue?: number;
    stepSize?: number;
    values?: IOptionDefinitionValue<TValue>[];
    isArray?: boolean;
    textRows?: number;
    inputControl?: IInput<TValue>;
    inputForm?: IInput<TValue>;
}

export interface IObjectDefinition<TValue> {
    name: string;
    displayName: string;
    description?: string;
    fields?: IFieldDefinition[];
}