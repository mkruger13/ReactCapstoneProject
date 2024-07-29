/* Home page of the application: This page will display an input field
and a Login button. On login, a welcome message will be shown and the
button will change to logout. On logout, we will revert to the input field
and the login button. */

// Importing necessary modules and custom css.
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Figure,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import "./Home.css";

// Load logo image.
const logo = require("./images/logo.jpg");

export default function Home() {
  // State to store user name and to track login status.
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // Handle Login: If name is not empty set loggedIn to true.
  const handleLogin = () => {
    if (name.trim()) {
      setLoggedIn(true);
    }
  };

  // Handle Logout: reset name and set loggedIn to false.
  const handleLogout = () => {
    setName("");
    setLoggedIn(false);
  };

  return (
    <Container className="home-container mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <Figure>
            <Figure.Image
              width={400}
              height={400}
              alt="Store logo"
              src={logo}
              className="home-logo"
            />
          </Figure>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card className="login-card p-4">
            <h2 className="text-center">
              {loggedIn ? `Welcome, ${name}!` : "Login"}
            </h2>
            {loggedIn ? (
              <Button
                variant="primary"
                className="login-button"
                onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Enter your name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="login-input"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="login-button"
                  onClick={handleLogin}>
                  Login
                </Button>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
