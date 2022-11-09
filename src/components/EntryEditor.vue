<template>
	<div class="EntryEditor">
		<section>
			<input
				v-model.lazy="store.editorObj.title"
				@input="store.saved = false"
				class="title"
				type="text"
				placeholder="Entry title"
			/>
			<p class="highlight">
				{{ store.editorObj.type.toUpperCase() }}
			</p>
		</section>
		<section class="content">
			<textarea
				v-model.lazy="store.editorObj.content"
				@input="store.saved = false"
				placeholder="Type whatever you whant"
			/>
		</section>
		<section>
			<input
				v-model.lazy="store.editorObj.tags"
				@input="store.saved = false"
				class="tags"
				type="text"
				placeholder="Tags (space separated)"
			/>
			<p class="highlight">
				{{ store.editorObj.date || "No Date" }}
			</p>
		</section>
	</div>
</template>

<script setup lang="ts">
	import { useMainStore } from "../store";
	const store = useMainStore();
</script>

<style scoped>
	.EntryEditor {
		display: flex;
		flex-direction: column;

		gap: 1rem;
		padding: 1rem;

		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
	}

	section {
		display: flex;
		gap: 1rem;
	}

	.content {
		flex-grow: 1;
	}

	.title {
		border-bottom: 0.2rem solid var(--accent);
	}

	textarea,
	input {
		flex-grow: 1;
		font-size: 1rem;

		padding: 1rem;
		resize: none;

		border-top-right-radius: 1rem;
		border-top-left-radius: 1rem;
		border-bottom: 0.2rem solid transparent;

		transition: 0.2s ease-out;
	}

	textarea:focus,
	input:focus {
		background-color: var(--main);
		border-bottom: 0.2rem solid var(--accent);
	}

	/* scrollbar */

	textarea::-webkit-scrollbar {
		background-color: var(--main);
		overflow: hidden;
		cursor: pointer;
	}
	textarea::-webkit-scrollbar-thumb {
		background-color: var(--accent);
		cursor: pointer;
	}

	/* scrollbar end */

	.highlight {
		display: flex;
		place-items: center;

		padding: 0.8rem;
		border-radius: 1rem;
		font-weight: bold;

		transition: 0.2s ease-out;

		box-shadow: 1px 1px 2px var(--bg);
		background-color: var(--accent);
		color: var(--bg);
	}
</style>
