<template>
  <div :class="['ListItem', props.type]">
    <div class="itemLeft">
      <span
        :class="[
          'itemIcon',
          'fa-solid',
          { 'fa-moon': props.type == 'dream' },
          { 'fa-sun': props.type == 'day' },
          { 'fa-star': props.type == 'command' },
        ]"
      ></span>

      <h3 class="itemTitle">{{ props.title }}</h3>
    </div>

    <div class="itemRight" v-if="props.type !== 'command'">
      <h4 class="itemDate">{{ props.date }}</h4>
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
  cursor: pointer;

  background-color: var(--accent);
  color: var(--bg);
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
  padding: 1rem;

  background-color: var(--accent);
}
</style>
