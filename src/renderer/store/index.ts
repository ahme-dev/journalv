import { defineStore } from "pinia";
import { ref } from "vue";
import { addEntry, filterEntries, findEntry } from "./data";

export const useMainStore = defineStore("main", () => {
  // stores data currently in the entry editor
  let editorObj = ref({
    type: "day",
    title: "",
    date: "",
    content: "",
    tags: "",
  });

  // pushes what is in the editor into entries array
  const editorToEntry = (windowObj: any) => {
    addEntry(editorObj);
  };

  // put the contents of an entry unto the editor
  const entryToEditor = (entryObj: object) => {
    let foundEntry = findEntry(entryObj);
    editorObj = foundEntry;
  };

  // holds the entries filtered based on search
  const currentEntries = ref([
    { display: 0, date: "", title: "", tags: [""], type: "" },
  ]);

  // filter data using search keywords and add into result
  const searchFor = (searchTerm: string) => {
    currentEntries.value = filterEntries(searchTerm);
  };

  // holds the results of a search (rendered)
  const uiMode = ref("edit");
  // setter for ui mode
  const setUiMode = (mode: string) => {
    uiMode.value = mode;
  };

  return {
    editorObj,
    editorToEntry,
    entryToEditor,

    currentEntries,
    searchFor,

    uiMode,
    setUiMode,
  };
});
