import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { appWindow } from '@tauri-apps/api/window'

function Login() {

    return (
        <div className="login-base">
            <div className="login-plate">
                <div className="login-title-text">
                    <div className="login-title-welcome">Welcome Back</div>
                    <div className="login-title-description">Please sign in to continue.</div>
                </div>
                <div className="login-entries">
                    <div className="login-text-entry">
                        <label className="login-label">Username</label>
                        <input type="text" id="username-input" name="username-input" className="text-entry"></input>
                    </div>
                    <div className="login-text-entry">
                        <label className="login-label">Password</label>
                        <input type="password" id="password-input" name="password-input" className="text-entry"></input>
                    </div>
                </div>
                <div className="login-base-extras">
                <div className="login-extras">
                    <div className="login-remember">
                        <input type="checkbox" id="remember-checkbox" name="remember-checkbox" className="login-remember-checkbox"></input>
                        <div className="remember-label">Remember Me</div>
                    </div>
                    <div className="login-forgot">
                        <div className="clickable-text">Forgot Something?</div>
                    </div>
                </div>
                </div>
                <div className="login-button-base">
                    <button className="login-button">
                        Login
                    </button>
                </div>
                <div className="sign-up-message">
                    <div className="clickable-text">Dont have an account? <span className="gradient-sign-up">Sign Up</span></div>
                </div>
            </div>
        </div>
  );
}


export default Login;
