<template>
  <div class="SearchBar">
    <button
      v-if="props.uiMode == 'search'"
      class="searchButton fa-solid fa-bars"
    ></button>
    <input
      v-if="props.uiMode == 'search'"
      class="searchField"
      @input="$emit('searchFor', searchTerm)"
      v-model="searchTerm"
      placeholder="start typing"
      type="text"
    />

    <button
      v-if="props.uiMode == 'edit'"
      class="searchButton fa-solid fa-chevron-left"
      @click="$emit('exitEditMode')"
    ></button>
    <input
      v-if="props.uiMode == 'edit'"
      type="text"
      placeholder="you are editing"
      disabled
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const searchTerm = ref("");
const props = defineProps({
  uiMode: String,
});
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
.searchButton {
  cursor: pointer;
  font-size: 1.2rem;
  padding: 1rem;

  color: var(--bg);
  background-color: var(--accent);
}
</style>
