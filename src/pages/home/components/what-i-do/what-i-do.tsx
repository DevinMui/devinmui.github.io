import React from "react";

import Lottie from "../../../../components/lottie";

import solderAnim from "./solder.json";
import codeAnim from "./code.json";
import saxAnim from "./sax.json";

import { Container, Row, Col } from "react-bootstrap";

function WhatIDo() {
  return (
    <Container id="what-i-do" as="section">
      <h2 className="text-center">What do I do?</h2>
      <Row>
        <Col md={{ span: 3, offset: 1 }} xs={6} className="mx-auto">
          <Lottie animationData={solderAnim} />
        </Col>
        <Col md={{ span: 5, offset: 2 }} className="mt-md-0 mt-5">
          <h3>Build Kickass Electronics Projects</h3>
          <p>
            At hackathons, I’ve developed numerous award-winning Internet of
            Things appliances with scraps of garbage in under 24 hours.
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          md={{ span: 5, order: 1 }}
          xs={{ span: 12, order: 2 }}
          className="mt-md-0 mt-5"
        >
          <h3>Design Maintainable Software</h3>
          <p>
            I’ve written software for multiple clients since high school
            (including AWS and USC). Currently, I build software systems for
            Invisv.
          </p>
        </Col>
        <Col
          md={{ span: 3, offset: 2, order: 2 }}
          xs={{ span: 6, order: 1 }}
          className="mx-auto"
        >
          <Lottie animationData={codeAnim} frames={30} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 1 }} xs={6} className="mx-auto">
          <Lottie animationData={saxAnim} frames={30 * 2} />
        </Col>
        <Col md={{ span: 5, offset: 2 }} className="mt-md-0 mt-5">
          <h3>Relax as a Creative</h3>
          <p>
            I run a small YouTube channel where I post video demos of my past
            work. I also play violin, trumpet, alto saxophone, and some bass
            guitar, and I am currently learning guitar.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default WhatIDo;
