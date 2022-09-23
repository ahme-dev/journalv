<template>
  <div class="EntryEditor">
    <input
      v-model.lazy="store.editorValues.title"
      class="editTitle"
      type="text"
      placeholder="Entry title"
    />
    <textarea
      v-model.lazy="store.editorValues.content"
      class="editContent"
      id=""
      placeholder="Type whatever you whant"
    />
    <input
      v-model.lazy="store.editorValues.tags"
      class="editTags"
      type="text"
      placeholder="Tags (space separated)"
    />
  </div>
</template>

<script setup>
import { useMainStore } from "@/store";

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

textarea:focus,
input:focus {
  background-color: var(--main);
  border-bottom: 0.2rem solid var(--accent);
}

textarea,
input {
  border-bottom: 0.2rem solid transparent;
}

textarea {
  padding: 1rem;
  resize: none;
  font-size: 1rem;
}

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

.editTags {
  text-align: center;
}
</style>
