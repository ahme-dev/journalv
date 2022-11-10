<template>
	<div>
		<p>
			{{ store.passObj.info }}
		</p>
		<input
			type="password"
			@keyup.enter="store.passObj.checkFunc()"
			v-model="store.passObj.password"
			placeholder="password"
		/>
		<button @click="store.passObj.checkFunc()">Open</button>
	</div>
</template>

<script lang="ts" setup>
	import { useMainStore } from "../store";
	const store = useMainStore();
</script>

<style scoped>
	div {
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
