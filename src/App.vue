<template>
  <SearchList :data="searchData"></SearchList>
  <SearchBar @searching="searching"></SearchBar>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import SearchList from "./components/SearchList.vue";

export default {
  name: "App",
  components: { SearchBar, SearchList },
  data() {
    return {
      // holds the results of a search (rendered)
      searchData: [],
    };
  },
  mounted() {
    // first time search to show default result
    this.searching("");
  },
  methods: {
    // filter data using search keywords and add into result
    searching(searchTerm) {
      this.searchData = window.backend.callFilterData(searchTerm);
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
}

html,
body,
#app {
  height: 100%;
}

@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Tajawal&display=swap");

#app {
  font-family: Comfortaa, Tahoma, sans-serif;

  max-width: 900px;
  margin: auto;

  display: grid;
  grid-template-rows: 9fr 1fr;
  gap: 1rem;
  padding: 2rem;

  background-color: var(--bg);
  color: var(--fg);
}

#app > * {
  background-color: var(--main);
}
</style>
