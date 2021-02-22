import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ArduinoImg from './img/arduino.png'
import AutodeskImg from './img/autodesk.png'
import CppImg from './img/cpp.png'
import NodeImg from './img/node.png'
import PremiereImg from './img/premiere.png'
import PythonImg from './img/python.png'
import VimImg from './img/vim.svg'

function Skills() {
    return (
        <Container as="section" id="about-skills">
            <h2 className="text-center">Toolkit</h2>
            <Row>
                <Col md="5" className="mx-auto">
                    <p className="text-center">
                        Over the years, I’ve accumulated a large skillset. Here
                        are some technologies that I use often
                    </p>
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 2, offset: 2 }} xs={{ span: 6, offset: 3 }}>
                    <img src={VimImg} alt="Vim" className="img-fluid" />
                </Col>
                <Col md={{ span: 5, offset: 2 }} className="mt-md-0 mt-5">
                    <h3>Best Editor</h3>
                    <p>Dread it. Run from it. Vim arrives all the same.</p>
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 2, offset: 2 }} xs={{ span: 6, offset: 3 }}>
                    <img src={CppImg} alt="C++" className="img-fluid" />
                </Col>
                <Col md={{ span: 5, offset: 2 }} className="mt-md-0 mt-5">
                    <h3>Language of Choice</h3>
                    <p>Segfault me harder.</p>
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 2, offset: 2 }} xs={{ span: 6, offset: 3 }}>
                    <img src={NodeImg} alt="Arduino" className="img-fluid" />
                </Col>
                <Col md={{ span: 5, offset: 2 }} className="mt-md-0 mt-5">
                    <h3>Web Language</h3>
                    <p>Call me back please. </p>
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 2, offset: 2 }} xs={{ span: 6, offset: 3 }}>
                    <img src={PythonImg} alt="Python 3" className="img-fluid" />
                </Col>
                <Col md={{ span: 5, offset: 2 }} className="mt-md-0 mt-5">
                    <h3>Scripting Language</h3>
                    <p>
                        I'm not a{' '}
                        <a
                            href="https://www.facebook.com/462508190484900/posts/23582-to-all-the-people-who-use-python-2-fucking-stop-its-fucking-outdated-you-d/2270026899733011/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            racist
                        </a>
                        .
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 2, offset: 2 }} xs={{ span: 6, offset: 3 }}>
                    <img src={ArduinoImg} alt="Arduino" className="img-fluid" />
                </Col>
                <Col md={{ span: 5, offset: 2 }} className="mt-md-0 mt-5">
                    <h3>Hardware Language</h3>
                    <p>C/C++ frankenstein.</p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 2, offset: 2 }} xs={{ span: 6, offset: 3 }}>
                    <Row>
                        <Col md={{ span: 8 }} className="mx-auto">
                            <img
                                src={PremiereImg}
                                alt="Premiere Pro"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 12 }} className="mx-auto">
                            <img
                                src={AutodeskImg}
                                alt="Inventor"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Col>
                <Col md={{ span: 5, offset: 2 }} className="mt-md-0 mt-5">
                    <h3>Misc Programs</h3>
                    <p>I fail to try to do it all.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills
