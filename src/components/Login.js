// Purpose: This file contains the Login component which is used to login the user.

// Importing necessary modules.
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser, logoutUser } from "../store/actions.js";
import "./Login.css";

// Login component.
export default function Login() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUsername = useSelector((state) => state.user.username);
  const registeredUsername = localStorage.getItem("registeredUsername");

  // Function to handle login.
  const handleLogin = () => {
    if (username.trim() && username === registeredUsername) {
      dispatch(setUser(username));
      navigate("/");
    }
  };

  // Function to handle logout.
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="login-container">
      {loggedInUsername ? (
        <>
          <h2>You are logged in as {loggedInUsername}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}
