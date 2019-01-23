import { IWebComponentOptions } from './IWebComponentOptions';
export interface IWebComponentsManager {
    getAll(): IWebComponentOptions[];
    createOrUpdate(item: IWebComponentOptions): IWebComponentOptions;
    remove(id: string): void;
}
