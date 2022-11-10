use magic_crypt::{new_magic_crypt, MagicCryptTrait};
use std::{fs, path};

fn get_path() -> path::PathBuf {
	tauri::api::path::config_dir()
		.expect("could not get config dir")
		.join("journalv.data")
}

#[tauri::command]
pub fn write_data(data: String, password: String) {
	let path = get_path();

	// encrypt
	let mc = new_magic_crypt!(password, 256);
	let base = mc.encrypt_str_to_base64(data);

	// write the passed data into file using path
	fs::write(path, base).expect("could not write file")
}

#[tauri::command]
pub fn read_data(password: String) -> String {
	let path = get_path();

	// see if file exists
	match path.exists() {
		true => {
			let mc = new_magic_crypt!(password, 256);
			// read data
			let base = fs::read_to_string(path).expect("could not read file");
			// try to decrypt and send result back
			match mc.decrypt_base64_to_string(base) {
				Ok(str) => str.into(),
				Err(_) => "error".into(),
			}
		}
		false => "empty".into(),
	}
}
