<template>
  <div class="SearchList">
    <SearchItem v-for="entry in store.shownEntries" :="entry"></SearchItem>
  </div>
</template>

<script setup lang="ts">
  import SearchItem from "./SearchItem.vue";

  import { useMainStore } from "../store";
  const store = useMainStore();
</script>

<style scoped>
  .SearchList {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;

    padding: 3rem;
    gap: 1rem;

    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;

    overflow-y: scroll;
  }
  .SearchList::-webkit-scrollbar {
    background-color: var(--main);
    border-top-right-radius: 1rem;
    overflow: hidden;
  }
  .SearchList::-webkit-scrollbar-thumb {
    background-color: var(--accent);
    border-top-right-radius: 1rem;
  }
</style>
