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
  --fg: #eee;
  --main: #333;
  --accent: #fb5;
}

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  border: 0;
  transition: 0.2s;
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
}

.container * {
  background-color: var(--main);
}
</style>
