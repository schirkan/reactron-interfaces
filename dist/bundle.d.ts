/// <reference types="node" />
/// <reference types="express" />
/// <reference types="react" />
declare module "ElectronStore" {
    type JSONValue = string | number | boolean | JSONObject | JSONArray;
    interface JSONObject {
        [x: string]: JSONValue;
    }
    interface JSONArray extends Array<JSONValue> {
    }
    interface ElectronStoreOptions<T> {
        /**
         * Default data.
         */
        defaults?: T;
        /**
         * Name of the storage file (without extension).
         */
        name?: string;
        /**
         * Storage file location. Don't specify this unless absolutely necessary!
         */
        cwd?: string;
        /**
         * When specified, the store will be encrypted using the aes-256-cbc encryption algorithm.
         */
        encryptionKey?: string | Buffer;
    }
    export interface ElectronStore<T = {}> extends Iterable<[string, JSONValue]> {
        constructor(options?: ElectronStoreOptions<T>): ElectronStore<T>;
        /**
         * Set an item.
         */
        set<K extends keyof T>(key: K, value: T[K]): void;
        set(key: string, value: any): void;
        /**
         * Set multiple items at once.
         */
        set(object: Pick<T, keyof T> | T | JSONObject): void;
        /**
         * Get an item or defaultValue if the item does not exist.
         */
        get<K extends keyof T>(key: K, defaultValue?: JSONValue): T[K];
        get(key: string, defaultValue?: any): any;
        /**
         * Check if an item exists.
         */
        has(key: keyof T | string): boolean;
        /**
         * Delete an item.
         */
        delete(key: keyof T | string): void;
        /**
         * Delete all items.
         */
        clear(): void;
        /**
         * Watches the given key, calling callback on any changes. When a key is first set oldValue
         * will be undefined, and when a key is deleted newValue will be undefined.
         */
        onDidChange<K extends keyof T>(key: K, callback: (newValue: T[K], oldValue: T[K]) => void): void;
        onDidChange(key: string, callback: (newValue: JSONValue, oldValue: JSONValue) => void): void;
        /**
         * Get the item count.
         */
        size: number;
        /**
         * Get all the data as an object or replace the current data with an object.
         */
        store: T;
        /**
         * Get the path to the storage file.
         */
        path: string;
        /**
         * Open the storage file in the user's editor.
         */
        openInEditor(): void;
        [Symbol.iterator](): Iterator<[string, JSONValue]>;
    }
}
declare module "IPubSub" {
    export interface IPubSubEvgent {
        name: string;
        resolve: (data: any) => void;
        reject: (reason: any) => void;
    }
    export interface IPubSub {
        subscribe(eventName: string, listener: (event: IPubSubEvgent, ...args: any[]) => void): void;
        once(eventName: string, listener: (event: IPubSubEvgent, ...args: any[]) => void): void;
        unsubscribe(eventName: string, listener: (event: IPubSubEvgent, ...args: any[]) => void): void;
        publish(eventName: string, ...args: any[]): Promise<any>;
        clearAllSubscriptions(): void;
    }
}
declare module "ISystemSettings" {
    export interface ISystemSettingsAutoRefresh {
        from: number;
        to: number;
        interval: number;
    }
    export interface ISystemSettings {
        lang: string;
        location: string;
        timezone: string;
        startupPath: string;
        autorefresh: ISystemSettingsAutoRefresh[];
    }
}
declare module "IWebComponentOptions" {
    export interface IWebComponentOptions {
        id: string;
        parentId: string;
        moduleName: string;
        componentName: string;
        options?: any;
    }
}
declare module "IWebPageOptions" {
    export interface IWebPageOptions {
        id: string;
        path: string;
        title: string;
        webComponentId: string;
        style: any;
    }
}
declare module "IBackendServiceConfig" {
    import { ISystemSettings } from "ISystemSettings";
    import { IWebComponentOptions } from "IWebComponentOptions";
    import { IWebPageOptions } from "IWebPageOptions";
    export interface IBackendServiceConfig {
        root: string;
        isDev: boolean;
        frontendPort: number;
        backendPort: number;
        defaultSystemSettings: ISystemSettings;
        defaultWebPageOptions: IWebPageOptions[];
        defaultWebComponentOptions: IWebComponentOptions[];
    }
}
declare module "IExpressApp" {
    import * as express from 'express';
    import * as http from 'http';
    export interface IExpressApp {
        express: express.Application;
        server: http.Server;
        apiRouter: express.Router;
        start(): Promise<void>;
    }
}
declare module "IElectronApp" {
    import * as electron from 'electron';
    export interface IElectronApp {
        mainWindow: electron.BrowserWindow;
        start(): Promise<void>;
    }
}
declare module "ISettingsManager" {
    import { ISystemSettings } from "ISystemSettings";
    export interface ISettingsManager {
        get(): ISystemSettings;
        set(settings: ISystemSettings): void;
    }
}
declare module "IModuleContext" {
    import { IBackendService } from "IBackendService";
    import { ISystemSettings } from "ISystemSettings";
    import { ElectronStore } from "ElectronStore";
    export interface IModuleContext {
        readonly backendService: IBackendService;
        readonly moduleStorage: ElectronStore;
        readonly moduleName: string;
        readonly settings: Readonly<ISystemSettings>;
        getService<TService = any>(serviceName: string, moduleName?: string): TService | undefined;
    }
}
declare module "IReactronServiceContext" {
    import { IModuleContext } from "IModuleContext";
    import { Router } from 'express';
    export interface IReactronServiceContext extends IModuleContext {
        readonly moduleApiRouter: Router;
        getServiceAsync<TService = any>(serviceName: string, moduleName?: string): Promise<TService | undefined>;
    }
}
declare module "IReactronService" {
    import { IReactronServiceContext } from "IReactronServiceContext";
    export interface IReactronService<TOptions = any> {
        start(context: IReactronServiceContext): Promise<void>;
        stop?(): Promise<void>;
        setOptions?(options: TOptions): Promise<void>;
        getOptions?(): Readonly<TOptions>;
    }
}
declare module "ICommandResult" {
    export interface ICommandResult {
        command: string;
        args: string;
        success?: boolean;
        timestampStart: number;
        timestampEnd: number;
        log: string[];
        children: ICommandResult[];
    }
    export interface ICommandResultWithData<TData = any> extends ICommandResult {
        data: TData;
    }
}
declare module "IServiceManager" {
    import { IReactronService } from "IReactronService";
    import { ICommandResult } from "ICommandResult";
    export interface IServiceManager {
        getAsync(moduleName: string, serviceName: string): Promise<IReactronService | undefined>;
        get(moduleName: string, serviceName: string): IReactronService | undefined;
        getOptions(moduleName: string, serviceName: string): any;
        setOptions(moduleName: string, serviceName: string, options: any): Promise<void>;
        startAllServices(): Promise<ICommandResult>;
        stopAllServices(): Promise<ICommandResult>;
    }
}
declare module "IWebPageManager" {
    import { IWebPageOptions } from "IWebPageOptions";
    export interface IWebPageManager {
        getAll(): IWebPageOptions[];
        createOrUpdate(item: IWebPageOptions): IWebPageOptions;
        remove(id: string): void;
    }
}
declare module "IWebComponentsManager" {
    import { IWebComponentOptions } from "IWebComponentOptions";
    export interface IWebComponentsManager {
        getAll(): IWebComponentOptions[];
        createOrUpdate(item: IWebComponentOptions): IWebComponentOptions;
        remove(id: string): void;
    }
}
declare module "IModuleRepositoryItem" {
    export interface IModuleRepositoryItem {
        name: string;
        folder: string;
        path: string;
        description: string;
        version?: string;
        author?: string | {
            name?: string;
            email?: string;
        };
        repository?: string;
        browserFile?: string;
        serverFile?: string;
        isInstalled?: boolean;
        isBuilded?: boolean;
        hasUpdate?: boolean;
        canInstall?: boolean;
        canBuild?: boolean;
        canRemove?: boolean;
    }
}
declare module "IModuleRepository" {
    import { IModuleRepositoryItem } from "IModuleRepositoryItem";
    export interface IModuleRepository {
        add(module: IModuleRepositoryItem): void;
        remove(moduleName: string): void;
        get(moduleName: string): IModuleRepositoryItem | undefined;
        getAll(): IModuleRepositoryItem[];
    }
}
declare module "IInputComponentProps" {
    import { IFieldDefinition } from "IObjectDefinition";
    export interface IInputComponentProps {
        definition: IFieldDefinition;
        uniqueId: string;
        value: any;
        valueChange: (definition: IFieldDefinition, newValue: any) => void;
    }
}
declare module "IObjectDefinition" {
    import { IInputComponentProps } from "IInputComponentProps";
    type IOptionDefinitionValueType = 'object' | 'number' | 'boolean' | 'string' | 'style' | 'webComponent' | 'password';
    type IInput = {
        module: string;
        component: string;
    } | ((props: IInputComponentProps) => any) | (new (props: IInputComponentProps) => any);
    export interface IOptionDefinitionValue {
        value: any;
        text: string;
    }
    export interface IFieldDefinition extends IObjectDefinition {
        valueType: IOptionDefinitionValueType;
        defaultValue?: any;
        minValue?: number;
        maxValue?: number;
        stepSize?: number;
        values?: IOptionDefinitionValue[];
        isArray?: boolean;
        textRows?: number;
        inputControl?: IInput;
        inputForm?: IInput;
    }
    export interface IObjectDefinition {
        name: string;
        displayName: string;
        description?: string;
        fields?: IFieldDefinition[];
    }
}
declare module "IReactronServiceDefinition" {
    import { IObjectDefinition } from "IObjectDefinition";
    import { IReactronService } from "IReactronService";
    export interface IReactronServiceDefinition<TOptions = any> extends IObjectDefinition {
        service: new () => IReactronService<TOptions>;
    }
}
declare module "IServiceRepositoryItem" {
    import { IReactronService } from "IReactronService";
    import { IReactronServiceDefinition } from "IReactronServiceDefinition";
    export interface IServiceRepositoryItem extends IReactronServiceDefinition {
        moduleName: string;
        instance: IReactronService;
        state: 'starting' | 'running' | 'stopped' | 'error';
        log: string[];
    }
}
declare module "IServiceRepository" {
    import { IServiceRepositoryItem } from "IServiceRepositoryItem";
    export interface IServiceRepository {
        get(moduleName: string, serviceName: string): IServiceRepositoryItem | undefined;
        getAll(): IServiceRepositoryItem[];
    }
}
declare module "IBackendService" {
    import { IPubSub } from "IPubSub";
    import { IBackendServiceConfig } from "IBackendServiceConfig";
    import { IExpressApp } from "IExpressApp";
    import { IElectronApp } from "IElectronApp";
    import { ISettingsManager } from "ISettingsManager";
    import { IServiceManager } from "IServiceManager";
    import { IWebPageManager } from "IWebPageManager";
    import { IWebComponentsManager } from "IWebComponentsManager";
    import { IModuleRepository } from "IModuleRepository";
    import { IServiceRepository } from "IServiceRepository";
    export interface IBackendService {
        readonly config: IBackendServiceConfig;
        readonly topics: IPubSub;
        readonly moduleRepository: IModuleRepository;
        readonly serviceRepository: IServiceRepository;
        readonly electronApp: IElectronApp;
        readonly expressApp: IExpressApp;
        readonly serviceManager: IServiceManager;
        readonly webPageManager: IWebPageManager;
        readonly webComponentsManager: IWebComponentsManager;
        readonly settings: ISettingsManager;
        exit(): void;
        restart(): void;
        reset(): Promise<void>;
    }
}
declare module "IReactronComponentDefinition" {
    import { IObjectDefinition } from "IObjectDefinition";
    type ComponentType = 'content' | 'admin-input' | 'layout' | 'frame' | 'internal';
    export interface IReactronComponentDefinition<TOptions = any> extends IObjectDefinition {
        component: new (props: TOptions) => React.Component<TOptions>;
        type?: ComponentType;
    }
}
declare module "IComponentLoader" {
    import { IReactronComponentDefinition } from "IReactronComponentDefinition";
    export interface IComponentLoader {
        getModuleComponents(moduleName: string): Promise<IReactronComponentDefinition[] | undefined>;
        getAllComponents(): Promise<{
            [moduleName: string]: IReactronComponentDefinition[];
        }>;
    }
}
declare module "IReactronComponentContext" {
    import { SizeProp } from '@fortawesome/fontawesome-svg-core';
    import { IPubSub } from "IPubSub";
    import { IWebComponentOptions } from "IWebComponentOptions";
    import { IModuleContext } from "IModuleContext";
    import * as electron from 'electron';
    import { IComponentLoader } from "IComponentLoader";
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
}
declare module "IServerInfo" {
    export interface IServerInfo {
        hostname: string;
        ip: string;
        cpu: {
            count: number;
            speed: number;
        };
        memory: {
            free: number;
            total: number;
        };
        version: string;
    }
}
declare module "topicNames" {
    export const topicNames: {
        systemSettingsUpdated: "system-settings-updated";
        componentsUpdated: "components-updated";
        pagesUpdated: "pages-updated";
        refresh: "refresh";
    };
}
declare module "index" {
    export * from "ElectronStore";
    export * from "IBackendService";
    export * from "IBackendServiceConfig";
    export * from "ICommandResult";
    export * from "IComponentLoader";
    export * from "IElectronApp";
    export * from "IExpressApp";
    export * from "IInputComponentProps";
    export * from "IModuleContext";
    export * from "IModuleRepository";
    export * from "IModuleRepositoryItem";
    export * from "IObjectDefinition";
    export * from "IPubSub";
    export * from "IReactronComponentContext";
    export * from "IReactronComponentDefinition";
    export * from "IReactronService";
    export * from "IReactronServiceContext";
    export * from "IReactronServiceDefinition";
    export * from "IServerInfo";
    export * from "IServiceManager";
    export * from "IServiceRepository";
    export * from "IServiceRepositoryItem";
    export * from "ISettingsManager";
    export * from "ISystemSettings";
    export * from "IWebComponentOptions";
    export * from "IWebComponentsManager";
    export * from "IWebPageManager";
    export * from "IWebPageOptions";
    export * from "topicNames";
}
