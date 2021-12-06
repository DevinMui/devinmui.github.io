import React from "react";

import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container id="contact" as="section">
      <h2 className="text-center">What can I do for you?</h2>
      <Row>
        <Col className="col-md-5 mx-auto">
          <p className="text-center text-important text-bold">
            Trade offer: You give me 💰 and ☕️. I give you 🙉💻
          </p>

          <form action="https://formspree.io/xqkydpdz" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="form-control"
            />
            <input
              type="text"
              name="_replyto"
              placeholder="your@email.com"
              className="form-control"
            />
            <textarea
              name="body"
              placeholder="Your message"
              className="form-control"
            ></textarea>
            <input
              type="submit"
              name="submit"
              value="Send"
              className="form-control btn-primary"
            />
          </form>
          <p className="text-center">
            or email{" "}
            <a
              href="mailto:dmui@usc.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              dmui@usc.edu
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
