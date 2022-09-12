<template>
  <div class="SearchList">
    <div :key="entry.display" v-for="entry in data">
      <ListItem
        :class="entry.display == 1 ? 'selected' : ''"
        :date="entry.date"
        :title="entry.title"
        :tags="entry.tags"
        :type="entry.type"
      ></ListItem>
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
  flex-direction: column-reverse;
  justify-content: end;
  gap: 1rem;
  padding: 3rem;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
</style>
