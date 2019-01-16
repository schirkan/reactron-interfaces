import { IObjectDefinition } from "./IObjectDefinition";

type ComponentType = 'content' | 'admin-input' | 'layout' | 'frame' | 'internal';

export interface IReactronComponentDefinition<TOptions = any> extends IObjectDefinition<TOptions> {
    component: new (props: TOptions) => React.Component<TOptions>;
    type?: ComponentType; // default = 'content'
}