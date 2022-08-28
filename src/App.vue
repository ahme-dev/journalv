<template>
  <div class="container">
    <SearchList :data="days"></SearchList>
    <SearchBar @searching="searching"></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import SearchList from "./components/SearchList.vue";

export default {
  name: "App",
  components: { SearchBar, SearchList },
  data() {
    return {
      days: [
        { id: 1, text: "hello", num: "18aug" },
        { id: 2, text: "hello", num: "19aug" },
        { id: 3, text: "hello", num: "28aug" },
      ],
    };
  },
  methods: {
    searching(searchTerm) {
      console.log(searchTerm);
    },
  },
};
</script>

<style>
:root {
  --bg: #222;
  --fg: #eee;
  --main: rgba(70, 70, 70, 0.5);
  --accent: #e95;
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
