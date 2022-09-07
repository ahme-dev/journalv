const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("background", {
  working: true,
});
