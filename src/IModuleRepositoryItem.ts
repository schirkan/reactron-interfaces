export interface IModuleRepositoryItem {
    name: string;
    displayName: string;
    path: string;
    type: 'local' | 'git' | 'npm' | 'npm+git' | undefined;
    description: string;
    version?: string;
    author?: string | {
        name?: string,
        email?: string
    };
    repository?: string;
    browserFile?: string;
    serverFile?: string;
    hasUpdate?: boolean;
    updateVersion?: string;
    canRemove?: boolean;
}