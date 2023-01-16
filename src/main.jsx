import React from "react";
import ReactDOM from "react-dom/client";
import Titlebar from "./Titlebar";

import "./background.css";
import "./titlebar.css";
import "./login.css";

import Login from "./loginwelcome";
import {invoke} from "@tauri-apps/api/tauri";

ReactDOM.createRoot(document.getElementById("root")).render(
<div className="base">
    <div className="background-element"></div>
    <Login  />
    <Titlebar />
</div>
);

invoke("window_size_scaled").then(
    size_scaled => {
        let root_style = document.getElementById("root").style;
        root_style.setProperty("--window_width_scaled", size_scaled[0])
        root_style.setProperty("--window_height_scaled", size_scaled[1])
    }
)
