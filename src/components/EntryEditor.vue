<template>
  <div class="EntryEditor">
    <input
      class="editTitle"
      type="text"
      name=""
      id=""
      placeholder="Set a title"
    />
    <textarea class="editContent" id="" placeholder="Type whatever you whant" />
    <input
      class="editTags"
      type="text"
      name=""
      id=""
      placeholder="Add some tags (space separated)"
    />
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
