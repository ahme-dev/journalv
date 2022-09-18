<template>
  <div :class="[{ selected: props.isSelected }, 'ListItem', props.type]">
    <div class="itemLeft">
      <span v-if="props.type == 'day'" class="itemIcon fa-solid fa-sun"></span>
      <span
        v-if="props.type == 'dream'"
        class="itemIcon fa-solid fa-moon"
      ></span>
      <span
        v-if="props.type == 'command'"
        class="itemIcon fa-solid fa-star"
      ></span>

      <h3 class="itemTitle">{{ props.title }}</h3>
    </div>

    <div class="itemRight">
      <h4 class="itemDate" v-if="props.date !== ''">{{ props.date }}</h4>
      <h5 class="itemTags">{{ props.tags }}</h5>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: String,
  tags: Array,
  date: String,
  type: String,
  isSelected: Boolean,
});
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
.itemRight {
  flex-direction: column;
}
.itemTitle,
.itemIcon,
.itemTags,
.itemDate {
  height: 100%;
  padding: 0 1rem;
}
.itemIcon {
  background-color: var(--accent);
  padding: 1rem;
}
</style>
