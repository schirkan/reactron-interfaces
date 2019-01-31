import {IReactronService} from '../IReactronService';
import {IWebPageOptions} from '../IWebPageOptions';

export interface IWebPageController extends IReactronService {
    getAll(): Promise<IWebPageOptions[]>;
    createOrUpdate(options: IWebPageOptions): Promise<IWebPageOptions>;
    delete(id: string): Promise<void>;
}
