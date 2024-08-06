/* Purpose: This file contains the Register component which is used to
register a new user. It contains a form with input fields for first name,
surname, username, email, password and confirm password. It also contains
validation for each input field and displays an error message if the input
is invalid. If all input is valid, the user is registered and the user is
redirected to the home page. */

// Importing necessary hooks and components from react and react-redux.
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions.js";
import "./Register.css";

// Register component.
export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  // Function to validate email.
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Function to validate password.
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // Function to handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let errors = {};

    if (!firstName) {
      errors.firstName = "First name is required.";
      valid = false;
    }
    if (!surname) {
      errors.surname = "Surname is required.";
      valid = false;
    }
    if (!username) {
      errors.username = "Username is required.";
      valid = false;
    }
    if (!email || !validateEmail(email)) {
      errors.email = "Valid email is required.";
      valid = false;
    }
    if (!password || !validatePassword(password)) {
      errors.password = "Password must be at least 8 characters.";
      valid = false;
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    if (valid) {
      dispatch(setUser(username));
    } else {
      setErrors(errors);
    }
  };

  // Return statement for Register component.
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        {errors.surname && <p className="error">{errors.surname}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
