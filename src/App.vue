<template>
	<div v-if="store.uiMode == 'password'" class="passwordbox">
		<p>
			{{ info }}
		</p>
		<input
			type="password"
			@keyup.enter="confirmPass()"
			v-model="password"
			placeholder="password"
		/>
		<button>Open</button>
	</div>

	<SearchList v-if="store.uiMode == 'search'"></SearchList>
	<AppMenu v-else-if="store.uiMode == 'menu'"></AppMenu>
	<EntryEditor v-else="store.uiMode == 'edit'"></EntryEditor>

	<MainBar class="bar"></MainBar>
</template>

<script setup lang="ts">
	import EntryEditor from "./components/EntryEditor.vue";
	import SearchList from "./components/SearchList.vue";
	import MainBar from "./components/MainBar.vue";

	import { onMounted, ref } from "vue";
	import { useMainStore } from "./store";
	import AppMenu from "./components/AppMenu.vue";

	const store = useMainStore();

	const info = ref("");
	const password = ref("");

	onMounted(async () => {
		confirmPass(true);
	});

	const confirmPass = async (first = false) => {
		// import app data
		let res = await store.importData(password.value);

		// if couldn't open file
		if (res == "error") {
			switch (first) {
				case true:
					info.value = "Enter password to import data:";
					return;
				case false:
					info.value = "Entered password was wrong!";
					return;
			}
		}

		// first time search to show default result
		store.updateShownEntries("");
		// load selected accent colour
		store.loadAccent();
		// switch of out of password screen
		store.uiMode = "search";
	};
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

	/* password screen */

	.passwordbox {
		position: absolute;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100vw;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		background-color: var(--bg) !important;
	}

	p,
	input,
	button {
		padding: 1rem 2rem;
		border-radius: 1rem;
		font-size: 1rem;
		font-weight: bold;

		background-color: var(--main);

		transition: 0.2s ease-out;
	}

	button:hover {
		cursor: pointer;
		color: var(--bg);
		background-color: var(--fg);
	}
</style>
