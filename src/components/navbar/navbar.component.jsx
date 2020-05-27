import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import Logo from './../../images/uhseal.png'
const NavBar = () => (
    <div className = '' >
        <Navbar bg="" variant="">
            <Nav className="mr-auto">
                <Nav.Link href="/"><h2>About</h2></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/news"><h2>News</h2></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/projects"><h2>Projects</h2></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/partners"><h2>Partners</h2></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/papers"><h2>Papers</h2></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/people"><h2>People</h2></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/media"><h2>Media</h2></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/opportunities"><h2>Opportunities</h2></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="/contact"><h2>Contact</h2></Nav.Link>
            </Nav>
        </Navbar>
    </div>
);

export default (NavBar);
