import {IReactronService} from '../IReactronService';
import {IServiceRepositoryItem} from '../IServiceRepositoryItem';

export interface IServiceController extends IReactronService {
    getAllServices(): Promise<IServiceRepositoryItem[]>;
    getServiceOptions(moduleName: string, serviceName: string): Promise<any>;
    setServiceOptions(moduleName: string, serviceName: string, options: object): Promise<void>;
}
