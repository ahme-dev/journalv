import { contextBridge } from "electron";
import { filterData } from "./logic/data.js";

contextBridge.exposeInMainWorld("backend", {
  callFilterData: (args) => filterData(args),
});
