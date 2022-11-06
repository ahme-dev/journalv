use std::fs;

#[tauri::command]
pub fn write_data(data: String) {
    let file = tauri::api::path::config_dir()
        .expect("could not get config dir")
        .join("journalv.data");

    fs::write(file, data).expect("could not write file")
}

#[tauri::command]
pub fn read_data() -> String {
    let file = tauri::api::path::config_dir()
        .expect("could not get config dir")
        .join("journalv.data");

    fs::read_to_string(file).expect("could not read file")
}
