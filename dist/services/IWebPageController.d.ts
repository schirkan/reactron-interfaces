import { IReactronService } from '../IReactronService';
import { IWebPageOptions } from '../IWebPageOptions';
export interface IWebPageController extends IReactronService {
    getWebPages(): Promise<IWebPageOptions[]>;
    setWebPage(options: IWebPageOptions): Promise<IWebPageOptions>;
    deleteWebPage(id: string): Promise<void>;
}
