import { contextBridge } from "electron";
import { filterData } from "./logic/data.js";

// what to expose on window.backend in renderer process
contextBridge.exposeInMainWorld("backend", {
  callFilterData: (args) => filterData(args),
});
