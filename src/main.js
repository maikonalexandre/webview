const { app } = require("electron");
const CreateGlobalShortcuts = require("./CreateGlobalShortcuts");

const App = () => {
  const win = require("./CreateWin");

  CreateGlobalShortcuts(win);
};

app.whenReady().then(App);
