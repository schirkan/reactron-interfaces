import { IFieldDefinition, IInput } from './IObjectDefinition';
import { IReactronComponentContext } from './IReactronComponentContext';
export interface IInputComponentProps<TValue = any> {
    context: IReactronComponentContext;
    definition: IFieldDefinition;
    uniqueId: string;
    value: TValue;
    valueChange: (definition: IFieldDefinition, newValue: TValue) => void;
    getDefaultInputControl: <TValueOfDefinition = any>(definition: IFieldDefinition) => IInput<TValueOfDefinition>;
    getDefaultDetailsControl: <TValueOfDefinition = any>(definition: IFieldDefinition) => IInput<TValueOfDefinition>;
}
