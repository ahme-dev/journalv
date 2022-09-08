<template>
  <div class="EntryEditor">
    <input type="text" name="" id="" />
    <textarea name="" id=""></textarea>
    <input type="text" name="" id="" />
  </div>
</template>

<script>
export default {
  name: "EntryEditor",
  props: {
    data: Array,
  },
};
</script>

<style scoped>
.EntryEditor {
  display: grid;
  grid-template-rows: 1fr 8fr 1fr;

  gap: 1rem;
  padding: 1rem;

  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
}

input,
textarea {
  background-color: transparent;
  border-radius: 0.5rem;
  border: solid 0.2rem burlywood;
  padding: 0.5rem;
}

input,
textarea {
  outline: none;
}
</style>
