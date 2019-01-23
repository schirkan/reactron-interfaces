/// <reference types="react" />
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IPubSub } from './IPubSub';
import { IWebComponentOptions } from './IWebComponentOptions';
import { IModuleContext } from './IModuleContext';
import { IComponentLoader } from './IComponentLoader';
import { ILogWriter } from './ILogWriter';
import * as electron from 'electron';
export interface IExtraWebComponentProps {
    className?: string;
    style?: React.CSSProperties;
}
export interface IReactronComponentContext extends IModuleContext {
    readonly componentName: string;
    readonly moduleApiPath: string;
    readonly electron: electron.AllElectron;
    readonly topics: IPubSub;
    readonly componentLoader: IComponentLoader;
    readonly log: ILogWriter;
    renderComponent: (props: Partial<IWebComponentOptions> & IExtraWebComponentProps) => any;
    renderLoading: (text?: string, iconSize?: SizeProp) => any;
}
