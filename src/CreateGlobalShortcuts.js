const { globalShortcut } = require("electron");

function CreateGlobalShortcuts(win) {
  function minimizeWin() {
    if (win.isFocused() == true) {
      win.minimize();
    } else {
      win.focus();
    }
  }

  function openDevTools() {
    win.webContents.toggleDevTools();
  }

  function closeWin() {
    win.close();
  }

  globalShortcut.register("Ctrl+1", minimizeWin);
  globalShortcut.register("Ctrl+2", openDevTools);
  globalShortcut.register("Ctrl+0", closeWin);
}

module.exports = CreateGlobalShortcuts;
