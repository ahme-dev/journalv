<template>
  <div class="container">
    <h1>Hello</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
:root {
  --bg: #222;
  --fg: #eee;
}

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  font-family: inherit;
  color: inherit;
  background-color: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--bg);
  color: var(--fg);

  border: solid 2px red;
}

.container {
  padding: 1rem;

  border: solid 2px blue;
}
</style>
