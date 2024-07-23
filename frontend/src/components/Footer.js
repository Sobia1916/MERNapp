import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-info">
      <Container>
        <Row>
          <Col md={3} className="footer-section">
            <h5>Get In Touch</h5>
            <p>Address: multan, Islamabad</p>
            <p>Phone: +92-300-0000000 </p>
            <p>Email: abc123@gmail.com</p>
          </Col>

          <Col md={3} className="footer-section">
            <h5>Site Links</h5>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/Privacy">Privacy</a>
              </li>
              <li>
                <a href="/Terms and Condition">Terms and Condition</a>
              </li>
            </ul>
          </Col>

          <Col md={3} className="footer-section">
            <h5>Follow Us</h5>
            <ul className="social-icons">
              <li>
                <a href="www.facebook.com/damasdiamonds" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="www.instagram.com/damasdiamonds" target="www.instagram.com/damasdiamonds" rel="www.instagram.com/damasdiamonds">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col className="text-center py-3">Copyright &copy; siddique&sobia</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
