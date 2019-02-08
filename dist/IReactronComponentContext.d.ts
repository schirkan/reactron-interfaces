/// <reference types="react" />
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
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
    readonly log: ILogWriter;
    readonly electron: electron.AllElectron;
    readonly componentLoader: IComponentLoader;
    renderComponent: (props: Partial<IWebComponentOptions> & IExtraWebComponentProps) => any;
    renderLoading: (text?: string, iconSize?: SizeProp, style?: React.CSSProperties) => any;
}
