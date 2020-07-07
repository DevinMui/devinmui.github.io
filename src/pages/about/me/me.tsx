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
                        I’m Devin. Computer programmer. Tinkerer. Hacker.
                        Engineer. Or are you here for my other work? Regardless,
                        I’m an upcoming junior at the University of Southern
                        California (USC) working on a MS/BS in Computer Science
                        and minoring in Mathematics.
                    </p>

                    <p>
                        I got into software development in the 6th grade because
                        I wanted to make video games. In high school, I started
                        attending hackathons and I pivoted into utilizing both
                        software and hardware to develop unique and creative
                        projects.
                    </p>

                    <p>
                        This creativity didn’t stop in high school. I continued
                        to build more creative and technical projects in college
                        including an automated boba barista machine and a smart
                        watch device for the blind.
                    </p>

                    <p>
                        Now, I’m working part-time for the USC School of
                        Business patching and developing remote learning
                        collaborative games for MBA students. In my freetime, I
                        play alto saxophone, trumpet, bass guitar, and violin.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Me
