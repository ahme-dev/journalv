<template>
  <div class="SearchItem">
    <div class="left">
      <p v-if="props.type == 'dream'" class="icon fa-solid fa-moon"></p>
      <p v-if="props.type == 'day'" class="icon fa-solid fa-sun"></p>
      <p v-if="props.type == 'command'" class="icon fa-solid fa-star"></p>

      <h3 class="title">{{ props.title }}</h3>
    </div>

    <div class="right" v-if="props.type !== 'command'">
      <h4 class="date">{{ props.date }}</h4>
      <h5 class="tags" v-if="props.tags">{{ props.tags.join(" ") }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string;
    type: string;
    tags?: string[];
    date?: string;
    content?: string;
    id?: number;
  }>();
</script>

<style scoped>
  .SearchItem {
    flex: 0 0 3rem;

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
