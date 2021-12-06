import React from "react";

import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container id="about" as="section">
      <h2 className="text-center">Bonjour!</h2>
      <Row>
        <Col md="5" className="mx-auto">
          <p className="text-center">
            I’m an undergrad majoring in{" "}
            <span className="text-important">computer science</span> at the
            University of Southern California ✌️✌️✌️ currently working on a
            robot drummer with{" "}
            <a
              href="https://viterbimakers.usc.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @uscmakers
            </a>
            🛠 also probably working with{" "}
            <a
              href="https://aaronkh.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              @aahuang
            </a>{" "}
            on something too
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
