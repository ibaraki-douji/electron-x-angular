import { app, BrowserWindow } from "electron";
import { join } from "path";
import { format } from "url";
import { ElectronService } from "./services/electron.service";

app.on("window-all-closed", () => {
    app.quit();
});

app.on("ready", async () => {
    initServices();

    var window = new BrowserWindow({
        width: 1100,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false
        },
        icon: join(__dirname, '/../public/icon-512x512.png'),
        show: false,
        minWidth: 1100,
        minHeight: 600
    });

    if (!(process.env['NODE_ENV']||'').startsWith('dev')) {
        window.loadURL(
            format({
              pathname: join(__dirname, `/../dist/browser/index.html`),
              protocol: "file:",
              slashes: true
            })
          );

        if ((process.env['DEV_TOOLS']||'').startsWith('true')) {
          window.webContents.openDevTools();
        } else {
          window.setMenu(null);
        }
    } else {
        window.loadURL('http://localhost:4200');
        window.webContents.openDevTools();
    }

    window.once('ready-to-show', () => {
        window.show();
    });
});

function initServices() {
    new ElectronService();
}