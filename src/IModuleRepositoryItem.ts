export interface IModuleRepositoryItem {
    name: string;
    displayName: string;
    path: string;
    description: string;
    version?: string;
    author?: string | { name?: string, email?: string };
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