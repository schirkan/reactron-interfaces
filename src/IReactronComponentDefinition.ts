import { IObjectDefinition } from "./IObjectDefinition";

export interface IReactronComponentDefinition<TOptions = any> extends IObjectDefinition {
    component: new (props: TOptions) => React.Component<TOptions>;
}