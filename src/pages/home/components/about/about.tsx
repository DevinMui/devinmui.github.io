import React from "react";

import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container id="about" as="section">
      <h2 className="text-center">Bonjour!</h2>
      <Row>
        <Col md="5" className="mx-auto">
          <p className="text-center">
            I'm a software engineer working on cool things (probably with{" "}
            <a
              href="https://aaronkh.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              @aahuang
            </a>
            )
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
