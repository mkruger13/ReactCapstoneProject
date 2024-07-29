// Importing necessary modules and custom css.
import React from "react";
import { Figure, Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";

// About component for store details using Bootstrap figures
export default function About() {
  // Load images.
  const logo = require("./images/logo.jpg");
  const shopImage1 = require("./images/shop-img-1.jpg");
  const shopImage2 = require("./images/shop-img-2.jpg");

  return (
    <Container className="about-container mt-5">
      <Row className="text-center">
        <Col>
          <Figure>
            <Figure.Image
              width={211}
              height={220}
              alt="Store logo"
              src={logo}
            />
          </Figure>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Card className="about-card p-4">
            <Card.Text>
              Welcome to Computer Technology, your one-stop shop for
              high-quality new and refurbished computers! We pride ourselves on
              offering an extensive selection of laptops, desktops, and
              accessories to suit all your computing needs. Whether you’re
              looking for the latest technology or a budget-friendly option, our
              expertly refurbished products provide exceptional value without
              compromising on performance. Our team is dedicated to ensuring you
              find the perfect device to meet your requirements, backed by
              excellent customer service and technical support. With a
              commitment to quality, each refurbished computer undergoes a
              rigorous testing process to guarantee reliability and performance.
              Discover the best in technology at unbeatable prices with Computer
              Technology. Shop with confidence and experience the difference in
              quality and service.
            </Card.Text>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={4} className="text-center">
          <Figure>
            <Figure.Image
              width={250}
              height={250}
              alt="Our Store Image 1"
              src={shopImage1}
              className="store-image"
            />
          </Figure>
        </Col>
        <Col md={4} className="text-center">
          <Figure>
            <Figure.Image
              width={250}
              height={250}
              alt="Our Store Image 2"
              src={shopImage2}
              className="store-image"
            />
          </Figure>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={8} className="text-center">
          <h2>Contact Us</h2>
          <p>Email: contact@onlinestore.com</p>
          <p>Phone: 021 343 5769</p>
          <p>Address: Computer Technology, 11 Winston Road, London, W14 8EU</p>
        </Col>
      </Row>
    </Container>
  );
}
