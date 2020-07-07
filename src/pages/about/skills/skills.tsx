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
                    <p>
                        Let’s get this out of the way. Vim is the best editor.
                        Fight me. Also, 4 spaces over tabs. I’m running Neovim
                        with a few extensions like COC.nvim to write about all
                        my code.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 2, offset: 2 }} xs={{ span: 6, offset: 3 }}>
                    <img src={CppImg} alt="C++" className="img-fluid" />
                </Col>
                <Col md={{ span: 5, offset: 2 }} className="mt-md-0 mt-5">
                    <h3>Language of Choice</h3>
                    <p>
                        C++ was my first programming language, and as such, it
                        has a special place in my heart{' '}
                        <span role="img" aria-label="<3">
                            ❤️
                        </span>
                        . I write all my algorithms in C++, and I’ll let C++
                        segfault me anyday.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 2, offset: 2 }} xs={{ span: 6, offset: 3 }}>
                    <img src={NodeImg} alt="Arduino" className="img-fluid" />
                </Col>
                <Col md={{ span: 5, offset: 2 }} className="mt-md-0 mt-5">
                    <h3>Web Language</h3>
                    <p>
                        Obviously, this goes to JavaScript. As we all know,
                        JavaScript is terrible. But we all secretly love it.
                        Currently, I’ve adopted a MERN stack and even use React
                        Native for mobile apps.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 2, offset: 2 }} xs={{ span: 6, offset: 3 }}>
                    <img src={PythonImg} alt="Python 3" className="img-fluid" />
                </Col>
                <Col md={{ span: 5, offset: 2 }} className="mt-md-0 mt-5">
                    <h3>Scripting Language</h3>
                    <p>
                        I love Ruby, but unfortunately, I end up using Python 3
                        more (
                        <a
                            href="https://www.facebook.com/462508190484900/posts/23582-to-all-the-people-who-use-python-2-fucking-stop-its-fucking-outdated-you-d/2270026899733011/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            PS: if you’re still using Python 2, you’re a racist
                        </a>
                        ). Python is my duct tape language and I'll use it for
                        my hacky code.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 2, offset: 2 }} xs={{ span: 6, offset: 3 }}>
                    <img src={ArduinoImg} alt="Arduino" className="img-fluid" />
                </Col>
                <Col md={{ span: 5, offset: 2 }} className="mt-md-0 mt-5">
                    <h3>Hardware Language</h3>
                    <p>
                        The Arduino language/IDE sucks so much, but this is what
                        I use for every hackathon project. At USC, I used the C
                        AVR library and ATMega328 documentation to manually
                        program an Arduino for class.
                    </p>
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
                    <p>
                        I use Premiere for video editing, Procreate to draw
                        concepts, Illustrator to polish up rough sketches, After
                        Effects to animate sketches, and Autodesk Inventor to
                        make models and parts for 3D printing.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills
