<template>
  <div :class="[isSelected ? 'selected' : '', 'ListItem', type]">
    <h3>{{ title }}</h3>
    <h4>{{ date }}</h4>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    title: String,
    date: String,
    type: String,
    isSelected: Boolean,
  },
};
</script>

<style scoped>
h3,
h4 {
  background-color: transparent;
  font-size: 1rem;
}
.ListItem {
  display: flex;
  justify-content: space-between;

  border-left: solid 1rem var(--main);
}
.command {
  border-left: solid 1rem var(--accent);
}
.command:hover {
  background-color: var(--accent);
}
.day,
.dream {
  border-left: solid 1rem var(--fg);
}
.day:hover,
.dream:hover {
  background-color: var(--fg);
}
</style>
