// preload with contextIsolation enabled
import { contextBridge } from "electron";
import fs from "graceful-fs";

contextBridge.exposeInMainWorld("backend", {
  // turn app data into json and write it to a file
  writeData: (appObject: any) => {
    fs.writeFileSync("./journalv.db", JSON.stringify(appObject));
  },

  // read a app data file into an object and return it
  readData: () => {
    let data = fs.readFileSync("./journalv.db");
    // return parsed data
    return JSON.parse(data.toString());
  }
});
