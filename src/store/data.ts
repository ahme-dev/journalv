import { invoke } from "@tauri-apps/api/tauri";

export const accents = {
	cyan: "#44bbcc",
	orange: "#ee8844",
	emerald: "#22bb66",
};

export type Accents = "cyan" | "orange" | "emerald";

// type for entries
export interface Entry {
	type: "day" | "dream";
	title: string;
	content: string;
	tags: string[];
	date: string;
	id: number;
}

// type for app data
export interface AppData {
	accent: Accents;
	entries: Entry[];
}

// app data

let app: AppData = {
	accent: "emerald",
	// temp dummy entries
	entries: [],
};

// app functions

// accent colour arrows

export const setAccent = (colour: Accents) => {
	app.accent = colour;
};
export const getAccent = () => {
	return app.accent;
};

// import and export data (invoking rust)

export const exportData = async (password = "magickey"): Promise<string> => {
	// see if this was the password used to decrypt data
	let testRes = await importData(password, true);
	// if not the same password, return error
	if (testRes == "error") return "error";

	// write the data
	await invoke("write_data", {
		data: JSON.stringify(app),
		password: password,
	});

	// return okay
	return "okay";
};

export const importData = async (
	password: string,
	test = false
): Promise<string> => {
	return await invoke("read_data", { password: password }).then((res) => {
		switch (res) {
			case "empty":
			case "error":
				return res;
			default:
				// make changes to data only if not testing password
				if (!test) app = JSON.parse(res as string);
				return "okay";
		}
	});
};

// CRUD interface high-order functions for the entries

export function createEntry(type: "day" | "dream", date: string): number {
	// get last item's id
	let lastID =
		JSON.stringify(app.entries) == "[]"
			? 0
			: app.entries[app.entries.length - 1].id;

	// create an entry type from parameters
	const newEntry: Entry = {
		id: lastID + 1,
		title: "",
		content: "",
		type: type,
		date: date,
		tags: [""],
	};

	// add entry to data list
	app.entries.push(newEntry);

	// return the id of the created entry
	return newEntry.id;
}

export function readEntry(filterFunc: (entry: Entry) => boolean): Entry[] {
	return app.entries.filter(filterFunc);
}

export function updateEntry(
	id: number,
	newTitle: string,
	newContent: string,
	newTags: string[]
): void {
	app.entries.map((element) => {
		if (element.id === id) {
			element.title = newTitle;
			element.content = newContent;
			element.tags = newTags;
		}
	});
}

export function deleteEntry(): void {}
