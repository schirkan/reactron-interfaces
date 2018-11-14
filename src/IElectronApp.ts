export interface IElectronApp {
    mainWindow: Electron.BrowserWindow;
    start(): Promise<void>;
}