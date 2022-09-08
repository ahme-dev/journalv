const fs = require("graceful-fs");

// turn data object representing a journal into json and write it to a file
export function writeJournal(journalObject, journalPath = "./journalv.db") {
  fs.writeFile(journalPath, JSON.stringify(journalObject), (err) => {
    // error handling guard
    if (err) {
      console.error(err);
      return;
    }
  });
}

// read a journal file into an object
export function readJournal(journalPath = "./journalv.db") {
  fs.readFile(journalPath, (err, data) => {
    // error handling guard
    if (err) {
      console.error(err);
      return;
    }
    // return parsed data
    return JSON.parse(data.toString());
  });
}
