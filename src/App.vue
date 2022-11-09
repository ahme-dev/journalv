<template>
	<SearchList v-if="store.uiMode == 'search'"></SearchList>
	<AppMenu v-else-if="store.uiMode == 'menu'"></AppMenu>
	<EntryEditor v-else></EntryEditor>

	<MainBar class="bar"></MainBar>
</template>

<script setup lang="ts">
	import EntryEditor from "./components/EntryEditor.vue";
	import SearchList from "./components/SearchList.vue";
	import MainBar from "./components/MainBar.vue";

	import { onMounted } from "vue";
	import { useMainStore } from "./store";
	import AppMenu from "./components/AppMenu.vue";

	const store = useMainStore();

	// on app load
	onMounted(async () => {
		// import app data
		await store.importData();
		// first time search to show default result
		store.updateShownEntries("");
		// load selected accent colour
		store.loadAccent();
	});
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Tajawal&display=swap");

	:root {
		--bg: #111;
		--fg: #eee;
		--main: rgba(70, 70, 70, 0.2);
		/* will be modified by a function */
		--accent: "#22bb66";
	}

	*,
	*::after,
	*::before {
		padding: 0;
		margin: 0;
		border: 0;
		box-sizing: border-box;
		font-family: inherit;
		color: inherit;
		background-color: transparent;
	}

	*::selection {
		background-color: var(--fg);
		color: var(--accent);
		padding: 1rem;
	}

	input,
	img,
	textarea,
	input {
		border: 0;
	}

	textarea:focus,
	input:focus {
		outline: none;
	}

	html,
	body,
	#app {
		height: 100%;
	}

	#app {
		font-family: Comfortaa, Tahoma, sans-serif;

		max-width: 1000px;
		margin: auto;

		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;

		background-color: var(--bg);
		color: var(--fg);
	}

	#app > * {
		flex-grow: 1;
		background-color: var(--main);
	}

	#app > .bar {
		flex-grow: 0;
	}
</style>
