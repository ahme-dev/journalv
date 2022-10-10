import moment from "moment";
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
  // holds the results of a search (rendered)
  const uiMode = ref<"search" | "edit">("search");

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

  const openEditor = (id: number) => {
    // read entry from data.ts and set editor to it
    editorObj.value = readEntry((entry) => entry.id == id)[0];
    // switch ui
    uiMode.value = "edit";
  };

  const openEditorNew = (type: string) => {
    // set date to today
    let date = moment().format("D MMM YYYY");

    // see if today has an entry
    let foundEntry = readEntry(
      (entry) => entry.type == type && entry.date == date
    );

    // if entry exists only open it
    if (foundEntry[0] !== undefined) openEditor(foundEntry[0].id);
    // otherwise create a new entry and open it
    else openEditor(createEntry(type, date));
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

  return {
    uiMode,

    editorObj,
    closeEditor,
    openEditor,
    openEditorNew,

    shownEntries,
    searchInEntries,
  };
});
