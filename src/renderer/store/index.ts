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
    searchFor("");
  };
  // put the contents of an entry unto the editor
  const openEditor = (entryObj: Entry) => {
    uiMode.value = "edit";
    let foundEntry = readEntry((entry) => entry.id == entryObj.id);
    editorObj.value = foundEntry[0];
  };

  // holds the entries filtered based on search
  const shownEntries = ref<Entry[]>();

  // filter data using search keywords and add into result
  const searchFor = (searchTerms: string) => {
    // clean and split search keys
    const keys: string[] = searchTerms
      .toString()
      .toLowerCase()
      .trim()
      .split(" ");

    // filter the data by entries
    const filteredEntries = readEntry((listEntry) => {
      for (const key of keys) {
        if (!JSON.stringify(listEntry).toLowerCase().trim().includes(key))
          return false;
      }
      return true;
    });

    // change entries to the filtered ones
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
    searchFor,

    uiMode,
    setUiMode,
  };
});
