import { defineStore } from "pinia";
import { ref } from "vue";
import {
  Entry,
  createEntry,
  readEntry,
  updateEntry,
  deleteEntry,
} from "./data";

export const useMainStore = defineStore("main", () => {
  // stores data currently in the entry editor
  const editorObj = ref<Entry>({
    type: "day",
    title: "",
    date: "2 Oct 2022",
    content: "",
    tags: [""],
    id: 1,
  });

  // pushes what is in the editor into data
  const closeEditor = () => {
    updateEntry(editorObj.value);
    uiMode.value = "search";
    searchInEntries("");
  };
  // put the contents of an entry unto the editor
  const openEditor = (entryObj: Entry) => {
    uiMode.value = "edit";
    let foundEntry = readEntry((entry) => entry.id == entryObj.id);
    editorObj.value = foundEntry[0];
  };

  // holds the entries filtered based on search
  const shownEntries = ref<Entry[]>();

  // filter all entries using search words and change shown ones
  const searchInEntries = (searchWords: string) => {
    // clean and split search words
    const wordsCleaned: string[] = searchWords
      .toString()
      .toLowerCase()
      .trim()
      .split(" ");

    // filter the data by entries
    const filteredEntries = readEntry((entry) => {
      // make entry into a string and clean
      let entryStr = JSON.stringify(entry).toLowerCase().trim();
      // go through each word and see if entry string has them
      for (const word of wordsCleaned) {
        if (!entryStr.includes(word)) return false;
      }
      return true;
    });

    // change shown entries to the newly filtered ones
    shownEntries.value = filteredEntries;
  };

  // holds the results of a search (rendered)
  const uiMode = ref("edit");
  // setter for ui mode
  const setUiMode = (mode: string) => {
    uiMode.value = mode;
  };

  return {
    editorObj,
    closeEditor,
    openEditor,

    shownEntries,
    searchInEntries,

    uiMode,
    setUiMode,
  };
});
