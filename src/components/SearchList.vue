<template>
  <div class="SearchList">
    <div :key="day.id" v-for="day in data">
      <ListItem :date="day.date" :title="day.title" type="command"></ListItem>
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  name: "SearchList",
  props: {
    data: Array,
  },
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

  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
}

.SearchList > * {
  background-color: transparent;
}

.SearchList > div > * {
  padding: 1rem;

  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
}
.SearchList > div > *:hover {
  color: var(--bg);
  cursor: pointer;
}
</style>
