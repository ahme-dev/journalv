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

  const closeEditor = () => {
    // update the entry in data.ts
    updateEntry(editorObj.value);
    // update shownEntries using empty search
    searchInEntries("");
    // switch ui
    uiMode.value = "search";
  };

  const openEditor = (entryObj: Entry) => {
    // read entry from data.ts
    let foundEntry = readEntry((entry) => entry.id == entryObj.id);
    // set editor to read entry data.ts
    editorObj.value = foundEntry[0];
    // switch ui
    uiMode.value = "edit";
  };

  const openEditorNew = (type: string) => {
    // create a new entry
    let newEntry = { id: 1, title: "", type: type };
    createEntry(newEntry);
    // set editor to new entry data
    editorObj.value = newEntry;
    // switch ui
    uiMode.value = "edit";
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
    openEditorNew,

    shownEntries,
    searchInEntries,

    uiMode,
    setUiMode,
  };
});
