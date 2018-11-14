import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IPubSub } from './IPubSub';
import { IWebComponentOptions } from './IWebComponentOptions';
import * as Electron from 'electron';
import { IModuleContext } from './IModuleContext';

export interface IReactronComponentProps<TOptions = any> extends IModuleContext {
    readonly componentName: string;
    readonly moduleApiPath: string;
    readonly options: TOptions;
    readonly electron: Electron.AllElectron;
    readonly topics: IPubSub;

    renderComponent: (props: Partial<IWebComponentOptions>) => any;
    renderLoading: (text?: string, iconSize?: SizeProp) => any;
}
