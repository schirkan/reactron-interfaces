import { IInputComponentProps } from './IInputComponentProps';
import { IReactronComponentContext } from './IReactronComponentContext';
export interface IOptionDefinitionValue<TValue> {
    value: TValue;
    text: string;
}
declare type IOptionDefinitionValueType = 'object' | 'number' | 'boolean' | 'string' | 'style' | 'webComponent' | 'password';
export declare type IInput<TValue> = {
    module: string;
    component: string;
} | ((props: IInputComponentProps<TValue>) => any) | (new (props: IInputComponentProps<TValue>) => any);
declare type IValues<TValue> = IOptionDefinitionValue<TValue>[] | ((context: IReactronComponentContext) => Promise<IOptionDefinitionValue<TValue>[]>);
export interface IFieldDefinition<TValue = any> extends IObjectDefinition<TValue> {
    valueType: IOptionDefinitionValueType;
    defaultValue?: TValue;
    minValue?: number;
    maxValue?: number;
    stepSize?: number;
    values?: IValues<TValue>;
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
export {};
