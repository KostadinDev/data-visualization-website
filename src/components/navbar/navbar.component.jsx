import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

const NavBar = () => (
    <div className = 'navbar'>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"><h3>Home</h3></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/about"><h3>About</h3></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="#features"><h3>News</h3></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="#pricing"><h3>Projects</h3></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="#pricing"><h3>Products</h3></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="#pricing"><h3>Papers</h3></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="#pricing"><h3>Team</h3></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="#pricing"><h3>Contact</h3></Nav.Link>
                <Nav.Link href=""><h3></h3></Nav.Link>
                <Nav.Link href="#pricing"><h3>Youtube</h3></Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
    </div>
);

export default (NavBar);
