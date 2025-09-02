import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Navbardata = () => {

    return <>
        <Navbar bg='dark' variant='dark' expand="lg" sticky='top'>
            <Navbar.Brand as={Link} to='/'>E-learning</Navbar.Brand>
            <Navbar.Toggle aria-controls="x" />
            <Navbar.Collapse id="x">
                <Nav className='me-auto'>
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                    <Nav.Link as={Link} to="/admin">Admin Panel</Nav.Link>
                    <Nav.Link as={Link} to="/">Login</Nav.Link>
                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                </Nav>
                <Form className='d-flex'>
                    <FormControl type='search' placeholder='Search course' className='me-2' />
                    <Button variant=''>Search</Button>

                </Form>
            </Navbar.Collapse>
        </Navbar>
    </>
}

export default Navbardata