<template>
	<PasswordScreen v-if="store.uiMode == 'password'"></PasswordScreen>

	<SearchList v-if="store.uiMode == 'search'"></SearchList>
	<AppMenu v-else-if="store.uiMode == 'menu'"></AppMenu>
	<EntryEditor v-else="store.uiMode == 'edit'"></EntryEditor>

	<MainBar class="bar"></MainBar>
</template>

<script setup lang="ts">
	import EntryEditor from "./components/EntryEditor.vue";
	import SearchList from "./components/SearchList.vue";
	import MainBar from "./components/MainBar.vue";

	import { onMounted } from "vue";
	import { useMainStore } from "./store";
	import AppMenu from "./components/AppMenu.vue";
	import PasswordScreen from "./components/PasswordScreen.vue";

	const store = useMainStore();

	onMounted(async () => {
		// set password checking function
		store.passObj.checkFunc = async (first = false) => {
			// import app data
			let res = await store.importData(store.passObj.password);

			// if couldn't open file
			if (res == "error") {
				if (first) store.passObj.info = "Enter password to import data:";
				else store.passObj.info = "Entered password was wrong!";

				return;
			}

			// first time search to show default result
			store.updateShownEntries("");
			// load selected accent colour
			store.loadAccent();
			// switch of out of password screen
			store.uiMode = "search";
			// remove password text
			store.passObj.password = "";
		};

		// run once
		store.passObj.checkFunc(true);
	});
</script>

<style>
	:root {
		--bg: #111;
		--fg: #eee;
		--main: rgba(70, 70, 70, 0.2);
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
		background-color: var(--accent);
		color: var(--bg);
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
		font-family: sans-serif;

		max-width: 1100px;
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
