import { IObjectDefinition } from "./IObjectDefinition";
import { IReactronComponentProps } from "./IReactronComponentProps";

export interface IReactronComponentDefinition<TOptions = any> extends IObjectDefinition {
    component: new (props: IReactronComponentProps<TOptions>) => React.Component<IReactronComponentProps<TOptions>>;
}