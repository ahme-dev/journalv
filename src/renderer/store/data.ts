// type for entries
export interface Entry {
  type: string;
  title: string;
  content?: string;
  tags?: string[];
  date?: string;
  id: number;
}

// dummy data to use temporarily
let data: Entry[] = [
  {
    type: "day",
    title: "Performed the play",
    tags: ["scared", "proud"],
    date: "19 Sep 2022",
    id: 221,
  },
  {
    type: "day",
    title: "Was congratulated for my acting",
    tags: ["happy", "proud"],
    date: "20 Sep 2022",
    id: 222,
  },
  {
    type: "dream",
    title: "Dreamt of climbing a mountain",
    tags: ["scared", "excited"],
    date: "28 Oct 2022",
    id: 223,
  },
];

// CRUD interface high-order functions for the data

export function createEntry(type: string, date: string): number {
  // create an entry type from parameters
  let newEntry: Entry = {
    id: data[data.length - 1].id + 1,
    title: "",
    content: "",
    type: type,
    date: date,
  };

  // add entry to data list
  data.push(newEntry);

  // return the id of the created entry
  return newEntry.id;
}

export function readEntry(filterFunc: (entry: Entry) => boolean): Entry[] {
  return data.filter(filterFunc);
}

export function updateEntry(entry: Entry): void {
  data.map((element) => {
    if (element.id == entry.id) element = entry;
  });
}

export function deleteEntry(): void {}
