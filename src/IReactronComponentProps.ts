import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IPubSub } from './IPubSub';
import { IWebComponentOptions } from './IWebComponentOptions';
import * as Electron from 'electron';
import { IModuleContext } from './IModuleContext';

export interface IReactronComponentProps<TOptions = any> extends IModuleContext {
    componentName: string;
    options: TOptions;
    electron: Electron.AllElectron;
    topics: IPubSub;
    moduleApiPath: string;
    getService: (serviceName: string, moduleName: string | undefined) => Promise<any>;
    renderComponent: (props: Partial<IWebComponentOptions>) => any;
    renderLoading: (text?: string, iconSize?: SizeProp) => any;
}
