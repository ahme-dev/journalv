import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("main", () => {
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

  return { currentEntries, searchFor, uiMode, setUiMode };
});
