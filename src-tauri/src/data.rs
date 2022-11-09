use std::{fs, path};

fn get_path() -> path::PathBuf {
	tauri::api::path::config_dir()
		.expect("could not get config dir")
		.join("journalv.data")
}

#[tauri::command]
pub fn write_data(data: String) {
	let path = get_path();

	// write the passed data into file using path
	fs::write(path, data).expect("could not write file")
}

#[tauri::command]
pub fn read_data() -> String {
	let path = get_path();

	match path.join("journalv.data").exists() {
		// read file, using path, into a string and return
		true => fs::read_to_string(path).expect("could not read file"),
		false => "".into(),
	}
}
