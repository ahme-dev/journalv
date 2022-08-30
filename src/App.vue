<template>
  <SearchList :data="days"></SearchList>
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
      days: [
        {
          id: 1,
          type: "command",
          title: "Delete Day",
        },
        {
          id: 2,
          type: "day",
          title: "Performed ",
          tags: ["happy", "excited"],
          date: "19 Sep 2022",
        },
        {
          id: 3,
          type: "dream",
          title: "Ate something",
          tags: ["happy", "satisfied"],
          date: "28 Oct 2022",
        },
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
