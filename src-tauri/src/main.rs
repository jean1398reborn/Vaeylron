#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]

use tauri::{LogicalSize, Manager, Window};
use window_shadows::set_shadow;

#[tauri::command]
async fn window_close(window: Window) -> tauri::Result<()> {
    window.close()
}

#[tauri::command]
async fn window_minimise(window: Window) -> tauri::Result<()> {
    window.minimize()
}


#[tauri::command]
async fn toggle_maximise(window: Window) -> tauri::Result<bool> {
    Ok(match window.is_maximized()? {
        true => {window.unmaximize()?; false}
        false => {window.maximize()?; true}
    })
}

#[tauri::command]
async fn window_size_scaled(window: Window) -> tauri::Result<(f64, f64)> {
    let window_inner_size = window.inner_size()?;
    let scale_factor = window.scale_factor()?;
    Ok((window_inner_size.width as f64/scale_factor, window_inner_size.height as f64/scale_factor))
}

#[tauri::command]
async fn get_maximised_state(window: Window) -> tauri::Result<bool> {
    window.is_maximized()
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();
            window.set_title("Vaeylron Launcher").expect("Failed to set title");
            window.set_min_size(Some(LogicalSize::new(168.0, 32.0))).expect("Failed to set minimum window size");
            set_shadow(&window, true).expect("Unsupported platform!");
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![window_close, toggle_maximise, window_minimise, get_maximised_state, window_size_scaled])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
