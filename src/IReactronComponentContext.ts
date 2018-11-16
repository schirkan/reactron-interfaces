import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IPubSub } from './IPubSub';
import { IWebComponentOptions } from './IWebComponentOptions';
import { IModuleContext } from './IModuleContext';

export interface IReactronComponentContext extends IModuleContext {
    readonly componentName: string;
    readonly moduleApiPath: string;
    readonly electron: Electron.AllElectron;
    readonly topics: IPubSub;
    
    renderComponent: (props: Partial<IWebComponentOptions>) => any;
    renderLoading: (text?: string, iconSize?: SizeProp) => any;
}