<template>
  <SearchList v-if="store.uiMode == 'search'"></SearchList>
  <AppMenu v-else-if="store.uiMode == 'menu'"></AppMenu>
  <EntryEditor v-else></EntryEditor>

  <MainBar></MainBar>
</template>

<script setup lang="ts">
  import EntryEditor from "./components/EntryEditor.vue";
  import SearchList from "./components/SearchList.vue";
  import MainBar from "./components/MainBar.vue";

  import { onMounted } from "vue";
  import { useMainStore } from "./store";
  import AppMenu from "./components/AppMenu.vue";

  const store = useMainStore();

  // on app load
  onMounted(() => {
    // import data from file
    store.importData();
    // first time search to show default result
    store.updateShownEntries("");
    // load selected accent colour
    store.loadAccent();
  });
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Tajawal&display=swap");

  :root {
    --bg: #222;
    --fg: #eee;
    --main: rgba(70, 70, 70, 0.5);
    /* will be modified by a function */
    --accent: "#ee8844";
  }

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    border: 0;
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
