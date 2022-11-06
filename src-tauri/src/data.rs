use std::fs;

#[tauri::command]
pub fn write_data(data: String) {
    // get file
    let file = tauri::api::path::config_dir()
        .expect("could not get config dir")
        .join("journalv.data");

    // write data passed into file
    fs::write(file, data).expect("could not write file")
}

#[tauri::command]
pub fn read_data() -> String {
    // get file
    let file = tauri::api::path::config_dir()
        .expect("could not get config dir")
        .join("journalv.data");

    // read file into a string and return
    fs::read_to_string(file).expect("could not read file")
}
