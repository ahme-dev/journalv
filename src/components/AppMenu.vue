<script setup lang="ts">
	import { useMainStore } from "../store";
	import AppMenuItem from "./AppMenuItem.vue";

	const store = useMainStore();
</script>

<template>
	<div class="AppMenu">
		<!-- title -->
		<div class="title">
			<h2>JournalV</h2>
			<a href="http://github.com/ahmeddotsahmeddots/journalv" target="_blank">source</a>
		</div>
		<!-- title end -->
		<!-- tips -->
		<div class="item tips">
			<h3>How to search:</h3>
			<h4 class="tip">
				To filter only one type of entry use <b class="sel">:</b> as in
				<b class="sel"> :day </b>
				<b class="sel"> :dream </b>
			</h4>
			<h4 class="tip">
				To search for tags prefix with <b class="sel">#</b> as in
				<b class="sel"> #happy </b>
				<b class="sel"> #park </b>
			</h4>
			<h4 class="tip">
				Selecting specific dates is done with <b class="sel">></b> as in
				<b class="sel">>feb</b>
				<b class="sel">>2022</b>
			</h4>
		</div>
		<!-- tips end -->
		<!-- items -->
		<div class="items">
			<AppMenuItem
				v-for="item in store.menuItems"
				:title="item.title"
				:options="item.options"
			></AppMenuItem>
		</div>
		<!-- items end -->
	</div>
</template>

<style scoped>
	.AppMenu {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		padding: 3rem;
		padding-top: 0rem;
		gap: 1rem;

		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;

		overflow-y: scroll;
	}
	.AppMenu::-webkit-scrollbar {
		background-color: var(--main);
		border-top-right-radius: 1rem;
		overflow: hidden;
	}
	.AppMenu::-webkit-scrollbar-thumb {
		background-color: var(--accent);
		border-top-right-radius: 1rem;
	}

	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 1rem;
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;

		background-color: var(--accent);
		color: var(--bg);
		box-shadow: 1px 1px 2px var(--bg);
	}

	.title a {
		text-decoration: none;
		font-weight: bold;
	}

	.items {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.tips {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		flex-wrap: wrap;
		gap: 0.5rem;

		padding: 0.7rem 1rem;
		border-radius: 1rem;

		box-shadow: 1px 1px 2px var(--bg);
		background-color: var(--main);
	}
	.tip {
		font-weight: normal;

		padding: 0.8rem;
		border-radius: 0.5rem;
	}
	.sel {
		background-color: var(--accent);
		color: var(--bg);
		border-radius: 0.5rem;
		padding: 0.1rem 0.3rem;
		margin: 0 0.2rem;
	}
</style>
