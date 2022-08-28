<template>
  <div class="SearchList">
    <ListItem text="item" type="command"></ListItem>
    <ListItem text="item" type="file"></ListItem>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  name: "SearchList",
  components: { ListItem },
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
  color: var(--bg);
  cursor: pointer;
}
</style>
