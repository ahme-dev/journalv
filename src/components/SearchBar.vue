<template>
  <div class="SearchBar">
    <button></button>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
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
input {
  font-size: 1.5rem;
  padding: 1rem 2rem;
  font-weight: bold;

  border-right: solid 1rem var(--accent);
}
input:focus {
  outline: none;
}
button {
  cursor: pointer;

  background-color: var(--accent);
}
</style>
