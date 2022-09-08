const fs = require("graceful-fs");

export function writeJournal(journalObject, journalPath = "./journalv.db") {
  fs.writeFile(journalPath, JSON.stringify(journalObject), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}

export function readJournal(journalPath = "./journalv.db") {
  fs.readFile(journalPath, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    return JSON.parse(data.toString());
  });
}
