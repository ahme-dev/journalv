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
    <div class="item tips">
      <h3>How to search:</h3>
      <h4 class="tip">
        To filter only one type of entry use <b class="sel">:</b> as in
        <b class="sel"> :day </b>
        <b class="sel"> :dream </b>
      </h4>
      <h4 class="tip">
        To search for tags prefix with <b class="sel">#</b> as in
        <b class="sel"> #happy </b>
        <b class="sel"> #park </b>
      </h4>
      <h4 class="tip">
        Selecting specific dates is done with <b class="sel">></b> as in
        <b class="sel">>feb</b>
        <b class="sel">>2022</b>
      </h4>
    </div>
    <div class="items">
      <!-- items -->
      <div class="item">
        <h3>Add entry:</h3>
        <div class="options">
          <button class="option" @click="store.openEditorNew('day')">
            Day
          </button>
          <button class="option" @click="store.openEditorNew('dream')">
            Dream
          </button>
        </div>
      </div>
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
    box-shadow: 1px 1px 2px var(--bg);
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

    box-shadow: 1px 1px 2px var(--bg);

    padding: 0.7rem 1rem;
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

    padding: 0.8rem;
    border-radius: 0.5rem;

    cursor: pointer;

    background-color: var(--main);
    color: var(--fg);
    box-shadow: 1px 1px 2px var(--bg);

    transition: 0.2s ease-out;
  }
  .option:hover {
    background-color: var(--accent);
    color: var(--bg);
  }

  .tips {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .tip {
    font-weight: normal;

    padding: 0.8rem;
    border-radius: 0.5rem;
  }
  .sel {
    background-color: var(--accent);
    color: var(--bg);
    border-radius: 0.5rem;
    padding: 0.1rem 0.3rem;
    margin: 0 0.2rem;
  }
</style>
