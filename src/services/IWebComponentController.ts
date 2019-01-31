import {IReactronService} from '../IReactronService';
import {IWebComponentOptions} from '../IWebComponentOptions';

export interface IWebComponentController extends IReactronService {
    getAll(): Promise<IWebComponentOptions[]>;
    createOrUpdate(options: IWebComponentOptions): Promise<IWebComponentOptions>;
    delete(id: string): Promise<void>;
}
