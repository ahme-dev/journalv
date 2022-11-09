<template>
	<div class="MainBar">
		<div class="buttonbox" @click="mainClicked()">
			<button
				class="fa-solid"
				:class="store.uiMode == 'search' ? 'fa-bars' : 'fa-chevron-down'"
			></button>
		</div>
		<input
			@input="store.updateShownEntries(searchTerm)"
			@keyup.enter="store.openEditor(0)"
			v-model="searchTerm"
			:placeholder="mainText()"
			:disabled="!(store.uiMode == 'search')"
			type="text"
		/>
		<div class="buttonbox" @click="saveClicked()">
			<button
				class="fa-solid"
				:class="store.saved ? 'fa-check' : 'fa-save'"
			></button>
		</div>
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

	.buttonbox {
		padding: 0.5rem 1rem;

		color: var(--bg);
		background-color: var(--accent);

		cursor: pointer;
	}

	.buttonbox:hover > button {
		background-color: var(--main);
	}

	button {
		font-size: 1.1rem;
		font-weight: bold;
		padding: 1rem;
		border-radius: 50%;
		cursor: pointer;
		transition: 0.2s ease-out;
	}
</style>
