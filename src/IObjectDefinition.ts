type IOptionDefinitionValueType = 'object' | 'number' | 'boolean' | 'string' | 'style' | 'webComponent';

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
    inputControl?: { module: string, component: string };
    inputForm?: { module: string, component: string };
}

export interface IObjectDefinition {
    name: string;
    displayName: string;
    description?: string;
    fields?: IFieldDefinition[];
}