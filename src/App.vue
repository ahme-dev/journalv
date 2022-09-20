<template>
  <EntryEditor v-if="uiMode == 'edit'"></EntryEditor>
  <EntryBar v-if="uiMode == 'edit'" @exitEditMode="exitEditMode"></EntryBar>

  <SearchList
    v-if="uiMode == 'search'"
    :currentEntries="currentEntries"
  ></SearchList>
  <SearchBar
    v-if="uiMode == 'search'"
    @exitEditMode="exitEditMode"
    @searchFor="searchFor"
  ></SearchBar>
</template>

<script setup>
import EntryEditor from "./components/EntryEditor.vue";
import EntryBar from "./components/EntryBar.vue";
import SearchBar from "./components/SearchBar.vue";
import SearchList from "./components/SearchList.vue";

import { ref, onMounted } from "vue";

// holds the results of a search (rendered)
const currentEntries = ref([]);
const uiMode = ref("edit");

const searchFor = (searchTerm) => {
  // filter data using search keywords and add into result
  currentEntries.value = window.backend.callFilterData(searchTerm);
};
const exitEditMode = () => {
  uiMode.value = "search";
};

onMounted(() => {
  // first time search to show default result
  searchFor("");
});
</script>

<style>
:root {
  --bg: #222;
  --fg: #eee;
  --main: rgba(70, 70, 70, 0.5);
  --accent: rgb(56, 177, 141);
}

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  border: 0;
  transition: 0.2s;
  box-sizing: border-box;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
}

*::selection {
  background-color: var(--fg);
  color: var(--accent);
  padding: 1rem;
}

input,
img,
textarea,
input {
  border: 0;
}

textarea:focus,
input:focus {
  outline: none;
}

html,
body,
#app {
  height: 100%;
}

@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Tajawal&display=swap");

#app {
  font-family: Comfortaa, Tahoma, sans-serif;

  max-width: 900px;
  margin: auto;

  display: grid;
  grid-template-rows: 9fr 1fr;
  gap: 1rem;
  padding: 2rem;

  background-color: var(--bg);
  color: var(--fg);
}

#app > * {
  background-color: var(--main);
}
</style>
