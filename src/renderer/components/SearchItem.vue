<template>
  <div class="SearchItem" @click="clickEntry">
    <div class="left">
      <p
        :class="[
          'icon',
          'fa-solid',
          { 'fa-moon': props.type == 'dream' },
          { 'fa-sun': props.type == 'day' },
          { 'fa-star': props.type == 'command' },
        ]"
      ></p>

      <h3 class="title">{{ props.title }}</h3>
    </div>

    <div class="right" v-if="props.type !== 'command'">
      <h4 class="date">{{ props.date }}</h4>
      <h5 class="tags" v-if="props.tags">{{ props.tags }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "../store/index";

const props = defineProps<{
  title: string;
  type: string;
  tags?: string[];
  date?: string;
  content?: string;
}>();

const store = useMainStore();

const clickEntry = () => {
  store.editorImport(props.entry);
};
</script>

<style scoped>
.SearchItem {
  flex-basis: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--main);

  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.SearchItem:hover {
  background-color: var(--accent);
  cursor: pointer;
}

.left {
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.5rem 1rem;
}

.left .icon {
  margin-right: 1rem;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding: 0.5rem 1rem;
}
</style>
