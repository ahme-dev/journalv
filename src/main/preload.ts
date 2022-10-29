// preload with contextIsolation enabled
import { contextBridge } from "electron";
import fs from "graceful-fs";

contextBridge.exposeInMainWorld("backend", {
  // turn data object representing a journal into json and write it to a file
  writeJournal: (journalObject: any) => {
    fs.writeFileSync("./journalv.db", JSON.stringify(journalObject));
  },

  // read a journal file into an object
  readJournal: () => {
    let data = fs.readFileSync("./journalv.db");
    // return parsed data
    return JSON.parse(data.toString());
  }
});
