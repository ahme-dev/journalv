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
    date: "1 Oct 2022",
    content: "",
    tags: [""],
  });

  // pushes what is in the editor into data
  const editorExport = () => {
    updateEntry((entry) => {
      // search for entry existing
      if (
        entry.type == editorObj.value.type &&
        entry.date == editorObj.value.date
      ) {
        // if an entry with same type and date was found set its values to editor
        entry = editorObj.value;
      }
    });
  };

  // put the contents of an entry unto the editor
  const editorImport = (entryObj: Entry) => {
    let foundEntry = readEntry(
      (entry) => entry.date == entryObj.date && entry.type == entryObj.type
    );
    editorObj.value = foundEntry[0];
  };

  // holds the entries filtered based on search
  const currentEntries = ref<Entry[]>();

  // filter data using search keywords and add into result
  const searchFor = (searchTerms: string) => {
    // clean and split search keys
    const keys: string[] = searchTerms
      .toString()
      .toLowerCase()
      .trim()
      .split(" ");

    // filter the data by entries
    currentEntries.value = readEntry((listEntry) => {
      // clean entry and turn into string
      const entryAsString = JSON.stringify(listEntry).toLowerCase().trim();

      // search each keyword
      // if it fails to include all keys don't return true
      for (const key of keys) {
        if (!entryAsString.includes(key)) return false;
      }

      return true;
    });
  };

  // holds the results of a search (rendered)
  const uiMode = ref("search");
  // setter for ui mode
  const setUiMode = (mode: string) => {
    uiMode.value = mode;
  };

  return {
    editorObj,
    editorExport,
    editorImport,

    currentEntries,
    searchFor,

    uiMode,
    setUiMode,
  };
});
