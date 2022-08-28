<template>
  <div class="SearchBar">
    <input type="text" />
    <button></button>
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
  grid-template-columns: 8fr 1fr;
}
.SearchBar > * {
  height: 100%;
  width: 100%;
}
input {
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;

  border-left: solid 1rem var(--accent);
}
input:focus {
  outline: none;
}
button {
  cursor: pointer;

  background-color: var(--accent);
}
</style>
