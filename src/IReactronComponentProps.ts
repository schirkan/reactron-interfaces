import { IReactronComponentContext } from './IReactronComponentContext';

export interface IReactronComponentProps<TOptions = any> {
     readonly options: TOptions;
     readonly context: IReactronComponentContext;
}
