import React from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';



function Header(props) {

  return (

    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><img src="https://www.freelogodesign.org/file/app/client/thumb/f156f027-a1fb-4794-bc61-9ceb176b524f_200x200.png?1595662070517" alt="LOGO" width="100" height="100" padding="20" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">

            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/log">Log In</NavLink>
            <NavLink to="/post">Add Post</NavLink>
            <NavLink to="/admin" >Admin</NavLink>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    </>
  );

}




export default Header;

// <Nav.Link href="#home">Home</Nav.Link>
// <Nav.Link href="#profile">profile</Nav.Link>
// <Nav.Link href="#log">log</Nav.Link>
// <Nav.Link href="#post">post</Nav.Link> 