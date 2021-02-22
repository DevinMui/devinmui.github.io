import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import MeImg from './me.png'

function Me() {
    return (
        <Container as="section" id="about-hero">
            <Row md={2} xs={1}>
                <Col>
                    <img src={MeImg} alt="Me" className="img-fluid" />
                </Col>
                <Col className="mt-md-0 mt-5">
                    <h2>About Me</h2>
                    <p>
                        I'm Devin. I'm an undergraduate studying computer
                        science at the University of Southern California (USC).
                    </p>

                    <p>
                        I work part-time for the USC School of Business patching
                        and developing remote learning collaborative games for
                        MBA students. I'll be joining Amazon over summer 2021 as
                        a software development engineer intern.
                    </p>
                    <p>
                        In my freetime, I play saxophone, trumpet, electric
                        guitar, bass guitar, and violin. I also compete in a ton
                        of{' '}
                        <a
                            href="http://devpost.com/devinmui"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            hackathons
                        </a>
                        .
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Me
