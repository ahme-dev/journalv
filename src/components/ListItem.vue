<template>
  <div :class="[{ selected: isSelected }, 'ListItem', type]">
    <div class="itemLeft">
      <span v-if="type == 'day'" class="itemIcon fa-solid fa-sun"></span>
      <span v-if="type == 'dream'" class="itemIcon fa-solid fa-moon"></span>
      <span v-if="type == 'command'" class="itemIcon fa-solid fa-star"></span>
      <h3 class="itemTitle">{{ title }}</h3>
    </div>
    <div class="itemRight">
      <h4 class="itemDate" v-if="date !== ''">{{ date }}</h4>
    </div>
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
.ListItem {
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  background-color: var(--main);
}
.selected,
.ListItem:hover {
  background-color: var(--accent);
  color: var(--bg);
  cursor: pointer;
}
.itemLeft,
.itemRight {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.itemTitle,
.itemIcon,
.itemDate {
  font-size: 1rem;
  padding: 1rem;
}
.itemIcon {
  background-color: var(--accent);
}
</style>
