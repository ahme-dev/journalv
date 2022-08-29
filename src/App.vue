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
        { id: 1, title: "Went to this place", date: "18 Aug 2022" },
        { id: 2, title: "Performed achievement", date: "19 Sep 2022" },
        { id: 3, title: "Ate something", date: "28 Oct 2022" },
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

@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Tajawal&display=swap");

#app {
  font-family: Comfortaa, Tahoma, sans-serif;
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
