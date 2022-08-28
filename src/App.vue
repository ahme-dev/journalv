<template>
  <div class="container">
    <SearchList></SearchList>
    <SearchBar></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import SearchList from "./components/SearchList.vue";

export default {
  name: "App",
  components: { SearchBar, SearchList },
};
</script>

<style>
:root {
  --bg: #222;
  --bg1: #333;
  --fg: #eee;
}

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  border: 0;
  transition: 0.1s;
  box-sizing: border-box;
  font-family: inherit;
  color: inherit;
  background-color: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;

  background-color: var(--bg);
  color: var(--fg);
}

.container {
  widows: 100%;
  height: 100%;

  max-width: 900px;
  margin: auto;

  display: grid;
  grid-template-rows: 9fr 1fr;
  gap: 1rem;
  padding: 2rem;

  border: solid 2px blue;
}

.container > * {
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;

  background-color: var(--bg1);
}
</style>
