<template>
	<div class="MainBar">
		<button
			@click="mainClicked()"
			class="fa-solid"
			:class="store.uiMode == 'search' ? 'fa-bars' : 'fa-chevron-down'"
		></button>
		<input
			@input="store.updateShownEntries(searchTerm)"
			@keyup.enter="store.openEditor(0)"
			v-model="searchTerm"
			:placeholder="mainText()"
			:disabled="!(store.uiMode == 'search')"
			type="text"
		/>
		<button
			@click="saveClicked()"
			class="fa-solid"
			:class="store.saved ? 'fa-check' : 'fa-save'"
		></button>
	</div>
</template>

<script setup lang="ts">
	import { ref } from "vue";

	import { useMainStore } from "../store";

	const store = useMainStore();

	const searchTerm = ref("");

	const saveClicked = () => {
		store.exportData();
		store.saved = true;
	};

	// on the button being clicked
	const mainClicked = () => {
		switch (store.uiMode) {
			case "search":
				store.uiMode = "menu";
				break;
			case "edit":
				store.closeEditor();
				break;
			case "menu":
				store.uiMode = "search";
				break;
		}
	};

	// text based on ui mode
	const mainText = () => {
		switch (store.uiMode) {
			case "search":
				return "start typing";
			case "edit":
				return "you are editing";
			case "menu":
				return "you are in the menu";
		}
	};
</script>

<style scoped>
	.MainBar {
		display: flex;
	}
	input {
		flex-grow: 1;

		font-size: 1.2rem;
		padding: 1rem 2rem;
		font-weight: bold;

		background-color: var(--main);
	}
	input:focus {
		outline: none;
	}
	button {
		font-size: 1.1rem;
		font-weight: bold;
		padding: 1.5rem 2rem;

		cursor: pointer;

		color: var(--bg);
		background-color: var(--accent);
	}
</style>
