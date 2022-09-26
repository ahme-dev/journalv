import { defineStore } from "pinia";
import { ref } from "vue";
import { addEntry, filterEntries, findEntry } from "./data";

export const useMainStore = defineStore("main", () => {
  // stores data currently in the entry editor
  const editorObj = ref({
    type: "day",
    title: "",
    date: "1 Oct 2022",
    content: "",
    tags: "",
  });

  // pushes what is in the editor into entries array
  const editorToEntry = () => {
    addEntry({
      type: editorObj.value.type,
      title: editorObj.value.title,
      date: editorObj.value.date,
      content: editorObj.value.content,
      tags: editorObj.value.tags.split(" "),
    });
  };

  // put the contents of an entry unto the editor
  const entryToEditor = (entryObj: object) => {
    let foundEntry = findEntry(entryObj);
    editorObj.value = foundEntry;
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
