<template>
  <div class="SearchList">
    <div :key="day.id" v-for="day in data">
      <ListItem
        :class="day.id == 1 ? 'selected' : ''"
        :date="day.date"
        :title="day.title"
        :type="day.type"
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

  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
}
</style>
