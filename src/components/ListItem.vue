<template>
  <div :class="[isSelected ? 'selected' : '', 'ListItem', type]">
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
}
.selected,
.ListItem:hover {
  background-color: var(--accent);
}
.itemLeft,
.itemRight {
  display: flex;
  gap: 1rem;
}
.itemRight,
.itemLeft,
.itemTitle,
.itemIcon,
.itemDate {
  background-color: transparent;
}
</style>
