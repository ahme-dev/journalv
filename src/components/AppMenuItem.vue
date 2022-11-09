<script setup lang="ts">
	const props = defineProps<{
		title: string;
		options: { option: string; func: () => void }[];
	}>();
</script>

<template>
	<div class="AppMenuItem">
		<!-- right -->
		<h3>{{ props.title }}</h3>
		<!-- left -->
		<div class="options">
			<!-- each option -->
			<div
				class="option"
				v-for="option in props.options"
				@click="option.func()"
			>
				{{ option.option }}
			</div>
			<!-- each option -->
		</div>
	</div>
</template>

<style scoped>
	.AppMenuItem {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;

		box-shadow: 1px 1px 2px var(--bg);

		padding: 0.7rem 1rem;
		border-radius: 1rem;

		background-color: var(--main);
	}
	.options {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.option {
		font-size: smaller;
		font-weight: bold;

		padding: 0.8rem;
		border-radius: 0.5rem;

		cursor: pointer;

		background-color: var(--main);
		color: var(--fg);
		box-shadow: 1px 1px 2px var(--bg);

		transition: 0.2s ease-out;
	}
	.option:hover {
		background-color: var(--accent);
		color: var(--bg);
	}
</style>
