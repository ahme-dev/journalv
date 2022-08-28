<template>
  <div :class="[selected ? 'selected' : '', 'ListItem', type]">
    <h3>{{ text }}</h3>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    text: String,
    type: String,
    selected: Boolean,
  },
};
</script>

<style scoped>
h3 {
  background-color: transparent;
  font-size: 1rem;
}
.ListItem {
  border-left: solid 1rem var(--main);
}
.command {
  border-left: solid 1rem var(--accent);
}
.command:hover {
  background-color: var(--accent);
}
.file {
  border-left: solid 1rem var(--fg);
}
.file:hover {
  background-color: var(--fg);
}
</style>
