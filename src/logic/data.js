var fs = require("graceful-fs");

fs.writeFile("./hello.txt", "saying hi", (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

fs.readFile("./hello.txt", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});

fs.rm("./hello.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

const startData = [
  {
    display: 1,
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

export function filterData(searchKeys) {
  // if no search was entered deny filtering
  if (searchKeys === "") return startData;

  // counter to number entry display order
  let counter = 0;

  // clean and split search keys
  const keys = searchKeys.toString().toLowerCase().trim().split(" ");

  // filter the data by entries
  const newData = dummyData.filter((listEntry) => {
    // clean entry and turn into string
    const entryAsString = JSON.stringify(listEntry).toLowerCase().trim();

    // search each keyword
    // if it fails to include all keys don't return true
    for (const key of keys) {
      if (!entryAsString.includes(key)) return false;
    }

    // add number and filter entry in
    listEntry.display = ++counter;
    return true;
  });

  // if result was empty
  if (newData.toString() == "") return startData;

  return newData;
}
