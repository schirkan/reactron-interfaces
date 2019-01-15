import * as electron from 'electron';
export interface IElectronApp {
    mainWindow: electron.BrowserWindow;
    start(): Promise<void>;
}
