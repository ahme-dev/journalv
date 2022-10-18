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
  const uiMode = ref<"search" | "edit" | "menu">("search");

  // stores data currently in the entry editor
  const editorObj = ref({
    type: "day",
    title: "",
    date: "",
    content: "",
    tags: "",
    id: 1,
  });

  const closeEditor = () => {
    // update the entry in data.ts
    let { id, title, content, tags } = editorObj.value;
    updateEntry(id, title, content, tags.split(" "));

    // update shownEntries using empty search
    updateShownEntries("");
    // switch ui
    uiMode.value = "search";
  };

  const openEditor = (order: number) => {
    // read entry from data.ts
    let foundEntry = shownEntries.value[order];

    // set editor to entry
    editorObj.value = { ...foundEntry, tags: foundEntry.tags.join(" ") };

    // switch ui
    uiMode.value = "edit";
  };
  // holds the entries filtered based on search
  const shownEntries = ref<Entry[]>();

  // filter all entries using search words and change shown ones
  const updateShownEntries = (searchWords: string) => {
    // clean and split search words
    const wordsCleaned: string[] = searchWords
      .toString()
      .toLowerCase()
      .trim()
      .split(" ");

    // filter the data by entries
    const filteredEntries = readEntry((entry) => {
      // go through each word and see if it matches entry prop
      for (const word of wordsCleaned) {
        switch (word[0]) {
          // check for type of entry
          case ':':
            if (!entry.type.toLowerCase().includes(word.slice(1))) return false
            break;
          // check for tags of entry
          case '#':
            if (!entry.tags.toString().toLowerCase().includes(word.slice(1))) return false
            break;
          // check for date of entry
          case '>':
            if (!entry.date.toLowerCase().includes(word.slice(1))) return false
            break;
          // check entry title
          default:
            if (!entry.title.toLowerCase().includes(word.slice(1))) return false
            break;
        }
      }

      // if all words passed against the props
      // then return the entry
      return true;
    });

    // change shown entries to the newly filtered ones
    shownEntries.value = filteredEntries;
  };

  // specific to commands

  const openEditorNew = (type: "day" | "dream") => {
    // set date to today
    let date = moment().format("D MMM YYYY");

    // see if today has an entry
    let foundEntry = readEntry(
      (entry) => entry.type === type && entry.date === date
    );

    (foundEntry[0]) ?
      // if entry exists only open it
      openEditor(foundEntry[0].id) :
      // otherwise create a new entry and open it
      openEditor(createEntry(type, date));
  };

  return {
    uiMode,

    editorObj,
    closeEditor,
    openEditor,
    openEditorNew,

    shownEntries,
    updateShownEntries,
  };
});
