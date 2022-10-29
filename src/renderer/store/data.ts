// type for entries
export interface Entry {
  type: "day" | "dream";
  title: string;
  content: string;
  tags: string[];
  date: string;
  id: number;
}

// type for app data
export interface AppData {
  theme: string,
  entries: Entry[],
}

// APP data

let app: AppData = {
  theme: 'orange',
  // temp dummy entries
  entries: [
    {
      type: "day",
      title: "Performed the play",
      tags: ["scared", "proud"],
      content: "",
      date: "19 Sep 2022",
      id: 221,
    },
    {
      type: "day",
      title: "Was congratulated for my acting",
      tags: ["happy", "proud"],
      date: "20 Sep 2022",
      content: "",
      id: 222,
    },
    {
      type: "dream",
      title: "Dreamt of climbing a mountain",
      tags: ["scared", "excited"],
      content: "",
      date: "28 Oct 2022",
      id: 223,
    },
  ]
}

// DATA functions

// call preload function
// to export data to file
export const exportData = () => {
  window.backend.writeJournal(app.entries);
}

// call preload function
// to import data from file
export const importData = () => {
  app.entries = window.backend.readJournal()
}

// CRUD interface high-order functions for the data

export function createEntry(type: "day" | "dream", date: string): number {
  // create an entry type from parameters
  let newEntry: Entry = {
    id: app.entries[app.entries.length - 1].id + 1,
    title: "",
    content: "",
    type: type,
    date: date,
    tags: [""],
  };

  // add entry to data list
  app.entries.push(newEntry);

  // return the id of the created entry
  return newEntry.id;
}

export function readEntry(filterFunc: (entry: Entry) => boolean): Entry[] {
  return app.entries.filter(filterFunc);
}

export function updateEntry(
  id: number,
  newTitle: string,
  newContent: string,
  newTags: string[]
): void {
  app.entries.map((element) => {
    if (element.id === id) {
      element.title = newTitle;
      element.content = newContent;
      element.tags = newTags;
    }
  });
}

export function deleteEntry(): void { }
