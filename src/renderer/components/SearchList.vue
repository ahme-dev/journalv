<template>
  <div class="SearchList">
    <SearchItem v-for="entry in store.currentEntries" :="entry"></SearchItem>
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
  }
</style>
