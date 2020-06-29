import React from 'react'
import { Navbar as BSNavbar, Nav } from 'react-bootstrap'

function Navbar(props: any) {
    return (
        <BSNavbar expand="lg" variant={props.theme}>
            <BSNavbar.Brand href="#">Devin Mui</BSNavbar.Brand>
            <BSNavbar.Toggle aria-controls="navbar-nav" />

            <BSNavbar.Collapse id="navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link>Projects</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <Nav.Link href="#">Resume</Nav.Link>
                    <Nav.Link
                        className="d-md-none d-block"
                        onClick={props.onThemeChange}
                    >
                        Save Eyes
                    </Nav.Link>
                </Nav>
            </BSNavbar.Collapse>
        </BSNavbar>
    )
}

export default Navbar
