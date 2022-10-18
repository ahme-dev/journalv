<script setup lang="ts">
  import { useMainStore } from "../store";

  const store = useMainStore();
</script>

<template>
  <div class="AppMenu">
    <div class="title">
      <h2>JournalV</h2>
      <h5>github.com/ahmedkabd/journalv</h5>
    </div>
    <div class="items">
      <!-- items -->
      <div class="item">
        <h3>Change theme:</h3>
        <div class="options">
          <button class="option" @click="store.changeStyle('emerald')">
            Emerald
          </button>
          <button class="option" @click="store.changeStyle('cyan')">
            Cyan
          </button>
          <button class="option" @click="store.changeStyle('orange')">
            Orange
          </button>
        </div>
      </div>
      <!-- items end -->
    </div>
  </div>
</template>

<style scoped>
  .AppMenu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 3rem;
    padding-top: 0rem;
    gap: 1rem;

    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;

    overflow-y: scroll;
  }
  .AppMenu::-webkit-scrollbar {
    background-color: var(--main);
    border-top-right-radius: 1rem;
    overflow: hidden;
  }
  .AppMenu::-webkit-scrollbar-thumb {
    background-color: var(--accent);
    border-top-right-radius: 1rem;
  }

  .title {
    align-self: center;

    padding: 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    background-color: var(--accent);
    color: var(--bg);
  }

  .items {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    padding: 1rem;
    border-radius: 1rem;

    background-color: var(--main);
  }
  .options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .option {
    font-size: smaller;
    font-weight: bold;

    padding: 1rem;
    border-radius: 1rem;

    cursor: pointer;

    background-color: var(--accent);
    color: var(--bg);
  }
</style>
