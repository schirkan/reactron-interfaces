import {IReactronService} from '../IReactronService';
import {IServerInfo} from '../IServerInfo';
import {ISystemSettings} from '../ISystemSettings';

export interface IAppController extends IReactronService {
    getServerInfo(): Promise<IServerInfo>;
    exitApplication(): Promise<void>;
    restartApplication(): Promise<void>;
    shutdownSystem(): Promise<void>;
    rebootSystem(): Promise<void>;
    resetApplication(): Promise<void>;
    getSettings(): Promise<ISystemSettings>;
    setSettings(settings: ISystemSettings): Promise<void>;
}
