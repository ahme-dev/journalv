const startData = [
  {
    id: "a001",
    type: "command",
    title: "Nothing to show here!",
  },
];

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

export function filterData(searchPhrase) {
  let counter = 0;
  const newData = dummyData.filter((entry) => {
    // if no search phrase was entered deny filtering
    if (searchPhrase === "") return false;

    // search in title
    if (entry["title"].toLowerCase().includes(searchPhrase.toLowerCase())) {
      entry.display = ++counter;
      return true;
    }

    // if type isn't a command
    if (entry["type"] !== "command") {
      // search in date
      if (entry["date"].toLowerCase().includes(searchPhrase.toLowerCase())) {
        entry.display = ++counter;
        return true;
      }

      // search in tags
      for (let tag of entry["tags"]) {
        if (tag.toLowerCase().includes(searchPhrase.toLowerCase())) {
          entry.display = ++counter;
          return true;
        }
      }
    }

    // search in type
    if (entry["type"].toLowerCase().includes(searchPhrase.toLowerCase())) {
      entry.display = ++counter;
      return true;
    }
  });

  // if result was empty
  if (newData.toString() == "") return startData;

  return newData;
}
