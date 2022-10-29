export const themes = {
  cyan: '#44bbcc',
  orange: '#ee8844',
  emerald: '#22bb66',
}

export type Themes = 'cyan' | 'orange' | 'emerald';

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
  theme: Themes,
  entries: Entry[],
}

// app data

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

// app functions

// theme arrows
export const setTheme = (colour: Themes) => {
  app.theme = colour;
  console.log("theme changed to", app.theme)
}
export const getTheme = () => {
  console.log("theme gotten", app.theme)
  return app.theme;
}

// call preload function
// to export data to file
export const exportData = () => {
  window.backend.writeData(app);
}

// call preload function
// to import data from file
export const importData = () => {
  app = window.backend.readData()
}

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

export function deleteEntry(): void { }
