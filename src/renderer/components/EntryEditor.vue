<template>
  <div class="EntryEditor">
    <div class="editSection">
      <input
        v-model.lazy="store.editorObj.title"
        class="editTitle"
        type="text"
        placeholder="Entry title"
      />
      <div>
        <p class="editType highlight">
          {{ store.editorObj.type.toUpperCase() }}
        </p>
      </div>
    </div>
    <div class="editSection">
      <textarea
        v-model.lazy="store.editorObj.content"
        class="editContent"
        id=""
        placeholder="Type whatever you whant"
      />
    </div>
    <div class="editSection">
      <input
        v-model.lazy="store.editorObj.tags"
        class="editTags"
        type="text"
        placeholder="Tags (space separated)"
      />
      <div>
        <p class="editDate highlight">
          {{ store.editorObj.date || "No Date" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useMainStore } from "../store";
  const store = useMainStore();
</script>

<style scoped>
  .EntryEditor {
    display: grid;
    grid-template-rows: 1fr 7fr 1fr;

    gap: 1rem;
    padding: 1rem;

    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  .EntryEditor input,
  .EntryEditor .editContent {
    transition: 0.2s ease-out;
  }

  .editContent:focus,
  input:focus {
    background-color: var(--main);
    border-bottom: 0.2rem solid var(--accent);
  }

  .editContent,
  input {
    border-bottom: 0.2rem solid transparent;
  }

  .editContent {
    padding: 1rem;
    resize: none;
    font-size: 1rem;
  }

  /* scrollbar */
  .editContent::-webkit-scrollbar {
    background-color: var(--main);
    overflow: hidden;
    cursor: pointer;
  }
  .editContent::-webkit-scrollbar-thumb {
    background-color: var(--accent);
    cursor: pointer;
  }
  /* scrollbar end */

  input {
    font-weight: bold;
    padding: 0 1rem;
  }

  .editTitle {
    font-size: 1.1rem;
    border-bottom: 0.2rem solid var(--main);

    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  .editSection {
    display: flex;
    gap: 1rem;
    align-items: stretch;
    flex-direction: row;
  }

  .editSection > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .editSection .highlight {
    background-color: var(--main);
    border-radius: 1rem;
    padding: 1rem;
  }
  .editTags {
    text-align: center;
  }

  .editTags,
  .editContent,
  .editTitle {
    flex-grow: 1;
  }
  .highlight {
    box-shadow: 1px 1px 2px var(--bg);
  }
</style>
