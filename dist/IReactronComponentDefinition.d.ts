/// <reference types="react" />
import { IObjectDefinition } from "./IObjectDefinition";
declare type ComponentType = 'content' | 'admin-input' | 'layout' | 'frame' | 'internal';
export interface IReactronComponentDefinition<TOptions = any> extends IObjectDefinition {
    component: new (props: TOptions) => React.Component<TOptions>;
    type?: ComponentType;
}
export {};
