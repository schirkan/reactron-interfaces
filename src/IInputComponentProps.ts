import { IFieldDefinition } from './IObjectDefinition';
import { IReactronComponentContext } from './IReactronComponentContext';
import { IWebComponentOptions } from './IWebComponentOptions';
import { IReactronComponentDefinition } from './IReactronComponentDefinition';

export interface IReactronComponentDefinitionItem {
  key: string;
  moduleName: string;
  definition: IReactronComponentDefinition;
}

export interface IInputComponentProps<TValue = any> {
  context: IReactronComponentContext;
  definition: IFieldDefinition;
  uniqueId: string;
  value: TValue;
  valueChange: (definition: IFieldDefinition, newValue: TValue) => void;
  getComponentDefinition(componentId: string): IReactronComponentDefinition | undefined;
  getAllComponents(): IWebComponentOptions[];
  getAllComponentDefinitions(): IReactronComponentDefinitionItem[];
}