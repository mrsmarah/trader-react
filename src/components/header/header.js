import React from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Form,FormControl,Button,Nav,DropdownButton, Dropdown} from 'react-bootstrap';
import './header.scss'


function Header(props) {

  return (

    <>
      <Navbar bg="light" expand="lg" className="header">
        <Navbar.Brand href="#home"> T R A D E R </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
            
            <NavLink className="a-tag" to="/">Home</NavLink>
            <NavLink className="a-tag" to="/profile">Profile</NavLink>
            <NavLink className="a-tag" to="/log">Log In</NavLink>
            <NavLink className="a-tag" to="/post">Add Post</NavLink>
           
          </Nav>
          <div class="search-bar  p-3 p-lg-1 pl-lg-4">
              
          <Form action="#">
                <div className="row">
                  <div className="col-lg-4 d-flex align-items-center form-group">
                  <FormControl type="text" placeholder="Search 🔍" className="mr-sm-2 form-control border-0 shadow-0" />
                  </div>
                  <div className="col-lg-3 d-flex align-items-center form-group no-divider">
                  <DropdownButton
              alignRight
              title="Categories"
              id="dropdown-menu-align-right"
              className="dropdown bootstrap-select selectpicker"
            >
              <Dropdown.Item eventKey="1">cars</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="2">electronics</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="3">mobiles</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">furniture</Dropdown.Item>
          </DropdownButton>
          </div>
                  <div className="col-lg-2">
                    <Button className="btn btn-primary btn-block rounded-xl h-100" type="submit">Search </Button>
                  </div>
                </div>
              </Form>
              </div>



          {/* <Form inline>
            <FormControl type="text" placeholder="Search 🔍" className="mr-sm-2" />
            <DropdownButton
              alignRight
              title="Categories"
              id="dropdown-menu-align-right"
            >
              <Dropdown.Item eventKey="1">cars</Dropdown.Item>
              <Dropdown.Item eventKey="2">electronics</Dropdown.Item>
              <Dropdown.Item eventKey="3">mobiles</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">furniture</Dropdown.Item>
          </DropdownButton>
            <Button variant="outline-primary" className="buttonn">Search</Button>
          </Form> */}
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