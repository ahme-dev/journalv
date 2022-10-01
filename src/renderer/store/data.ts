// type for entries
export interface Entry {
  type: string;
  title: string;
  content?: string;
  tags?: string[];
  date?: string;
}

// dummy data to use temporarily
let data: Entry[] = [
  {
    type: "day",
    title: "Performed the play",
    tags: ["scared", "proud"],
    date: "19 Sep 2022",
  },
  {
    type: "day",
    title: "Was congratulated for my acting",
    tags: ["happy", "proud"],
    date: "20 Sep 2022",
  },
  {
    type: "dream",
    title: "Dreamt of climbing a mountain",
    tags: ["scared", "excited"],
    date: "28 Oct 2022",
  },
];

// CRUD interface high-order functions for the data

export function createEntry(entry: Entry): void {
  data.push(entry);
}

export function readEntry(
  filteringFunction: (entry: Entry) => boolean
): Entry[] {
  return data.filter(filteringFunction);
}

export function updateEntry(finderFunction: (entry: Entry) => void): void {
  data.map(finderFunction);
}

export function deleteEntry(finderFunction: () => {}): void {}
