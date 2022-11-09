import moment from "moment";
import { defineStore } from "pinia";
import { ref } from "vue";
import {
	Entry,
	Accents,
	createEntry,
	readEntry,
	updateEntry,
	deleteEntry,
	exportData,
	importData,
	accents,
	getAccent,
	setAccent,
} from "./data";

export const useMainStore = defineStore("main", () => {
	// holds the results of a search (rendered)
	const uiMode = ref<"search" | "edit" | "menu">("search");

	// stores data currently in the entry editor
	const editorObj = ref({
		type: "day",
		title: "",
		date: "",
		content: "",
		tags: "",
		id: 1,
	});

	const closeEditor = () => {
		// update the entry in data.ts
		const { id, title, content, tags } = editorObj.value;
		updateEntry(id, title, content, tags.split(" "));

		// update shownEntries using empty search
		updateShownEntries("");
		// switch ui
		uiMode.value = "search";
	};

	const openEditor = (order: number) => {
		// return if there are no shown entries
		if (!shownEntries.value) return;

		// read entry from data.ts
		const selectedEntry = shownEntries.value[order];

		// set editor to entry
		editorObj.value = { ...selectedEntry, tags: selectedEntry.tags.join(" ") };

		// switch ui
		uiMode.value = "edit";
	};
	// holds the entries filtered based on search
	const shownEntries = ref<Entry[]>();

	// filter all entries using search words and change shown ones
	const updateShownEntries = (searchWords: string) => {
		// clean and split search words
		const wordsCleaned: string[] = searchWords
			.toString()
			.toLowerCase()
			.trim()
			.split(" ");

		// filter the data by entries
		const filteredEntries = readEntry((entry) => {
			// go through each word and see if it matches entry prop
			for (const word of wordsCleaned) {
				switch (word[0]) {
					// check for type of entry
					case ":":
						if (!entry.type.toLowerCase().includes(word.slice(1))) return false;
						break;
					// check for tags of entry
					case "#":
						if (!entry.tags.toString().toLowerCase().includes(word.slice(1)))
							return false;
						break;
					// check for date of entry
					case ">":
						if (!entry.date.toLowerCase().includes(word.slice(1))) return false;
						break;
					// check entry title
					default:
						if (!entry.title.toLowerCase().includes(word.slice(1)))
							return false;
						break;
				}
			}

			// if all words passed against the props
			// then return the entry
			return true;
		});

		// change shown entries to the newly filtered ones
		shownEntries.value = filteredEntries;
	};

	// items in the menu
	// mostly commands
	const menuItems = [
		{
			title: "Add a new entry:",
			options: [
				{ option: "Day", func: () => openEditorNew("day") },
				{ option: "Dream", func: () => openEditorNew("dream") },
			],
		},
		{
			title: "Change accent colour:",
			options: [
				{ option: "Emerald", func: () => changeAccent("emerald") },
				{ option: "Cyan", func: () => changeAccent("cyan") },
				{ option: "Orange", func: () => changeAccent("orange") },
			],
		},
	];

	const openEditorNew = (type: "day" | "dream") => {
		// set date to today
		const date = moment().format("D MMM YYYY");

		// see if today has an entry
		const foundEntries = readEntry(
			(entry) => entry.type === type && entry.date === date
		);

		if (foundEntries[0]) {
			// if entry was found set editor to entry
			editorObj.value = {
				...foundEntries[0],
				tags: foundEntries[0].tags.join(" "),
			};
		} else {
			// otherwise create a new entry, read it, and open it
			const id = createEntry(type, date);
			const entries = readEntry((entry) => entry.id == id);
			editorObj.value = { ...entries[0], tags: entries[0].tags.join(" ") };
		}

		// switch ui
		uiMode.value = "edit";
	};

	// accent colour functions

	const loadAccent = () => {
		const accent = accents[getAccent()];
		document.documentElement.style.setProperty("--accent", accent);
	};
	const changeAccent = (accent: Accents) => {
		document.documentElement.style.setProperty("--accent", accents[accent]);
		setAccent(accent);
	};

	return {
		uiMode,

		editorObj,
		closeEditor,
		openEditor,

		shownEntries,
		updateShownEntries,

		menuItems,
		openEditorNew,

		// load or change accent colour
		loadAccent,
		changeAccent,

		// let import/export functions of data.ts
		// be available in the store
		importData,
		exportData,
	};
});
