import { IWebPageOptions } from './IWebPageOptions';
export interface IWebPageManager {
    getAll(): IWebPageOptions[];
    createOrUpdate(item: IWebPageOptions): IWebPageOptions;
    remove(id: string): void;
}
