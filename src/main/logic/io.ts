import fs from "graceful-fs";

// turn data object representing a journal into json and write it to a file
export function writeJournal(
  journalObject: object,
  journalPath = "./journalv.db"
) {
  fs.writeFileSync(journalPath, JSON.stringify(journalObject));
}

// read a journal file into an object
export function readJournal(journalPath = "./journalv.db") {
  let data = fs.readFileSync(journalPath);
  // return parsed data
  return JSON.parse(data.toString());
}
