// eslint-disable-next-line no-unused-vars
import { readJournal, writeJournal } from "./io";

// dummy data to use temporarily
const dummyData = [
  {
    type: "command",
    title: "Delete Day",
  },
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
export function filterData(searchKeys) {
  // clean and split search keys
  const keys = searchKeys.toString().toLowerCase().trim().split(" ");

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

export function addData(type, title) {
  runningData.push({ type: type, title: title });
}
