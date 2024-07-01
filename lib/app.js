"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = require("path");
const url_1 = require("url");
electron_1.app.on("window-all-closed", () => {
    electron_1.app.quit();
});
electron_1.app.on("ready", async () => {
    var window = new electron_1.BrowserWindow({
        width: 1100,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: (0, path_1.join)(__dirname, '/../public/icon-512x512.png'),
        show: false,
        minWidth: 1100,
        minHeight: 600
    });
    if (!(process.env['NODE_ENV'] || '').startsWith('dev')) {
        window.loadURL((0, url_1.format)({
            pathname: (0, path_1.join)(__dirname, `/../dist/browser/index.html`),
            protocol: "file:",
            slashes: true
        }));
        if ((process.env['DEV_TOOLS'] || '').startsWith('true')) {
            window.webContents.openDevTools();
        }
        else {
            window.setMenu(null);
        }
    }
    else {
        window.loadURL('http://localhost:4200');
        window.webContents.openDevTools();
    }
    window.once('ready-to-show', () => {
        window.show();
    });
});
