import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

function About() {
    return (
        <Container id="about">
            <h2 className="text-center">Bonjour!</h2>
            <Row>
                <Col md="5" className="mx-auto">
                    <p className="text-center">
                        I’m an undergrad majoring in{' '}
                        <span className="text-important">computer science</span>{' '}
                        and minoring in{' '}
                        <span className="text-important">mathematics</span> at
                        the University of Southern California ✌️✌️✌️ currently
                        working on a boba barista machine with{' '}
                        <a
                            href="https://aaronkh.github.io/website/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @aahuang
                        </a>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default About
