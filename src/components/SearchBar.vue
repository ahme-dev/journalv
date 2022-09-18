<template>
  <div class="SearchBar">
    <button
      v-if="!props.isEditing"
      class="searchButton fa-solid fa-bars"
    ></button>
    <input
      v-if="!props.isEditing"
      class="searchField"
      @input="$emit('searching', searchTerm)"
      v-model="searchTerm"
      placeholder="start typing"
      type="text"
    />

    <button
      v-if="props.isEditing"
      class="searchButton fa-solid fa-chevron-left"
      @click="$emit('back')"
    ></button>
    <input
      v-if="props.isEditing"
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
  isEditing: Boolean,
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
