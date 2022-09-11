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

textarea {
  padding: 0.5rem;
  resize: none;
}

input {
  font-size: 1.1rem;
  border-bottom: solid 0.2rem burlywood;
}
</style>
