// Purpose: This file contains the Login component which is used to login the user.

// Importing necessary modules.
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions.js";
import "./Login.css";

// Login component.
export default function Login() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(setUser(username));
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
