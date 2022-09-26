// dummy data to use temporarily
const dummyData = [
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

// data to display when search comes up with nothing
const startData = [
  {
    display: 1,
    type: "command",
    title: "Nothing to show here!",
  },
];

let runningData = dummyData;

// filter all journal data using search keywords
export function filterEntries(searchKeys: string): any {
  // clean and split search keys
  const keys: string[] = searchKeys.toString().toLowerCase().trim().split(" ");

  // filter the data by entries
  const newData = runningData.filter((listEntry) => {
    // clean entry and turn into string
    const entryAsString = JSON.stringify(listEntry).toLowerCase().trim();

    // search each keyword
    // if it fails to include all keys don't return true
    for (const key of keys) {
      if (!entryAsString.includes(key)) return false;
    }

    return true;
  });

  // if result was empty
  if (newData.toString() == "") return startData;

  return newData;
}

export function addEntry(entryObj: any): void {
  // filter out any value that is similar to entry that's being added
  const newData = runningData.filter((entry) => {
    if (entry.type !== entryObj.type) {
      return true;
    }
    if (entry.date !== entryObj.date) {
      return true;
    }

    return false;
  });

  // use the filtered array
  runningData = newData;

  // add the entry
  runningData.push(entryObj);
}

// find the wanted entry and return it
export function findEntry(entryObj: any): any {
  return runningData.find(
    (entry) => entry.date == entryObj.date && entry.type == entryObj.type
  );
}