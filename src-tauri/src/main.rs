#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod data;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![data::write_data, data::read_data])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
