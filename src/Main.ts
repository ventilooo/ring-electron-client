import {BrowserWindow} from 'electron';
export default class Main {
    static mainWindow: Electron.BrowserWindow;
    static application: Electron.App;
    static BrowserWindow;
    static onWindowAllClosed() {
        if (process.platform !== 'darwin')
            Main.application.quit();
    }
    static onClose(){
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        Main.mainWindow = null;
    }
    static onReady(){
        // this is a dependency we will have to live with
        // because we can't create BrowserWindow until
        // onReady fires.
        Main.mainWindow = new Main.BrowserWindow({width: 800, height: 600,icon:'assets/ring-icon.png'})
        Main.mainWindow.loadURL('file://' + __dirname + '/index.html');
        Main.mainWindow.on('closed', Main.onClose);
    }
    static main(app: Electron.App,browserWindow: typeof BrowserWindow){
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed',Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    }
}
