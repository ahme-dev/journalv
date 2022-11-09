<template>
	<div
		class="SearchItem"
		:class="{ highlight: props.order == 0 }"
		@click="store.openEditor(props.order)"
	>
		<div class="left">
			<p v-if="props.type == 'dream'" class="icon fa-solid fa-moon"></p>
			<p v-if="props.type == 'day'" class="icon fa-solid fa-sun"></p>
			<p v-if="props.type == 'command'" class="icon fa-solid fa-star"></p>

			<h3 class="title">{{ props.title }}</h3>
		</div>

		<!-- for days and dreams -->
		<div class="right" v-if="props.type !== 'command'">
			<h4>{{ props.date }}</h4>
			<h5 v-if="props.tags">{{ props.tags.join(" ") }}</h5>
		</div>

		<!-- for commands -->
		<div class="right command" v-else>
			<h4>command</h4>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useMainStore } from "../store";

	const store = useMainStore();

	const props = defineProps<{
		title: string;
		type: string;
		tags?: string[];
		date?: string;
		content?: string;
		id: number;
		order: number;
	}>();
</script>

<style scoped>
	.SearchItem {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;

		padding: 0.7rem 1rem;
		border-left: 0.5rem solid var(--main);

		border-top-right-radius: 1rem;
		border-bottom-right-radius: 1rem;

		background-color: var(--main);
		box-shadow: 1px 1px 2px var(--bg);

		transition: 0.2s ease-out;
	}

	.highlight,
	.SearchItem:hover {
		/* background-color: var(--accent); */
		/* color: var(--bg); */
		cursor: pointer;
		border-left: 0.5rem solid var(--accent);
	}

	.highlight .icon,
	.SearchItem:hover .icon {
		color: var(--bg);
		background-color: var(--accent);
	}

	/* left */

	.left {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.left .icon {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.8rem;
		border-radius: 50%;
	}

	/* right */

	.right {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: flex-end;
		justify-content: center;

		border-top-right-radius: 1rem;
		border-bottom-right-radius: 1rem;
	}
</style>
