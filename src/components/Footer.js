import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../components/SocialMedia";
import "./Footer.css";
// import "../style.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="w-100">
        <Col className="footer-copywright">
          <h3>Developed by Ronalyn Giducos</h3>
        </Col>
        <Col className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col className="footer-body">
          <SocialMedia />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
