import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import Logo from './../../images/uhseal.png'
import './navbar.styles.scss'
const NavBar = () => (
    <div className = 'nav' >
        <Navbar bg="" variant="">
            <Nav className="mr-auto">
                <Nav.Link href="/"><>Home</></Nav.Link>
                <Nav.Link href=""><></></Nav.Link>
                <Nav.Link href="/news"><>News</></Nav.Link>
                <Nav.Link href=""><></></Nav.Link>
                <Nav.Link href="/projects"><>Projects</></Nav.Link>
                <Nav.Link href=""><></></Nav.Link>
                <Nav.Link href="/partners"><>Partners</></Nav.Link>
                <Nav.Link href=""><></></Nav.Link>
                <Nav.Link href="/papers"><>Papers</></Nav.Link>
                <Nav.Link href=""><></></Nav.Link>
                <Nav.Link href="/people"><>People</></Nav.Link>
                <Nav.Link href=""><></></Nav.Link>
                <Nav.Link href="/opportunities"><>Opportunities</></Nav.Link>
                <Nav.Link href=""><></></Nav.Link>
                <Nav.Link href="/contact"><>Contact</></Nav.Link>
            </Nav>
        </Navbar>
    </div>
);

export default (NavBar);
