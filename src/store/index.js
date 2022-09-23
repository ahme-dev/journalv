import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("main", () => {
  // stores data currently in the entry editor
  const editorValues = ref({
    title: "",
    content: "",
    tags: "",
  });

  const editorToEntry = () => {
    window.backend.callAddData("day", editorValues.value.title);
  };

  // holds the entries filtered based on search
  const currentEntries = ref([]);
  // filter data using search keywords and add into result
  const searchFor = (searchTerm) => {
    currentEntries.value = window.backend.callFilterData(searchTerm);
  };

  // holds the results of a search (rendered)
  const uiMode = ref("edit");
  // setter for ui mode
  const setUiMode = (mode) => {
    uiMode.value = mode;
  };

  return {
    editorValues,
    editorToEntry,
    currentEntries,
    searchFor,
    uiMode,
    setUiMode,
  };
});
