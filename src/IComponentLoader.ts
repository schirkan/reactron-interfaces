import { IReactronComponentDefinition } from "./IReactronComponentDefinition";

export interface IComponentLoader {
    getModuleComponents(moduleName: string): Promise<IReactronComponentDefinition[] | undefined>;
    getAllComponents(): Promise<{ [moduleName: string]: IReactronComponentDefinition[] }>;
}
