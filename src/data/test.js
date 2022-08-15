import React from "react";

// Use functional or class component based on your preference.
// Make it a default export.

export default function LoginForm({ onSubmit }) {
  
  return (<div>
      <div>
        <label for="username"><b>Username</b></label>
        <input
          id="username-input"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
      </div>
      <div>
        <label for="psw"><b>Password</b></label>
        <input
          id="password-input"
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
      </div>
      <button id="login-button" type="submit">Login</button>
    </div>);
}
