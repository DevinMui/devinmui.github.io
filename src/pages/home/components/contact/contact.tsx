import React from "react";

import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container id="contact" as="section">
      <h2 className="text-center">What can I do for you?</h2>
      <p className="text-center">
        Just message me on{" "}
        <a
          href="https://linkedin.com/in/devinmui"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        idk.
      </p>
    </Container>
  );
}

export default Contact;
