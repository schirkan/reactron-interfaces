import { IObjectDefinition } from "./IObjectDefinition";

type ComponentType = 'web' | 'input' | string;

export interface IReactronComponentDefinition<TOptions = any> extends IObjectDefinition {
    component: new (props: TOptions) => React.Component<TOptions>;
    type?: ComponentType; // default = 'web'
}