import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar as BSNavbar, Nav } from 'react-bootstrap'

function NavbarLink(props: any) {
    return (
        <li className="nav-item">
            <Link to={props.to} className="nav-link">
                {props.children || ''}
            </Link>
        </li>
    )
}

function Navbar(props: any) {
    return (
        <BSNavbar expand="lg" variant={props.theme}>
            <Link to="/" className="navbar-brand">
                Devin Mui
            </Link>
            <BSNavbar.Toggle aria-controls="navbar-nav" />

            <BSNavbar.Collapse id="navbar-nav">
                <Nav className="mr-auto">
                    <NavbarLink to="/about">About</NavbarLink>
                    <NavbarLink to="/projects">Projects</NavbarLink>
                    <NavbarLink to={{ pathname: '/', hash: 'contact' }}>
                        Contact
                    </NavbarLink>
                    <Nav.Link
                        href={process.env.PUBLIC_URL + '/resume.pdf'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </Nav.Link>
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
