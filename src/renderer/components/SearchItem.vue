<template>
  <div class="SearchItem" @click="itemClicked">
    <div class="left">
      <p v-if="props.type == 'dream'" class="icon fa-solid fa-moon"></p>
      <p v-if="props.type == 'day'" class="icon fa-solid fa-sun"></p>
      <p v-if="props.type == 'command'" class="icon fa-solid fa-star"></p>

      <h3 class="title">{{ props.title }}</h3>
    </div>

    <!-- for days and dreams -->
    <div class="right" v-if="props.type !== 'command'">
      <h4>{{ props.date }}</h4>
      <h5 v-if="props.tags">{{ props.tags.join(" ") }}</h5>
    </div>

    <!-- for commands -->
    <div class="right command" v-else>
      <h4>command</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useMainStore } from "../store";

  const itemClicked = () => {
    if (props.type == "command") {
      // if is a command
      props.title.includes("Day")
        ? store.openEditorNew("day")
        : store.openEditorNew("dream");
    } else {
      // if is not command
      store.openEditor(props.id);
    }
  };

  const store = useMainStore();

  const props = defineProps<{
    title: string;
    type: string;
    tags?: string[];
    date?: string;
    content?: string;
    id: number;
  }>();
</script>

<style scoped>
  .SearchItem {
    flex: 0 0 3rem;

    display: flex;
    justify-content: space-between;
    align-items: stretch;

    background-color: var(--main);

    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;

    transition: 0.2s ease-out;
  }

  .SearchItem:hover {
    background-color: var(--accent);
    color: var(--bg);
    cursor: pointer;
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 100%;
  }

  .left .icon {
    height: 100%;
    padding: 1rem;
    background-color: var(--accent);
    color: var(--bg);
  }

  .right {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;

    height: 100%;
    padding: 0.5rem 1rem;

    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  .command {
    color: var(--bg);
    background-color: var(--accent);
  }
</style>
