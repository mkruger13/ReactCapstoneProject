/* Home page of the application. Will display the store logo and user information. */

// Importing necessary modules and custom css.
import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Figure, Card } from "react-bootstrap";
import "./Home.css";

// Load logo image.
const logo = require("./images/logo.jpg");

export default function Home() {
  // Get the username from the store.
  const username = useSelector((state) => state.user.username);

  return (
    // Logo Display and Welcome message.
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
      {/* Welcome message after user login. */}
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card className="login-card p-4">
            <h2 className="text-center">
              {username
                ? `Welcome, ${username}!`
                : "Welcome to Computer Technology."}
            </h2>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
