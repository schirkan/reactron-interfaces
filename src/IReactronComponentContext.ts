import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IPubSub } from './IPubSub';
import { IWebComponentOptions } from './IWebComponentOptions';
import { IModuleContext } from './IModuleContext';
import * as electron from 'electron';
import { IComponentLoader } from './IComponentLoader';

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

  renderComponent: (props: Partial<IWebComponentOptions> & IExtraWebComponentProps) => any;
  renderLoading: (text?: string, iconSize?: SizeProp) => any;
}