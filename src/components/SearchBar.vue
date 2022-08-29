<template>
  <div class="SearchBar">
    <button class="searchButton fa-solid fa-bars"></button>
    <input
      class="searchField"
      @input="$emit('searching', searchTerm)"
      v-model="searchTerm"
      placeholder="start typing"
      type="text"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchTerm: "",
    };
  },
};
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
.searchField {
  font-size: 1.2rem;
  padding: 1rem 2rem;
  font-weight: bold;

  border-right: solid 1rem var(--accent);
  background-color: var(--main);
}
.searchField:focus {
  outline: none;
}
.searchButton {
  cursor: pointer;
  font-size: 1.2rem;

  color: var(--bg);
  background-color: var(--accent);
}
</style>
