import {
  Dir,
  readTextFile,
  writeFile,
  writeTextFile,
} from "@tauri-apps/api/fs";

export const accents = {
  cyan: "#44bbcc",
  orange: "#ee8844",
  emerald: "#22bb66",
};

export type Accents = "cyan" | "orange" | "emerald";

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
  accent: Accents;
  entries: Entry[];
}

// app data

let app: AppData = {
  accent: "emerald",
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
  ],
};

// app functions

// accent colour arrows
export const setAccent = (colour: Accents) => {
  app.accent = colour;
};
export const getAccent = () => {
  return app.accent;
};

// import and export data

export const exportData = async () =>
  // write  data to file to config dir
  await writeFile("journalv.data", JSON.stringify(app), { dir: Dir.Config });

export const importData = async () => {
  // read file from config dir
  let fileStr = await readTextFile("journalv.data", { dir: Dir.Config });
  // set data to read file
  app = JSON.parse(fileStr);
};

// CRUD interface high-order functions for the entries

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

export function deleteEntry(): void {}
