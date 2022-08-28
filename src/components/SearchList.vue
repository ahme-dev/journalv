<template>
  <div class="SearchList">
    <h3 class="commandItem">Item</h3>
    <h3 class="fileItem">Item</h3>
    <h3 class="commandItem">Item</h3>
  </div>
</template>

<script>
export default {
  name: "SearchList",
};
</script>

<style scoped>
.SearchList {
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1rem;
  padding: 3rem;

  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
}
.SearchList > * {
  padding: 1rem;
}
.SearchList > *:hover {
  color: var(--main);
  cursor: pointer;
}
.commandItem {
  border-left: solid 1rem var(--accent);
}
.commandItem:hover {
  background-color: var(--accent);
}
.fileItem {
  border-left: solid 1rem var(--fg);
}
.fileItem:hover {
  background-color: var(--fg);
}
</style>
