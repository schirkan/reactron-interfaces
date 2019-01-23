import { IReactronService } from '../IReactronService';
import { IWebComponentOptions } from '../IWebComponentOptions';
export interface IWebComponentController extends IReactronService {
    getWebComponentOptions(): Promise<IWebComponentOptions[]>;
    setWebComponentOptions(options: IWebComponentOptions): Promise<IWebComponentOptions>;
    deleteWebComponentOptions(id: string): Promise<void>;
}
