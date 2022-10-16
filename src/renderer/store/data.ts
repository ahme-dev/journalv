// type for entries
export interface Entry {
  type: "day" | "dream" | "command";
  title: string;
  content: string;
  tags: string[];
  date: string;
  id: number;
}

let data: Entry[] = [
  // commands
  {
    type: "command",
    title: "New Day",
    tags: [""],
    content: "",
    date: "",
    id: 991,
  },
  {
    type: "command",
    title: "New Dream",
    tags: [""],
    content: "",
    date: "",
    id: 992,
  },
  // dummy data
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
];

// CRUD interface high-order functions for the data

export function createEntry(type: "day" | "dream", date: string): number {
  // create an entry type from parameters
  let newEntry: Entry = {
    id: data[data.length - 1].id + 1,
    title: "",
    content: "",
    type: type,
    date: date,
    tags: [""],
  };

  // add entry to data list
  data.push(newEntry);

  // return the id of the created entry
  return newEntry.id;
}

export function readEntry(filterFunc: (entry: Entry) => boolean): Entry[] {
  return data.filter(filterFunc);
}

export function updateEntry(
  id: number,
  newTitle: string,
  newContent: string,
  newTags: string[]
): void {
  data.map((element) => {
    if (element.id === id) {
      element.title = newTitle;
      element.content = newContent;
      element.tags = newTags;
    }
  });
}

export function deleteEntry(): void { }
