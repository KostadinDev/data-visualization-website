import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import Logo from './../../images/uhseal.png'
const NavBar = () => (
    <div className = '' >
        <Navbar bg="" variant="">
            <Nav className="mr-auto">
                <Nav.Link href="/"><h4>About</h4></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/news"><h4>News</h4></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/projects"><h4>Projects</h4></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/partners"><h4>Partners</h4></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/papers"><h4>Papers</h4></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/people"><h4>People</h4></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/media"><h4>Media</h4></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/opportunities"><h4>Opportunities</h4></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/contact"><h4>Contact</h4></Nav.Link>
            </Nav>
        </Navbar>
    </div>
);

export default (NavBar);
