<script setup lang="ts"></script>

<template>
  <div class="AppMenu">
    <h1>Helo</h1>
  </div>
</template>

<style scoped>
  .AppMenu {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;

    padding: 3rem;
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
</style>
