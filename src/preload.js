import { contextBridge } from "electron";
import { addData, filterData } from "./logic/data.js";

// what to expose on window.backend in renderer process
contextBridge.exposeInMainWorld("backend", {
  callFilterData: (args) => filterData(args),
  callAddData: (type, title) => addData(type, title),
});
