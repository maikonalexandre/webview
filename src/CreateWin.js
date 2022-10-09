const { BrowserWindow } = require("electron");
const { resolve } = require("path");
const iconPath = resolve(__dirname, ".", "assets", "icone.ico");

const createWindow = () => {
  var win = new BrowserWindow({
    width: 450,
    height: 600,
    resizable: true,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    maximizable: false,
    icon: iconPath,
  });

  win.loadURL("http://localhost:3000");

  return win;
};

module.exports = createWindow();
