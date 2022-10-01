<template>
  <div class="EntryBar">
    <button class="fa-solid fa-chevron-left" @click="clickedBack"></button>
    <input type="text" placeholder="you are editing" disabled />
  </div>
</template>

<script setup lang="ts">
  import { useMainStore } from "../store";

  const store = useMainStore();

  // when back button is pressed
  const clickedBack = () => {
    // put what's in the editor into an entry
    store.editorExport();
    // change ui to search
    store.setUiMode("search");
    // do an empty search to update entries
    store.searchFor("");
  };
</script>

<style scoped>
  .EntryBar {
    display: grid;
    grid-template-columns: 1fr 9fr;
  }
  .EntryBar > * {
    height: 100%;
    width: 100%;
  }
  input {
    font-size: 1.2rem;
    padding: 1rem 2rem;
    font-weight: bold;

    border-right: solid 1rem var(--accent);
    background-color: var(--main);
  }
  input:focus {
    outline: none;
  }
  button {
    cursor: pointer;
    font-size: 1.2rem;
    padding: 1rem;

    color: var(--bg);
    background-color: var(--accent);
  }
</style>
