import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { appWindow } from '@tauri-apps/api/window'

var current_maximised_state = false
async function resized_window_titlebar(event) {


    invoke("get_maximised_state").then((maximised) => {
        let maximise_button = document.getElementById("maximise-button")
        console.log(maximise_button)
        if (maximised !== current_maximised_state) {
            if (maximised) {
                maximise_button.src = "/titlebar/maximised.svg"

            } else {
                maximise_button.src = "/titlebar/maximise.svg"
            }
            current_maximised_state = maximised
        }
    })
}

function Titlebar() {

    appWindow.listen("tauri://resize", resized_window_titlebar);

    return (
      <div data-tauri-drag-region className="titlebar">
        <img className = "titlebar-icon" src="/icon/vaeylron.svg" alt="vaeylron"/>
        <button className="titlebar-button size-change-button" id="titlebar-minimize" onClick={() => invoke("window_minimise")}>
          <img
              src="/titlebar/minimise.svg"

              alt="minimise"/>
        </button>
        <button className="titlebar-button size-change-button" id="titlebar-maximize" onClick={() => invoke("toggle_maximise")}>
          <img
              src="/titlebar/maximise.svg"
              alt="maximize"
              id = "maximise-button"/>
        </button>
        <button className="titlebar-button exit-button" id="titlebar-close" onClick={() => invoke("window_close")}>
          <img
              src="/titlebar/exit.svg"
              alt="exit"
              width={32}
              height={32}/>
        </button>
      </div>
  );
}

export default Titlebar;
