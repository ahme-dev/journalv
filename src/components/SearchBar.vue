<template>
  <div class="SearchBar">
    <button class="fa-solid fa-bars"></button>
    <input
      @input="store.searchFor(searchTerm)"
      v-model="searchTerm"
      placeholder="start typing"
      type="text"
    />
  </div>
</template>

<script setup>
import { useMainStore } from "@/store";
import { ref } from "vue";

const searchTerm = ref("");
const store = useMainStore();
</script>

<style scoped>
.SearchBar {
  display: grid;
  grid-template-columns: 1fr 9fr;
}
.SearchBar > * {
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
