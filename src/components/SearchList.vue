<template>
	<div class="SearchList">
		<div class="empty" v-if="JSON.stringify(store.shownEntries) == '[]'">
			No entries found
		</div>

		<SearchItem
			v-else
			v-for="(entry, index) in store.shownEntries"
			:="entry"
			:order="index"
		></SearchItem>
	</div>
</template>

<script setup lang="ts">
	import SearchItem from "./SearchItem.vue";

	import { useMainStore } from "../store";
	import { computed } from "vue";

	const store = useMainStore();

	console.log(JSON.stringify(store.shownEntries));
</script>

<style scoped>
	.SearchList {
		display: flex;
		flex-direction: column-reverse;
		justify-content: flex-start;

		padding: 3rem;
		gap: 1rem;

		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;

		overflow-y: scroll;
	}
	.SearchList::-webkit-scrollbar {
		background-color: var(--main);
		border-top-right-radius: 1rem;
		overflow: hidden;
	}
	.SearchList::-webkit-scrollbar-thumb {
		background-color: var(--accent);
		border-top-right-radius: 1rem;
	}

	.empty {
		display: flex;
		justify-content: center;
		align-items: center;

		padding: 1.4rem;
		border-radius: 1rem;

		background-color: var(--main);
		box-shadow: 1px 1px 2px var(--bg);

		transition: 0.2s ease-out;
	}
</style>
