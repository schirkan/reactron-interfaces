import { IObjectDefinition } from "./IObjectDefinition";

type ComponentType = 'content' | 'admin-input' | 'layout' | 'frame' | string;

export interface IReactronComponentDefinition<TOptions = any> extends IObjectDefinition {
    component: new (props: TOptions) => React.Component<TOptions>;
    type?: ComponentType; // default = 'content'
}