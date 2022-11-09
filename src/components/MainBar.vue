<template>
	<div class="MainBar">
		<button @click="getClick()" :class="getIcon()"></button>
		<input
			@input="store.updateShownEntries(searchTerm)"
			@keyup.enter="store.openEditor(0)"
			v-model="searchTerm"
			:placeholder="getText()"
			:disabled="!(store.uiMode == 'search')"
			type="text"
		/>
	</div>
</template>

<script setup lang="ts">
	import { ref } from "vue";

	import { useMainStore } from "../store";
	import { exportData } from "../store/data";

	const store = useMainStore();

	// on the button being clicked
	const getClick = () => {
		exportData();

		switch (store.uiMode) {
			case "search":
				return (store.uiMode = "menu");
			case "edit":
				return store.closeEditor();
			case "menu":
				return (store.uiMode = "search");
		}
	};

	// icon based on ui mode
	const getIcon = () => {
		switch (store.uiMode) {
			case "search":
				return "fa-solid fa-bars";
			case "edit":
				return "fa-solid fa-chevron-left";
			case "menu":
				return "fa-solid fa-chevron-down";
		}
	};

	// text based on ui mode
	const getText = () => {
		switch (store.uiMode) {
			case "search":
				return "start typing";
			case "edit":
				return "you are editing";
			case "menu":
				return "you are in the menu";
		}
	};

	const searchTerm = ref("");
</script>

<style scoped>
	.MainBar {
		display: grid;
		grid-template-columns: 1fr 9fr;
	}
	.MainBar > * {
		height: 100%;
		width: 100%;
	}
	input {
		font-size: 1.2rem;
		padding: 1rem 2rem;
		font-weight: bold;

		border-right: solid 1rem var(--accent);
		background-color: var(--main);
	}
	input:focus {
		outline: none;
	}
	button {
		cursor: pointer;
		font-size: 1.2rem;
		padding: 1rem;

		color: var(--bg);
		background-color: var(--accent);
	}
</style>
